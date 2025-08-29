import './styles/RightSidebar.css';
import Avatar from '../../assets/avatar.png';
import { AvatarIcon, GearIcon } from '@radix-ui/react-icons'
import { DonutChart } from './WheelPie';
import { CardsStorage } from './CardsStorage';


const RightSidebar = () => {

  return (
    <aside className="right-sidebar-container">
      <section className="right-sidebar-profile">
        <div className="profile-icons">
          <AvatarIcon />
          <GearIcon />
        </div>
        <div className='profile-info'>
          <h3 className="profile-name">Name</h3>
          <img src={Avatar} alt="name" className="profile-avatar" />
        </div>
      </section>
      <section className="right-sidebar-stats">
        <div className='right-sidebar-divider' />
        <h1>Storage</h1>
        <DonutChart
          usedPercentage={85}
          segments={[
            { color: '#689FF8', value: 28, label: 'Videos' },
            { color: '#4AC29D', value: 13, label: 'Photos' },
            { color: '#FF9F00', value: 43, label: 'Documents' },
          ]}
          radius={80}
          strokeWidth={5}
        />
        <span>420.2 GB of 500 GB used</span>
      </section>
      <section className="right-sidebar-activity">
        <CardsStorage />
      </section>
      <section className="right-sidebar-suscription-container">
        <div className="right-sidebar-suscription">
          <div className='right-sidebar-suscription-gradient' />
          <h3>Buy more space now!</h3>
          <span>Upgrade to cloud premium</span>
          <button>Upgrade Account!</button>
        </div>
      </section>
    </aside>
  );
}

export default RightSidebar;