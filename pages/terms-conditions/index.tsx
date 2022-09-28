import React from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Layout from 'components/Layout/Index';

const TermsConditionsContainer = dynamic(() => import('containers/TermsConditions'));

const Page = () => {
    return (
        <>
            <Head>
                <title>Terms Conditions | Prize Play</title>
                <meta name='description' content='Prize play terms conditions' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Layout>
                <TermsConditionsContainer />
            </Layout>
        </>
    );
};

export default Page;
