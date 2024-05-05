import React from 'react';
import { Typography, Box } from '@mui/material';
import CustomTimelineProfile from './CustomTimelineProfile';

const Profile = () => {
  return (
    <Box
      sx={{
        // backgroundColor: 'white',
        borderRadius: '10',
        width: '100%',
        height: '85vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box className='profile_name' sx={{ p: 2, pl: 3 }}>
        <Typography
          className='name'
          sx={{
            lineHeight: '1rem',
            fontSize: '2rem',
            mb: 1.5,
            fontWeight: '600',
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            letterSpacing: '0.0075em',
            textShadow: '2px 2px 8px rgba(0, 0, 0, 0.2)',
          }}
        >
          Peter Tran
        </Typography>
        <Typography
          className='uni'
          sx={{
            lineHeight: '10px',
            fontSize: '0.8rem',
            fontWeight: 'bold',
            color: '#777',
          }}
        >
          UNSW
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '400px',
          width: '100%',
          alignItem: 'center',
        }}
      >
        <Box
          className='profile_picture'
          sx={{
            width: '200px',
            height: '250px',
            pl: 3,
            '@media (max-width:900px)': {
              width: '250px', // Reduced width
              height: '180px', // Reduced height
            },
          }}
        >
          {/** // eslint-disable-next-line */}
          <img
            src={require('../assets/profile-image.png')}
            // eslint-disable-next-line
            alt='my profile picture'
            style={{
              margin: 0,
              padding: 0,
              border: 0,
              outline: 0,

              width: '100%',
              height: '100%',
              borderRadius: 10,
            }}
          ></img>
        </Box>
        <Box
          className='profile_information'
          sx={{
            flexGrow: 1,
            pr: 0,
            mb: 2,
            '@media (max-width:900px)': {
              pr: 1,
              mt: 2,
            },
            '@media (max-width:500px)': {
              pr: 2,
              mt: -2,
            },
            '@media (min-width:1200px)': {
              pr: 4,
            },
            '@media (max-width:400px)': {
              mt: 0.5,
              pl: 0.5,
              ml: 0.5,
            },
          }}
        >
          <CustomTimelineProfile sx={{ pt: 10 }} />
          {/* <Button>my button</Button> */}
        </Box>
      </Box>
    </Box>
  );
};

export default Profile;
