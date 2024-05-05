import React from 'react';
import { Box } from '@mui/material';

const Resume = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        padding: 2,
        overflow: 'hidden',
        height: '100vh',
      }}
    >
      <img
        src='/peter-tran-cv.png'
        alt='Peter Tran Resume'
        style={{
          maxWidth: '100%',
          maxHeight: '100vh',
          objectFit: 'contain',
        }}
      />
    </Box>
  );
};

export default Resume;
