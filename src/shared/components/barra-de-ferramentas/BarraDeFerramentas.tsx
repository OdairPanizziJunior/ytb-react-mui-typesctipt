import { Box, Button, Paper, TextField, useTheme, Icon } from '@mui/material';

export const BarraDeFerramentas: React.FC = () => {
    const theme = useTheme();

    return(
        <Box height={theme.spacing(5)} marginX={1} padding={1} paddingX={2} display="flex" gap={1} alignItems="center" component={Paper}>
            <TextField size="small" placeholder="Pesquisar..."/>

            <Box flex={1} display="flex" justifyContent="end">
                <Button variant="contained" color="primary" disableElevation endIcon={<Icon>add</Icon>}>Novo</Button>
            </Box>
        </Box>
    );
};