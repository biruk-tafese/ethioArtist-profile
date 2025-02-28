// App.tsx
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/homePage';
import ReelsPage from './pages/reelsPage'; 
import GalleryPage from './pages/galleryPage'; 
import NotFoundPage from './pages/NotFoundPage'; 

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/reelsPage" element={<ReelsPage />} />
        <Route path="/galleryPage" element={<GalleryPage />} />
        <Route path="*" element={<NotFoundPage />} /> 
      </Routes>
    </>
  );
}

export default App;