import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import {Github} from "./components/Github/Github.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Github />
  </StrictMode>,
)
