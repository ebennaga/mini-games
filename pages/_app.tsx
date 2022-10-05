import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import { GlobalStyles, Slide } from '@mui/material';
import theme from 'utils/muiTheme';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { wrapper } from 'redux/store';
import { SnackbarProvider } from 'notistack';
import Router from 'next/router';
import useAuthReducer from 'hooks/useAuthReducer';

function MyApp({ Component, pageProps }: AppProps) {
    const { user } = useAuthReducer();
    return (
        <SnackbarProvider
            maxSnack={3}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'center'
            }}
            TransitionComponent={Slide}
        >
            <ThemeProvider theme={theme}>
                <GlobalStyles
                    styles={{
                        // body: { margin: '0 auto', display: 'flex', justifyContent: 'center' }
                        body: { margin: '0 auto' }
                    }}
                />
                {/* <Component {...pageProps} /> */}
                <Component userData={user} {...pageProps} />
            </ThemeProvider>
        </SnackbarProvider>
    );
}
MyApp.getInitialProps = wrapper.getInitialAppProps((store) => async ({ ctx, Component }: any) => {
    let pageProps: any = { protectedRoute: false };

    const reduxState = store.getState();
    const userData = reduxState?.webpage?.user;
    if (Component?.getPageProps) {
        pageProps = await Component?.getPageProps(ctx);
        if (!userData && pageProps?.protectedRoute) {
            if (ctx.res) {
                // On the server, we'll use an HTTP response to
                // redirect with the status code of our choice.
                // 307 is for temporary redirects.
                ctx.res.writeHead(302, { Location: '/login' });
                ctx.res.end();
            } else {
                // On the client, we'll use the Router-object
                // from the 'next/router' module.
                Router.push('/login');
            }
        }
    }

    // if sign-in page && userData
    if (ctx.pathname === '/login' && userData) {
        if (ctx.res) {
            ctx.res.writeHead(302, { Location: '/home' });
            ctx.res.end();
        } else {
            Router.push('/home');
        }
    }

    return {
        pageProps,
        userData
    };
});
export default wrapper.withRedux(MyApp);
