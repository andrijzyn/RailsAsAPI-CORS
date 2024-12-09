import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ToggleButton from './ToggleButton.tsx'
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ToggleButton />
  </StrictMode>,
)
