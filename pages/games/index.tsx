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
                <title>Game | Prize Play</title>
                <meta name='description' content='Play for fun and prize' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <script async src='https://securepubads.g.doubleclick.net/tag/js/gpt.js' />
            <Layout isTab isBackground>
                <GameContainer playerImg1='' playerImg2='' playerImg3='' totalPlayer={0} />
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
