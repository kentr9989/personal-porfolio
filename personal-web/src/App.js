import './App.css';
import { Container, Grid } from '@mui/material';
import Profile from './components/Profile';
import Resume from './components/Resume';
import Header from './components/Header';
import Projects from './components/Projects';
import About from './components/About';
import CssBaseline from '@mui/material/CssBaseline';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './components/ThemeContext'; // Import the ThemeProvider
function App() {
  return (
    <>
      <ThemeProvider>
        <CssBaseline />
        <Container
          sx={{
            width: '100vw',
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Grid container sx={{ height: '80vh', mt: 2 }}>
            <Grid
              item
              // sx={{ backgroundColor: 'blue' }}
              xs={12}
              sm={5}
              md={3}
              lg={3}
            >
              <Profile />
            </Grid>
            <Grid
              item
              xs
              sx={{
                '@media (max-width:500px)': {

                  mt: 8,
                },
              }}
            >
              <Header />
              {/* <Routers> */}
              <Routes>
                <Route path='/about' element={<About />}></Route>
                <Route path='/projects' element={<Projects />}></Route>
                <Route path='/resume' element={<Resume />}></Route>
              </Routes>
              {/* </Routers> */}

              {/* <Footer /> */}
            </Grid>
          </Grid>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
