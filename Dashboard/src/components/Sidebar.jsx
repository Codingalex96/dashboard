import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemText, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <IconButton onClick={toggleDrawer}>
        <MenuIcon />
      </IconButton>
      <Drawer variant="persistent" anchor="left" open={isOpen}>
        <List>
          <ListItem button={true} component={Link} to="/dashboard">
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button={true} component={Link} to="/charts">
            <ListItemText primary="Charts" />
          </ListItem>
          <ListItem button={true} component={Link} to="/transactions">
            <ListItemText primary="Transactions" />
          </ListItem>
          <ListItem button={true} component={Link} to="/faq">
            <ListItemText primary="FAQ" />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}

export default Sidebar;