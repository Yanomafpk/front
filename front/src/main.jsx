import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Router from './routes/Router.jsx'
import './index.css' // Importação do CSS global


const domNode = document.getElementById('root');
const root = createRoot(domNode);
  root.render(
    <StrictMode>
      <Router />
    </StrictMode>
  );

