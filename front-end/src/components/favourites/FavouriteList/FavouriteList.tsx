import { CenteredContent } from '@/components/ui/CenteredContent/CenteredComponent.tsx';
import type { FavouriteProductType } from '@/types/product.ts';
import { FavouriteProduct } from '@/components/favourites/FavouriteProduct/FavouriteProduct.tsx';

interface Props {
    favourites: FavouriteProductType[];
}

export const FavouriteList = ({ favourites }: Props) => {
    return (
        <CenteredContent>
            <div className="mt-4 bg-gray-200 p-4">
                <h2>Favourites</h2>
                <div>
                    {favourites.map((favourite) => (
                        <FavouriteProduct
                            key={favourite.id}
                            favourite={favourite}
                        />
                    ))}
                </div>
            </div>
        </CenteredContent>
    );
};
