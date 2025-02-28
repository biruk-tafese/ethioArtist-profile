import React, { useState } from "react";
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

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavClick = (id: string) => {
    // Close the mobile drawer if it's open
    if (mobileOpen) {
      setMobileOpen(false);
    }

    console.log(`Navigating to section: ${id}`);
  };

  const drawer = (
    <Box 
      onClick={handleDrawerToggle} 
      sx={{ 
        width: 250, 
        backgroundColor: 'rgba(0, 0, 0, 0.8)', // Gassy black background
        height: '100%', 
        color: 'white' // Text color
      }}
    >
      <List>
        {sections.map((section) => (
          <Box 
            key={section.id} 
            sx={{ 
              border: '1px solid red', 
              borderRadius: "10px", 
              margin: '4px 0', 
              backgroundColor: 'white', // White background for items
              color: 'black' // Text color for items
            }}
          >
            <ListItem>
              <RouterLink 
                to={`/?id=${section.id}`} 
                style={{ textDecoration: 'none', color: 'inherit' }} 
                onClick={() => handleNavClick(section.id)}
              >
                <ListItemText primary={section.label} />
              </RouterLink>
            </ListItem>
          </Box>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#222" }}>
      <Toolbar>
        {/* Logo */}
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          <RouterLink to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            Engedasew Habte - እንግዳሰዉ ሐብቴ
          </RouterLink>
        </Typography>

        {/* Desktop Menu */}
        <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: 'center', justifyContent: 'center' }}>
          {sections.map((section) => (
            <Box key={section.id} sx={{ border: '1px solid red', borderRadius: '10px', margin: '0 8px' }}>
              <RouterLink to={`/?id=${section.id}`} style={{ textDecoration: 'none', color: 'inherit' }} onClick={() => handleNavClick(section.id)}>
                <Typography sx={{ padding: '8px' }}>{section.label}</Typography>
              </RouterLink>
            </Box>
          ))}
        </Box>

        {/* Mobile Menu */}
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ display: { md: "none" } }} onClick={handleDrawerToggle}>
          <MenuIcon />
        </IconButton>
      </Toolbar>

      <Drawer anchor="left" open={mobileOpen} onClose={handleDrawerToggle}>
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Navbar;