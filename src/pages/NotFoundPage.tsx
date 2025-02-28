// NotFoundPage.tsx
import { Box, Typography, Button, Link, Avatar } from '@mui/material';
import lost_character from '../assets/lost-character.jpg';

export default function NotFoundPage()  {
  return (
    <Box sx={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Box sx={{ textAlign: 'center' }}>
        <Avatar sx={{ width: 200, height: 200, margin: '0 auto' }}>
          <img src={lost_character} alt="Lost Character" />
        </Avatar>
        <Typography variant="h1" sx={{ fontSize: 48, fontWeight: 'bold' }}>
          404
        </Typography>
        <Typography variant="h2" sx={{ fontSize: 24, fontWeight: 'bold', marginBottom: 2 }}>
          Page Not Found
        </Typography>
        <Typography variant="body1" sx={{ fontSize: 18, color: 'text.secondary', marginBottom: 4 }}>
          Sorry, the page you are looking for does not exist. Please check the URL and try again.
        </Typography>
        <Button variant="contained" component={Link} href="/" sx={{ textTransform: 'none' }}>
          Go Back to Home
        </Button>
      </Box>
    </Box>
  );
};

