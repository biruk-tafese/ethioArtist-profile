import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Grid, Dialog, DialogContent, IconButton, TextField, Typography, CardMedia, Paper, Box, InputAdornment } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search'; // Import the Search icon
import ActingVideos from "../data/videos";
import PromotionVideos from "../data/videos";
const videos1 = ActingVideos.ActingVideos;
const videos2 = PromotionVideos.PromotionVideos;
const videos = videos1.concat(videos2);
export default function ReelsPage() {
    const [open, setOpen] = useState(false);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const handleImageClick = (video) => {
        setSelectedVideo(video);
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
        setSelectedVideo(null);
    };
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };
    const filteredVideos = videos.filter((video) => {
        return video.type ? video.url.toLowerCase().includes(searchTerm.toLowerCase()) : true;
    });
    return (_jsxs("div", { children: [_jsx(Typography, { variant: "h4", align: "center", sx: { marginTop: 9 }, children: "Reels" }), _jsx(Box, { sx: { display: 'flex', justifyContent: 'center', marginTop: 4 }, children: _jsx(TextField, { variant: "outlined", placeholder: 'Search like `Acting scenes, Promotion videos`', onChange: handleSearchChange, sx: { maxWidth: '600px', width: '100%' }, InputProps: {
                        startAdornment: (_jsx(InputAdornment, { position: "start", children: _jsx(SearchIcon, {}) })),
                    } }) }), _jsx(Paper, { children: _jsx(Grid, { container: true, spacing: 2, sx: { paddingTop: 2 }, children: filteredVideos.map((video, index) => (_jsx(Grid, { item: true, xs: 12, sm: 6, md: 4, lg: 3, children: _jsxs(Paper, { children: [_jsx(CardMedia, { component: "video", src: video.url, style: { width: '100%', cursor: 'pointer', borderRadius: '8px' }, onClick: () => handleImageClick(video.url) }), _jsx(Typography, { variant: "h6", align: "center", sx: { padding: 1 }, children: video.type })] }) }, index))) }) }), _jsx(Dialog, { open: open, onClose: handleClose, fullWidth: true, maxWidth: "md", children: _jsxs(DialogContent, { children: [_jsx(IconButton, { edge: "end", color: "inherit", onClick: handleClose, "aria-label": "close", style: { position: 'absolute', right: 8, top: 8 }, children: _jsx(CloseIcon, {}) }), selectedVideo && (_jsx(CardMedia, { component: "video", src: selectedVideo, style: { width: '100%', borderRadius: '8px' }, controls: true }))] }) })] }));
}
