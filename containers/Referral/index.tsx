import React from 'react';
import HeaderBack from 'components/HeaderBack';
import { Box, Typography, ButtonBase, TextField } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { useRouter } from 'next/router';

const Referral = () => {
    const router = useRouter();
    return (
        <Box component='main' sx={{ width: '-webkit-fill-available', padding: '0 20px', color: '#373737' }}>
            <HeaderBack title='Promo Code' />
            <Box component='section' sx={{ position: 'relative' }}>
                <Box sx={{ marginTop: '57px', textAlign: 'center', marginLeft: '24px', marginRight: '24px' }}>
                    <img src='/images/referral.png' alt='' />
                    <Typography sx={{ fontWeight: 700, fontSize: '24px', lineHeight: '24px' }}>
                        Invite your friends
                        <br />& earn free coins
                    </Typography>
                    <Typography sx={{ color: '#949494', fontWeight: 400, fontSize: '12px', marginBottom: '14px', marginTop: '24px' }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        <br /> sed do eiusmod tempor incididunt ut labore et dolore
                    </Typography>
                    <Typography sx={{ color: '#949494', fontWeight: 400, fontSize: '12px', marginBottom: '14px', marginTop: '24px' }}>
                        Ut enim ad minim veniam, quis nostrud exercitation
                        <br /> ullamco laboris nisi ut aliquip
                    </Typography>
                    <Box sx={{ width: '100%', position: 'relative', marginTop: '24px' }}>
                        <Typography
                            component='label'
                            fontSize='12px'
                            fontWeight={400}
                            sx={{ color: '#949494', position: 'absolute', zIndex: 90, top: '10px', left: '19px' }}
                        >
                            Your invite link:
                        </Typography>
                        <TextField
                            fullWidth
                            contentEditable='false'
                            value='https://www.prizeplay.io/en-us/v/register/double-invite/?invite_code=rm9g4223&inviter_id=11345710'
                            InputProps={{
                                endAdornment: (
                                    <ButtonBase>
                                        <ContentCopyIcon sx={{ color: '#949494', fontSize: '22px' }} />
                                    </ButtonBase>
                                )
                            }}
                            sx={{
                                textOverflow: 'ellipsis',
                                '& .MuiInputBase-root': {
                                    borderRadius: '10px',
                                    height: '73px',
                                    background: '#F4F1FF'
                                },
                                '& .MuiInputBase-input': {
                                    fontWeight: 'bold',
                                    fontSize: '20px',
                                    borderRadius: '15px',
                                    background: '#F4F1FF',
                                    paddingTop: '27px',
                                    paddingLeft: '19px',
                                    paddingBottom: '10px'
                                },
                                '& .MuiInput-root': {
                                    borderRadius: '5px',
                                    height: '50px',
                                    padding: '30px 20px',
                                    width: '100%'
                                },
                                '& .MuiOutlinedInput-notchedOutline': {
                                    borderColor: '#F4F1FF !important',
                                    borderRadius: '15px'
                                },
                                '& .MuiFormHelperText-root': {
                                    color: 'rgba(0, 0, 0, 0.7)',
                                    fontSize: ' 18px',
                                    marginTop: '10px',
                                    '&.Mui-error': {
                                        color: '#CD1719'
                                    }
                                }
                            }}
                        />
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '24px', marginBottom: '24px' }}>
                        <Typography sx={{ color: '#949494', fontWeight: 400, fontSize: '14px', marginBottom: '24px' }}>
                            My referral friends
                        </Typography>
                        <ButtonBase onClick={() => router.push('/myReferral')}>
                            <Typography sx={{ color: '#949494', fontWeight: 500, fontSize: '12px', marginBottom: '24px' }}>
                                2 members &gt;
                            </Typography>
                        </ButtonBase>
                    </Box>
                </Box>

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
        </Box>
    );
};

export default Referral;
