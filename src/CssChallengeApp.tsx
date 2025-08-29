import { useState } from 'react';
import './styles/CssChallengeApp.css';
import './styles/SwitchButton.css';
import './styles/DialogRightSidebar.css';

import * as Switch from '@radix-ui/react-switch'
import * as Dialog from '@radix-ui/react-dialog';
import MainContent from './components/MainContent/MainContent';
import { LeftSidebar } from './components/LeftSidebar/LeftSidebar';
import RightSidebar from './components/RightSidebar/RightSidebar';
import { useMediaQuery } from './hooks/useMediaQuery';
import { useEffect } from 'react';

export const CssChallengeApp = () => {
  const [dataTheme, setDataTheme] = useState(() => localStorage.getItem('dataTheme') || 'light');

  useEffect(() => {
    localStorage.setItem('dataTheme', dataTheme);
  }, [dataTheme]);

  const [rightSidebarOpen, setRightSidebarOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width: 1024px)');

  return (
    <div className='app-container' data-theme={dataTheme}>
      <div className='app-left-sidebar-container'>
        <div className='switch-container'>
          <Switch.Root onClick={() => setDataTheme(dataTheme === 'light' ? 'dark' : 'light')} className='switch-root'>
            <Switch.Thumb className='switch-thumb' />
          </Switch.Root>
        </div>
        <LeftSidebar />
      </div>
      <main className="app-main-container">
        {isMobile && <button
          className={`drawer-toggle ${rightSidebarOpen ? 'is-open' : ''}`}
          onClick={() => setRightSidebarOpen(!rightSidebarOpen)}
          aria-label="Open sidebar"
        >
          ☰
        </button>}
        <MainContent />
      </main>
      {isMobile ? (
        <Dialog.Root open={rightSidebarOpen} onOpenChange={setRightSidebarOpen}>
          <Dialog.Portal container={document.querySelector('.app-container')}>
            <Dialog.Overlay className="drawer-backdrop" />
            <Dialog.Content className="app-right-sidebar-container-dialog">
              <RightSidebar />
              <Dialog.Close asChild>
                <button className="drawer-close" aria-label="Close sidebar">✕</button>
              </Dialog.Close>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      ) : (
        <div className='app-right-sidebar-container'>
          <RightSidebar />
        </div>
      )}



    </div>
  )
}