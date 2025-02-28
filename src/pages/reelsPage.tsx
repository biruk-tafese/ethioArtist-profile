import { useState } from 'react';
import { Grid, Dialog, DialogContent, IconButton, TextField, Typography, CardMedia } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import video1_eng from "../assets/video_2025-02-22_10-18-33.mp4";
import video2_eng from "../assets/video_2025-02-22_10-18-40.mp4";
import video3_eng from "../assets/video_2025-02-25_10-02-59.mp4";
import video4_eng from "../assets/video_2025-02-25_10-02-59.mp4";

const videos = [
    video1_eng,
    video2_eng,
    video3_eng,
    video4_eng,
];

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
        // Customize the filtering logic based on your video names or other criteria
        return video.includes(searchTerm); // This is a simple example; adjust as needed
    });

    return (
        <div>
            <Typography variant="h4" align="center" sx={{ marginTop: 9 }}>
                Reels
            </Typography>
            <TextField
                variant="outlined"
                fullWidth
                placeholder='Search like `movies, tv, music`'
                onChange={handleSearchChange}
                sx={{ marginBottom: 2, marginTop: 4, maxWidth: '600px', mx: 'auto' }} // Center the search bar
            />

            <Grid container spacing={2} sx={{ paddingTop: 2 }}>
                {filteredVideos.map((video, index) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                        <CardMedia
                            component="video"
                            src={video}
                            style={{ width: '100%', cursor: 'pointer', borderRadius: '8px' }}
                            onClick={() => handleImageClick(video)}
                            controls
                        />
                    </Grid>
                ))}
            </Grid>

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