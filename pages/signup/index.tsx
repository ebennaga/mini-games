import type { NextPage } from 'next';
import Head from 'next/head';
import dynamic from 'next/dynamic';

const SignUpPage = dynamic(() => import('containers/SignUp'), { ssr: false });

const Page: NextPage = () => {
    return (
        <>
            <Head>
                <title>Prize Play</title>
            </Head>
            <SignUpPage />
        </>
    );
};

export default Page;
