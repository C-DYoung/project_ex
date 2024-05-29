// main Home 부분, 상품 리스트들이 올라옴.
import { Grid } from "@mui/material";
import * as React from 'react';
import Box from "@mui/material/Box";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

async function MainHome() {
  const resp = await fetch('http://localhost:9999/product');
  const product = await resp.json();

  return (
    product.map((product: any) => {
      return (
        <Grid spacing={4}>
          <div key={product.id}>
            <Box
              sx={{
                width: "287px",
                height: "371px",
                gap: 2,

              }}>

              <Card
                sx={{
                  boxShadow: 0,
                }}>
                <CardActionArea>
                  <CardMedia
                    sx={{
                      width: "287px",
                      height: "287px"
                    }}
                    image="/ex_image.png"
                    title="productImage"
                  />
                  <CardContent
                    sx={{
                      height: "68px",
                      padding: "0px",
                      gap: "1px"
                    }}>
                    <Typography variant="body1" color="text.secondary">
                      {product.thema}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                      {product.name}
                    </Typography>
                    <Typography gutterBottom variant="h4" component="div">
                      {product.price}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Box>
          </div>
        </Grid>
      );
    })
  )
}

export default MainHome