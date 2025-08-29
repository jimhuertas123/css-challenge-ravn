
import './styles/CardsStorage.css';

type CardStorageInfoProps = {
	color: string;
	label?: string;
	files?: string;
	used?: string;
}
const CardStorageInfo = ({ color, label = 'Documents', files = '720 files', used = '200GB' }: CardStorageInfoProps) => {
	return (
		<div className="card-storage-info" >
			<div className="info-storage-container" >
				<div className="info-color-card" style={{ backgroundColor: color }} />
				<div className="info-name-card">
					<label>{label}</label>
					<span>{files}</span>
				</div>
			</div>
			<data className="info-storage-usage" value={used}>{used}</data>
		</div>
	);
}

const storageCards = [
	{ color: '#FF9F00', label: 'Documents', files: '720 files', used: '200GB' },
	{ color: '#689FF8', label: 'Documents', files: '720 files', used: '125GB' },
	{ color: '#4AC29D', label: 'Documents', files: '720 files', used: '75GB' },
	{ color: '#BCBECA', label: 'Documents', files: '720 files', used: '50GB' },
];

export const CardsStorage = () => {

	return (<div className='cards-storage-container'>
		{storageCards.map((card, index) => (
			<CardStorageInfo key={index} {...card} />
		))}
	</div>
	);
};