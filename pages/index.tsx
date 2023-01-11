/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import type { NextPage } from 'next';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import Layout from 'components/Layout/Index';
import Script from 'next/script';
import React from 'react';

const HomePage = dynamic(() => import('containers/Home'), { ssr: false });
export {};

declare global {
    interface Window {
        googletag: any;
    }
}
const Page: NextPage = () => {
    React.useEffect(() => {
        // window.googletag = window.googletag || { cmd: [] };
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
        //         .setCollapseEmptyDiv(false)
        //         .addService(googletag.pubads());
        //     googletag.pubads().enableSingleRequest();
        //     googletag.enableServices();
        //     googletag.display('div-gpt-ad-1673344839334-0');
        // });

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
                    '/21622890900,22860604212/ID_prizeplay.io_res_home_mid_300x600//300x250//336x280',
                    [
                        [300, 600],
                        [300, 250],
                        [336, 280]
                    ],
                    'div-gpt-ad-1673345189765-0'
                )
                // .setCollapseEmptyDiv(true)
                .defineSizeMapping(mapping1)
                .addService(googletag.pubads());
            googletag.pubads().enableSingleRequest();
            googletag.enableServices();
            googletag.display('div-gpt-ad-1673345189765-0');
        });
    }, []);
    return (
        <>
            <Head>
                <title>Home | Prize Play</title>
                <link rel='manifest' href='/manifest.json' />
                <meta name='description' content='Play for fun and prize' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Script
                async
                src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3078290294001067'
                crossOrigin='anonymous'
            />

            <script async src='https://securepubads.g.doubleclick.net/tag/js/gpt.js' />

            <Layout backgoundColor='#fff' isCarousel isTab isBackground>
                <HomePage />
                <div id='div-gpt-ad-1673345189765-0' style={{ textAlign: 'center', marginTop: '10%', backgroundColor: '#92a8d1' }}>
                    <script>
                        {/* var gptAdSlots = [];
      window.googletag = window.googletag || {cmd: []};
      googletag.cmd.push(function() {
      var mapping1 = googletag.sizeMapping().
      addSize([780, 500],[[300, 250], [336, 280]]).
      addSize([0, 0], [[300, 250], [336, 280], [300, 600]]).
      build();   
          gptAdSlots[0] =
          googletag.defineSlot('/21622890900,22860604212/ID_prizeplay.io_res_home_mid_300x600//300x250//336x280', [[300, 600], [300, 250], [336, 280]], 'div-gpt-ad-1673345189765-0').setCollapseEmptyDiv(true).defineSizeMapping(mapping1).addService(googletag.pubads());
          googletag.pubads().enableSingleRequest();googletag.enableServices();googletag.display('div-gpt-ad-1673345189765-0');
      }); */}
                    </script>
                </div>
            </Layout>
        </>
    );
};

export default Page;
