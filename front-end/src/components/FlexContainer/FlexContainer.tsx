import * as React from 'react';

export const FlexContainer = ({ children }: { children: React.ReactNode }) => {
    return <div className="flex w-full max-w-400 gap-4">{children}</div>;
};
