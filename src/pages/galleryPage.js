import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Grid, Dialog, DialogContent, IconButton, TextField, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import engda1 from '../assets/Endga_1.jpg';
import engda2 from '../assets/Endga_2.jpg';
import engda3 from '../assets/Endga_3.jpg';
import engda4 from '../assets/Endga_4.jpg';
import engda5 from '../assets/Endga_5.jpg';
import engda6 from '../assets/Endga_6.jpg';
import engdaHome from '../assets/Endga_home.png';
const images = [
    engda1,
    engda2,
    engda3,
    engda4,
    engda5,
    engda6,
    engdaHome,
];
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
    const filteredImages = images.filter((image) => {
        // You can customize the filtering logic based on your image names or other criteria
        return image.includes(searchTerm); // This is a simple example; adjust as needed
    });
    return (_jsxs("div", { children: [_jsx(Typography, { variant: "h4", align: "center", sx: { marginTop: 4 }, children: "Gallery" }), _jsx(TextField, { variant: "outlined", fullWidth: true, placeholder: 'search like  `cermony , award, movies`', onChange: handleSearchChange, sx: { marginBottom: 2, paddingTop: 2, marginTop: 12, width: '40%', alignItems: 'center' } }), _jsx(Grid, { container: true, spacing: 2, sx: { paddingTop: 2 }, children: filteredImages.map((image, index) => (_jsx(Grid, { item: true, xs: 12, sm: 6, md: 3, children: _jsx("img", { src: image, alt: `Gallery Image ${index + 1}`, style: { width: '100%', cursor: 'pointer' }, onClick: () => handleImageClick(image) }) }, index))) }), _jsx(Dialog, { open: open, onClose: handleClose, children: _jsxs(DialogContent, { children: [_jsx(IconButton, { edge: "end", color: "inherit", onClick: handleClose, "aria-label": "close", style: { position: 'absolute', right: 8, top: 8 }, children: _jsx(CloseIcon, {}) }), selectedImage && (_jsx("img", { src: selectedImage, alt: "Selected", style: { width: '100%' } }))] }) })] }));
}
