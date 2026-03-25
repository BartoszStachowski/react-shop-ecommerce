import type { ReactNode } from 'react';
import clsx from 'clsx';

type FullWidthButtonProps = {
    children: ReactNode;
    isBlack?: boolean;
    onClick?: () => void;
};

export const FullWidthButton = ({
    children,
    isBlack,
    onClick,
}: FullWidthButtonProps) => {
    return (
        <button
            onClick={onClick}
            className={clsx(
                'bg-theme-main hover:bg-theme-main/90 w-full px-0 py-4 font-bold text-white uppercase',
                isBlack && 'bg-black!'
            )}
        >
            {children}
        </button>
    );
};
