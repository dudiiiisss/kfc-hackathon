import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useProducts } from '../../contexts/ProductContextProvider';
import { useNavigate } from 'react-router-dom';
import { IconButton } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { ADMIN } from '../../helpers/consts';
import "./ProductCard.css"

export default function ProductCard({ item }) {
  const { deleteProduct } = useProducts();
  
  const navigate = useNavigate();
  return (
    <div className="product_card"> 
    <img 
      className="product_img" 
      src={item.pic1} 
      alt="" 
      onClick={() => navigate(`/details/${item.id}`)} 
    /> 
    <div className='product_title'>{item.title}</div>
    <div className='product_desc'>{item.desc}</div>
    <div className="product_card_bottom"> 
      <Button 
        sx={{ marginBottom: "8px" }} 
        size="small" 
        onClick={() => deleteProduct(item.id)} 
      > 
        Delete 
      </Button> 
      <span className="product_price">${item.price}</span> 
      <Button 
        sx={{ marginBottom: "8px" }} 
        size="small" 
        onClick={() => navigate(`/edit/${item.id}`)} 
      > 
        Edit 
      </Button> 
     
    </div> 
  </div>
  
  );
}
