import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Box, Typography, TextField, Button, Grid, Link } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import EthioTeleLogo from '../assets/photos/telebir_logo.jpg';
import BYDLogo from '../assets/photos/BYD_logo.jpg';
import TelebirLogo from '../assets/photos/ethio_tele.jpg';
const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', { name, email, message });
        // Reset form fields
        setName('');
        setEmail('');
        setMessage('');
    };
    return (_jsxs(Box, { sx: { backgroundColor: '#121212', color: '#ffffff', padding: 4 }, children: [_jsx(Typography, { variant: "h4", gutterBottom: true, align: "center", children: "Get in Touch" }), _jsx(Typography, { variant: "body1", paragraph: true, align: "center", children: "I would love to hear from you! Please fill out the form below or reach out through my social media channels." }), _jsx("form", { onSubmit: handleSubmit, children: _jsxs(Grid, { container: true, spacing: 2, justifyContent: "center", children: [_jsx(Grid, { item: true, xs: 12, sm: 6, children: _jsx(TextField, { fullWidth: true, label: "Name", variant: "outlined", value: name, onChange: (e) => setName(e.target.value), required: true, sx: { backgroundColor: '#ffffff' } }) }), _jsx(Grid, { item: true, xs: 12, sm: 6, children: _jsx(TextField, { fullWidth: true, label: "Email", variant: "outlined", type: "email", value: email, onChange: (e) => setEmail(e.target.value), required: true, sx: { backgroundColor: '#ffffff' } }) }), _jsx(Grid, { item: true, xs: 12, children: _jsx(TextField, { fullWidth: true, label: "Message", variant: "outlined", multiline: true, rows: 4, value: message, onChange: (e) => setMessage(e.target.value), required: true, sx: { backgroundColor: '#ffffff' } }) }), _jsx(Grid, { item: true, xs: 12, children: _jsx(Button, { type: "submit", variant: "contained", color: "primary", children: "Send Message" }) })] }) }), _jsxs(Box, { sx: { marginTop: 4, textAlign: 'center' }, children: [_jsx(Typography, { variant: "h5", children: "Contact Information" }), _jsxs(Typography, { variant: "body1", children: ["Email: ", _jsx(Link, { href: "mailto:artist@example.com", color: "inherit", children: "artist@example.com" })] }), _jsxs(Typography, { variant: "body1", children: ["Phone: ", _jsx(Link, { href: "tel:+1234567890", color: "inherit", children: "+1 (234) 567-890" })] }), _jsx(Typography, { variant: "body1", children: "Follow me on social media:" }), _jsxs(Box, { sx: { display: 'flex', justifyContent: 'center', gap: 2, marginTop: 1 }, children: [_jsx(Link, { href: "https://www.instagram.com/yourprofile", target: "_blank", rel: "noopener noreferrer", color: "inherit", children: _jsx(InstagramIcon, { fontSize: "large" }) }), _jsx(Link, { href: "https://www.facebook.com/yourprofile", target: "_blank", rel: "noopener noreferrer", color: "inherit", children: _jsx(FacebookIcon, { fontSize: "large" }) }), _jsx(Link, { href: "https://www.twitter.com/yourprofile", target: "_blank", rel: "noopener noreferrer", color: "inherit", children: _jsx(TwitterIcon, { fontSize: "large" }) })] })] }), _jsxs(Box, { sx: { marginTop: 4, textAlign: 'center' }, children: [_jsx(Typography, { variant: "h5", children: "Affiliates" }), _jsxs(Box, { sx: { display: 'flex', justifyContent: 'center', gap: 4, marginTop: 2 }, children: [_jsx(Link, { href: "https://www.ethiotelecom.et", target: "_blank", rel: "noopener noreferrer", children: _jsx("img", { src: EthioTeleLogo, alt: "Ethio Telecom", style: { width: '100px', height: 'auto' } }) }), _jsx(Link, { href: "https://www.byd.com", target: "_blank", rel: "noopener noreferrer", children: _jsx("img", { src: BYDLogo, alt: "BYD", style: { width: '100px', height: 'auto' } }) }), _jsx(Link, { href: "https://www.telebir.com", target: "_blank", rel: "noopener noreferrer", children: _jsx("img", { src: TelebirLogo, alt: "Telebir", style: { width: '100px', height: 'auto' } }) })] })] })] }));
};
export default Contact;
