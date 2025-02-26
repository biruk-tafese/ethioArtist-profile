import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';
import awardImage1 from '../assets/Endga_home.png'; // Replace with actual image paths
import awardImage2 from '../assets/Endga_6.jpg';
import awardImage3 from '../assets/Endga_6.jpg';

const awardsData = [
  {
    id: 1,
    title: 'Best Artist of the Year',
    description: 'Awarded for outstanding performance in the year 2022.',
    imageUrl: awardImage1,
  },
  {
    id: 2,
    title: 'Most Innovative Artist',
    description: 'Recognized for innovative contributions to the art community.',
    imageUrl: awardImage2,
  },
  {
    id: 3,
    title: 'People\'s Choice Award',
    description: 'Voted by fans as the favorite artist of the year.',
    imageUrl: awardImage3,
  },
];

const Rewards: React.FC = () => {
  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h3" gutterBottom>
        Artist Rewards & Achievements
      </Typography>
      <Typography variant="body1" paragraph>
        Here are some of the notable awards and recognitions I have received throughout my artistic journey.
      </Typography>

      <Grid container spacing={4}>
        {awardsData.map((award) => (
          <Grid item xs={12} sm={6} md={4} key={award.id}>
            <Card>
              <CardMedia
                component="img"
                alt={award.title}
                height="250"
                image={award.imageUrl}
                title={award.title}
                sx={{
                  objectFit: 'cover', 
                  height: '500px', // Fixed height for consistency
                }}
              />
              <CardContent>
                <Typography variant="h6">{award.title}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {award.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Rewards;