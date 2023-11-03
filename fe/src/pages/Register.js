import React, { useState }from "react";
import { Button, Container, TextField, Typography, Box } from '@mui/material';


const Register = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleRegister = () => {
        console.log(firstName);
        console.log(lastName);
        console.log(email);
        console.log(password);
    };
  
    return (
      <Container maxWidth="sm">
        <Box mt={4}>
          <Typography variant="h4" component="h1" align="center">
            Register
          </Typography>
          <form>
            <TextField
              label="First Name"
              variant="outlined"
              fullWidth
              margin="normal"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <TextField
              label="Last Name"
              variant="outlined"
              fullWidth
              margin="normal"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <TextField
              label="Email"
              type="email"
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
              onClick={handleRegister}
            >
              Register
            </Button>
          </form>
        </Box>
      </Container>
    );
}

export default Register;