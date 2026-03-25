import * as React from 'react';

export const FlexContainer = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="mx-auto my-0 flex w-full max-w-400 items-start gap-4">
            {children}
        </div>
    );
};
