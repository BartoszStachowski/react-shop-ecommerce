import type { ReactNode } from 'react';

export const CenteredContent = ({ children }: { children: ReactNode }) => {
    return <div className="mx-auto my-0 w-full max-w-400 px-4">{children}</div>;
};
