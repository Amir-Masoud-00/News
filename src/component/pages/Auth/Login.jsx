import React, { useState } from 'react';
import { Box, TextField, Button, Container, Typography } from '@mui/material';

const Login = ({ setUser, data }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const user = data.users.find((user) => user.username === username && user.password === password);
    if (user) {
      setUser(user);
      alert('ورود موفقیت‌آمیز بود');
    } else {
      alert('نام کاربری یا رمز عبور اشتباه است');
    }
  };

  return (
    <Container>
      <Box mt={10} sx={{ backgroundColor: '#f5f3f5', padding: 2 }}>
        <Typography variant="h5">فرم ورود</Typography>
        <TextField
          label="نام کاربری"
          variant="outlined"
          fullWidth
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="رمز عبور"
          type="password"
          variant="outlined"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{ marginBottom: 2 }}
        />
        <Button variant="contained" color="primary" onClick={handleLogin}>
          ورود
        </Button>
      </Box>
    </Container>
  );
};

export default Login;
