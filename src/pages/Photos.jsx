import React from 'react';
import { Container, Typography } from '@mui/material';

export default function Photos() {
  const images = [
    { src: 'images/Alitacafe-49.jpg', alt: 'Owners Alejandro Ceballos and Paolo Maliksi' },
    { src: 'images/IMG_2046.jpg', alt: 'Retail at Alita Cafe' },
    { src: 'images/Alita31321-6.jpg', alt: 'Espresso in Alita cup on DE1CAFE' },
    { src: 'images/20210227_092313.jpg', alt: 'Alita Cafe' },
    { src: 'images/Alita31321-90.jpg', alt: 'Alita Cafe Menu' },
    { src: 'images/IMG_2056.jpg', alt: 'Plants & Lights at Alita Cafe' },
    { src: 'images/Alitacafe-8.jpg', alt: 'Owners Alejandro Ceballos and Paolo Maliksi. Black and White.' },
    { src: 'images/20210227_111140%2B%281%29.jpg', alt: 'Retail Shelves and Pastries at Alita Cafe' },
    { src: 'images/Alita%2BOutside-4.jpg', alt: 'Alita Cafe Storefront' },
    { src: 'images/IMG_3012.jpeg', alt: 'Regalia Coffee Beans' },
    { src: 'images/5R1A0013.JPG.jpeg', alt: 'Staff at Work in Alita Cafe' },
    { src: 'images/5R1A0109.JPG.jpeg', alt: 'Drinking Coldbrew at Alita Cafe' },
    { src: 'images/5R1A0114.JPG.jpeg', alt: 'Retail Items at Alita Cafe' },
    { src: 'images/188312685_219431669988234_7823705969801529492_n.jpg', alt: 'Social Media Photo' },
    { src: 'images/Alita31321-3.jpg', alt: 'Pulling Espresso Shot at Alita Cafe' },
    { src: 'images/Alita31321-4.jpg', alt: 'Tamping Espresso at Alita Cafe' },
    { src: 'images/Alita31321-14.jpg', alt: 'Succulent and Alita Coffee' },
    { src: 'images/Alita31321-13.jpg', alt: 'Pouring Milk Steamed on DE1CAFE' },
    { src: 'images/Alita31321-17.jpg', alt: 'Weighing Regalia Coffee Beans' },
    { src: 'images/Alita31321-21.jpg', alt: 'Making Drip Coffee at Alita Cafe' },
    { src: 'images/Alita31321-38.jpg', alt: 'Grinding Espresso Beans at Alita Cafe' },
    { src: 'images/Alita31321-41.jpg', alt: 'Alita Cafe Loyalty Cards' },
    { src: 'images/Alita31321-50.jpg', alt: 'Latte on DE1CAFE' },
    { src: 'images/191631958_222740059657395_6200634068506393164_n.jpg', alt: 'Social Media Photo' },
    { src: 'images/Alita31321-89.jpg', alt: 'Customer at Alita Cafe Counter' },
    { src: 'images/Alita31321-115.jpg', alt: 'Pouring Cold Brew at Alita Cafe' },
    { src: 'images/Alitabakingday-175.jpg', alt: 'Baking Day at Alita Cafe' },
    { src: 'images/195586895_229317738999627_3109050025785624309_n.jpg', alt: 'Social Media Photo' },
    { src: 'images/204893262_241093051155429_5304413555974749623_n.jpg', alt: 'Social Media Photo' },
    { src: 'images/210077248_246641540600580_7148677993500400689_n.jpg', alt: 'Social Media Photo' },
    { src: 'images/Alita+Interior+Decent+Machines.jpg', alt: 'Alita Interior Decent Machines' },
    { src: 'images/Alitabakingday-64.jpg', alt: 'Baking Day at Alita Cafe' },
    { src: 'images/8F3A0BDA-9529-4FD1-8F60-9CD624CEFA31.JPG', alt: 'Cinnamon roll' },
    { src: 'images/Doggie+froyo+event+-+2.PNG', alt: 'Doggie Fro-Yo by Alita' },
    { src: 'images/Alitabakingday-138_Original.jpg', alt: 'Pouring a Latte' },
    { src: 'images/51E18DB9-34F4-47B2-84C4-21ED4E86A1C4.JPG', alt: 'Alita Coffee Beans' },
    { src: 'images/IMG_8387.jpg', alt: 'Breakfast Menu' },
    { src: 'images/IMG_8289.JPG', alt: 'Brisket Sandwich' },
    { src: 'images/dfb1a34e-d8fc-4da9-bb5d-d665af667264/215137680_248951837036217_807615373892609284_n.jpg', alt: 'Social Media Photo' },
    { src: 'images/219544599_254898506441550_626234037586267001_n.jpg', alt: 'Social Media Photo' },
    { src: 'images/Alitabakingday-46-1.jpg', alt: 'Baking Day at Alita Cafe' },
    { src: 'images/201409953_233659261898808_7150703027902579745_n.jpg', alt: 'Social Media Photo' },
    { src: 'images/Alitabakingday-102.jpg', alt: 'Baking Day at Alita Cafe' },
    { src: 'images/221966297_259785139286220_1135010017410036443_n.jpg', alt: 'Social Media Photo' },
    { src: 'images/Alitabakingday-86-1.jpg', alt: 'Baking Day at Alita Cafe' },
    { src: 'images/220203578_256202709644463_4038275959676687645_n.jpg', alt: 'Social Media Photo' },
    { src: 'images/229091870_265236688741065_2144600204309991788_n.jpg', alt: 'Social Media Photo' },
    { src: 'images/Alitabakingday-108.jpg', alt: 'Baking Day at Alita Cafe' },
    { src: 'images/Alitabakingday-114.jpg', alt: 'Baking Day at Alita Cafe' },
    { src: 'images/Alitabakingday-148.jpg', alt: 'Baking Day at Alita Cafe' },
    { src: 'images/Alitabakingday-160.jpg', alt: 'Baking Day at Alita Cafe' },
  ];

  return (
    <div style={{
      background: '#183d21',
      minHeight: '100vh',
      padding: '0',
      fontFamily: 'serif',
    }}>
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography
          variant="h2"
          align="center"
          gutterBottom
          sx={{
            color: '#e6c97a',
            fontFamily: 'Georgia, Times, serif',
            fontWeight: 700,
            letterSpacing: 2,
            fontSize: { xs: '2.5rem', md: '3.5rem' },
            mb: 4,
          }}
        >
          Photo Gallery
        </Typography>
        <Typography
          variant="body1"
          paragraph
          align="center"
          sx={{
            color: '#fff',
            fontSize: '1.2rem',
            fontFamily: 'Georgia, Times, serif',
            mb: 6,
          }}
        >
          Explore moments from Alita Cafe!
        </Typography>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2.5rem',
          marginTop: '2rem',
          background: 'transparent',
        }}>
          {images.map((img, idx) => (
            <div key={idx} style={{
              background: 'transparent',
              borderRadius: 0,
              boxShadow: 'none',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '0',
            }}>
              <img
                src={img.src}
                alt={img.alt}
                style={{
                  width: '100%',
                  maxWidth: '600px',
                  height: 'auto',
                  objectFit: 'cover',
                  borderRadius: 0,
                  marginBottom: '1rem',
                  boxShadow: '0 2px 24px rgba(0,0,0,0.18)',
                  border: '4px solid #e6c97a',
                }}
                loading="lazy"
              />
              <Typography
                variant="caption"
                sx={{
                  color: '#e6c97a',
                  fontWeight: 500,
                  textAlign: 'center',
                  fontFamily: 'Georgia, Times, serif',
                  mb: 1,
                }}
              >
                {img.alt}
              </Typography>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
