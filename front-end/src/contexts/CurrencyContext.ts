import type { CurrencyType } from '@/types/product.ts';
import * as React from 'react';
import { createContext } from 'react';

type CurrencyContextType = {
    currency: CurrencyType;
    setCurrency: React.Dispatch<React.SetStateAction<CurrencyType>>;
};

export const CurrencyContext = createContext<CurrencyContextType | null>(null);
