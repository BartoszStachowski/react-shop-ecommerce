import type { ProductType } from '@/types/product.ts';
import { CenteredContent } from '@/components/ui/CenteredContent/CenteredComponent.tsx';
import { Product } from '@/Product/Product.tsx';

interface ProductsProps {
    products: ProductType[];
    headerText: string;
}

export const Products = ({ products, headerText }: ProductsProps) => {
    return (
        <CenteredContent>
            <h2 className="mt-8 mb-4">{headerText}</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5">
                {products.map((product: ProductType) => (
                    <Product key={product.id} product={product} />
                ))}
            </div>
        </CenteredContent>
    );
};
