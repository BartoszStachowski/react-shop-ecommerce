import type { ReactNode } from 'react';

export const TopBar = ({ children }: { children: ReactNode }) => {
    return (
        <div className="fr-3 mx-auto my-0 grid w-full max-w-400 grid-cols-3 items-center">
            {children}
        </div>
    );
};
