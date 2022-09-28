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
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
};

export default Document;
