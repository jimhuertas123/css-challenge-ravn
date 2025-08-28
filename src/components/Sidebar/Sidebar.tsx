import { type JSX } from 'react';
import '../../App.css';
import './Sibebar.css';

import { HomeIcon, FileIcon, MagnifyingGlassIcon, Share2Icon, TrashIcon } from '@radix-ui/react-icons'
import * as Popover from '@radix-ui/react-popover';
import { NavLink } from 'react-router-dom';

interface SidebarProps {

}

const Sidebar: React.FC<SidebarProps> = () => {

  const navigationItems: Record<string, { icon: JSX.Element, name: string, path: string }> = {
    home: { icon: <HomeIcon />, name: 'Home', path: '/' },
    myFiles: { icon: <MagnifyingGlassIcon />, name: 'My Files', path: '/a' },
    recentFiles: { icon: <FileIcon />, name: 'Recent Files', path: '/b' },
    dashboard: { icon: <Share2Icon />, name: 'Shared Files', path: '/c' },
    reports: { icon: <FileIcon />, name: 'File Request', path: '/d' },
    settings: { icon: <TrashIcon />, name: 'Trash', path: '/e' },
  }

  return (
    <aside className="sidebar-container">
      <div className='sidebar-logo-cotainer'>
        <div className="sidebar-logo" />
      </div>
      <nav className="sidebar-nav">
        {Object.entries(navigationItems).map(([_, item]) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => `sidebar-item${isActive ? ' active' : ''}`}
          >
            {item.icon}
            <h1>{item.name}</h1>
          </NavLink>
        ))}
      </nav>
      <div className='sidebar-divider' />
      <div className='create-button-container'>
        <Popover.Root>
          <Popover.Trigger asChild>
            <button className='create-button-content'>
              <span>Create New</span>
              <span className="plus-icon">+</span>
            </button>
          </Popover.Trigger>
          <Popover.Content className="popover-content">
            <ul className="popover-list">
              <li>
                <a href="/upload-items">
                  <span><HomeIcon /></span>
                  <span>Upload Items</span>
                </a>
              </li>
              <li>
                <a href="/upload-folders">
                  <span><HomeIcon /></span>
                  <span>Upload Folders</span>
                </a>
              </li>
              <li>
                <a href="/new-folder">
                  <span><HomeIcon /></span>
                  <span>New Folder</span>
                </a>
              </li>
              <li>
                <a href="/more">
                  <span><HomeIcon /></span>
                  <span>More</span>
                </a>
              </li>
            </ul>
            <Popover.Arrow className="popover-arrow" />
          </Popover.Content>
        </Popover.Root>
      </div>
    </aside>
  );
}

export default Sidebar;