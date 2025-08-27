
import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Divider,
  Box,
  Link,
} from '@mui/material';

const menuSections = [
  {
    title: 'Seasonal',
    items: [
      'Ice Cream: Vanilla Bean, Coffee, Chocolate, Matcha',
      'Matcha Lemonade',
      'Pecan Pumpkin Muffins',
      'Ginger Molasses Cookies',
      'Cinnamon Rolls',
    ],
  },
  {
    title: 'Made-to-Order Goodies',
    items: [
      'Bacon*, Egg, & Cheese on a Biscuit & Sriracha Garlic Aioli',
      'Yogurt Parfait with Homemade Jam & Granola',
      'Oatmeal with Fruit & Nut Mix',
      'Focaccia: Plain, Everything Bagel Seasoning',
      '*pastrami option',
    ],
  },
  {
    title: 'Weekend Specials',
    items: [
      'Pulled Brisket Sandwich with Coffee Stout Gravy, Coleslaw, Pickles or Pickled Jalapeños',
    ],
  },
  {
    title: 'Coffee',
    items: [
      'Drip',
      'Cold Brew',
      'Espresso',
      'Americano',
      'Macchiato',
      'Cortado',
      'Cappuccino',
      'Latte',
    ],
  },
  {
    title: 'Pastries Baked In-House',
    items: [
      'Croissants: Plain, Almond, Chocolate',
      'Cookies: Chocolate Chip',
      'Biscuits: Plain, Colombian Chorizo & Cheddar, Gluten-free',
      'Vegan Gluten-Free Brownie',
      'Banana Bread',
      'Honey Cashew Pecan Granola',
    ],
  },
  {
    title: 'Tea',
    items: [
      'Loose Leaf',
      'Iced',
      'Matcha',
      'Chai',
    ],
  },
  {
    title: 'Bottled Beverages',
    items: [
      'Poland Spring',
      'Pellegrino',
    ],
  },
];

const footerInfo = [
  {
    title: 'Location',
    content: (
      <Link href="https://www.google.com/maps/place/Alita+Cafe/@40.7120966,-73.9413597,15z/data=!4m5!3m4!1s0x0:0xf4831962c089f472!8m2!3d40.7120966!4d-73.9413597" target="_blank" underline="hover">
        797 Grand Street<br />Brooklyn, NY 11211
      </Link>
    ),
  },
  {
    title: 'Hours',
    content: (
      <>
        Monday — Friday: 7am — 2pm<br />
        Saturday & Sunday: 8am — 3pm
      </>
    ),
  },
  {
    title: 'Contact',
    content: (
      <>
        <Link href="mailto:drink@alitacafe.com" underline="hover">drink@alitacafe.com</Link><br />
        <Link href="tel:9293970002" underline="hover">(929) 397-0002</Link>
      </>
    ),
  },
];

export default function Menu() {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h3" align="center" gutterBottom>Menu</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
        <img
          src="/images/Alitabakingday-156%2B%281%29.jpg"
          alt="Display case with biscuits, croissants, and other baked goods"
          style={{ maxWidth: '100%', borderRadius: 12, boxShadow: '0 2px 16px rgba(0,0,0,0.08)' }}
        />
      </Box>
      <Grid container spacing={3}>
        {menuSections.map((section) => (
          <Grid item xs={12} sm={6} md={4} key={section.title}>
            <Card elevation={2} sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h6" color="primary" gutterBottom>
                  {section.title}
                </Typography>
                <Divider sx={{ mb: 1 }} />
                <ul style={{ paddingLeft: 18, margin: 0 }}>
                  {section.items.map((item, idx) => (
                    <li key={idx}>
                      <Typography variant="body2" component="span">{item}</Typography>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ mt: 6 }}>
        <Divider sx={{ mb: 3 }} />
        <Grid container spacing={3} justifyContent="center">
          {footerInfo.map((info) => (
            <Grid item xs={12} sm={4} key={info.title}>
              <Typography variant="subtitle1" align="center" color="text.secondary" gutterBottom>
                {info.title}
              </Typography>
              <Typography variant="body2" align="center" component="div">
                {info.content}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}


