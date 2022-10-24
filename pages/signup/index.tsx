import type { NextPage } from 'next';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

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
export async function getStaticProps({ locales }: any) {
    return {
        props: {
            ...(await serverSideTranslations(locales, ['home', 'common']))
            // Will be passed to the page component as props
        }
    };
}
