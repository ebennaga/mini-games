import Layout from 'components/Layout/Index';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import React from 'react';

const ProfileContainer = dynamic(() => import('containers/Profile'));

const Page = () => {
    return (
        <>
            <Head>
                <title>Profile | Prize Play</title>
                <meta name='description' content='Play for fun and prize' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Layout backgoundColor='#fff' isTab>
                <ProfileContainer />
            </Layout>
        </>
    );
};

export default Page;
