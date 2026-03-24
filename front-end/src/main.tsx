import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import '@/styles/theme.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Favourites } from '@/views/Favourites/Favourites.tsx';
import { Cart } from '@/views/Cart/Cart.tsx';
import { Layout } from '@/components/Layout/Layout.tsx';

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
        ],
    },
]);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
