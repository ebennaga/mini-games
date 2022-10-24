import { Box, Typography } from '@mui/material';
import AchievmentCard from 'components/AchievmentCard';
import ButtonLanding from 'components/Button/Index';
import HeaderBack from 'components/HeaderBack';
import React, { useEffect, useState } from 'react';
import BadgeCard from './BadgeCard';
import BadgeSlider from './BadgesSlider';
import ProgressBar from './ProgressBar';
import TopGameProgress from './TopGameProgress';

const GameProgress = () => {
    const [borderValue, setBorderValue] = useState<string>('none');

    const handleScroll = () => {
        if (window.scrollY === 0) {
            return setBorderValue('none');
        }
        return setBorderValue('0.5px solid rgba(148, 148, 148, 0.35)');
    };

    useEffect(() => {
        const watchScroll = () => {
            window.addEventListener('scroll', handleScroll);
        };
        watchScroll();
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const dataAchievement = [
        { id: 1, xp: 200, scores: 500, isComplete: true },
        { id: 1, xp: 300, scores: 1000, isComplete: false },
        { id: 1, xp: 400, scores: 2000, isComplete: false },
        { id: 1, xp: 100, scores: 100, isComplete: true, isClaimed: true }
    ];
    const dataBadge = [
        { id: 1, title: 'Amateur Stack', scores: 100, isClaimed: true },
        { id: 1, title: 'Jump Stack', scores: 500, isClaimed: false },
        { id: 1, title: 'Stack', scores: 700, isClaimed: false },
        { id: 1, title: 'Jump jump', scores: 100, isClaimed: false }
    ];

    return (
        <Box width='100%'>
            <Box
                sx={{
                    mb: 2,
                    position: 'sticky',
                    top: 0,
                    zIndex: 999,
                    padding: borderValue !== 'none' ? '20px' : '0px 20px',
                    backgroundColor: '#fff',
                    borderBottom: borderValue
                }}
            >
                <HeaderBack title='Game Progress' />
            </Box>
            <Box padding='20px' mt='25px' mb='88px'>
                <TopGameProgress image='/images/dummy/game-hopup.svg' title='Hop Up' level='Beginner' exp='370/500' />
            </Box>
            <Box>
                <ProgressBar value={30} />
            </Box>
            <Box borderBottom='1px solid rgba(40, 38, 38, 0.2)' margin='51px 0 32px 0' />
            <Box padding='0 20px'>
                <Typography component='h2' fontSize='18px' fontWeight={700}>
                    Achievements
                </Typography>
                {dataAchievement.map((item: any) => {
                    return (
                        <AchievmentCard
                            xp={item.xp}
                            scores={item.scores}
                            coints={20}
                            isComplete={item.isComplete}
                            isClaimed={item.isClaimed}
                            key={item.id}
                        />
                    );
                })}
                <Box mt='39px'>
                    <ButtonLanding title='Claim Reward' backgoundColor='#A54CE5' color='#fff' />
                </Box>
            </Box>
            <Box borderBottom='1px solid rgba(40, 38, 38, 0.2)' margin='37px 0 28px 0' />
            <Box padding='0 20px' mb={10}>
                <Typography component='h2' fontSize='18px' fontWeight={700}>
                    Badges
                </Typography>
                <Box mt='28px'>
                    <BadgeSlider>
                        {dataBadge.map((item: any) => (
                            <BadgeCard
                                key={item.id}
                                title={item.title}
                                scores={item.scores}
                                isClaimed={item.isClaimed}
                                onClick={undefined}
                            />
                        ))}
                    </BadgeSlider>
                </Box>
            </Box>
        </Box>
    );
};

export default GameProgress;
