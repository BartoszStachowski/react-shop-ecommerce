import { FavouriteList } from '@/components/favourites/FavouriteList/FavouriteList.tsx';
import type { FavouriteProductType } from '@/types/product.ts';
import { useLoaderData } from 'react-router-dom';

export const Favourites = () => {
    const favouriteProducts = useLoaderData<FavouriteProductType[]>();

    return <FavouriteList favourites={favouriteProducts} />;
};
