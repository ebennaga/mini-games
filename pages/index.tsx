import type { NextPage } from 'next';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import Layout from 'components/Layout/Index';

const HomePage = dynamic(() => import('containers/Home'), { ssr: false });

const Page: NextPage = () => {
    return (
        <>
            <Head>
                <title>Home | Prize Play</title>
                <link rel='manifest' href='/manifest.json' />
                <meta name='description' content='Generated by create next app' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Layout backgoundColor='#fff' isCarousel isTab isBackground>
                <HomePage />
            </Layout>
        </>
    );
};

export default Page;
