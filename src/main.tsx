import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CssChallengeApp } from './CssChallengeApp'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CssChallengeApp />
  </StrictMode>,
)
