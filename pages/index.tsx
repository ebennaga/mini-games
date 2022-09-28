import type { NextPage } from 'next';
import Head from 'next/head';
import dynamic from 'next/dynamic';

const LandingPage = dynamic(() => import('containers/Landing'), { ssr: false });

const Page: NextPage = () => {
    return (
        <>
            <Head>
                <title>Prize Play</title>
                <link rel='manifest' href='/manifest.json' />
            </Head>
            <LandingPage />
        </>
    );
};

export default Page;
