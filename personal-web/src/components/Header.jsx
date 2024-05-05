import React, { useContext } from 'react';
import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ThemeContext from './ThemeContext'; // Import the ThemeContext

const Header = () => {
  const navigate = useNavigate();
  const { darkMode, toggleDarkMode } = useContext(ThemeContext); // Use the theme context

  const handleNavigate = (path) => {
    navigate(path);
  };

  // Apply active styles to the button if it matches the selected route
  const activeStyle = {
    fontWeight: 'bold',
    backgroundColor: 'secondary.dark',
    color: 'common.white',
    boxShadow: '0 3px 6px rgba(0,0,0,0.2)'
  };

  const buttonStyle = {
    textTransform: 'none',
    fontSize: '16px',
    fontWeight: 'medium',
    color: 'grey.800',
    margin: '0 8px',
    borderRadius: '4px',
    '&:hover': {
      backgroundColor: 'secondary.light',
      color: 'common.white'
    },
    '@media (max-width: 900px)': {
      fontSize: '14px', // smaller font size
      margin: '4px 4px', // smaller margin
      padding: '8px 12px' // smaller padding
    }
  };

  return (
    <AppBar position="static" color="default" elevation={0} sx={{ backgroundColor: 'background.paper' }}>
      <Toolbar sx={{ justifyContent: 'space-between', padding: '0 30px' }}>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', width: '100%' }}>
          <Button
            onClick={() => handleNavigate('/about')}
            sx={{
              ...buttonStyle,
              ...(activeStyle)
            }}
          >
            About Me
          </Button>
          <Button
            onClick={() => handleNavigate('/projects')}
            sx={{
              ...buttonStyle,
              ...(activeStyle)
            }}
          >
            Projects
          </Button>
          <Button
            onClick={() => handleNavigate('/resume')}
            sx={{
              ...buttonStyle,
              ...(activeStyle)
            }}
          >
            Resume
          </Button>
          {/* Dark mode toggle button */}
          <Button onClick={toggleDarkMode} sx={{ ...buttonStyle, backgroundColor: darkMode ? 'primary.dark' : 'primary.light' }}>
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
