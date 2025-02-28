import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Grid, Link } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import EthioTeleLogo from '../assets/photos/telebir_logo.jpg'; 
import BYDLogo from '../assets/photos/BYD_logo.jpg';
import TelebirLogo from '../assets/photos/ethio_tele.jpg';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', { name, email, message });
    // Reset form fields
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <Box sx={{ backgroundColor: '#121212', color: '#ffffff', padding: 4 }}>
      <Typography variant="h4" gutterBottom align="center">
        Get in Touch
      </Typography>
      <Typography variant="body1" paragraph align="center">
        I would love to hear from you! Please fill out the form below or reach out through my social media channels.
      </Typography>

      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Name"
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              sx={{ backgroundColor: '#ffffff' }} // White background for input
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              sx={{ backgroundColor: '#ffffff' }} // White background for input
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Message"
              variant="outlined"
              multiline
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              sx={{ backgroundColor: '#ffffff' }} // White background for input
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Send Message
            </Button>
          </Grid>
        </Grid>
      </form>

      <Box sx={{ marginTop: 4, textAlign: 'center' }}>
        <Typography variant="h5">Contact Information</Typography>
        <Typography variant="body1">
          Email: <Link href="mailto:artist@example.com" color="inherit">artist@example.com</Link>
        </Typography>
        <Typography variant="body1">
          Phone: <Link href="tel:+1234567890" color="inherit">+1 (234) 567-890</Link>
        </Typography>
        <Typography variant="body1">
          Follow me on social media:
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, marginTop: 1 }}>
          <Link href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" color="inherit">
            <InstagramIcon fontSize="large" />
          </Link>
          <Link href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" color="inherit">
            <FacebookIcon fontSize="large" />
          </Link>
          <Link href="https://www.twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" color="inherit">
            <TwitterIcon fontSize="large" />
          </Link>
        </Box>
      </Box>

      <Box sx={{ marginTop: 4, textAlign: 'center' }}>
        <Typography variant="h5">Affiliates</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4, marginTop: 2 }}>
          <Link href="https://www.ethiotelecom.et" target="_blank" rel="noopener noreferrer">
            <img src={EthioTeleLogo} alt="Ethio Telecom" style={{ width: '100px', height: 'auto' }} />
          </Link>
          <Link href="https://www.byd.com" target="_blank" rel="noopener noreferrer">
            <img src={BYDLogo} alt="BYD" style={{ width: '100px', height: 'auto' }} />
          </Link>
          <Link href="https://www.telebir.com" target="_blank" rel="noopener noreferrer">
            <img src={TelebirLogo} alt="Telebir" style={{ width: '100px', height: 'auto' }} />
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;