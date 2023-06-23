import { Box, Button, TextField, Typography } from '@mui/material';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useProducts } from '../../contexts/ProductContextProvider';
import CategorySelect from './CategorySelect';

const EditProduct = () => {
  const [product, setProduct] = useState({
    title: '',
    pic1: '',
    pic2: '',
    pic3: '',
    price: 0,
    category: '',
  });

  const { saveEditedProduct, getProductDetails, productDetails } =
    useProducts();

  const { id } = useParams();

  useEffect(() => {
    getProductDetails(id);
  }, []);

  useEffect(() => {
    if (productDetails) {
      setProduct(productDetails);
    }
  }, [productDetails]);

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
    <Box
      sx={{
        paddingBottom: '3%',
      }}>
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
        EDIT PAGE
      </Typography>
      <Box
        sx={{
          width: '60vw',
          margin: '10px auto',
          backgroundColor: 'red',
          padding: '5% 5%',
          boxShadow: '0px 0px 21px 15px rgba(255, 255, 255, 0.2)',
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
          value={product.title}
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
          value={product.pic1}
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
          value={product.desc}
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
          value={product.price}
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
            onClick={() => saveEditedProduct(product)}
            fullWidth
            variant="outlined"
            size="large"
            className="admin__button">
            SAVE CHANGES
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default EditProduct;
