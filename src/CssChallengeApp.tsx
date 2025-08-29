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

export const CssChallengeApp = () => {
  const [dataTheme, setDataTheme] = useState('light');
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
        <button
          className="drawer-toggle"
          onClick={() => setRightSidebarOpen(!rightSidebarOpen)}
          style={{ opacity: !rightSidebarOpen ? 1 : 0, pointerEvents: !rightSidebarOpen ? 'auto' : 'none' }}
          aria-label="Open sidebar"
        >
          ☰
        </button>
        {/* <button
          className="drawer-toggle"
          onClick={() => setRightSidebarOpen(!rightSidebarOpen)}
          style={{ opacity: !rightSidebarOpen ? 1 : 0, pointerEvents: !rightSidebarOpen ? 'auto' : 'none' }}
          aria-label="Open sidebar"
        >
          ☰
        </button> */}
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
          <label onClick={() => setRightSidebarOpen(false)} htmlFor="drawer-toggle" className="drawer-close-label">✕</label>
          <RightSidebar />
        </div>
      )}



    </div>
  )
}



// import * as Switch from '@radix-ui/react-switch'
// import { useState } from 'react';
// import './styles/CssChallengeApp.css';
// import './styles/SwitchButton.css';

// import MainContent from './components/MainContent/MainContent';
// import { LeftSidebar } from './components/LeftSidebar/LeftSidebar';
// import RightSidebar from './components/RightSidebar/RightSidebar';

// export const CssChallengeApp = () => {
//   const [dataTheme, setDataTheme] = useState('light');
//   const [rightSidebarOpen, setRightSidebarOpen] = useState(false);



//   return (
//     <div className='app-container' data-theme={dataTheme}>
//       <div className='app-left-sidebar-container'>
//         <div className='switch-container'>
//           <Switch.Root onClick={() => setDataTheme(dataTheme === 'light' ? 'dark' : 'light')} className='switch-root'>
//             <Switch.Thumb className='switch-thumb' />
//           </Switch.Root>
//         </div>
//         <LeftSidebar />
//       </div>
//       <main className="app-main-container">
//         <button
//           className="drawer-toggle"
//           onClick={() => setRightSidebarOpen(!rightSidebarOpen)}
//           style={{ opacity: !rightSidebarOpen ? 1 : 0, pointerEvents: !rightSidebarOpen ? 'auto' : 'none' }}
//           aria-label="Open sidebar"
//         >
//           ☰
//         </button>
//         <MainContent />
//       </main>
//       <div className={`app-right-sidebar-container ${rightSidebarOpen ? 'is-open' : ''}`}>
//         <label onClick={() => setRightSidebarOpen(false)} htmlFor="drawer-toggle" className="drawer-close-label">✕</label>
//         <RightSidebar />
//       </div>
//     </div>
//   )
// }
