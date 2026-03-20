import type { ProductType } from '@/types/product.ts';
import { CenteredContent } from '@/components/CenteredContent/CenteredComponent.tsx';
import { Product } from '@/Product/Product.tsx';

export const Bestsellers = ({ products }: { products: ProductType[] }) => {
    return (
        <CenteredContent>
            <h2 className="mt-8 mb-4">Explore Popular Picks</h2>
            <div className="flex justify-between">
                {products.map((product: ProductType) => (
                    <Product key={product.id} product={product} />
                ))}
            </div>
        </CenteredContent>
    );
};
