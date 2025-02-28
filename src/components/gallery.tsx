import React from 'react';
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

const Gallery: React.FC = () => {
    const navigate = useNavigate();
    return (
        <Box sx={{ padding: 4 }}>
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography variant="h3" gutterBottom>
                    Gallery
                </Typography>
                 <Link
                                          component="button"
                                          variant="body2"
                                          onClick={() => navigate('/galleryPage')}
                                      >
                                          View All
                                      </Link>
            </Box>
            <Typography variant="body1" paragraph>
                Explore my collection of artworks and photography.
            </Typography>

            <Grid container spacing={4}>
                {galleryData.map((artwork) => (
                    <Grid item xs={12} sm={6} md={4} key={artwork.id}>
                        <Card>
                            <CardMedia
                                component="img"
                                alt={artwork.title}
                                height="300"
                                image={artwork.imageUrl}
                                title={artwork.title}
                                sx={{
                                    objectFit: 'cover', // Ensures the image covers the card area
                                }}
                            />
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Gallery;