import type { ProductType } from '@/types/product.ts';
import { CURRENCIES, CURRENCY_SIGN } from '@/constants/currencies.ts';
import { useCurrency } from '@/hooks/context/useCurrency.ts';

interface Props {
    product: ProductType;
}

export const Price = ({ product }: Props) => {
    const { currency } = useCurrency();

    return (
        <>
            {currency === CURRENCIES.PLN ? product.pricePLN : product.priceUSD}
            {CURRENCY_SIGN[currency]}
        </>
    );
};
