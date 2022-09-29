import React from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Layout from 'components/Layout/Index';

const RaffleContainer = dynamic(() => import('containers/Raffle'), { ssr: false });

const Page = () => {
    return (
        <>
            <Head>
                <title>Luckt Raffle | Prize Play</title>
                <meta name='description' content='Generated by create next app' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Layout backgoundColor='#fff' isBackground>
                <RaffleContainer />
            </Layout>
        </>
    );
};

export default Page;
