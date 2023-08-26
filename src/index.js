import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/old-App';
const modalRoot = document.getElementById('modal-root');

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App modalRoot={modalRoot} />
  </React.StrictMode>
);