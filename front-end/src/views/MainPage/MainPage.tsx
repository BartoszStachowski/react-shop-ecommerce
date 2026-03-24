import type { ProductType } from '@/types/product';
import { Hero } from '@/components/Hero/Hero.tsx';
import { Products } from '@/components/Products/Products.tsx';
import { useLoaderData } from 'react-router-dom';

type MainPageLoaderData = {
    bestsellers: ProductType[];
    heroImageUrl: string;
};

export const MainPage = () => {
    const { bestsellers, heroImageUrl } = useLoaderData() as MainPageLoaderData;

    return (
        <>
            <Hero heroImage={heroImageUrl} />
            <Products
                products={bestsellers}
                headerText="Explore Popular Picks"
            />
        </>
    );
};
