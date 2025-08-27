import React from 'react';
import { Container, Typography } from '@mui/material';

export default function About() {
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Typography variant="h3" align="center" gutterBottom>About the Owners</Typography>
      <img
        src="https://images.squarespace-cdn.com/content/v1/5e80f3ab8b78ee2864054d1b/1614387554802-H15D23DJ9QCYRDWCIX18/Paolo+and+Alejandro"
        alt="Paolo and Alejandro"
        style={{ width: '100%', maxWidth: 500, display: 'block', margin: '2rem auto', borderRadius: 16 }}
      />
      <Typography variant="body1" paragraph align="center">
        Co-founders Alejandro Ceballos and Paolo Maliksi welcome you to Alita Cafe!
      </Typography>
      <Typography variant="body1" paragraph>
        <strong>Alita</strong> comes from the nickname Alejandro grew up calling his “abuela” (grandmother in Spanish). The memories of being raised in her kitchen, along with the value of family, are the inspiration behind providing a warm and inviting space to share the owners’ passion for hospitality.
      </Typography>
      <Typography variant="body1" paragraph>
        Paolo and Alejandro’s friendship began when they were both pursuing careers in classical music. While completing their studies, they both worked in the coffee industry and quickly became enamored with the sense of community it created, the small farms behind each product, as well as the constant innovation.
      </Typography>
      <Typography variant="body1" paragraph>
        Alita is the culmination of both Alejandro and Paolo’s years of experience and vision for their future. This cafe is the initial realization of a dream still in the process of cultivating its character, and we are excited to have our customers be a part of its growth.
      </Typography>
      <Typography variant="body1" paragraph align="center">
        Thank you for your support!
      </Typography>
    </Container>
  );
}
