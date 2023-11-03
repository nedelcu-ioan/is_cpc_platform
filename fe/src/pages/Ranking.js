import React from 'react';
import { Container, Typography, Card, CardContent, Grid, List, ListItem, ListItemText, Paper } from '@mui/material';

const Ranking = () => {
    const bestRankings = [
        { username: 'User1', rank: 1, points: 1200 },
        { username: 'User2', rank: 2, points: 1100 },
        { username: 'User3', rank: 3, points: 1050 },
        { username: 'User4', rank: 4, points: 950 },
        { username: 'User5', rank: 5, points: 900 },
      ];
    
      const customRankings = [
        { username: 'CustomUser1', rank: 6, points: 850 },
        { username: 'CustomUser2', rank: 7, points: 800 },
        { username: 'CustomUser3', rank: 8, points: 750 },
        { username: 'CustomUser4', rank: 9, points: 700 },
        { username: 'CustomUser5', rank: 10, points: 650 },
      ];
    
      return (
        <Container maxWidth="lg">
          <Paper elevation={3}>
            <div style={{ padding: '16px' }}>
              <Typography variant="h4" align="center" gutterBottom>
                User Ranking
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={6}>
                  <Card>
                    <CardContent>
                      <Typography variant="h5" gutterBottom>
                        Best 5 Rankings
                      </Typography>
                      <List>
                        {bestRankings.slice(0, 5).map((user) => (
                          <ListItem key={user.rank}>
                            <ListItemText
                              primary={`Rank ${user.rank}: ${user.username}`}
                              secondary={`Total Points: ${user.points}`}
                            />
                          </ListItem>
                        ))}
                      </List>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={6}>
                  <Card>
                    <CardContent>
                      <Typography variant="h5" gutterBottom>
                        Custom Rankings
                      </Typography>
                      <List>
                        {customRankings.map((user) => (
                          <ListItem key={user.rank}>
                            <ListItemText
                              primary={`Rank ${user.rank}: ${user.username}`}
                              secondary={`Total Points: ${user.points}`}
                            />
                          </ListItem>
                        ))}
                      </List>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </div>
          </Paper>
        </Container>
      );
}

export default Ranking;