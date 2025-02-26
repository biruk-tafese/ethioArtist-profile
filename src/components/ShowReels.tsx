import React, { useState } from 'react';
import { Card, CardContent, Typography, Box, Dialog, DialogActions, DialogContent, DialogTitle, Link, IconButton, Button } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow'; // Import Play Icon
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
                      <Link href="#" variant="body1">
                          See More
                      </Link>
        </Box>

      {/* Horizontal Scrolling Container */}
      <Box sx={{
        display: 'flex',
        overflowX: 'auto',
        gap: 3,
        padding: '10px 0',
        '&::-webkit-scrollbar': {
          height: '8px',
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: 'gray',
          borderRadius: '4px',
        }
      }}>
        {showReelsData.map((reel) => (
          <Box key={reel.id} sx={{ width: '300px', height: '400px' }}> {/* Fixed width and height */}
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
                  color: 'white',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
                  '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Darker on hover
                  },
                }}
              >
                <PlayArrowIcon fontSize="large" />
              </IconButton>
              <CardContent sx={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'rgba(255, 255, 255, 0.3)', // Glassy effect
                backdropFilter: 'blur(5px)', // Blur effect for glassy look
                padding: '16px',
              }}>
                <Typography variant="h6">
                  {reel.title}
                  <Link href={`/showreels/${reel.id}`} sx={{ marginLeft: 1 }} color="primary">
                    See More
                  </Link>
                </Typography>
                <Typography variant="body2" color="textSecondary" paragraph>
                  {reel.description}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>

      {/* Video Modal */}
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogTitle>Watch Video</DialogTitle>
        <DialogContent>
          <video width="100%" height="400" controls>
            <source src={selectedVideoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
        </Dialog>
    </Box>
    );
}

export default ShowReels;
