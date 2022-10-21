import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';

const LoginPage = dynamic(() => import('containers/Login'), { ssr: false });

const Page = () => {
    return (
        <>
            <Head>
                <title>Login | Prize Play</title>
                <meta name='description' content='Play for fun and prize' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <LoginPage />
        </>
    );
};

export default Page;
