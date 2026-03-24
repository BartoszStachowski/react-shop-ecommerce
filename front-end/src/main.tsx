import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import '@/styles/theme.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Favourites } from '@/views/Favourites/Favourites.tsx';
import { Cart } from '@/views/Cart/Cart.tsx';
import { Layout } from '@/components/Layout/Layout.tsx';
import { MainPage } from '@/views/MainPage/MainPage.tsx';
import { mainPageLoader } from '@/api/mainPageLoader.ts';
import { ProductList } from '@/views/ProductList/ProductList.tsx';
import { productListLoader } from '@/api/productListLoader.ts';

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
        ],
    },
]);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
