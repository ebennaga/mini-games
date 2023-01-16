/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Layout from 'components/Layout/Index';

const ShopsContainer = dynamic(() => import('containers/Shops'), { ssr: false });

export {};

declare global {
    interface Window {
        googletag: any;
    }
}

const Page = () => {
    React.useEffect(() => {
        const gptAdSlots = [];
        window.googletag = window.googletag || { cmd: [] };
        googletag.cmd.push(function () {
            const mapping1 = googletag
                .sizeMapping()
                .addSize(
                    [780, 500],
                    [
                        [300, 250],
                        [336, 280]
                    ]
                )
                .addSize(
                    [0, 0],
                    [
                        [300, 250],
                        [336, 280],
                        [300, 600]
                    ]
                )
                .build();

            gptAdSlots[0] = googletag
                .defineSlot(
                    '/21622890900,22860604212/ID_prizeplay.io_res_cate_mid3_336x280//300x250//320x100//320x50',
                    [
                        [300, 250],
                        [320, 50],
                        [336, 280],
                        [320, 100]
                    ],
                    'div-gpt-ad-1673345406261-0'
                )
                .setCollapseEmptyDiv(true)
                // .defineSizeMapping(mapping2)
                .addService(googletag.pubads());
            googletag.pubads().enableSingleRequest();
            googletag.enableServices();
            googletag.display('div-gpt-ad-1673345406261-0');
        });
    }, []);

    return (
        <>
            <Head>
                <title>Shops | Prize Play</title>
                <meta name='description' content='Play for fun and prize' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Layout backgoundColor='#fff' isTab isBackground>
                <ShopsContainer />
            </Layout>
        </>
    );
};

export default Page;
