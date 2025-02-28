import { jsx as _jsx } from "react/jsx-runtime";
// main.tsx
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(_jsx(BrowserRouter, { children: _jsx(App, {}) }));
