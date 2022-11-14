import React from 'react';
import Head from 'next/head';
import Layout from 'components/Layout/Index';
import dynamic from 'next/dynamic';

const PromoCodeContainer = dynamic(() => import('containers/PromoCode'));
const Page = () => {
    return (
        <>
            <Head>
                <title>Promo Code</title>
                <meta name='description' content='Redeem code' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Layout>
                <PromoCodeContainer />
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
