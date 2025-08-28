import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CssChallengeApp } from './CssChallengeApp'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<CssChallengeApp />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
