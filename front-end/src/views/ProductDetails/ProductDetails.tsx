import { FlexContainer } from '@/components/ui/FlexContainer/FlexContainer.tsx';
import { ExpandableMenu } from '@/components/navigation/ExpandableMenu/ExpandableMenu.tsx';
import { Breadcrumbs } from '@/components/navigation/Breadcrumbs/Breadcrumbs.tsx';
import { Photos } from '@/components/product/Photos/Photos.tsx';
import type { ProductType } from '@/types/product.ts';
import { Details } from '@/components/product/Details/Details.tsx';
import { useLoaderData } from 'react-router-dom';

export const ProductDetails = () => {
    const product = useLoaderData<ProductType>();

    return (
        <FlexContainer>
            <ExpandableMenu />
            <div className="w-full">
                <Breadcrumbs />
                <FlexContainer>
                    <Photos product={product} />
                    <Details product={product} />
                </FlexContainer>
            </div>
        </FlexContainer>
    );
};
