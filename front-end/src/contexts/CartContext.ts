import { createContext } from 'react';
import type { ProductType } from '@/types/product.ts';

type CartContextType = {
    cartItems: ProductType[];
    addProductToCart: (product: ProductType) => void;
};

export const CartContext = createContext<CartContextType | null>(null);
