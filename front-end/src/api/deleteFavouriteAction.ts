import { BACK_END_URL } from '@/constants/api.ts';
import type { ActionFunctionArgs } from 'react-router-dom';

export const deleteFavouriteAction = ({ params }: ActionFunctionArgs) => {
    return fetch(`${BACK_END_URL}/favourites/${params.favouriteId}`, {
        method: 'DELETE',
    });
};
