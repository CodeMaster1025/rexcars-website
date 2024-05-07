"use client"

import { createContext, useContext, useState } from 'react';

type IsElementOutOfViewContextType = {
    isElementOutOfView: boolean;
    setIsElementOutOfView: (value: boolean) => void;
};

const IsElementOutOfViewContext = createContext<
    IsElementOutOfViewContextType | undefined
>(undefined);

export const useIsElementOutOfView = () => {
    const context = useContext(IsElementOutOfViewContext);
    if (!context) {
        throw new Error('useIsElementOutOfView must be used within a IsElementOutOfViewProvider');
    }
    return context;
};

export function IsElementOutOfViewProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [isElementOutOfView, setIsElementOutOfView] = useState(false);

    return (
        <IsElementOutOfViewContext.Provider
            value={{ isElementOutOfView, setIsElementOutOfView }}
        >
            {children}
        </IsElementOutOfViewContext.Provider>
    );
}
