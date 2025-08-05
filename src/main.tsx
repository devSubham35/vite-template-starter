import './index.css'
import App from './App.tsx'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import setupLocatorUI from "@locator/runtime";

if (import.meta.env.NODE_ENV === "development") {
  setupLocatorUI();
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
