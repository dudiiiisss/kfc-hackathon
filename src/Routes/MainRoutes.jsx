import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import AdminPage from '../Pages/AdminPage';
import EditProductPage from '../Pages/EditProductPage';
import HomePage from '../Pages/HomePage';
import NotFoundPage from '../Pages/NotFoundPage';
import ProductPage from '../Pages/ProductPage';

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    {
      link: '/',
      element: <HomePage />,
      id: 1,
    },
  
    {
      link: '*',
      element: <NotFoundPage />,
      id: 3,
    },
    {
      link: '/products',
      element: <ProductPage />,
      id: 4,
    },
   
    // {
    //   link: '/details/:id',
    //   element: <ProductDetails />,
    //   id: 6,
    // },
    // {
    //   link: '/cart',
    //   element: <CartPage />,
    //   id: 7,
    // },
    // {
    //   link: '/auth',
    //   element: <AuthPage />,
    //   id: 7,
    // },
    {
        link: '/admin',
        element: <AdminPage />,
        id: 1,
        
      },
      {
        link: '/edit/:id',
        element: <EditProductPage />,
        id: 2,
        
      },
  ];

  


  return (
    <Routes>
      {PUBLIC_ROUTES.map((item) => (
        <Route path={item.link} element={item.element} key={item.id} />
      ))}

      

    </Routes>
  );
};

export default MainRoutes;
