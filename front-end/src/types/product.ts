import { CURRENCIES } from '@/constants/currencies.ts';

export interface ProductType {
    id: number;
    gender: 'men' | 'women' | 'children';
    category: 'clothing' | 'shoes' | 'accessories' | 'sport';
    subcategory: string;
    productName: string;
    brand: string;
    pricePLN: number;
    priceUSD: number;
    photos: string[];
    description: string;
    maintenanceInfo: string;
}

export interface FavouriteProductType {
    id: number;
    product: ProductType;
    productId: number;
}

// values of CURRENCIES
export type CurrencyType = (typeof CURRENCIES)[keyof typeof CURRENCIES];
