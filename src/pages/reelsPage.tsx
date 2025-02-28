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
    const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState('');

    const handleImageClick = (video: string) => {
        setSelectedVideo(video);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedVideo(null);
    };

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const filteredVideos = videos.filter((video) => {
        return video.type ? video.url.toLowerCase().includes(searchTerm.toLowerCase()) : true;
    });

    return (
        <div>
            <Typography variant="h4" align="center" sx={{ marginTop: 9 }}>
                Reels
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 4 }}>
                <TextField
                    variant="outlined"
                    placeholder='Search like `Acting scenes, Promotion videos`'
                    onChange={handleSearchChange}
                    sx={{ maxWidth: '600px', width: '100%' }} 
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    }}
                />
            </Box>
            <Paper>
                <Grid container spacing={2} sx={{ paddingTop: 2 }}>
                    {filteredVideos.map((video, index) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                            <Paper>
                                <CardMedia
                                    component="video"
                                    src={video.url}
                                    style={{ width: '100%', cursor: 'pointer', borderRadius: '8px' }}
                                    onClick={() => handleImageClick(video.url)}
                                />
                                <Typography variant="h6" align="center" sx={{ padding: 1 }}>
                                    {video.type}
                                </Typography>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Paper>

            <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
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
                    {selectedVideo && (
                        <CardMedia
                            component="video"
                            src={selectedVideo}
                            style={{ width: '100%', borderRadius: '8px' }}
                            controls
                        />
                    )}
                </DialogContent>
            </Dialog>
        </div>
    );
}