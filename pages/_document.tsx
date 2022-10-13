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
                <script
                    async
                    onError={(e) => {
                        console.error('Script failed to load', e);
                    }}
                    src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6117296389444443'
                    crossOrigin='anonymous'
                />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            (adsbygoogle = window.adsbygoogle || []).push({
                                google_ad_client: "ca-pub-6117296389444443",
                                enable_page_level_ads: true
                                });
                                `
                    }}
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
};

export default Document;
