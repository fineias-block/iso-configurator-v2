import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import RoomCanvas from './canvas/RoomCanvas';

window.RoomCanvas = RoomCanvas;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);