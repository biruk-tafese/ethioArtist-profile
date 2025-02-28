import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link as RouterLink } from "react-router-dom";
const sections = [
    { label: "Home", id: "hero" },
    { label: "Who Am I", id: "who-am-i" },
    { label: "Showreels", id: "showreels" },
    { label: "Gallery", id: "gallery" },
    { label: "Rewards", id: "rewards" },
    { label: "Contact", id: "contact" },
];
const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const handleNavClick = (id) => {
        // Close the mobile drawer if it's open
        if (mobileOpen) {
            setMobileOpen(false);
        }
        console.log(`Navigating to section: ${id}`);
    };
    const drawer = (_jsx(Box, { onClick: handleDrawerToggle, sx: {
            width: 250,
            backgroundColor: 'rgba(0, 0, 0, 0.8)', // Gassy black background
            height: '100%',
            color: 'white' // Text color
        }, children: _jsx(List, { children: sections.map((section) => (_jsx(Box, { sx: {
                    border: '1px solid red',
                    borderRadius: "10px",
                    margin: '4px 0',
                    backgroundColor: 'white', // White background for items
                    color: 'black' // Text color for items
                }, children: _jsx(ListItem, { children: _jsx(RouterLink, { to: `/?id=${section.id}`, style: { textDecoration: 'none', color: 'inherit' }, onClick: () => handleNavClick(section.id), children: _jsx(ListItemText, { primary: section.label }) }) }) }, section.id))) }) }));
    return (_jsxs(AppBar, { position: "fixed", sx: { backgroundColor: "#222" }, children: [_jsxs(Toolbar, { children: [_jsx(Typography, { variant: "h6", sx: { flexGrow: 1 }, children: _jsx(RouterLink, { to: "/", style: { textDecoration: 'none', color: 'inherit' }, children: "Engedasew Habte - \u12A5\u1295\u130D\u12F3\u1230\u12C9 \u1210\u1265\u1274" }) }), _jsx(Box, { sx: { display: { xs: "none", md: "flex" }, alignItems: 'center', justifyContent: 'center' }, children: sections.map((section) => (_jsx(Box, { sx: { border: '1px solid red', borderRadius: '10px', margin: '0 8px' }, children: _jsx(RouterLink, { to: `/?id=${section.id}`, style: { textDecoration: 'none', color: 'inherit' }, onClick: () => handleNavClick(section.id), children: _jsx(Typography, { sx: { padding: '8px' }, children: section.label }) }) }, section.id))) }), _jsx(IconButton, { edge: "start", color: "inherit", "aria-label": "menu", sx: { display: { md: "none" } }, onClick: handleDrawerToggle, children: _jsx(MenuIcon, {}) })] }), _jsx(Drawer, { anchor: "left", open: mobileOpen, onClose: handleDrawerToggle, children: drawer })] }));
};
export default Navbar;
