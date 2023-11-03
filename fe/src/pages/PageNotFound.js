import React from 'react';
import { Container, Typography, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom'; 

const PageNotFound = () => {
  return (
    <Container maxWidth="md">
      <Grid container spacing={2} justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
        <Grid item xs={12}>
          <Typography variant="h4" align="center" gutterBottom>
            Page Not Found (404)
          </Typography>
          <Typography variant="body1" align="center" paragraph>
            The page you are looking for does not exist.
          </Typography>
        </Grid>

        <Grid 
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            xs={12}
        >
          <Button
            component={Link}
            to="/"
            variant="contained"
            color="primary"
          >
            Go to Homepage
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PageNotFound;
