import React from 'react';
import { Container, Typography, Grid, Paper, Box, Button } from '@mui/material';

const Profile = () => {
    const user = {
      username: 'YourUsername',
      email: 'your@email.com',
      totalPoints: 1000, // Replace with the user's actual points
    };
    
    return (
      <Container maxWidth="md">
        <Paper elevation={3}>
          <Box p={4}>
            <Typography variant="h4" align="center" gutterBottom>
              User Profile
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Typography variant="h6" gutterBottom>
                  Username:
                </Typography>
                <Typography variant="body1">{user.username}</Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="h6" gutterBottom>
                  Email:
                </Typography>
                <Typography variant="body1">{user.email}</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h6" gutterBottom>
                  Total Points:
                </Typography>
                <Typography variant="body1">{user.totalPoints} points</Typography>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Container>
    );
}

export default Profile;