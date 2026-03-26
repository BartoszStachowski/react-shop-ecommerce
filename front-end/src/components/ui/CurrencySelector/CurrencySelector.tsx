import { CURRENCIES } from '@/constants/currencies.ts';
import { useCurrency } from '@/hooks/context/useCurrency.ts';
import type { CurrencyType } from '@/types/product.ts';
import { type ChangeEvent } from 'react';

export const CurrencySelector = () => {
    const { currency, setCurrency } = useCurrency();

    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value as CurrencyType;
        setCurrency(value);
        localStorage['selected_currency'] = value;
    };

    return (
        <select
            onChange={handleChange}
            name="currency"
            id="currency"
            className="p-2"
            value={currency}
        >
            {Object.values(CURRENCIES).map((currency) => (
                <option key={currency} value={currency}>
                    {currency}
                </option>
            ))}
        </select>
    );
};
