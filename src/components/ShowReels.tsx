import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, Typography, Box, Dialog, DialogActions, DialogContent, DialogTitle, Link, IconButton, Button, Grid } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow'; 
import video1 from "../assets/video_2025-02-22_10-18-33.mp4";
import video2 from "../assets/video_2025-02-22_10-18-40.mp4";
import video3 from "../assets/video_2025-02-25_10-02-59.mp4";
import video4 from "../assets/video_2025-02-25_10-02-59.mp4";
import video5 from "../assets/video_2025-02-25_10-03-07.mp4";

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
  const navigate = useNavigate();

  const handleClickOpen = (videoUrl: string) => {
    setSelectedVideoUrl(videoUrl);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedVideoUrl('');
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
                controls
                title={reel.title}
                style={{
                  height: '100%', // Full height
                  width: '100%', // Full width
                  objectFit: 'cover', // Cover the card
                }}
              >
                <source src={reel.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <IconButton
                onClick={() => handleClickOpen(reel.videoUrl)}
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  color: 'white',
                }}
              >
                <PlayArrowIcon />
              </IconButton>
              <CardContent>
                <Typography variant="h6"
                  sx={{ fontWeight: 'bold', marginBottom: 1 }}
                >
                  {reel.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {reel.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      
      {/* Dialog for playing the video */}
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogTitle>Video Player</DialogTitle>
        <DialogContent>
          <video
            controls
            src={selectedVideoUrl}
            style={{ width: '100%' }}
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