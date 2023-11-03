import React, { useState } from 'react';
import { Container, Card, CardContent, Typography, CardActions, Button, Grid } from '@mui/material';


const Blogs = () => {
    const [blogPosts, setBlogPosts] = useState([
        { id: 1, title: 'Blog Post 1', content: 'This is the content of Blog Post 1', likes: 5 },
        { id: 2, title: 'Blog Post 2', content: 'This is the content of Blog Post 2', likes: 10 },
        { id: 3, title: 'Blog Post 3', content: 'This is the content of Blog Post 3', likes: 2 },
        // Add more blog posts here
      ]);
    
      const handleLike = (postId) => {
        const updatedPosts = blogPosts.map((post) => {
          if (post.id === postId) {
            return { ...post, likes: post.likes + 1 };
          }
          return post;
        });
    
        setBlogPosts(updatedPosts);
      };
    
      return (
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            {blogPosts.map((post) => (
              <Grid item xs={12} key={post.id}>
                <Card>
                  <CardContent>
                    <Typography variant="h5" gutterBottom>
                      {post.title}
                    </Typography>
                    <Typography variant="body1">
                      {post.content}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleLike(post.id)}
                    >
                      Like ({post.likes})
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      );
}

export default Blogs;