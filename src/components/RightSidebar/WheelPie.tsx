import { useRef } from 'react';
import './styles/WheelPie.css'

interface PieSegment {
    color: string;
    value: number;
    label: string;
}

interface DonutChartProps {
    segments: PieSegment[];
    usedPercentage: number;
    radius?: number;
    strokeWidth?: number;
    centerColor?: string;
    gap?: number;
}

export const DonutChart = ({
    segments,
    usedPercentage,
    radius = 50,
    strokeWidth = 10,
    centerColor = '#ffffff',
    gap = 17
}: DonutChartProps) => {
    const containerRef = useRef<HTMLDivElement>(null);

    const size = radius * 2 + strokeWidth;
    const center = size / 2;

    const totalUsed = segments.reduce((sum, seg) => sum + seg.value, 0);
    const freeSpace = 100 - totalUsed;

    const allSegments = freeSpace > 0
        ? [...segments, { color: '#BCBECA', value: freeSpace, label: 'Free' }]
        : segments;

    let currentAngle = 180;

    return (
        <div className="donut-chart" ref={containerRef}>
            <svg className='donut-chart-svg' viewBox={`-5 -5 ${size + 10} ${size + 10}`}>
                <circle
                    className='donut-chart-background'
                    cx={center}
                    cy={center}
                    r={radius}
                    fill="none"
                    strokeWidth={strokeWidth}
                />

                {allSegments.map((segment, index) => {
                    const segmentAngle = (segment.value / 100) * 360;
                    const startAngle = currentAngle;
                    const endAngle = currentAngle + segmentAngle - gap;

                    const startRad = (startAngle * Math.PI) / 180;
                    const endRad = (endAngle * Math.PI) / 180;

                    const x1 = center + radius * Math.cos(startRad);
                    const y1 = center + radius * Math.sin(startRad);
                    const x2 = center + radius * Math.cos(endRad);
                    const y2 = center + radius * Math.sin(endRad);

                    const largeArcFlag = segmentAngle > 180 ? 1 : 0;

                    const pathData = [
                        `M ${x1} ${y1}`,
                        `A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2}`
                    ].join(' ');

                    currentAngle += segmentAngle;

                    return (
                        <path
                            className='donut-chart-segment'
                            key={index}
                            d={pathData}
                            stroke={segment.color}
                            strokeWidth={strokeWidth}
                            fill="none"
                            strokeLinecap="round"
                        />
                    );
                })}

                <circle
                    className="circle-content"
                    cx={center}
                    cy={center}
                    r={radius - strokeWidth / 2 - 7}
                    fill={centerColor}
                />

                <text
                    x={center}
                    y={center - 2}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize="95%"
                    fontFamily='Roboto'
                    fontWeight="400"
                    fill="#1F2937"
                >
                    {usedPercentage}%
                </text>
                <text
                    x={center}
                    y={center + 16}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize="50%"
                    fill="#6B7280"
                >
                    Used
                </text>
            </svg>
        </div>
    );
};