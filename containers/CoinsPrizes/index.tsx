import { Box } from '@mui/material';
import HeaderBack from 'components/HeaderBack';
import { useRouter } from 'next/router';
import React from 'react';
import GetCard from './GetCard';

const CoinsPrizes = () => {
    const router = useRouter();

    return (
        <Box component='main' sx={{ width: '-webkit-fill-available', padding: '0 20px', color: '#373737' }}>
            <HeaderBack title='How to get' />
            <Box component='section'>
                <GetCard
                    icon='/icons/coins.png'
                    title='Coin'
                    paragraph='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi '
                    onClick={() => router.push('/topup')}
                    buttonText='Top up Coins Now'
                    buttonColor='#FF4566'
                />
                <GetCard
                    icon='/icons/points.png'
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
                />
            </Box>
        </Box>
    );
};

export default CoinsPrizes;
