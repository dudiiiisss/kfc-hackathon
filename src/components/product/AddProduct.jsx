import { Box, Button, TableBody, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useProducts } from '../../contexts/ProductContextProvider';
import CategorySelect from './CategorySelect';
// import { hover } from "@testing-library/user-event/dist/hover";
// import { WidthNormal } from "@mui/icons-material";

const AddProduct = () => {
  const [product, setProduct] = useState({
    title: '',
    pic1: '',
    desc: '',
    price: 0,
    category: '',
  });

  const { addProduct } = useProducts();

  const handleInp = (e) => {
    if (e.target.name === 'price') {
      let obj = {
        ...product,
        [e.target.name]: Number(e.target.value),
      };
      setProduct(obj);
    } else {
      let obj = {
        ...product,
        [e.target.name]: e.target.value,
      };
      setProduct(obj);
    }
  };

  return (
    <Box sx={{ paddingBottom: '3%' }}>
      <Typography
        sx={{
          paddingTop: '2%',
          color: 'white',
          WebkitTextStroke: '3px black',
          fontWeight: '900',
          fontSize: '44px',
        }}
        variant="h4"
        align="center">
        ADMIN PAGE
      </Typography>
      <Box
        sx={{
          width: '60vw',
          margin: '10px auto',
          backgroundColor: 'red',
          padding: '5% 5%',
          boxShadow: '0px 0px 21px 15px rgba(65, 40, 40, 0.2)',
        }}>
        <TextField
          sx={{
            backgroundColor: 'white',
            borderRadius: '5px',
            marginBottom: '20px',
            boxShadow: '0px 0px 30px 32px rgba(166, 212, 48, 0.2)',
            boxShadow: '0px 0px 7px 9px rgba(255, 67, 0, 0.2) inset',
          }}
          fullWidth
          onChange={handleInp}
          name="title"
          label="title"
          variant="outlined"
        />
        <TextField
          sx={{
            backgroundColor: 'white',
            borderRadius: '5px',
            marginBottom: '20px',
            boxShadow: '0px 0px 30px 32px rgba(166, 212, 48, 0.2)',
            boxShadow: '0px 0px 7px 9px rgba(255, 67, 0, 0.2) inset',
          }}
          fullWidth
          onChange={handleInp}
          name="pic1"
          label="pic1"
          variant="outlined"
        />
        <TextField
          sx={{
            backgroundColor: 'white',
            borderRadius: '5px',
            marginBottom: '20px',
            boxShadow: '0px 0px 30px 32px rgba(166, 212, 48, 0.2)',
            boxShadow: '0px 0px 7px 9px rgba(255, 67, 0, 0.2) inset',
          }}
          fullWidth
          onChange={handleInp}
          name="desc"
          label="desc"
          variant="outlined"
        />
      
        <TextField
          sx={{
            backgroundColor: 'white',
            borderRadius: '5px',
            marginBottom: '20px',
            boxShadow: '0px 0px 30px 32px rgba(166, 212, 48, 0.2)',
            boxShadow: '0px 0px 7px 9px rgba(255, 67, 0, 0.2) inset',
          }}
          fullWidth
          onChange={handleInp}
          name="price"
          label="price"
          variant="outlined"
        />
        <CategorySelect product={product} setProduct={setProduct} />

        <Box sx={{ backgroundColor: 'orange', borderRadius: '5px' }}>
          <Button
            sx={{
              backgroundColor: 'white',
              borderRadius: '5px',
              color: 'black',
              fontSize: '22px',
              fontWeight: '900',
              fontFamily: 'segoe ui',
              '&:hover': {
                backgroundColor: 'black',
                color: 'white',
              },
            }}
            onClick={() => addProduct(product)}
            fullWidth
            variant="outlined"
            size="large"
            className="admin__button">
            ADD PRODUCT
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default AddProduct;
