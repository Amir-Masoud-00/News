import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import categorys from './src/component/pages/categorys';

const NotFound = () => {
  return (
    <Container>
      <Box mt={10} textAlign="center">
        <Typography variant="h1" component="h1" gutterBottom>
          404
        </Typography>
        <Typography variant="h4" component="h2" gutterBottom>
          صفحه‌ای که دنبال آن هستید، پیدا نشد
        </Typography>
        <Link  component={categorys} to="/">
        <Button variant="contained" color="primary" >
          بازگشت به صفحه اصلی
        </Button>
        </Link>
      </Box>
    </Container>
  );
};

export default NotFound;
