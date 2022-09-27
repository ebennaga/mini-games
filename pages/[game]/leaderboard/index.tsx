import Layout from 'components/Layout/Index';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import React from 'react';

const LeaderBoardContainer = dynamic(() => import('containers/Leaderboard'));

const Page = () => {
    return (
        <>
            <Head>
                <title>Game | Leaderboard</title>
                <meta name='description' content='Prize play' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Layout backgoundColor='#fff'>
                <LeaderBoardContainer />
            </Layout>
        </>
    );
};

export default Page;
