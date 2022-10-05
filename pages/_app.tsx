import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import { GlobalStyles } from '@mui/material';
import theme from 'utils/muiTheme';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { wrapper } from 'redux/store';
import Router from 'next/router';
import useAuthReducer from 'hooks/useAuthReducer';

function MyApp({ Component, pageProps }: AppProps) {
    const { user } = useAuthReducer();
    return (
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
                ctx.res.writeHead(302, { Location: '/sign-in' });
                ctx.res.end();
            } else {
                // On the client, we'll use the Router-object
                // from the 'next/router' module.
                Router.push('/sign-in');
            }
        }
    }

    // if sign-in page && userData
    if (ctx.pathname === '/sign-in' && userData) {
        if (ctx.res) {
            ctx.res.writeHead(302, { Location: '/games' });
            ctx.res.end();
        } else {
            Router.push('/games');
        }
    }

    return {
        pageProps,
        userData
    };
});
export default wrapper.withRedux(MyApp);
