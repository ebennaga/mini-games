import { Box, ButtonBase, Divider, Typography } from '@mui/material';
import TabPanelTransaction from 'containers/Transaction/TabPanelTransaction';
import React from 'react';

interface TabPanelReferralProps {
    value: any;
    index: any;
}
const listReferral = [
    {
        icon: '/icons/dummy/user-1.png',
        user: '***4213',
        status: '2022-04-21 21:04:29'
    },
    {
        icon: '/icons/dummy/user-1.png',
        user: '***4213',
        status: '2022-04-21 21:04:29'
    }
];
const TabPanelReferral: React.FC<TabPanelReferralProps> = ({ value, index }) => {
    return (
        <TabPanelTransaction value={value} index={index}>
            <Box>
                {listReferral.map((list: any) => (
                    <Box>
                        <Box sx={{ display: 'flex', padding: '14px' }}>
                            <Box>
                                <img src={list.icon} alt='icon' />
                            </Box>
                            <Box sx={{ display: 'flex', flexDirection: 'column', paddingLeft: '20px' }}>
                                <Typography sx={{ fontWeight: 700, fontSize: '14px' }}>{list.user}</Typography>
                                <Typography sx={{ fontSize: '12px' }}>Signing up {list.status}</Typography>
                            </Box>
                            {/* <Divider /> */}
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

export default TabPanelReferral;
