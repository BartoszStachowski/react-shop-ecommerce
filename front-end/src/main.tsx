import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import '@/styles/theme.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import { MainPage } from '@/views/MainPage/MainPage.tsx';
import { Favourites } from '@/views/Favourites/Favourites.tsx';

const router = createBrowserRouter([{ path: '/', element: <Favourites /> }]);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
