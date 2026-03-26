import type { ProductType } from '@/types/product.ts';
import CAR_ICON from '@/assets/car.svg';
import { FullWidthButton } from '@/components/ui/FullWidthButton/FullWidthButton.tsx';
import { useCurrency } from '@/hooks/context/useCurrency.ts';
import { CURRENCIES, CURRENCY_SIGN } from '@/constants/currencies.ts';

export const CartSummary = ({ products }: { products: ProductType[] }) => {
    const { currency } = useCurrency();

    const deliveryCosts = {
        [CURRENCIES.USD]: 10,
        [CURRENCIES.PLN]: 49,
    };

    const minSumsForFreeDelivery = {
        [CURRENCIES.USD]: 100,
        [CURRENCIES.PLN]: 500,
    };

    const currencySign = CURRENCY_SIGN[currency];

    const deliverCost = deliveryCosts[currency];
    const minSumForFreeDelivery = minSumsForFreeDelivery[currency];

    const sum = products.reduce((acc, product) => {
        return (
            acc +
            (currency === CURRENCIES.PLN ? product.pricePLN : product.priceUSD)
        );
    }, 0);

    const totalCost = sum > minSumForFreeDelivery ? sum : sum + deliverCost;

    return (
        <div className="mt-4 flex w-md flex-col gap-4 pr-4">
            <h2 className="border-b pb-4">Summary</h2>
            <div className="flex justify-between">
                <p>Product value:</p>
                <p>
                    {sum}
                    {currencySign}
                </p>
            </div>
            <div className="flex justify-between">
                <p>Shipping cost:</p>
                <p>{`${sum > minSumForFreeDelivery ? 0 : deliverCost}${currencySign}`}</p>
            </div>
            <div className="flex justify-between font-bold">
                <p>Total to pay:</p>
                <p>
                    {totalCost}
                    {currencySign}
                </p>
            </div>
            <FullWidthButton isBlack={true}>Do kasy</FullWidthButton>
            <div className="flex items-center justify-between bg-gray-200 p-4 font-bold">
                <img src={CAR_ICON} alt="delivery icon" className="h-6 w-6" />
                <p>
                    Free delivery from {minSumForFreeDelivery} {currencySign}
                </p>
            </div>
        </div>
    );
};
