/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import Layout from 'components/Layout/Index';

const PlayGameContainer = dynamic(() => import('containers/PlayTournament'));
export {};

declare global {
    interface Window {
        googletag: any;
    }
}

const Page = () => {
    React.useEffect(() => {
        window.googletag = window.googletag || { cmd: [] };
        googletag.cmd.push(function () {
            // googletag
            //     .defineSlot(
            //         '/21622890900,22860604212/ID_prizeplay.io_res_cate_top_320x100//320x50',
            //         [
            //             [320, 50],
            //             [320, 100]
            //         ],
            //         'div-gpt-ad-1673345092793-0'
            //     )
            //     // .setCollapseEmptyDiv(true)
            //     .addService(googletag.pubads());
            // googletag.pubads().enableSingleRequest();
            // googletag.enableServices();
            // googletag.display('div-gpt-ad-1673345092793-0');
            googletag
                .defineSlot(
                    '/21622890900,22860604212/ID_prizeplay.io_res_cate_top_320x100//320x50',
                    [
                        [320, 50],
                        [320, 100]
                    ],
                    'div-gpt-ad-1673345092793-0'
                )
                .setCollapseEmptyDiv(true)
                .addService(googletag.pubads());
            googletag.pubads().enableSingleRequest();
            googletag.enableServices();
            googletag.display('div-gpt-ad-1673345092793-0');
        });
    }, []);
    return (
        <>
            <Head>
                <title>Tournament | Prize Play</title>
                <meta name='description' content='Play for fun and prize' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Layout backgoundColor='#fff' isBackground>
                <PlayGameContainer />
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
