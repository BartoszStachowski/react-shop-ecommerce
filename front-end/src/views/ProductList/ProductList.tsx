import { FlexContainer } from '@/components/FlexContainer/FlexContainer.tsx';
import { ExpandableMenu } from '@/components/ExpandableMenu/ExpandableMenu.tsx';
import { Breadcrumbs } from '@/components/Breadcrumbs/Breadcrumbs.tsx';
import { Products } from '@/components/Products/Products.tsx';
import type { ProductType } from '@/types/product.ts';
import { Pagination } from '@/components/Pagination/Pagination.tsx';
import { useLoaderData, useParams } from 'react-router-dom';
import { CATEGORIES } from '@/constants/categories.ts';

export const ProductList = () => {
    const products: ProductType[] = useLoaderData();
    const params = useParams();
    const foundCategory = CATEGORIES.find((c) => c.path === params.category);
    let foundSubcategory;

    if (params.subcategory) {
        foundSubcategory = foundCategory?.subcategories.find(
            (sc) => sc.path === params.subcategory
        );
    }

    if (!foundCategory) return <p>Category not found</p>;

    return (
        <FlexContainer>
            <ExpandableMenu />
            <div>
                <Breadcrumbs />
                <Products
                    products={products}
                    headerText={
                        foundSubcategory
                            ? foundSubcategory.categoryName
                            : foundCategory.categoryName
                    }
                />
                <Pagination numberOfPages={5} />
            </div>
        </FlexContainer>
    );
};
