import type { ProductType } from '@/types/product.ts';
import REMOVE_ICON from '@/assets/remove.svg';
import BAG_ICON from '@/assets/bag.svg';

export const FavouriteProduct = ({ product }: { product: ProductType }) => {
    return (
        <div className="my-2 flex gap-12 border-t py-4">
            <img
                src={product.photos[0]}
                alt="product image"
                className="h-35 w-21.25"
            />
            <div className="flex flex-1 flex-col">
                <div className="mb-4 flex justify-between text-xl font-bold">
                    <h3>{`${product.brand} ${product.productName}`}</h3>
                    <p>{product.pricePLN}zł</p>
                </div>
                <p className="font-bold">
                    <span className="font-normal text-gray-500">Cena:</span>
                    {product.pricePLN}zł
                </p>
                <div className="flex flex-1 items-end gap-8">
                    <button className="flex items-center">
                        <img
                            src={REMOVE_ICON}
                            alt="remove icon"
                            className="mr-2 h-4 w-4"
                        />
                        Usuń
                    </button>
                    <button className="flex items-center">
                        <img
                            src={BAG_ICON}
                            alt="bag icon"
                            className="mr-2 h-4 w-4"
                        />
                        Dodaj do koszyka
                    </button>
                </div>
            </div>
        </div>
    );
};
