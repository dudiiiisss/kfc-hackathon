import { Box } from '@mui/system'
import React from 'react'
import ProductList from '../components/product/ProductList'
import SideBar from '../components/product/Sidebar'

const ProductPage = () => {
  return (
    <div>
      <Box sx={{display:"flex"}}>
      <SideBar/>
        <ProductList/>
        </Box>
    </div>
  )
}

export default ProductPage