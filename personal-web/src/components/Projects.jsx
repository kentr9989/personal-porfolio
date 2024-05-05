import React, { useContext } from 'react';
import { Paper, Button, Typography, Box, Link, useTheme } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import ThemeContext from './ThemeContext'; // Make sure you have ThemeContext set up correctly

const Projects = () => {
  const theme = useTheme();
  const { darkMode } = useContext(ThemeContext); // Using ThemeContext to access current theme mode

  const projects = [
    {
      name: 'Gaming hub',
      description:
        'A straightforward project showcasing a variety of games accessible across all platforms',
      img: '../assets/project1.png',
      repoUrl: 'https://game-hub-display-nine.vercel.app/',
    },
    {
      name: 'Prestos',
      description: 'An alternative to slides.com',
      img: '../assets/project2.png',
      repoUrl: '',
    },
  ];

  return (
    <Carousel
      animation='slide'
      sx={{
        maxWidth: 600,
        margin: 'auto',
        marginTop: 2,
        borderRadius: 2,
      }}
    >
      {projects.map((project, i) => (
        <Item key={i} project={project} darkMode={darkMode} />
      ))}
    </Carousel>
  );
};

const Item = ({ project, darkMode }) => {
  return (
    <Paper
      square={true}
      sx={{
        padding: 1,
        height: 450,
        backgroundColor: darkMode ? 'lightgrey' : 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: 'black',
        borderRadius: 2,
        border: '1px solid',
        borderColor: darkMode ? 'grey' : 'rgba(0, 0, 0, 0.23)',
        boxShadow: 3,
        transition: 'all 0.3s ease',
        '&:hover': {
          boxShadow: '0 6px 10px rgba(0,0,0,0.25)', // Enhance shadow on hover
          transform: 'translateY(-3px)', // Slight lift effect on hover
        },
      }}
      elevation={6}
    >
      <Typography variant='h5' component='h2' sx={{ marginBottom: 1 }}>
        {project.name}
      </Typography>
      <img
        src={project.img}
        alt={project.name}
        style={{ width: '70%', height: '70%', objectFit: 'cover' }}
      />
      <Typography variant='body2' sx={{ marginTop: 2 }}>
        {project.description}
      </Typography>
      <Link href={project.repoUrl} target='_blank' rel='noopener noreferrer'>
        <Button variant='contained'>View the project</Button>
      </Link>
    </Paper>
  );
};

export default Projects;
