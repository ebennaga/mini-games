import { Box, Divider, Typography } from '@mui/material';
import React from 'react';
import HeaderBack from 'components/HeaderBack';
import Button from 'components/Button/Index';

interface TutorialProps {
    type: any;
    image: any;
    desc: string;
    buttonColor: any;
    buttonTitle: string;
}

const TutorialComponent: React.FC<TutorialProps> = ({ type, image, desc, buttonColor, buttonTitle }) => {
    return (
        <>
            <Box padding='0px 20px'>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <img src={image} style={{ width: '55px' }} alt='img' />
                    <Typography sx={{ fontWeight: 'bold', fontSize: '24px' }}>{type}</Typography>
                </Box>
                <Typography sx={{ color: '#949494', fontSize: '12px', my: '20px' }}>{desc}</Typography>
                <Button title={buttonTitle} backgoundColor={buttonColor} color='white' />
            </Box>
            <Divider sx={{ m: type === 'Prize' ? '60px 0px 0px' : '25px 0px' }} />
        </>
    );
};

const TopupTutorialContainer = () => {
    const staticData = [
        {
            type: 'Coin',
            image: '/images/lg-coin-1.png',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
            buttonColor: '#FF4566',
            buttonTittle: 'Top up Coins Now'
        },
        {
            type: 'Point',
            image: '/images/lg-points.png',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
            buttonColor: '#A54CE5',
            buttonTittle: 'Participate Tournaments Now'
        },
        {
            type: 'Prize',
            image: '/images/ps5.png',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
            buttonColor: '#6FC0FB',
            buttonTittle: 'Reedem your prizes Now'
        }
    ];
    return (
        <Box sx={{ color: '#373737', width: '100%' }}>
            <Box
                padding='20px'
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    position: 'sticky',
                    zIndex: 9999,
                    backgroundColor: 'white',
                    width: '-webkit-fill-available',
                    top: 0
                }}
            >
                <HeaderBack title='How to get:' />
            </Box>
            {staticData.map((item, idx) => (
                <TutorialComponent
                    key={idx}
                    buttonTitle={item.buttonTittle}
                    type={item.type}
                    image={item.image}
                    buttonColor={item.buttonColor}
                    desc={item.desc}
                />
            ))}
        </Box>
    );
};

export default TopupTutorialContainer;
