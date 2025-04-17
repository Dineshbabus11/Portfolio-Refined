import React from 'react';
import './Header.scss';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import SendIcon from '@mui/icons-material/Send';


export const Header = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const handleNavigation = (section) => {
    const el = document.getElementById(section.toLowerCase());
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setOpen(false);
  };

  const sections = ['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'];

  const DrawerList = (
    <Box
      sx={{
        width: 200,
        background: 'black',
        height: '100%',
        fontFamily: 'Poppins',
        backdropFilter: 'blur(8px)'
      }}
      role="presentation"
    >
      <List>
        {sections.map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={() => handleNavigation(text)}>
              <ListItemText
                primary={text}
                primaryTypographyProps={{
                  fontFamily: 'Poppins',
                  color: 'white',
                  textTransform: 'capitalize',
                  sx: {
                    transition: 'color 0.3s ease,transform 0.3s ease',
                    filter: 'none',
                    '&:hover': {
                      color: '#ff3838',
                      transform: 'scale(1.05)'
                    }
                  }
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}

        <Button variant="contained" endIcon={<SendIcon />} sx={{marginLeft:'10px',fontFamily: 'Poppins',marginTop:'10px',background:'#ff3838',transition:'color 0.3s ease',
          '&:hover':{
            color:'#ff3838',
            background:'black'
          }
        }} href='https://www.linkedin.com/in/dinesh-babu-s/'>
          Contact
        </Button>
      </List>
    </Box>
  );

  return (
    <header>
      <div className="header-left">
        <h1>DB.</h1>
      </div>

      <nav className="header-right">
        <p onClick={() => handleNavigation('Home')}>Home</p>
        <p onClick={() => handleNavigation('About')}>About</p>
        <p onClick={() => handleNavigation('Skills')}>Skills</p>
        <p onClick={() => handleNavigation('Experience')}>Experience</p>
        <p onClick={() => handleNavigation('Projects')}>Projects</p>
        <button onClick={() => handleNavigation('Contact')}>Contact</button>
      </nav>

      <div className="menu-drawer">
        <Button aria-label="open drawer" onClick={toggleDrawer(true)}>
          <MenuIcon sx={{ color: '#ff3838' }} />
        </Button>
        <Drawer open={open} onClose={toggleDrawer(false)}>
          {DrawerList}
        </Drawer>
      </div>
    </header>
  );
};
