/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Layout from 'components/Layout/Index';

const GameContainer = dynamic(() => import('containers/Game'), { ssr: false });

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
            const slot = googletag.defineOutOfPageSlot(
                '/21622890900,22860604212/ID_prizeplay.io_res_cate_interstitial_fullscreen',
                googletag.enums.OutOfPageFormat.INTERSTITIAL
            );
            if (slot) slot.addService(googletag.pubads());
            googletag.enableServices();
            googletag.display(slot);
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
                    '/21622890900,22860604212/ID_prizeplay.io_res_cate_mid2_336x280//300x250//320x100//320x50',
                    [
                        [320, 50],
                        [336, 280],
                        [320, 100],
                        [300, 250]
                    ],
                    'div-gpt-ad-1673345310263-0'
                )
                .setCollapseEmptyDiv(true)
                // .defineSizeMapping(mapping2)
                .addService(googletag.pubads());
            googletag.pubads().enableSingleRequest();
            googletag.enableServices();
            googletag.display('div-gpt-ad-1673345310263-0');
        });
    }, []);
    return (
        <>
            <Head>
                <title>Game | Prize Play</title>
                <meta name='description' content='Play for fun and prize' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <script async src='https://securepubads.g.doubleclick.net/tag/js/gpt.js' />
            <Layout isTab isBackground>
                <GameContainer playerImg1='' playerImg2='' playerImg3='' totalPlayer={0} />
            </Layout>
        </>
    );
};

export default Page;
