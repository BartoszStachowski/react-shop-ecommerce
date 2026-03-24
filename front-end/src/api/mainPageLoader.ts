import { redirect, type LoaderFunctionArgs } from 'react-router-dom';
import { BACK_END_URL } from '@/constants/api.ts';

export const mainPageLoader = ({ params }: LoaderFunctionArgs) => {
    const paths = ['women', 'men', 'children'];

    if (params.gender && paths.includes(params.gender)) {
        return fetch(`${BACK_END_URL}/${params.gender}`);
    } else {
        return redirect('/women');
    }
};
