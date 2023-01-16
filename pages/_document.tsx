import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => {
    return (
        <Html>
            <Head>
                <link rel='preconnect' href='https://fonts.googleapis.com' />
                <link rel='preconnect' href='https://fonts.gstatic.com' />
                <link href='https://fonts.googleapis.com/css2?family=Epilogue:wght@100;300;600;700;900&display=swap' rel='stylesheet' />
                <link rel='manifest' href='/manifest.json' />
                <link rel='apple-touch-icon' href='/icon.png' />
                <meta name='theme-color' content='#fff' />
                <meta name='facebook-domain-verification' content='fn8rg0nxt2hs13pi1kkbtfsq4dadfd' />
            </Head>
            <body>
                <Main />
                <NextScript />
                <noscript>
                    {/* <iframe
                        src='https://www.googletagmanager.com/ns.html?id=GTM-N4328N7'
                        height='0'
                        width='0'
                        style='display:none;visibility:hidden'
                    /> */}
                    <iframe
                        src='https://www.googletagmanager.com/ns.html?id=GTM-N4328N7'
                        height='0'
                        width='0'
                        title='googleTagManagerNoScript'
                        style={{
                            display: 'none',
                            visibility: 'hidden'
                        }}
                    />
                </noscript>
            </body>
        </Html>
    );
};

export default Document;
