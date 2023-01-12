/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import Layout from 'components/Layout/Index';

const CasualLoadingContainer = dynamic(() => import('containers/LoadingCasual'));
export {};

declare global {
    interface Window {
        googletag: any;
    }
}
const Page = () => {
    React.useEffect(() => {
        window.googletag = window.googletag || { cmd: [] };

        // adsense interstital
        googletag.cmd.push(function () {
            const slot = googletag.defineOutOfPageSlot(
                '/21622890900,22860604212/ID_prizeplay.io_res_cate_interstitial_fullscreen',
                googletag.enums.OutOfPageFormat.INTERSTITIAL
            );
            if (slot) slot.addService(googletag.pubads());
            googletag.enableServices();
            googletag.display(slot);
        });

        // adsense static
        // googletag.cmd.push(function () {
        //     googletag
        //         .defineSlot(
        //             '/21622890900,22860604212/ID_prizeplay.io_res_home_top_320x100//320x50',
        //             [
        //                 [320, 50],
        //                 [320, 100]
        //             ],
        //             'div-gpt-ad-1673344839334-0'
        //         )
        //         // .setCollapseEmptyDiv(false)
        //         .addService(googletag.pubads());
        //     googletag.pubads().enableSingleRequest();
        //     googletag.enableServices();
        //     googletag.display('div-gpt-ad-1673344839334-0');
        // });
    }, []);

    return (
        <>
            <Head>
                <title>Casual Play | Prize Play</title>
                <meta name='description' content='Play for fun and prize' />
                <link rel='icon' href='/favicon.ico' />
                <script
                    async
                    src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3078290294001067'
                    crossOrigin='anonymous'
                />
            </Head>
            <Layout backgoundColor='#fff'>
                <CasualLoadingContainer />
                {/* <div id='div-gpt-ad-1673344839334-0' style={{ textAlign: 'center' }} /> */}
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
