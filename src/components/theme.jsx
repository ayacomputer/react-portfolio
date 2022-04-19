import '@fontsource/nunito'
import '@fontsource/comforter'
import '@fontsource/roboto'

import { createTheme } from '@mui/system';

const fontFamily = [
    'Nunito',
    'Comforter',
    'Roboto'
].join(',');



const theme = createTheme({
    typography: {
        fontFamily: fontFamily,
    },
    palette: {
        primary: {
            light: 'wheat',
            main: 'rgba(150, 202, 27, 0.911)',
            dark: 'rgb(32, 33, 36)',
            contrastText: '#000000',
            mainGradient: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        },
        secondary: {
            light: ' rgba(207, 126, 120, 0.911)',
            main: 'rgba(223, 100, 78, 0.911)',
            dark: 'rgba(116, 33, 33, 0.911)',
            contrastText: '#ffffff',
        },
        type: 'dark',
    },
    mixins: {
        toolbar: {
            minHeight: 64,
        },
    },

    props: {
        MuiCheckbox: {
            color: 'primary',
        },
        MuiList: {
            dense: true,
        },
        MuiTable: {
            size: 'small',
        },
        MuiTextField: {
            variant: 'outlined',
        },
    },
});

export default theme;