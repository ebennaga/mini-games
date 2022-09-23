/* eslint-disable no-unused-vars */
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import { GlobalStyles } from '@mui/material';
import theme from 'utils/muiTheme';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles
                styles={{
                    // body: { margin: '0 auto', display: 'flex', justifyContent: 'center' }
                    body: { margin: '0 auto' }
                }}
            />
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default MyApp;
