import { type LoaderFunctionArgs, redirect } from 'react-router-dom';
import { BACK_END_URL } from '@/constants/api.ts';
import { CATEGORIES, GENDERS } from '@/constants/categories.ts';

export const productListLoader = ({
    params: { gender, category, subcategory },
}: LoaderFunctionArgs) => {
    const foundGender = GENDERS.find((g) => g.path === gender);
    const foundCategory = CATEGORIES.find((c) => c.path === category);

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

        return fetch(url);
    }

    return redirect('/women');
};
