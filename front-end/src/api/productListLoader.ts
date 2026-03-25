import { type LoaderFunctionArgs, redirect } from 'react-router-dom';
import { BACK_END_URL } from '@/constants/api.ts';
import { CATEGORIES, GENDERS } from '@/constants/categories.ts';
import type { ProductType } from '@/types/product.ts';

export const productListLoader = ({
    params: { gender, category, subcategory },
    request,
}: LoaderFunctionArgs) => {
    const foundGender = GENDERS.find((g) => g.path === gender);
    const foundCategory = CATEGORIES.find((c) => c.path === category);

    const pageUrl = new URL(request.url);
    const page = pageUrl.searchParams.get('page') || 1;

    if (foundGender && foundCategory) {
        let url = `${BACK_END_URL}/products?gender=${gender}&category=${category}`;
        if (subcategory) {
            const foundSubcategory = foundCategory.subcategories.find(
                (sc) => sc.path === subcategory
            );

            if (foundSubcategory) {
                url = `${url}&subcategory=${subcategory}`;
            }
        }

        url = `${url}&_limit=8&_page=${page}`;

        return fetch(url).then((response) => {
            const numberOfPages = Math.ceil(
                Number(response.headers.get('X-Total-Count')) / 8
            );

            return response.json().then((products: ProductType[]) => {
                return {
                    products,
                    numberOfPages,
                };
            });
        });
    }

    return redirect('/women');
};
