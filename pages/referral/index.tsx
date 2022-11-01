import React from 'react';
import Head from 'next/head';
import Layout from 'components/Layout/Index';
import dynamic from 'next/dynamic';

const ReferralContainer = dynamic(() => import('containers/Referral'));
const Page = () => {
    return (
        <>
            <Head>
                <title>Referral</title>
                <meta name='description' content='Redeem code' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Layout>
                <ReferralContainer />
            </Layout>
        </>
    );
};

export default Page;
