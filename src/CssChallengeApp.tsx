import * as Switch from '@radix-ui/react-switch'
import { useState } from 'react';
import './App.css'
import './styles/SwitchButton.css';

import MainContent from './components/MainContent/MainContent';
import Sidebar from './components/Sidebar/Sidebar';
import RightSidebar from './components/RightSidebar/RightSidebar';

export const CssChallengeApp = () => {
  const [dataTheme, setDataTheme] = useState('light');



  return (
    <div className='app-container' data-theme={dataTheme}>
      <div className='app-left-sidebar-container'>
        <div className='switch-container'>
          <Switch.Root onClick={() => setDataTheme(dataTheme === 'light' ? 'dark' : 'light')} className='switch-root'>
            <Switch.Thumb className='switch-thumb' />
          </Switch.Root>
        </div>
        <Sidebar />
      </div>
      <main className="app-main-container">
        <h1>This is the main content</h1>
        <MainContent />
      </main>
      <div className='app-right-sidebar-container'>
        <RightSidebar />
      </div>
    </div>
  )
}
