import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
// App.tsx
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/homePage';
import ReelsPage from './pages/reelsPage';
import GalleryPage from './pages/galleryPage';
import NotFoundPage from './pages/NotFoundPage';
function App() {
    return (_jsxs(_Fragment, { children: [_jsx(Navbar, {}), _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(HomePage, {}) }), _jsx(Route, { path: "/reelsPage", element: _jsx(ReelsPage, {}) }), _jsx(Route, { path: "/galleryPage", element: _jsx(GalleryPage, {}) }), _jsx(Route, { path: "*", element: _jsx(NotFoundPage, {}) })] })] }));
}
export default App;
