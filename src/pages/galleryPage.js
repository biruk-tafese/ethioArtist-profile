import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Grid, Dialog, DialogContent, IconButton, TextField, Typography, Paper, Box, InputAdornment } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search'; // Import the Search icon
import { profilePhotos, moviePhotos } from '../data/photos';
const photos1 = profilePhotos;
const photos2 = moviePhotos;
const photos = photos1.concat(photos2);
export default function GalleryPage() {
    const [open, setOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const handleImageClick = (image) => {
        setSelectedImage(image);
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
        setSelectedImage(null);
    };
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };
    const filteredImages = photos.filter((image) => {
        // You can customize the filtering logic based on your image names or other criteria
        return searchTerm ? image.url.toLowerCase().includes(searchTerm.toLowerCase()) : true; // This is a simple example; adjust as needed
    });
    return (_jsxs("div", { children: [_jsx(Typography, { variant: "h4", align: "center", sx: { marginTop: 8 }, children: "Gallery" }), _jsx(Box, { sx: { display: 'flex', justifyContent: 'center', marginTop: 4 }, children: _jsx(TextField, { variant: "outlined", placeholder: 'Search like `Profile photos, Movie photos`', onChange: handleSearchChange, sx: { maxWidth: '600px', width: '100%' }, InputProps: {
                        startAdornment: (_jsx(InputAdornment, { position: "start", children: _jsx(SearchIcon, {}) })),
                    } }) }), _jsx(Paper, { children: _jsx(Grid, { container: true, spacing: 2, sx: { paddingTop: 2 }, children: filteredImages.map((image, index) => (_jsx(Grid, { item: true, xs: 12, sm: 6, md: 3, children: _jsxs(Paper, { elevation: 3, sx: { padding: 1 }, children: [_jsx("img", { src: image.url, alt: `Gallery Image ${index + 1}`, style: { width: '100%', cursor: 'pointer' }, onClick: () => handleImageClick(image.url) }), _jsx(Typography, { variant: "h6", align: "center", sx: { padding: 1 }, children: image.type })] }) }, index))) }) }), _jsx(Dialog, { open: open, onClose: handleClose, children: _jsxs(DialogContent, { children: [_jsx(IconButton, { edge: "end", color: "inherit", onClick: handleClose, "aria-label": "close", style: { position: 'absolute', right: 8, top: 8 }, children: _jsx(CloseIcon, {}) }), selectedImage && (_jsx("img", { src: selectedImage, alt: "Selected", style: { width: '100%' } }))] }) })] }));
}
