import React from 'react';
import {
  Container,
  Grid,
  Typography,
  Button,
  Card,
  CardContent,
} from '@mui/material';

const Home = () => {
    return (
        <Container maxWidth="lg">
        <Grid container spacing={3}>
            <Grid item mt={12} xs={12}>
            <Typography variant="h4" align="center" gutterBottom>
                Competitive Programming Platform
            </Typography>
            </Grid>
            <Grid item xs={6}>
            <Card>
                <CardContent>
                <Typography variant="h5" gutterBottom>
                    Practice Problems
                </Typography>
                <Typography variant="body1">
                    Sharpen your coding skills by solving challenging problems.
                </Typography>
                <Button variant="contained" color="primary">
                    Start Practicing
                </Button>
                </CardContent>
            </Card>
            </Grid>
            <Grid item xs={6}>
            <Card>
                <CardContent>
                <Typography variant="h5" gutterBottom>
                    Blogs
                </Typography>
                <Typography variant="body1">
                    Learn from our community editorials written by the best competitors.
                </Typography>
                <Button variant="contained" color="secondary">
                    Blogs
                </Button>
                </CardContent>
            </Card>
            </Grid>
        </Grid>
        </Container>
    );
}

export default Home;