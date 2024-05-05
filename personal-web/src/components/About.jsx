import React from 'react';
import { Typography, Container, Box } from '@mui/material';

const About = () => {
  return (
    <Container maxWidth='md' sx={{ mt: 3, mb: 8 }}>
      <Box
        sx={{
          padding: 4,
          borderRadius: 2,
          //   backgroundColor: '#f3f6f9',
          boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
          '&:hover': {
            boxShadow: '0 6px 10px rgba(0,0,0,0.2)',
          },
        }}
      >
        <Typography
          variant='h4'
          component='h1'
          gutterBottom
          sx={{
            '@media (max-width: 930px)': {
              fontSize: '1rem',
              fontWeight: 'bold', // Smaller font size for the whole grid
            },
          }}
        >
          Hi! I'm Peter :)
        </Typography>
        <Typography
          variant='h6'
          sx={{
            mt: 2,
            mb: 1,
            '@media (max-width: 930px)': {
              fontSize: '0.8rem', // Smaller font size for the whole grid
            },
          }}
        >
          I'm a fourth-year student studying Computer Science at the University
          of New South Wales.
        </Typography>
        <Typography
          variant='h6'
          sx={{
            mb: 1,
            '@media (max-width: 930px)': {
              fontSize: '0.8rem', // Smaller font size for the whole grid
            },
          }}
        >
          I also have a background in Economics and Finance as I graduated with
          a degree in Business from RMIT University in 2016.
        </Typography>
        <Typography
          variant='h6'
          sx={{
            mb: 1,
            '@media (max-width: 930px)': {
              fontSize: '0.8rem', // Smaller font size for the whole grid
            },
          }}
        >
          Welcome to my website! ^^
        </Typography>
      </Box>
    </Container>
  );
};

export default About;
