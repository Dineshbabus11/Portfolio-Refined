import React from 'react';
import './Header.scss';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import InboxIcon from '@mui/icons-material/MoveToInbox';

export const Header = () => {
  const menuItems = ['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'];
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        {menuItems.map((text, index) => (
          <ListItem key={text} disablePadding onClick={toggleDrawer(false)}>
            <ListItemButton>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>

  );

  return (
    <header>
      <div className="header-left">
        <h1>DB.</h1>
      </div>

      <nav className="header-right">
        {menuItems.slice(0, -1).map((item, index) => (
          <p key={index}>{item}</p>
        ))}
        <button>{menuItems[menuItems.length - 1]}</button>
      </nav>

      <div className="menu-drawer">
        <Button onClick={toggleDrawer(true)}>
          <MenuIcon />
        </Button>
        <Drawer
          open={open}
          onClose={toggleDrawer(false)}
          PaperProps={{
            sx: {
              backgroundColor: 'black',
              color: 'white',
            },
          }}
        >
          {DrawerList}
        </Drawer>
      </div>
    </header>
  );
};
