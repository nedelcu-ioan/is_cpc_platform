import React, { useState } from 'react';
import { Container, Card, CardContent, Button, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Problems = () => {
    const [problems, setProblems] = useState([
        { id: 1, title: 'Problem 1' },
        { id: 2, title: 'Problem 2' },
        { id: 3, title: 'Problem 3' },
        // Add more problems here
      ]);
      const navigate = useNavigate();
    
      const handleSolve = (problemId) => {
        navigate(`/problem_statement_view/${problemId}`)
        //console.log(`Solving problem ${problemId}`);
      };
    
      return (
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            {problems.map((problem) => (
              <Grid item xs={12} key={problem.id}>
                <Card>
                  <CardContent>
                    <Typography variant="h5" gutterBottom>
                      {problem.title}
                    </Typography>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleSolve(problem.id)}
                    >
                      Solve
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      );
}

export default Problems;