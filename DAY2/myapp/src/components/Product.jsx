import { Button, Card, CardActions, CardContent, CardMedia, Grid, Grid2, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const Product = () => {
    var[product,setProduct]=useState([])
    axios.get("https://fakestoreapi.com/products")
    .then((response)=> {
        console.log(response.data)
        setProduct(response.data)
        })

     return(
    <div>
        <Grid container spacing={2}>
            {product.map((val)=>{
                return(
            <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345 }}>
    <CardMedia
      sx={{ height: 140 }}
      image={val.image}
    //   image="/static/images/cards/contemplative-reptile.jpg"
    //   title="green iguana"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {val.title}
      </Typography>
      <title>Products</title>
      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        Lizards are a widespread group of squamate reptiles, with over 6,000
        species, ranging across all continents except Antarctica
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Share</Button>
      <Button size="small">Learn More</Button>
    </CardActions>
  </Card>

        </Grid>
                )})}
        </Grid>
        </div>
  )
}

export default Product