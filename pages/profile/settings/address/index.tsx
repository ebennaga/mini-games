import React from 'react';
import Head from 'next/head';
import Layout from 'components/Layout/Index';
import dynamic from 'next/dynamic';

const ProfileSettingAddress = dynamic(() => import('containers/ProfileAddress'));

const Page = () => {
    return (
        <>
            <Head>
                <title>Settings Address | Prize Play</title>
                <meta name='description' content='Play for fun and prize' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Layout backgoundColor='#fff'>
                <ProfileSettingAddress />
            </Layout>
        </>
    );
};

export default Page;
