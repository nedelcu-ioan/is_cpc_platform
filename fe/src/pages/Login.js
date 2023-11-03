import React, { useState } from 'react';
import { Button, Container, TextField, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
  
    const handleLogin = () => {
      console.log(email);
      console.log(password);
    };

    const handleRegisterRedirect = () => {
        navigate("/register");
    }
  
    return (
      <Container maxWidth="sm">
        <Box mt={4}>
          <Typography variant="h4" component="h1" align="center">
            Login
          </Typography>
          <form>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleLogin}
            >
              Login
            </Button>
            <Button
              color="primary"
              fullWidth
              onClick={handleRegisterRedirect}
            >
              Don't have an account? Sign up here
            </Button>
          </form>
        </Box>
      </Container>
    );
}

export default Login;