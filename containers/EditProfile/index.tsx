import { Box, ButtonBase, Typography } from '@mui/material';
import HeaderBack from 'components/HeaderBack';
import React from 'react';
import CreateIcon from '@mui/icons-material/Create';
import InputEdit from 'components/InputEdit';
import { useForm } from 'react-hook-form';

const EditProfile = () => {
    const form = useForm({
        mode: 'all',
        defaultValues: {
            nickname: ''
        }
    });

    return (
        <Box component='main' sx={{ width: '-webkit-fill-available', padding: '0 20px', color: '#373737', height: '90vh' }}>
            <HeaderBack title='Edit Profile' />
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                <Box>
                    <Box component='section' sx={{ margin: 'auto', width: 'fit-content', paddingTop: '48px', position: 'relative' }}>
                        <img src='/icons/dummy/profile-2.png' width='146px' height='146px' alt='profile' />
                        <ButtonBase
                            sx={{
                                background: '#A54CE5',
                                width: '30px',
                                height: '30px',
                                borderRadius: '50px',
                                position: 'absolute',
                                bottom: 0,
                                left: '109px',
                                border: '2px solid #fff'
                            }}
                        >
                            <CreateIcon sx={{ fontWeight: 'bold', fontSize: '20px', color: '#fff' }} />
                        </ButtonBase>
                    </Box>
                    <Box sx={{ width: '100%', marginTop: '43px' }}>
                        <InputEdit name='nickname' form={form} label='Nickname' value='LordRinto' />
                    </Box>
                </Box>
                <ButtonBase sx={{ width: '100%', background: '#A54CE5', color: '#fff', padding: '23px 0', borderRadius: '15px' }}>
                    <Typography component='span' fontSize='14px' fontWeight={700}>
                        Save Changes
                    </Typography>
                </ButtonBase>
            </Box>
        </Box>
    );
};

export default EditProfile;
