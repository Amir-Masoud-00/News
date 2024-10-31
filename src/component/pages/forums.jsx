import React from 'react';
import { Link, useParams,Outlet } from 'react-router-dom';
import { Box, Typography, Container, Grid,Button } from '@mui/material';
import { useState, useEffect } from 'react';
import data from '../../../data.json';


const Forums = () => {
  const { categoryId } = useParams();
  

  const forums = data.forums.filter(forum => forum.categoryId == categoryId);
  return (
    <>
    <Container>
      <Grid 
      container
      direction="row-reverse"
      sx={{
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
      >
        <Box  mt={2}>
          {forums.map(forum => (
            <Link key={forum.id} to={`/forum/${forum.id}`}>
              <Button variant="contained" color="primary" sx={{ margin: '10px' }}>{forum.title}</Button>
            </Link>
          ))} 
        </Box>
      </Grid>
      
    </Container>
    <Outlet />
    </>
  );
};

export default Forums;
