import React from 'react';
import Head from 'next/head';
import Layout from 'components/Layout/Index';
import dynamic from 'next/dynamic';

const MyReferralsContainer = dynamic(() => import('containers/MyReferrals'));
const Page = () => {
    return (
        <>
            <Head>
                <title>My Referrals</title>
                <meta name='description' content='Redeem code' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Layout>
                <MyReferralsContainer />
            </Layout>
        </>
    );
};

Page.getPageProps = async () => {
    return {
        protectedRoute: true
    };
};

export default Page;
