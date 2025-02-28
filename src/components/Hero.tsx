import { useNavigate } from 'react-router-dom';
import Endga from '../assets/photos/Endga_home.png';
import { Button, createTheme, ThemeProvider, Typography, Grid, Link } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YoutubeIcon from '@mui/icons-material/YouTube';
import { FaTiktok } from "react-icons/fa";

const theme = createTheme();

theme.typography.h2 = {
    fontSize: '2rem',
    '@media (min-width:600px)': {
        fontSize: '3rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '3rem',
    },
}

const socialMedia = [
    {
        icon: FacebookIcon,
        link: 'https://www.facebook.com/@engdasew.habte.2023',
    },
    {
        icon: InstagramIcon,
        link: 'https://www.instagram.com/engdasew_habte/',
    },
    {
        icon: TwitterIcon,
        link: 'https://twitter.com/engdasew_habte',
    },
    {
        icon: YoutubeIcon,
        link: 'https://www.youtube.com/channel/UCXkqM1m6J3b6e2vq9Z4v7Zw',
    },
    {
        icon: FaTiktok,
        link: 'https://www.tiktok.com/@engdasew_habte?lang=en',
    }
];

export default function Hero() {
    const navigate = useNavigate();
    return (
        <ThemeProvider theme={theme}>
            <Grid container spacing={2} sx={{ padding: '2rem', alignItems: 'center' }}>
                {/* Right section: Random Image */}
                <Grid item xs={12} sm={6} sx={{ display: { xs: 'flex', sm: 'none' }, justifyContent: 'center' }}>
                    <img
                        src={Endga}
                        alt="Random"
                        style={{ maxWidth: '100%', borderRadius: '8px' }}
                    />
                </Grid>

                {/* Left section: Text and Social Media Buttons */}
                <Grid item xs={12} sm={6}>
                    <Typography variant="h2">Engdasew Habte</Typography>
                    <Typography variant="h5">Promotion and Film Actor</Typography>

                    <Button style={{ marginTop: '2rem' }} variant="outlined" color="error">
                        <Typography variant='h6'>
                        <Link
                           component="button"
                           variant="body2"
                           onClick={() => navigate('/?id=showreels')}
                           style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold', fontSize: '1.5rem' }}
                         >
                           ShowReels
                         </Link>
                        </Typography>
                    </Button>

                    <Grid container spacing={2} sx={{ marginTop: '2rem' }}>
                        <Grid item xs={6} sm={3}>
                            <Button variant="outlined" style={{ width: '100%', color: 'black' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <Typography variant="h4">40</Typography>
                                    <p>Promotions</p>
                                </div>
                            </Button>
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <Button variant="outlined" style={{ width: '100%', color: 'black' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <Typography variant="h4">52</Typography>
                                    <p>Films</p>
                                </div>
                            </Button>
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <Button variant="outlined" style={{ width: '100%', color: 'black' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <Typography variant="h4">16</Typography>
                                    <p>Sound Role</p>
                                </div>
                            </Button>
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <Button variant="outlined" style={{ width: '100%', color: 'black' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <Typography variant="h4">6</Typography>
                                    <p>Awards</p>
                                </div>
                            </Button>
                        </Grid>
                    </Grid>

                    <Grid container spacing={1} sx={{ marginTop: '2rem', justifyContent: 'center' }}>
                        {socialMedia.map((social) => (
                            <Grid item key={social.link}>
                                <Button
                                    variant="outlined"
                                    style={{ color: 'black' }}
                                    onClick={() => window.open(social.link, '_blank')}
                                >
                                    <social.icon />
                                </Button>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
                
                {/* Right section: Random Image */}
                <Grid item xs={12} sm={6} sx={{ display: { xs: 'none', sm: 'flex' }, justifyContent: 'center' }}>
                    <img
                        src={Endga}
                        alt="Random"
                        style={{ maxWidth: '100%', borderRadius: '8px' }}
                    />
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}
// Compare this snippet from src/pages/contactPage.tsx:
//     };