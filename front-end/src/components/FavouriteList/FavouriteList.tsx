import { CenteredContent } from '@/components/CenteredContent/CenteredComponent.tsx';
import type { ProductType } from '@/types/product.ts';
import { FavouriteProduct } from '@/components/FavouriteProduct/FavouriteProduct.tsx';

export const FavouriteList = ({ products }: { products: ProductType[] }) => {
    return (
        <CenteredContent>
            <div className="mt-4 bg-gray-200 p-4">
                <h2>Favourites</h2>
                <div>
                    {products.map((product) => (
                        <FavouriteProduct key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </CenteredContent>
    );
};
