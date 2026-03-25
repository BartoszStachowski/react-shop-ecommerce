import type { ProductType } from '@/types/product.ts';
import CAR_ICON from '@/assets/car.svg';
import { FullWidthButton } from '@/components/ui/FullWidthButton/FullWidthButton.tsx';

export const CartSummary = ({ products }: { products: ProductType[] }) => {
    const deliverCost = 49;
    const minSumForFreeDelivery = 500;

    const sum = products.reduce((acc, product) => {
        return acc + product.pricePLN;
    }, 0);

    const totalCost = sum > minSumForFreeDelivery ? sum : sum + deliverCost;

    return (
        <div className="mt-4 flex w-md flex-col gap-4 pr-4">
            <h2 className="border-b pb-4">Summary</h2>
            <div className="flex justify-between">
                <p>Product value:</p>
                <p>{sum}zł</p>
            </div>
            <div className="flex justify-between">
                <p>Shipping cost:</p>
                <p>{`${sum > minSumForFreeDelivery ? 0 : deliverCost}zł`}</p>
            </div>
            <div className="flex justify-between font-bold">
                <p>Total to pay:</p>
                <p>{totalCost}zł</p>
            </div>
            <FullWidthButton isBlack={true}>Do kasy</FullWidthButton>
            <div className="flex items-center justify-between bg-gray-200 p-4 font-bold">
                <img src={CAR_ICON} alt="delivery icon" className="h-6 w-6" />
                <p>Free delivery from {minSumForFreeDelivery} zł</p>
            </div>
        </div>
    );
};
