import type { ReactNode } from 'react';

type FullWidthButtonProps = {
    children: ReactNode;
    onClick?: () => void;
};

export const FullWidthButton = ({
    children,
    onClick,
}: FullWidthButtonProps) => {
    return (
        <button
            onClick={onClick}
            className="bg-theme-main hover:bg-theme-main/90 w-full px-0 py-4 font-bold text-white uppercase"
        >
            {children}
        </button>
    );
};
