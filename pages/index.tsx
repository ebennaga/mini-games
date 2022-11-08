/* eslint-disable no-unused-vars */
import type { NextPage } from 'next';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import Layout from 'components/Layout/Index';
import Script from 'next/script';

const HomePage = dynamic(() => import('containers/Home'), { ssr: false });

const Page: NextPage = () => {
    return (
        <>
            <Head>
                <title>Home | Prize Play</title>
                <link rel='manifest' href='/manifest.json' />
                <meta name='description' content='Play for fun and prize' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Script
                async
                src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3078290294001067'
                crossOrigin='anonymous'
            />

            <Layout backgoundColor='#fff' isCarousel isTab isBackground>
                <HomePage />
            </Layout>
        </>
    );
};

export default Page;
