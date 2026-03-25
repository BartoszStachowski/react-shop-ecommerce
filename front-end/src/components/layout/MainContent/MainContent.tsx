import type { ReactNode } from 'react';

export const MainContent = ({ children }: { children: ReactNode }) => {
    return <div className="w-full flex-1">{children}</div>;
};
