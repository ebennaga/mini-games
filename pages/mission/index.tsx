import React from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';

const MissionContainer = dynamic(() => import('containers/Mission'), { ssr: false });

const Page = () => {
    return (
        <>
            <Head>
                <title>Mission | Prize Play</title>
                <meta name='description' content='Play for fun and prize' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <MissionContainer />
        </>
    );
};

Page.getPageProps = async () => {
    return {
        protectedRoute: true
    };
};

export default Page;
