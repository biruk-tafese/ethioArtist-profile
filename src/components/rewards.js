import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';
import awardImage1 from '../assets/photos/Endga_3.jpg'; // Replace with actual image paths
import awardImage2 from '../assets/photos/Engdasew_movie2.jpg';
import awardImage3 from '../assets/photos/movie11.jpg';
const awardsData = [
    {
        id: 1,
        title: 'Best Artist of the Year',
        description: 'Awarded for outstanding performance in the year 2022.',
        imageUrl: awardImage1,
    },
    {
        id: 2,
        title: 'Most Innovative Artist',
        description: 'Recognized for innovative contributions to the art community.',
        imageUrl: awardImage2,
    },
    {
        id: 3,
        title: 'People\'s Choice Award',
        description: 'Voted by fans as the favorite artist of the year.',
        imageUrl: awardImage3,
    },
];
const Rewards = () => {
    return (_jsxs(Box, { sx: { padding: 4 }, children: [_jsx(Typography, { variant: "h3", gutterBottom: true, children: "Artist Rewards & Achievements" }), _jsx(Typography, { variant: "body1", paragraph: true, children: "Here are some of the notable awards and recognitions I have received throughout my artistic journey." }), _jsx(Grid, { container: true, spacing: 4, children: awardsData.map((award) => (_jsx(Grid, { item: true, xs: 12, sm: 6, md: 4, children: _jsxs(Card, { children: [_jsx(CardMedia, { component: "img", alt: award.title, height: "250", image: award.imageUrl, title: award.title, sx: {
                                    objectFit: 'cover',
                                    height: '500px', // Fixed height for consistency
                                } }), _jsxs(CardContent, { children: [_jsx(Typography, { variant: "h6", children: award.title }), _jsx(Typography, { variant: "body2", color: "textSecondary", children: award.description })] })] }) }, award.id))) })] }));
};
export default Rewards;
