import type { ProductType } from '@/types/product.ts';
import { Link } from 'react-router-dom';
import HEART_ICON from '@/assets/heart.svg';
import HEART_FULL_ICON from '@/assets/heart-full.svg';

export const Product = ({ product }: { product: ProductType }) => {
    return (
        <Link to="/" className="relative">
            <img
                className="h-100 w-62.5"
                src={product.photos[0]}
                alt="product"
            />
            <h3 className="my-2 font-bold">{product.productName}</h3>
            <p className="mb-4 text-red-500">{product.pricePLN}zł</p>
            <div className="absolute top-2 left-2 h-6 w-6">
                <img
                    src={HEART_ICON}
                    alt="heart icon"
                    className="absolute hover:opacity-0"
                />
                <img
                    src={HEART_FULL_ICON}
                    alt="heart icon"
                    className="absolute opacity-0 hover:opacity-100"
                />
            </div>
        </Link>
    );
};
