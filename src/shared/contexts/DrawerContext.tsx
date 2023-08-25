import { createContext, useCallback, useContext, useState } from 'react';

interface IDrawerOption{
    icon: string;
    path: string;
    label: string;
}

interface IDrawerContextData {
    isDrawerOpen: boolean;
    toogleDrawerOpen: () => void;
    drawerOptions: IDrawerOption[];
    setDrawerOptions: (newDrawerOptions: IDrawerOption[]) => void;
}

const DrawerContext = createContext({} as IDrawerContextData);

export const useDrawerContext = () => {
    return useContext(DrawerContext);
};

interface IAppThemeProviderProps {
    children: React.ReactNode;
}

export const DrawerProvider: React.FC<IAppThemeProviderProps> = ({ children }) => {
    const [drawerOptions, setDrawerOptions] = useState<IDrawerOption[]>([]);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toogleDrawerOpen = useCallback(() => {
        setIsDrawerOpen(oldDrawerOpen => !oldDrawerOpen);
    }, []);

    const HandleSetDrawerOptions = useCallback((newDrawerOptions: IDrawerOption[]) => {
        setDrawerOptions(newDrawerOptions);
    }, []);

    return (

        <DrawerContext.Provider value={{ isDrawerOpen, drawerOptions, toogleDrawerOpen, setDrawerOptions: HandleSetDrawerOptions }}>
            {children}
        </DrawerContext.Provider>
    );
};