import React from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Layout from 'components/Layout/Index';

const PrivacyPolicyContainer = dynamic(() => import('containers/PrivacyPolicy'));

const Page = () => {
    return (
        <>
            <Head>
                <title>Privacy Policy | Prize Play</title>
                <meta name='description' content='Prize play privacy policy' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Layout>
                <PrivacyPolicyContainer />
            </Layout>
        </>
    );
};

export default Page;
