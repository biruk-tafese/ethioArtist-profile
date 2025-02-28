import React, { useState } from "react";
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link as RouterLink } from "react-router-dom";

const sections = [
  {Label:"hero", id:"hero"},
  { label: "Who Am I", id: "who-am-i" },
  { label: "Showreels", id: "showreels" },
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
    <Box onClick={handleDrawerToggle} sx={{ width: 250 }}>
      <List>
        {sections.map((section) => (
          <ListItem key={section.id}>
            <RouterLink to={`/?id=${section.id}`} style={{ textDecoration: 'none', color: 'inherit' }} onClick={() => handleNavClick(section.id)}>
              <ListItemText primary={section.label} />
            </RouterLink>
          </ListItem>
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
            EthioArtists
          </RouterLink>
        </Typography>

        {/* Desktop Menu */}
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          {sections.map((section) => (
            <RouterLink key={section.id} to={`/?id=${section.id}`} style={{ textDecoration: 'none', color: 'inherit', margin: '0 16px' }} onClick={() => handleNavClick(section.id)}>
              <Typography>{section.label}</Typography>
            </RouterLink>
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