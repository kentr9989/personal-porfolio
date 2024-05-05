import React from 'react';
import { IconButton, Tooltip, Typography, Box, Button } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const CustomTimelineProfile = () => {
  return (
    <>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        padding: '18px', 
      }}>
        {/* Email */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '8px', // Tighter bottom margin
            padding: '8px', // Reduced padding
            backgroundColor: 'rgb(245, 239, 230)',
            borderRadius: '8px',
            boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.05)',
            '&:hover': {
              transform: 'translateY(-1px)', // More subtle hover effect
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }
          }}
        >
          <Tooltip title='Email'>
            <IconButton
              size='small'
              sx={{
                bgcolor: 'primary.dark',
                color: 'common.white',
                '&:hover': {
                  bgcolor: 'primary.main',
                }
              }}
            >
              <MailIcon />
            </IconButton>
          </Tooltip>
          <Typography
           
            sx={{
              fontSize: '10px',
              ml: 1,
              fontWeight: 'bold',
              letterSpacing: '0.1em',
              color: 'primary.dark',
            }}
          >
            petertr129@gmail.com
          </Typography>
        </Box>

        {/* Phone */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '8px',
            padding: '8px',
            backgroundColor: 'rgb(245, 239, 230)',
            
            borderRadius: '8px',
            '&:hover': {
              transform: 'translateY(-1px)',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }
          }}
        >
          <Tooltip title='Phone'>
            <IconButton
              size='small'
              sx={{
                bgcolor: 'error.main',
                color: 'common.white',
                '&:hover': {
                  bgcolor: 'error.dark',
                }
              }}
            >
              <PhoneIphoneIcon />
            </IconButton>
          </Tooltip>
          <Typography
            sx={{
              fontSize: '10px',
              ml: 1,
              fontWeight: 'bold',
              letterSpacing: '0.1em',
              color: 'error.dark',
            }}
          >
            0423019638
          </Typography>
        </Box>

        {/* LinkedIn and GitHub buttons */}
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          marginTop: '4px',
          padding: '8px',
          backgroundColor: '#ffffff',
          justifyContent: 'center',
          borderRadius: '8px',
        }}>
          <Button
            startIcon={<LinkedInIcon />}
            variant='contained'
            color='info'
            href='https://www.linkedin.com/in/peter-tran-b2b0012a6/'
            target='_blank'
            sx={{
              fontSize: '10px',
              mr: 1,
              padding: '4px 8px', // Smaller padding for a compact look
              borderRadius: '10px', // More subtle rounded corners
              fontWeight: 'bold',
              backgroundColor: 'info.main',
              '&:hover': {
                backgroundColor: 'info.dark',
              }
            }}
          >
            LinkedIn
          </Button>
          <Button
            startIcon={<GitHubIcon />}
            variant='contained'
            color='success'
            href='https://github.com/kentr9989?tab=repositories'
            target='_blank'
            sx={{
              fontSize: '10px',
              padding: '4px 8px',
              borderRadius: '10px',
              fontWeight: 'bold',
              backgroundColor: 'success.main',
              '&:hover': {
                backgroundColor: 'success.dark',
              }
            }}
          >
            GitHub
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default CustomTimelineProfile;
