import { useContext } from 'react';
import { CartContext } from '@/contexts/CartContext.ts';

export const useCart = () => {
    const context = useContext(CartContext);

    if (!context) {
        throw new Error('useCart must be used within the context');
    }

    return context;
};
