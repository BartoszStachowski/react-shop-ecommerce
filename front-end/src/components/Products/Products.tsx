import type { ProductType } from '@/types/product.ts';
import { CenteredContent } from '@/components/CenteredContent/CenteredComponent.tsx';
import { Product } from '@/Product/Product.tsx';

interface ProductsProps {
    products: ProductType[];
    headerText: string;
}

export const Products = ({ products, headerText }: ProductsProps) => {
    return (
        <CenteredContent>
            <h2 className="mt-8 mb-4">{headerText}</h2>
            <div className="flex flex-wrap justify-between">
                {products.map((product: ProductType) => (
                    <Product key={product.id} product={product} />
                ))}
            </div>
        </CenteredContent>
    );
};
