/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import type { NextPage } from 'next';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import Layout from 'components/Layout/Index';
import Script from 'next/script';
import React from 'react';

const HomePage = dynamic(() => import('containers/Home'), { ssr: false });
export {};

declare global {
    interface Window {
        googletag: any;
    }
}
const Page: NextPage = () => {
    return (
        <>
            <Head>
                <title>Home | Prize Play</title>
                <link rel='manifest' href='/manifest.json' />
                <meta name='description' content='Play for fun and prize' />
                <link rel='icon' href='/favicon.ico' />
                <meta name='facebook-domain-verification' content='fn8rg0nxt2hs13pi1kkbtfsq4dadfd' />
            </Head>
            <Script
                async
                src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3078290294001067'
                crossOrigin='anonymous'
            />

            <script async src='https://securepubads.g.doubleclick.net/tag/js/gpt.js' />

            <Layout backgoundColor='#fff' isCarousel isTab isBackground>
                <HomePage />
            </Layout>
        </>
    );
};

export default Page;
