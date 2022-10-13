import { Box, ButtonBase, Typography } from '@mui/material';
import HeaderBack from 'components/HeaderBack';
import NavigationCard from 'components/NavigationCard';
import SwitchCard from 'components/SwitchCard';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import useAuthReducer from 'hooks/useAuthReducer';
import DeleteAccountDialog from './DeleteAccountDialog';

const ProfileSetting = () => {
    const { clearUser } = useAuthReducer();
    const router = useRouter();

    const [deleteDialog, setDeleteDialog] = useState(false);

    const form = useForm({
        mode: 'all',
        defaultValues: {
            notification: false,
            gameSound: true
        }
    });

    const handleNotification = async () => {
        const notification = form.watch('notification');
        if (notification) {
            form.setValue('notification', false);
        } else {
            form.setValue('notification', true);
        }
        alert(notification);
    };

    const handleGameSound = async () => {
        const gameSound = form.watch('gameSound');
        if (gameSound) {
            form.setValue('gameSound', false);
        } else {
            form.setValue('gameSound', true);
        }
        alert(gameSound);
    };

    const handleSignOut = () => {
        clearUser();
        router.push('/');
    };
    const handleDelete = () => router.push('/signup');

    const generalItem = [
        { title: 'Avatar & Nickname', icon: '/icons/dummy/profile-2.png', href: '/profile/edit-profile' },
        { title: 'Email & Address', icon: '/icons/email.svg', href: '/profile/settings/email-address' }
    ];
    const supportData = [
        { title: 'About Prize Play', icon: '/icons/about.svg', href: '/about-us' },
        { title: 'How to get coins & prizes', icon: '/icons/coin-price.svg', href: '/coins-prizes' },
        { title: 'Help & Support', icon: '/icons/help.svg', href: '/help-support' },
        { title: 'Reported Issues', icon: '/icons/report-issue.svg', href: '/reported' },
        { title: 'Privacy policy', icon: '/icons/privacy.svg', href: '/privacy-policy' },
        { title: 'Terms & Conditions', icon: '/icons/term.svg', href: '/terms-conditions' }
    ];

    const handleHref = (href: string) => {
        router.push(href);
    };

    return (
        <Box component='main' sx={{ width: '-webkit-fill-available', padding: '0 20px', color: '#373737' }}>
            <HeaderBack title='Settings' />
            <Box component='section' sx={{ marginTop: '43px' }}>
                <Typography component='h2' fontSize='20px' fontWeight={700}>
                    General
                </Typography>
                {generalItem.map((item: any, index: number) => {
                    return (
                        <Box key={index} sx={{ borderBottom: '2px solid #F4F1FF', padding: '20px 0' }}>
                            <NavigationCard icon={item.icon} title={item.title} onClick={() => handleHref(item.href)} />
                        </Box>
                    );
                })}
                <Box sx={{ borderBottom: '2px solid #F4F1FF', padding: '20px 0' }}>
                    <SwitchCard
                        icon='/icons/notification.svg'
                        title='Notification'
                        onChange={handleNotification}
                        form={form}
                        name='notification'
                        value={form.watch('notification')}
                    />
                </Box>
            </Box>
            <Box component='section' sx={{ marginTop: '24px' }}>
                <Typography component='h2' fontSize='20px' fontWeight={700}>
                    Sounds
                </Typography>
                <Box sx={{ borderBottom: '2px solid #F4F1FF', padding: '20px 0' }}>
                    <SwitchCard
                        icon='/icons/sound.svg'
                        title='Game Sound'
                        onChange={handleGameSound}
                        form={form}
                        name='gameSound'
                        value={form.watch('gameSound')}
                    />
                </Box>
            </Box>
            <Box component='section' sx={{ marginTop: '24px' }}>
                <Typography component='h2' fontSize='20px' fontWeight={700}>
                    Support
                </Typography>
                {supportData.map((item: any, index: number) => {
                    return (
                        <Box key={index} sx={{ borderBottom: '2px solid #F4F1FF', padding: '20px 0' }}>
                            <NavigationCard icon={item.icon} title={item.title} onClick={() => handleHref(item.href)} />
                        </Box>
                    );
                })}
            </Box>
            <ButtonBase
                onClick={handleSignOut}
                sx={{ background: '#F4F1FF', width: '100%', height: '60px', borderRadius: '15px', margin: '24px 0' }}
            >
                <Typography component='span' fontSize='14px' fontWeight={700}>
                    Sign Out
                </Typography>
            </ButtonBase>
            <ButtonBase onClick={() => setDeleteDialog(true)} sx={{ width: '100%' }}>
                <Typography component='span' fontSize='14px' fontWeight={700} sx={{ color: '#A54CE5' }}>
                    Delete Account
                </Typography>
            </ButtonBase>
            <Box sx={{ width: '100%', textAlign: 'center', marginTop: '35px', marginBottom: '100px' }}>
                <Typography component='p' fontSize='14px' fontWeight={700}>
                    0.3.1
                </Typography>
            </Box>
            <DeleteAccountDialog open={deleteDialog} setOpen={setDeleteDialog} handleDelete={handleDelete} />
        </Box>
    );
};

export default ProfileSetting;
