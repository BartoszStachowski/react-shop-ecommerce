import type { ProductType } from '@/types/product.ts';
import { CenteredContent } from '@/components/ui/CenteredContent/CenteredComponent.tsx';
import { CartProduct } from '@/components/cart/CartProduct/CartProduct.tsx';

export const CartProductList = ({ products }: { products: ProductType[] }) => {
    return (
        <CenteredContent>
            <div className="mt-4 bg-gray-200 p-4">
                <h2>Favourites</h2>
                <div>
                    {products.map((product) => (
                        <CartProduct key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </CenteredContent>
    );
};
