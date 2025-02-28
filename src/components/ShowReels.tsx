import React, { useState, useRef } from 'react';
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

const ShowReels: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [selectedVideoUrl, setSelectedVideoUrl] = useState<string>('');
  const [currentlyPlaying, setCurrentlyPlaying] = useState<string | null>(null); // Track currently playing video
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement | null>(null); // Reference to the video element

  const handleVideoClick = (videoUrl: string) => {
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

  return (
    <Box sx={{ padding: 2 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h3" gutterBottom>
          Reels
        </Typography>
        <Link
          component="button"
          variant="body2"
          onClick={() => navigate('/reelsPage')}
          style={{ fontWeight: 'bold', fontSize: '1.5rem' }}
        >
          View All
        </Link>
      </Box>

      {/* Responsive Grid Container */}
      <Grid container spacing={2}>
        {showReelsData.map((reel) => (
          <Grid item xs={12} sm={6} md={4} key={reel.id}> {/* Responsive grid item */}
            <Card sx={{ position: 'relative', height: '100%', overflow: 'hidden' }}>
              <video
                title={reel.title}
                style={{
                  height: '100%', // Full height
                  width: '100%', // Full width
                  objectFit: 'cover', // Cover the card
                }}
                controls
                onClick={() => handleVideoClick(reel.videoUrl)} // Handle video click
                ref={currentlyPlaying === reel.videoUrl ? videoRef : null} // Set ref if currently playing
              >
                <source src={reel.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              <CardContent>
                <Typography variant="h6"
                  sx={{ fontWeight: 'bold', marginBottom: 1 }} 
                  align="center"
                >
                  {reel.title}
                </Typography>
                <Typography variant="body2" align="center">
                  {reel.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Video Dialog */}
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <DialogTitle>{selectedVideoUrl}</DialogTitle>
        <DialogContent>
          <video
            title={selectedVideoUrl}
            style={{ width: '100%' }}
            controls
          >
            <source src={selectedVideoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
export default ShowReels;