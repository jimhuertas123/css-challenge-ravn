import * as Switch from '@radix-ui/react-switch'
import { useState } from 'react';
import './App.css'
import './styles/SwitchButton.css';

import MainContent from './components/MainContent/MainContent';

export const CssChallengeApp = () => {
  const [dataTheme, setDataTheme] = useState('light');



  return (
    <div className='app-container' data-theme={dataTheme}>
      <div className='app-left-sidebar-container'>
        <Switch.Root onClick={() => setDataTheme(dataTheme === 'light' ? 'dark' : 'light')} className='switch-root'>
          <Switch.Thumb className='switch-thumb' />
        </Switch.Root>
        <MainContent />
      </div>
      <main className="app-main-container">
        <h1>This is the main content</h1>
      </main>
      <div className='app-right-sidebar-container'>
        <h1>gaaaadasd</h1>
      </div>
    </div>
  )
}
