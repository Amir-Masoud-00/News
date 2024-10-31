import React, { useState, useEffect } from 'react';
import { Link,Outlet } from 'react-router-dom';
import { Box, Button, Container, Grid } from '@mui/material';
import data from '../../../data.json';
import LoginIcon from '@mui/icons-material/Login';
import HomeIcon from '@mui/icons-material/Home';

const categorys = () => {
  
  return (
    <>
    <Container>
      <Grid 
        container
        spacing={2}
        direction="row-reverse"
        sx={{
          backgroundColor: '#C6C5B9',
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
        >
        <Grid item xs={5} md={8} container direction="row-reverse"
        >
         
            <Box>
              {data.categorys.map(category => (
                <Link key={category.id} to={`/category/${category.id}`}>
                  <Button variant="contained" color="primary" sx={{ margin: '10px' }}>
                    {category.title}
                  </Button>
                </Link>
              ))}
            </Box>
        
      </Grid>
        <Grid item xs={6} md={4}>
          
            <Link>
              <LoginIcon/>
            </Link>
            <Link to={"/"}>
              <HomeIcon/>
            </Link>
         
        </Grid>
      </Grid>
    </Container>
    <Outlet/>
    </>
  );
};

export default categorys;
