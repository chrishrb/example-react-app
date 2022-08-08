import { Alert, AppBar, createTheme, Paper, ThemeProvider, Toolbar, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import React, { useState } from 'react';
import FileUpload from "./components/FileUpload"
import ViewImage from "./components/ViewImage"
import LoadingCircle from "./components/LoadingCircle"
import { predict } from "./api/mock"

function App() {
  const mdTheme = createTheme();

  const [isLoading, setIsLoading] = useState();
  const [errorMessage, setErrorMessage] = useState();
  const [imageUrl, setImgUrl] = useState();
  const [prediction, setPrediction] = useState();

  const onSubmit = (e) => {
    e.preventDefault();
    setErrorMessage(null);

    // Files are stored here
    const file = e.target[0].files[0];
    console.log(file)

    if (!file) {
      setPrediction(null);
      setErrorMessage("Choose image for upload first..")
      return
    }

    // Get animal and url from api call
    setIsLoading(true);
    predict(file).then(e => {
      // Set your image url
      setIsLoading(false);
      setImgUrl(e.image_url);

      // set animal
      if (e.animal === "dog") {
        setPrediction("dog 🐶");
      } else if (e.animal === "cat") {
        setPrediction("cat 🐱");
      } else {
        setPrediction(null);
        setErrorMessage("Something went wrong!")
      }
    }).catch(e => {
      setIsLoading(false);
      setPrediction(null);
      // TODO: maybe fix that
      setErrorMessage(e.toString());
    });
  }

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <AppBar position="absolute">
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            <Typography
              component="h1"
              variant="h5"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Cat or Dog?
            </Typography>
          </Toolbar>
        </AppBar>

      </Box>
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: '100vh',
          overflow: 'auto',
        }}
      >
        <Toolbar />
        {errorMessage &&
          <Alert severity="error">{errorMessage}</Alert>
        }
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Paper
            sx={{
              p: 3,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Typography fontSize={22}>Upload a file and see what happens.. 😎</Typography>
          </Paper>
        </Container>

        {isLoading &&
          <LoadingCircle />
        }
        {imageUrl && prediction && !isLoading &&
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Paper
              sx={{
                p: 3,
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <ViewImage imageUrl={imageUrl} prediction={prediction} />
            </Paper>
          </Container>
        }

        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Paper
            sx={{
              p: 3,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <FileUpload onSubmit={onSubmit} />
          </Paper>
        </Container>

      </Box>
    </ThemeProvider>
  );
}

export default App;
