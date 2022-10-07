import React from 'react';
import Head from 'next/head';
import Layout from 'components/Layout/Index';
import dynamic from 'next/dynamic';

const ProfileSettingContainer = dynamic(() => import('containers/ProfileEmailAddress'));

const Page = () => {
    return (
        <>
            <Head>
                <title>Settings Email & Address | Prize Play</title>
                <meta name='description' content='Generated by create next app' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Layout backgoundColor='#fff'>
                <ProfileSettingContainer />
            </Layout>
        </>
    );
};

export default Page;
