import React from 'react';
import Head from 'next/head';
import Layout from 'components/Layout/Index';
import GoogleAds from 'components/GoogleAds';
// import Script from 'next/script';

const Page = () => {
    return (
        <>
            <Head>
                <title>Ads on</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Layout>
                {/* <Script
                            async
                            onError={(e) => {
                                console.error('Script failed to load', e);
                            }}
                            src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6117296389444443'
                            crossOrigin='anonymous'
                        /> */}
                {/* <ins
                    className='adsbygoogle'
                    style={{ display: 'block' }}
                    data-ad-client='ca-pub-6117296389444443'
                    data-ad-slot='7847289836'
                    data-ad-format='auto'
                    data-full-width-responsive='true'
                />
                <script>(adsbygoogle = window.adsbygoogle || []).push({});</script> */}
                <GoogleAds currentPath='testAdsense' />
            </Layout>
        </>
    );
};

export default Page;
