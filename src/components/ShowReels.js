import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, Typography, Box, Dialog, DialogActions, DialogContent, DialogTitle, Link, Button, Grid } from '@mui/material';
import video1 from "../assets/videos/acting10.mp4";
import video2 from "../assets/videos/promotion3.mp4";
import video3 from "../assets/videos/acting18.mp4";
import video4 from "../assets/videos/promotion1.mp4";
import video5 from "../assets/videos/acting8.mp4";
// Mock data for showreels
const showReelsData = [
    {
        id: 1,
        title: "Reel 1",
        description: "This is a description for show reel 1",
        videoUrl: video1,
    },
    {
        id: 2,
        title: "Reel 2",
        description: "This is a description for show reel 2",
        videoUrl: video2,
    },
    {
        id: 3,
        title: "Reel 3",
        description: "This is a description for show reel 3",
        videoUrl: video3,
    },
    {
        id: 4,
        title: "Reel 4",
        description: "This is a description for show reel 4",
        videoUrl: video4,
    },
    {
        id: 5,
        title: "Reel 5",
        description: "This is a description for show reel 5",
        videoUrl: video5,
    },
];
const ShowReels = () => {
    const [open, setOpen] = useState(false);
    const [selectedVideoUrl, setSelectedVideoUrl] = useState('');
    const [currentlyPlaying, setCurrentlyPlaying] = useState(null); // Track currently playing video
    const navigate = useNavigate();
    const videoRef = useRef(null); // Reference to the video element
    const handleVideoClick = (videoUrl) => {
        // If a video is already playing, pause it
        if (currentlyPlaying && currentlyPlaying !== videoUrl) {
            if (videoRef.current) {
                videoRef.current.pause();
            }
        }
        setSelectedVideoUrl(videoUrl);
        setOpen(true);
        setCurrentlyPlaying(videoUrl); // Set the currently playing video
    };
    const handleClose = () => {
        setOpen(false);
        setSelectedVideoUrl('');
        setCurrentlyPlaying(null); // Reset currently playing video
    };
    return (_jsxs(Box, { sx: { padding: 2 }, children: [_jsxs(Box, { display: "flex", justifyContent: "space-between", alignItems: "center", children: [_jsx(Typography, { variant: "h3", gutterBottom: true, children: "Reels" }), _jsx(Link, { component: "button", variant: "body2", onClick: () => navigate('/reelsPage'), style: { fontWeight: 'bold', fontSize: '1.5rem' }, children: "View All" })] }), _jsx(Grid, { container: true, spacing: 2, children: showReelsData.map((reel) => (_jsxs(Grid, { item: true, xs: 12, sm: 6, md: 4, children: [" ", _jsxs(Card, { sx: { position: 'relative', height: '100%', overflow: 'hidden' }, children: [_jsxs("video", { title: reel.title, style: {
                                        height: '100%', // Full height
                                        width: '100%', // Full width
                                        objectFit: 'cover', // Cover the card
                                    }, controls: true, onClick: () => handleVideoClick(reel.videoUrl), ref: currentlyPlaying === reel.videoUrl ? videoRef : null, children: [_jsx("source", { src: reel.videoUrl, type: "video/mp4" }), "Your browser does not support the video tag."] }), _jsxs(CardContent, { children: [_jsx(Typography, { variant: "h6", sx: { fontWeight: 'bold', marginBottom: 1 }, align: "center", children: reel.title }), _jsx(Typography, { variant: "body2", align: "center", children: reel.description })] })] })] }, reel.id))) }), _jsxs(Dialog, { open: open, onClose: handleClose, fullWidth: true, maxWidth: "md", children: [_jsx(DialogTitle, { children: selectedVideoUrl }), _jsx(DialogContent, { children: _jsxs("video", { title: selectedVideoUrl, style: { width: '100%' }, controls: true, children: [_jsx("source", { src: selectedVideoUrl, type: "video/mp4" }), "Your browser does not support the video tag."] }) }), _jsx(DialogActions, { children: _jsx(Button, { onClick: handleClose, color: "primary", children: "Close" }) })] })] }));
};
export default ShowReels;
