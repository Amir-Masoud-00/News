import React, { useState } from 'react';
import { Box, TextField, Button, Container, Typography } from '@mui/material';

const Register = ({ setUser, data }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    const newUser = { id: Date.now(), username, password };
    data.users = [...data.users, newUser];
    setUser(newUser);
    alert('ثبت‌نام موفقیت‌آمیز بود');
  };

  return (
    <Container>
      <Box mt={10} sx={{backgroundColor: '#f5f3f5', padding: 2}}>
        <Typography variant="h5">فرم ثبت‌نام</Typography>
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
        <Button variant="contained" color="primary" onClick={handleRegister}>
          ثبت‌نام
        </Button>
      </Box>
    </Container>
  );
};

export default Register;
