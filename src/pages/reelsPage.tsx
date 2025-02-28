import React, { useState } from "react";
import { Grid, Dialog, DialogContent, IconButton, TextField, Typography, CardMedia, Paper } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import ActingVideos from "../data/videos";
import PromotionVideos from "../data/videos";

const videos1 = ActingVideos.ActingVideos;
const videos2 = PromotionVideos.PromotionVideos;
const videos = videos1.concat(videos2);

export default function ReelsPage() {
    const [open, setOpen] = useState(false);
    const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentlyPlaying, setCurrentlyPlaying] = useState<string | null>(null); // Track currently playing video

    const handleImageClick = (video: string) => {
        // If a video is already playing, pause it
        if (currentlyPlaying && currentlyPlaying !== video) {
            const previousVideo = document.getElementById(currentlyPlaying) as HTMLVideoElement;
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
            <TextField
                variant="outlined"
                fullWidth
                placeholder='Search like `Acting scenes, Promotion videos`'
                onChange={handleSearchChange}
                sx={{ marginBottom: 2, marginTop: 4, maxWidth: '600px', mx: 'auto' }} 
            />
            <Paper>
                <Grid container spacing={2} sx={{ paddingTop: 2 }}>
                    {filteredVideos.map((video, index) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                            <Paper>
                                <CardMedia
                                    component="video"
                                    controls
                                    id={video.url} // Set the id to the video URL or a unique identifier
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
            onClick={handleClose} // Ensure this function is defined
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