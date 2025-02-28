import { useState } from 'react';
import { Grid, Dialog, DialogContent, IconButton, TextField, Typography, Paper } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';


import { profilePhotos, moviePhotos } from '../data/photos';

const photos1 = profilePhotos; 
const photos2 = moviePhotos;
const photos = photos1.concat(photos2);

export default function GalleryPage() {
    const [open, setOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState('');

    const handleImageClick = (image: string) => {
        setSelectedImage(image);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedImage(null);
    };

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const filteredImages = photos.filter((image) => {
        // You can customize the filtering logic based on your image names or other criteria
        return searchTerm ? image.url.toLowerCase().includes(searchTerm.toLowerCase()) : true; // This is a simple example; adjust as needed
    });

    return (
        <div>
            <Typography variant="h4" align="center" sx={{ marginTop: 8 }}>
                Gallery
            </Typography>
            <TextField
                
                variant="outlined"
                fullWidth
                placeholder='search like  `cermony , award, movies`'
                onChange={handleSearchChange}
                sx={{ marginBottom: 2, paddingTop: 2, marginTop:12, width:'40%', alignItems: 'center' }} // Add padding to the top
            />
            <Paper>
            <Grid container spacing={2} sx={{ paddingTop: 2 }}>
                {filteredImages.map((image, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                        <Paper elevation={3} sx={{ padding: 1 }}>
                        <img
                            src={image.url}
                            alt={`Gallery Image ${index + 1}`}
                            style={{ width: '100%', cursor: 'pointer' }}
                            onClick={() => handleImageClick(image.url)}
                        />
                        <Typography variant="h6" align="center" sx={{ padding: 1 }}>
                            {image.type}
                        </Typography>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
            </Paper>

            <Dialog open={open} onClose={handleClose}>
                <DialogContent>
                    <IconButton
                        edge="end"
                        color="inherit"
                        onClick={handleClose}
                        aria-label="close"
                        style={{ position: 'absolute', right: 8, top: 8 }}
                    >
                        <CloseIcon />
                    </IconButton>
                    {selectedImage && (
                        <img
                            src={selectedImage}
                            alt="Selected"
                            style={{ width: '100%' }}
                        />
                    )}
                </DialogContent>
            </Dialog>
        </div>
    );
}