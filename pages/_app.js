import '../styles/globals.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import '@fontsource/raleway';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
    const theme = createTheme({
        typography: {
            fontFamily: 'Raleway',
        },
        palette: {
            text: {
                primary: '#000',
                secondary: 'gray',
            },
            primary: {
                main: '#052f3d',
            },
            secondary: {
                main: '#0F5D76',
            },
        },
        tertiary: {
            main: '#050510ff',
        },
    });
    return (
        <ThemeProvider theme={theme}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ThemeProvider>
    );
}

export default MyApp;
