import { Box, ButtonBase, Divider, Typography } from '@mui/material';
import TabPanelTransaction from 'containers/Transaction/TabPanelTransaction';
import React from 'react';

interface TabPanelEarningProps {
    value: any;
    index: any;
}

const listEarning = [
    {
        icon: '/icons/coin_rewards.png',
        title: 'Rewards Referral',
        status: '10:04'
    },
    {
        icon: '/icons/coin_rewards.png',
        title: 'Rewards Referral',
        status: '10:04'
    },
    {
        icon: '/icons/coin_rewards.png',
        title: 'Rewards Referral',
        status: '10:04'
    },
    {
        icon: '/icons/coin_rewards.png',
        title: 'Rewards Referral',
        status: '10:04'
    }
];
const TabPanelEarning: React.FC<TabPanelEarningProps> = ({ value, index }) => {
    return (
        <TabPanelTransaction value={value} index={index}>
            <Box>
                {listEarning.map((list: any) => (
                    <Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Box sx={{ display: 'flex', padding: '14px', alignItems: 'center' }}>
                                <Box>
                                    <img src={list.icon} alt='icon' />
                                </Box>
                                <Box sx={{ display: 'flex', flexDirection: 'column', paddingLeft: '20px' }}>
                                    <Typography sx={{ fontWeight: 700, fontSize: '14px' }}>{list.title}</Typography>
                                    <Typography sx={{ fontSize: '12px' }}>Transaction - {list.status}</Typography>
                                </Box>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Typography sx={{ fontWeight: 600, fontSize: '14px', color: '#56CF54' }}>+50</Typography>
                                <Box>
                                    <img src='/icons/coin_small.png' alt='coin' />
                                </Box>
                            </Box>
                        </Box>
                        <Divider />
                    </Box>
                ))}
                <Box sx={{ marginLeft: '24px', marginRight: '24px' }}>
                    <ButtonBase
                        sx={{ background: '#A54CE5', borderRadius: '15px', width: '100%', marginTop: '27px', marginBottom: '27px' }}
                    >
                        <Typography
                            component='span'
                            fontSize='14px'
                            paddingTop='24px'
                            paddingBottom='24px'
                            fontWeight={700}
                            sx={{ color: '#ffff' }}
                        >
                            Invite your friends.
                        </Typography>
                    </ButtonBase>
                </Box>
            </Box>
        </TabPanelTransaction>
    );
};

export default TabPanelEarning;
