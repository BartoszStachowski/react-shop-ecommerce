import type { LoaderFunctionArgs } from 'react-router-dom';
import { BACK_END_URL } from '@/constants/api.ts';

export const productLoader = ({
    params: { productId },
}: LoaderFunctionArgs) => {
    return fetch(`${BACK_END_URL}/products/${productId}`);
};
