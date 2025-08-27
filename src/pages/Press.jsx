import React from 'react';
import { Container, Typography } from '@mui/material';

export default function Press() {
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Typography variant="h3" align="center" gutterBottom>Alita in the News</Typography>
      <Typography variant="body1" paragraph align="center">
        Here are some recent articles and features about Alita Cafe:
      </Typography>
      {/* Add actual press links and excerpts here if available */}
      <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 4 }}>
        (Press content coming soon. If you have a link or excerpt, let us know!)
      </Typography>
    </Container>
  );
}
