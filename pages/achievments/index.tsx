import React from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';

const AchievmentsContainer = dynamic(() => import('containers/Achievments'), { ssr: false });

const Page = () => {
    return (
        <>
            <Head>
                <title>Achievments | Prize Play</title>
                <meta name='description' content='Play for fun and prize' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <AchievmentsContainer />
        </>
    );
};

export default Page;
