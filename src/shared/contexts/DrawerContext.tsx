import { createContext, useCallback, useContext, useState } from 'react';

interface IDrawerContextData {
    isDrawerOpen: boolean;
    toogleDrawerOpen: () => void;
}

const DrawerContext = createContext({} as IDrawerContextData);

export const useDrawerContext = () => {
    return useContext(DrawerContext);
};

interface IAppThemeProviderProps {
    children: React.ReactNode;
}

export const DrawerProvider: React.FC<IAppThemeProviderProps> = ({ children }) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toogleDrawerOpen = useCallback(() => {
        setIsDrawerOpen(oldDrawerOpen => !oldDrawerOpen);
    }, []);

    return (

        <DrawerContext.Provider value={{ isDrawerOpen, toogleDrawerOpen }}>
            {children}
        </DrawerContext.Provider>
    );
};