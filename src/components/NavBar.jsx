import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const pages = [
  { name: 'Catering', path: '/catering' },
  { name: 'Coffee Merch', path: '/coffee-merch' },
  { name: 'Press', path: '/press' },
  { name: 'About', path: '/about' },
  { name: 'Menu', path: '/menu' },
  { name: 'Photos', path: '/photos' },
];

export default function NavBar() {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Alita Cafe
        </Typography>
        <Box>
          {pages.map((page) => (
            <Button
              key={page.name}
              color="inherit"
              component={Link}
              to={page.path}
              sx={{ textTransform: 'none', mx: 1 }}
            >
              {page.name}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
