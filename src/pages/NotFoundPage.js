import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// NotFoundPage.tsx
import { Box, Typography, Button, Link, Avatar } from '@mui/material';
import lost_character from '../assets/lost-character.jpg';
export default function NotFoundPage() {
    return (_jsx(Box, { sx: { height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }, children: _jsxs(Box, { sx: { textAlign: 'center' }, children: [_jsx(Avatar, { sx: { width: 200, height: 200, margin: '0 auto' }, children: _jsx("img", { src: lost_character, alt: "Lost Character" }) }), _jsx(Typography, { variant: "h1", sx: { fontSize: 48, fontWeight: 'bold' }, children: "404" }), _jsx(Typography, { variant: "h2", sx: { fontSize: 24, fontWeight: 'bold', marginBottom: 2 }, children: "Page Not Found" }), _jsx(Typography, { variant: "body1", sx: { fontSize: 18, color: 'text.secondary', marginBottom: 4 }, children: "Sorry, the page you are looking for does not exist. Please check the URL and try again." }), _jsx(Button, { variant: "contained", component: Link, href: "/", sx: { textTransform: 'none' }, children: "Go Back to Home" })] }) }));
}
;
