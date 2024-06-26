import React from 'react';
import Head from 'next/head';
import Layout from 'components/Layout/Index';
import dynamic from 'next/dynamic';

const ProfileSettingContainer = dynamic(() => import('containers/ProfileSetting'));

const Page = () => {
    return (
        <>
            <Head>
                <title>Profile Settings | Prize Play</title>
                <meta name='description' content='Play for fun and prize' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Layout backgoundColor='#fff'>
                <ProfileSettingContainer />
            </Layout>
        </>
    );
};

export default Page;
