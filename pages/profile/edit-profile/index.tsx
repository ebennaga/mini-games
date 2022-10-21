import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import Layout from 'components/Layout/Index';

const EditProfileContainer = dynamic(() => import('containers/EditProfile'));

const Page = () => {
    return (
        <>
            <Head>
                <title>Edit Profile | Prize Play</title>
                <meta name='description' content='Play for fun and prize' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Layout backgoundColor='#fff'>
                <EditProfileContainer />
            </Layout>
        </>
    );
};

export default Page;
