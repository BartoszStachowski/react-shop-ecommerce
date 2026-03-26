import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import '@/styles/theme.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Favourites } from '@/views/Favourites/Favourites.tsx';
import { Layout } from '@/components/layout/Layout/Layout.tsx';
// views
import { Cart } from '@/views/Cart/Cart.tsx';
import { MainPage } from '@/views/MainPage/MainPage.tsx';
import { ProductList } from '@/views/ProductList/ProductList.tsx';
import { ProductDetails } from '@/views/ProductDetails/ProductDetails.tsx';
// loaders
import { mainPageLoader } from '@/api/mainPageLoader.ts';
import { productListLoader } from '@/api/productListLoader.ts';
import { productLoader } from '@/api/productLoader.ts';

const router = createBrowserRouter([
    {
        path: '',
        element: <Layout />,
        children: [
            {
                path: '/cart',
                element: <Cart />,
            },
            {
                path: '/favourites',
                element: <Favourites />,
            },
            {
                path: '/:gender?',
                element: <MainPage />,
                loader: mainPageLoader,
            },
            {
                path: '/:gender/:category/:subcategory?',
                element: <ProductList />,
                loader: productListLoader,
            },
            {
                path: '/:gender/:category/:subcategory/:productId',
                element: <ProductDetails />,
                loader: productLoader,
            },
        ],
    },
]);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
