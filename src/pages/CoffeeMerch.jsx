import React from "react";
import { Container, Typography, Grid, Paper, Button, Divider, Box, Select, MenuItem, FormControl, InputLabel } from "@mui/material";

const products = [
  {
    title: "Alita Blend",
    image: "images/Alita31321-38.jpg",
    price: "from $21.50",
    options: ["300g", "5lbs"],
    link: "/store/p/alita-blend-300g"
  },
  {
    title: "Alita Drip - 300g",
    image: "images/Alitabakingday-99.jpg",
    price: "$21.50",
    options: [],
    link: "/store/p/alita-drip-300g"
  },
  {
    title: "XL Tote",
    image: "images/916B65B3-AC06-4DAE-B85B-5B8CBF3C1984.jpg",
    price: "$35.00",
    options: [],
    link: "/store/p/tote"
  }
];

export default function CoffeeMerch() {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h3" align="center" gutterBottom>Alita Coffee & Merch</Typography>
      <Divider sx={{ my: 3 }} />
      <Grid container spacing={3}>
        {products.map((product, idx) => (
          <Grid item xs={12} sm={6} md={4} key={idx}>
            <Paper elevation={3} sx={{ p: 2, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Box sx={{ width: '100%', mb: 2, display: 'flex', justifyContent: 'center' }}>
                <img src={product.image} alt={product.title} style={{ maxWidth: '100%', maxHeight: 180, borderRadius: 8 }} />
              </Box>
              <Typography variant="h6" align="center">{product.title}</Typography>
              <Typography variant="subtitle1" color="primary" align="center" sx={{ mb: 1 }}>{product.price}</Typography>
              {product.options.length > 0 && (
                <FormControl fullWidth sx={{ mb: 2 }}>
                  <InputLabel>Select Size</InputLabel>
                  <Select defaultValue="" label="Select Size">
                    <MenuItem value="">Select Size</MenuItem>
                    {product.options.map((opt, i) => (
                      <MenuItem value={opt} key={i}>{opt}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              )}
              <Button variant="contained" color="primary" href={product.link} sx={{ mt: 'auto', width: '100%' }}>
                View Product
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
