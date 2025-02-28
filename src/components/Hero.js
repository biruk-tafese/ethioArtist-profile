import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Endga from '../assets/Endga_home.png';
import { Button, createTheme, ThemeProvider, Typography, Grid } from '@mui/material';
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
};
const socialMedia = [
    {
        icon: FacebookIcon,
        link: 'https://www.facebook.com/engdasew.habte',
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
    return (_jsx(ThemeProvider, { theme: theme, children: _jsxs(Grid, { container: true, spacing: 2, sx: { padding: '2rem', alignItems: 'center' }, children: [_jsx(Grid, { item: true, xs: 12, sm: 6, sx: { display: { xs: 'flex', sm: 'none' }, justifyContent: 'center' }, children: _jsx("img", { src: Endga, alt: "Random", style: { maxWidth: '100%', borderRadius: '8px' } }) }), _jsxs(Grid, { item: true, xs: 12, sm: 6, children: [_jsx(Typography, { variant: "h2", children: "Engdasew Habte" }), _jsx(Typography, { variant: "h5", children: "Promotion and Film Actor" }), _jsx(Button, { style: { marginTop: '2rem' }, variant: "outlined", color: "error", children: _jsx(Typography, { variant: 'h6', children: "ShowReels" }) }), _jsxs(Grid, { container: true, spacing: 2, sx: { marginTop: '2rem' }, children: [_jsx(Grid, { item: true, xs: 6, sm: 3, children: _jsx(Button, { variant: "outlined", style: { width: '100%', color: 'black' }, children: _jsxs("div", { style: { display: 'flex', flexDirection: 'column', alignItems: 'center' }, children: [_jsx(Typography, { variant: "h4", children: "40" }), _jsx("p", { children: "Promotions" })] }) }) }), _jsx(Grid, { item: true, xs: 6, sm: 3, children: _jsx(Button, { variant: "outlined", style: { width: '100%', color: 'black' }, children: _jsxs("div", { style: { display: 'flex', flexDirection: 'column', alignItems: 'center' }, children: [_jsx(Typography, { variant: "h4", children: "52" }), _jsx("p", { children: "Films" })] }) }) }), _jsx(Grid, { item: true, xs: 6, sm: 3, children: _jsx(Button, { variant: "outlined", style: { width: '100%', color: 'black' }, children: _jsxs("div", { style: { display: 'flex', flexDirection: 'column', alignItems: 'center' }, children: [_jsx(Typography, { variant: "h4", children: "16" }), _jsx("p", { children: "Sound Role" })] }) }) }), _jsx(Grid, { item: true, xs: 6, sm: 3, children: _jsx(Button, { variant: "outlined", style: { width: '100%', color: 'black' }, children: _jsxs("div", { style: { display: 'flex', flexDirection: 'column', alignItems: 'center' }, children: [_jsx(Typography, { variant: "h4", children: "6" }), _jsx("p", { children: "Awards" })] }) }) })] }), _jsx(Grid, { container: true, spacing: 1, sx: { marginTop: '2rem', justifyContent: 'center' }, children: socialMedia.map((social) => (_jsx(Grid, { item: true, children: _jsx(Button, { variant: "outlined", style: { color: 'black' }, onClick: () => window.open(social.link, '_blank'), children: _jsx(social.icon, {}) }) }, social.link))) })] }), _jsx(Grid, { item: true, xs: 12, sm: 6, sx: { display: { xs: 'none', sm: 'flex' }, justifyContent: 'center' }, children: _jsx("img", { src: Endga, alt: "Random", style: { maxWidth: '100%', borderRadius: '8px' } }) })] }) }));
}
