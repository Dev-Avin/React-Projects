import React from 'react';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import { mainNavBarItems, subNavBarItems } from './consts/navBArListItems';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <Drawer
      sx={{
        width: 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 240,
          boxSizing: 'border-box',
          backgroundColor: '#101f33',
          color: 'aquamarine',
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar />
      <div className="container center">
        <h2>
          <HomeIcon />Home
        </h2>
      </div>
      <Divider />
      <h2 className="container center">Build</h2>
      <Divider />
      <List>
        {mainNavBarItems.map((text) => (
          <ListItem key={text.id} disablePadding>
            <ListItemButton onClick={() => navigate(text.route)}>
              <ListItemIcon sx={{ color: 'antiquewhite' }}>{text.icon}</ListItemIcon>
              <ListItemText primary={text.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <h3 className="container center">Quality</h3>
      <Divider />
      <List>
        {subNavBarItems.map((text) => (
          <ListItem key={text.id} disablePadding>
            <ListItemButton onClick={() => navigate(text.route)}>
              <ListItemIcon sx={{ color: 'antiquewhite' }}>{text.icon}</ListItemIcon>
              <ListItemText primary={text.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Drawer>
  );
};

export default Navbar;
