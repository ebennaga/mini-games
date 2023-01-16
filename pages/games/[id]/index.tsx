import React from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Layout from 'components/Layout/Index';

const GameDetailContainer = dynamic(() => import('containers/GameDetail'), { ssr: false });

const Page = () => {
    React.useEffect(() => {
        googletag.cmd.push(function () {
            // Ensure the first call to display comes after static ad slot
            // divs are defined.
        });
    }, []);
    return (
        <>
            <Head>
                <title>Game Detail | Prize Play</title>
                <meta name='description' content='Play for fun and prize' />
                <link rel='icon' href='/favicon.ico' />
                <script async src='https://securepubads.g.doubleclick.net/tag/js/gpt.js' />
            </Head>
            <Layout isBackground>
                <GameDetailContainer />
            </Layout>
        </>
    );
};

export default Page;
