/* eslint-disable import/no-unresolved */
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import { GlobalStyles, Slide } from '@mui/material';
import theme from 'utils/muiTheme';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { wrapper } from 'redux/store';
import { SnackbarProvider } from 'notistack';
import Router, { useRouter } from 'next/router';
// import Router from 'next/router';
import useAuthReducer from 'hooks/useAuthReducer';
import React from 'react';
import Script from 'next/script';
import { appWithTranslation } from 'next-i18next';
import initMyFirebase from '../firebase/firebaseInit';
import 'swiper/css';

function MyApp({ Component, pageProps }: AppProps) {
    initMyFirebase();
    const { user } = useAuthReducer();

    const router = useRouter();

    React.useEffect(() => {
        if (!localStorage.getItem('popUpBanner')) {
            const dataLocal = {
                expires: new Date(),
                isShow: true
            };
            localStorage.setItem('popUpBanner', JSON.stringify(dataLocal));
        }
        if (!localStorage.getItem('tutorial')) {
            const dataLocal = {
                isTutorial: true,
                listTutorial: {
                    welcome: true,
                    coins: true,
                    profile: true,
                    games: true,
                    tournaments: true,
                    listOfGames: true,
                    prizes: true,
                    topUpCoins: true
                }
            };
            localStorage.setItem('tutorial', JSON.stringify(dataLocal));
        }
        if (!localStorage.getItem('prizePlaySound')) {
            localStorage.setItem('prizePlaySound', 'true');
        }
        const dataStorage: any = localStorage.getItem('prizePlay');
        if (!dataStorage) {
            localStorage.setItem('prizePlay', JSON.stringify({ language: 'id' }));
        }
        const parseData = JSON.parse(dataStorage);
        const locale = parseData?.language || 'id';
        router.push(router.pathname, router.asPath, { locale });
    }, []);

    return (
        <>
            <Script src='https://www.googletagmanager.com/gtag/js?id=G-JRKG9S44S5' strategy='afterInteractive' />
            <Script id='google-analytics' strategy='afterInteractive'>
                {`
           window.dataLayer = window.dataLayer || [];
           function gtag(){dataLayer.push(arguments);}
           gtag('js', new Date());
         
           gtag('config', 'G-JRKG9S44S5');
        `}
            </Script>
            <Script
                async
                src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3078290294001067'
                crossOrigin='anonymous'
            />
            <Script id='google-tag-manager' strategy='afterInteractive'>
                {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-NSVW4Z7');
        `}
            </Script>
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
        </>
    );
}

MyApp.getInitialProps = wrapper.getInitialAppProps((store) => async ({ ctx, Component }: any) => {
    let pageProps: any = { protectedRoute: false };

    const reduxState = store.getState();
    const userData = reduxState?.webpage?.user?.user?.api_token;
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

    // if login page && userData
    if (ctx.pathname === '/login' && userData) {
        if (ctx.res) {
            ctx.res.writeHead(302, { Location: '/' });
            ctx.res.end();
        } else {
            Router.push('/');
        }
    }

    return {
        pageProps,
        userData
    };
});
export default appWithTranslation(wrapper.withRedux(MyApp));
