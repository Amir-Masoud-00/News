import React from 'react';
import { useParams , Outlet, Routes, Route, } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Box, Typography, TextField, Button, Container, Card, CardContent,Avatar,Collapse,List } from '@mui/material';
import data from '../../../data.json';
import useInitialState from '../../hooks/useInitialState'
import { TransitionGroup } from 'react-transition-group'
import Comment from './comments/comment'
import  AddComment  from './comments/addComment';

const Posts = () => {
  const { threadId } = useParams();
  
  const [posts, setPosts] = useState( data.posts.filter(post => post.threadId == threadId) );
  const [thread, setThread] = useState(data.threads.find(thread => thread.id == threadId))

 const { addComment,currentUser,comments} = useInitialState()

  return (
    <Container>
                      {/* {thread.title} <br />
                      {thread.content} */}
      <Box mt={10} sx={{backgroundColor: '#f5f3f5', textAlign:"right" , padding:"20px"}}>
        {posts.map((post) => (
          <Box key={post.id} mt={2} >
            <Typography variant="h6">{thread.title}</Typography>
            <Typography>{post.content}</Typography>
          </Box>
        ))}
      </Box>
        <Box sx={{backgroundColor: '#f5f3f5', textAlign:"right" , padding:"20px"}}>

                <List>
                    <TransitionGroup>
                        {comments.map((comment) => (
                            <Collapse key={comment.id}>
                                <Comment
                                    comment={comment}
                                  
                                />
                            </Collapse>
                        ))}
                    </TransitionGroup>
                </List>
                <AddComment addComment={addComment} currentUser={currentUser} />
      </Box>
    </Container>
  );
};

export default Posts;
