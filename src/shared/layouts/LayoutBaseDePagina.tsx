import { Box } from '@mui/system';
import { ReactNode } from 'react';

interface ILayoutBaseDePaginaProps{
    titulo: string;
    children?: ReactNode;
}

export const LayoutBaseDePagina: React.FC<ILayoutBaseDePaginaProps> = ({ children, titulo }) => {

    return(
        <Box height="100%">
            <Box>
                {titulo}
            </Box>
            <Box>
                Barra de Ferramentas
            </Box>


            {children}
        </Box>

    );
};