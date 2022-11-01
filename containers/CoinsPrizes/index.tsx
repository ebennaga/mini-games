import { Box } from '@mui/material';
import HeaderBack from 'components/HeaderBack';
// import { useRouter } from 'next/router';
import React from 'react';
import HTGCard from './HTGCard';

const CoinsPrizes = () => {
    // const router = useRouter();
    const helpSupportData = [
        {
            href: '/topup',
            image: '/images/dummy/coin-banner.png',
            title: 'How to get Coin ?',
            paragraph: 'To top up coin choose menu COIN, and to join tournament you can find in menu GAMES.'
        },
        {
            href: '/tournaments',
            image: '/images/dummy/point-banner.png',
            title: 'How to get Point ?',
            paragraph: 'To get points you need to join tournament and then more you play, the more you you get'
            // customParagraph: (
            //     <>
            //         <Typography component='p' fontWeight={400} lineHeight='12px' fontSize='12px' sx={{ color: '#949494' }}>
            //             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            //         </Typography>
            //         <Typography component='p' fontWeight={400} lineHeight='12px' fontSize='12px' sx={{ pt: '8px', color: '#949494' }}>
            //             Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
            //         </Typography>
            //     </>
            // )
        },
        {
            href: '/shops',
            image: '/images/dummy/prize-banner.png',
            title: 'How to get prize ?',
            paragraph: ' Firstly you need to gain points, and you can redeem prize according to the points you have'
        }
    ];

    return (
        <Box component='main' sx={{ width: '-webkit-fill-available', padding: '0 20px', color: '#373737' }}>
            <HeaderBack title='How to get' />
            <Box component='section'>
                <Box component='section'>
                    {helpSupportData.map((item: any, index: number) => {
                        return (
                            <React.Fragment key={index}>
                                <HTGCard
                                    href={item.href}
                                    image={item.image}
                                    title={item.title}
                                    paragraph={item.paragraph}
                                    customParagraph={item.customParagraph}
                                />
                            </React.Fragment>
                        );
                    })}
                </Box>
                {/* <GetCard
                    icon='/icons/coins.png'
                    title='Coin'
                    paragraph='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi '
                    onClick={() => router.push('/topup')}
                    buttonText='Top up Coins Now'
                    buttonColor='#FF4566'
                />
                <GetCard
                    icon='/images/md-point-shops.png'
                    title='Point'
                    paragraph='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'
                    secondParagraph='Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip'
                    onClick={() => router.push('/tournaments')}
                    buttonText='Participate Tournaments Now'
                    buttonColor='#A54CE5'
                />
                <GetCard
                    icon='/images/ps5.png'
                    title='Prize'
                    paragraph='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'
                    secondParagraph='Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip'
                    onClick={() => router.push('/shops')}
                    buttonText='Reedem your prizes Now'
                    buttonColor='#6FC0FB'
                /> */}
            </Box>
        </Box>
    );
};

export default CoinsPrizes;
