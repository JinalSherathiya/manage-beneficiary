import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./assets/style/main.scss";
import { Spin } from 'antd';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Suspense fallback={<div className='mainSpin'><Spin /></div>}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Suspense>
);

