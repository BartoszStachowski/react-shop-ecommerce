import { Layout } from '@/components/layout/Layout/Layout.tsx';
import { FlexContainer } from '@/components/ui/FlexContainer/FlexContainer.tsx';
import { ExpandableMenu } from '@/components/navigation/ExpandableMenu/ExpandableMenu.tsx';
import { Breadcrumbs } from '@/components/navigation/Breadcrumbs/Breadcrumbs.tsx';
import { Photos } from '@/components/product/Photos/Photos.tsx';
import type { ProductType } from '@/types/product.ts';
import { ProductDetails } from '@/components/product/ProductDetails/ProductDetails.tsx';

export const ProductDetails = () => {
    const product: ProductType = {
        id: 1,
        gender: 'men',
        category: 'odziez',
        subcategory: 'koszulki',
        productName: 'T-Shirt',
        brand: 'Top Brand',
        pricePLN: 49,
        priceUSD: 10,
        photos: [
            'http://localhost:3000/product-photos/man-t-shirt-1.jpg',
            'http://localhost:3000/product-photos/man-t-shirt-4.jpg',
            'http://localhost:3000/product-photos/man-t-shirt-3.jpg',
        ],
        description:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.',
        maintenanceInfo:
            'Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu',
    };

    return (
        <Layout>
            <FlexContainer>
                <ExpandableMenu />
                <div className="w-full">
                    <Breadcrumbs />
                    <FlexContainer>
                        <Photos product={product} />
                        <ProductDetails product={product} />
                    </FlexContainer>
                </div>
            </FlexContainer>
        </Layout>
    );
};
