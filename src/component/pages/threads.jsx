import React from 'react';
import { useParams , Outlet, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Box, Typography, TextField, Button, Container } from '@mui/material';
import data from '../../../data.json';

const Threads = () => {
  const { forumId } = useParams();
  const threads = data.threads.filter(thread => thread.forumId == forumId);
  
  return (
    <Container>
      <Box mt={5} sx={{ textAlign:"right" , textDecoration:"none"}}>
        {threads.map((thread) => (
          <Box key={thread.id} mt={2} >
            <Link to={`/thread/${thread.id}`} style={{ textDecoration: 'none' }}>
            <Typography  variant="h6" >{thread.title}</Typography>
            
            </Link>
          </Box>
        ))}
      </Box>
      <Outlet/>
    </Container>
  );
};

export default Threads;
