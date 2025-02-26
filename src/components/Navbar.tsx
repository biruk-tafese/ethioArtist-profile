import React, { useState } from "react";
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

// Define sections with labels and corresponding IDs of target elements
const sections = [
  { label: "Who Am I", id: "who-am-i" },
  // { label: "Career Summary", id: "career-summary" },
  { label: "Showreels", id: "showreels" },
  { label: "Rewards", id: "rewards" },
  { label: "Contact", id: "contact" },
];

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Smooth scroll to the element with the given id
  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    // Close the mobile drawer if it's open
    if (mobileOpen) {
      setMobileOpen(false);
    }
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ width: 250 }}>
      <List>
        {sections.map((section) => (
          <ListItem  key={section.id} onClick={() => handleNavClick(section.id)}>
            <ListItemText primary={section.label} />
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
          EthioArtists
        </Typography>

        {/* Desktop Menu */}
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          {sections.map((section) => (
            <Typography
              key={section.id}
              sx={{ mx: 2, cursor: "pointer" }}
              onClick={() => handleNavClick(section.id)}
            >
              {section.label}
            </Typography>
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
