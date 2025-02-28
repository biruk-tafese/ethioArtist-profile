import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Typography, Grid, Card, CardMedia, Link } from '@mui/material';
import artwork1 from '../assets/Endga_1.jpg'; // Replace with actual image paths
import artwork2 from '../assets/Endga_3.jpg';
import artwork3 from '../assets/Endga_3.jpg';
import artwork4 from '../assets/Endga_6.jpg';
import artwork5 from '../assets/Endga_home.png';
import { useNavigate } from 'react-router-dom';
// Mock data for gallery
const galleryData = [
    {
        id: 1,
        title: 'Artwork 1',
        imageUrl: artwork1,
    },
    {
        id: 2,
        title: 'Artwork 2',
        imageUrl: artwork2,
    },
    {
        id: 3,
        title: 'Artwork 3',
        imageUrl: artwork3,
    },
    {
        id: 4,
        title: 'Artwork 4',
        imageUrl: artwork4,
    },
    {
        id: 5,
        title: 'Artwork 5',
        imageUrl: artwork5,
    },
];
const Gallery = () => {
    const navigate = useNavigate();
    return (_jsxs(Box, { sx: { padding: 4 }, children: [_jsxs(Box, { display: "flex", justifyContent: "space-between", alignItems: "center", children: [_jsx(Typography, { variant: "h3", gutterBottom: true, children: "Gallery" }), _jsx(Link, { component: "button", variant: "body2", onClick: () => navigate('/galleryPage'), children: "View All" })] }), _jsx(Typography, { variant: "body1", paragraph: true, children: "Explore my collection of artworks and photography." }), _jsx(Grid, { container: true, spacing: 4, children: galleryData.map((artwork) => (_jsx(Grid, { item: true, xs: 12, sm: 6, md: 4, children: _jsx(Card, { children: _jsx(CardMedia, { component: "img", alt: artwork.title, height: "300", image: artwork.imageUrl, title: artwork.title, sx: {
                                objectFit: 'cover', // Ensures the image covers the card area
                            } }) }) }, artwork.id))) })] }));
};
export default Gallery;
