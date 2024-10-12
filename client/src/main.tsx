import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.tsx';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Product from './components/pages/Product.tsx';
import ProductListing from './components/pages/ProductListing.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/product',
    element: <Product />,
  },
  {
    path: '/productlist',
    element: <ProductListing />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
