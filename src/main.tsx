import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'normalize.css';
import App from './App';

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    {/* <Nomalize /> */}
    <App />
  </StrictMode>,
);
