import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Grid, Dialog, DialogContent, IconButton, TextField, Typography, CardMedia, Paper } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ActingVideos from "../data/videos";
import PromotionVideos from "../data/videos";
const videos1 = ActingVideos.ActingVideos;
const videos2 = PromotionVideos.PromotionVideos;
const videos = videos1.concat(videos2);
export default function ReelsPage() {
    const [open, setOpen] = useState(false);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentlyPlaying, setCurrentlyPlaying] = useState(null); // Track currently playing video
    const handleImageClick = (video) => {
        // If a video is already playing, pause it
        if (currentlyPlaying && currentlyPlaying !== video) {
            const previousVideo = document.getElementById(currentlyPlaying);
            if (previousVideo) {
                previousVideo.pause();
            }
        }
        setSelectedVideo(video);
        setOpen(true);
        setCurrentlyPlaying(video); // Set the currently playing video
    };
    const handleClose = () => {
        setOpen(false);
        setSelectedVideo(null);
        setCurrentlyPlaying(null); // Reset currently playing video
    };
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };
    const filteredVideos = videos.filter((video) => {
        return video.type ? video.url.toLowerCase().includes(searchTerm.toLowerCase()) : true;
    });
    return (_jsxs("div", { children: [_jsx(Typography, { variant: "h4", align: "center", sx: { marginTop: 9 }, children: "Reels" }), _jsx(TextField, { variant: "outlined", fullWidth: true, placeholder: 'Search like `Acting scenes, Promotion videos`', onChange: handleSearchChange, sx: { marginBottom: 2, marginTop: 4, maxWidth: '600px', mx: 'auto' } }), _jsx(Paper, { children: _jsx(Grid, { container: true, spacing: 2, sx: { paddingTop: 2 }, children: filteredVideos.map((video, index) => (_jsx(Grid, { item: true, xs: 12, sm: 6, md: 4, lg: 3, children: _jsxs(Paper, { children: [_jsx(CardMedia, { component: "video", controls: true, id: video.url, src: video.url, style: { width: '100%', cursor: 'pointer', borderRadius: '8px' }, onClick: () => handleImageClick(video.url) }), _jsx(Typography, { variant: "h6", align: "center", sx: { padding: 1 }, children: video.type })] }) }, index))) }) }), _jsx(Dialog, { open: open, onClose: handleClose, fullWidth: true, maxWidth: "md", children: _jsxs(DialogContent, { children: [_jsx(IconButton, { edge: "end", color: "inherit", onClick: handleClose, "aria-label": "close", style: { position: 'absolute', right: 8, top: 8 }, children: _jsx(CloseIcon, {}) }), selectedVideo && (_jsx(CardMedia, { component: "video", src: selectedVideo, style: { width: '100%', borderRadius: '8px' }, controls: true }))] }) })] }));
}
