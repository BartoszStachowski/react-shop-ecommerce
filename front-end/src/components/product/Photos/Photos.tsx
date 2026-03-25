import type { ProductType } from '@/types/product.ts';
import { FlexContainer } from '@/components/ui/FlexContainer/FlexContainer.tsx';
import { useState } from 'react';
import clsx from 'clsx';

export const Photos = ({ product }: { product: ProductType }) => {
    const [currentPhoto, setCurrentPhoto] = useState(product.photos[0]);

    return (
        <FlexContainer>
            <div className="flex flex-col gap-4">
                {product.photos.map((photo) => (
                    <img
                        key={photo}
                        src={photo}
                        alt="product photo"
                        className={clsx('h-30 w-21.25 cursor-pointer', {
                            'border-2': photo === currentPhoto,
                        })}
                        onClick={() => setCurrentPhoto(photo)}
                    />
                ))}
            </div>
            <img
                src={currentPhoto}
                alt="product photo"
                className="h-175 w-125"
            />
        </FlexContainer>
    );
};
