import CAR_ICON from '@/assets/car.svg';
import RETURN_ICON from '@/assets/return.svg';
import type { ProductType } from '@/types/product.ts';
import { FullWidthButton } from '@/components/ui/FullWidthButton/FullWidthButton.tsx';
import { Accordion } from '@/components/ui/Accordion/Accordion.tsx';
import { Price } from '@/components/product/Price/Price.tsx';

export const Details = ({ product }: { product: ProductType }) => {
    const accordionContent = [
        {
            title: 'Product Description',
            content: product.description,
        },
        {
            title: 'Care Instructions',
            content: product.description,
        },
    ];

    return (
        <div className="w-full pr-4">
            <h2>{product.brand}</h2>
            <p className="my-2 font-bold">{product.productName}</p>
            <p className="mb-8 text-2xl text-red-700">
                <Price product={product} />
            </p>
            <FullWidthButton isBlack={true}>Dodaj do koszyka</FullWidthButton>

            <ul className="mt-8">
                <li className="mb-8 flex items-center justify-start gap-4">
                    <img
                        src={CAR_ICON}
                        alt="delivery icon"
                        className="h-4 w-4"
                    />
                    Delivery within 24h
                </li>
                <li className="mb-8 flex items-center justify-start gap-4">
                    <img
                        src={RETURN_ICON}
                        alt="return icon"
                        className="h-4 w-4"
                    />
                    Returns within 100 days!
                </li>
            </ul>

            <Accordion items={accordionContent} />
        </div>
    );
};
