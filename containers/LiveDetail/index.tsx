import { Box, Typography, Grid, ButtonBase } from '@mui/material';
import React, { SyntheticEvent } from 'react';
import Header from 'components/Header';
// import { useRouter } from 'next/router';
import { AccessTime, HelpOutline } from '@mui/icons-material';
import numberFormat from 'helper/numberFormat';
import getRemainingTimes from 'helper/getRemainingTime';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import SignupLoginDialog from 'components/Dialog/SignupLoginDialog';
import ParentTabs from './TabParent';
import TabPrizes from './TabPrizes';
import TabLeaderboard from './TabLeaderboard';
import DialogPassword from './DialogPassword';
import DialogBarcode from './DialogBarcode';

const LiveDetailContainer = () => {
    const isBack = true;
    const form = useForm({
        mode: 'all',
        defaultValues: {
            password: ''
        }
    });
    const newD = new Date().toLocaleString('en-US');
    const [value, setValue] = React.useState(0);
    const handleChangeTabs = (event: SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const userState = useSelector((state: any) => state.webpage?.user?.user);

    const [openDialogPass, setOpenDialogPass] = React.useState(false);
    const [openDialogBarcode, setOpenDialogBarcode] = React.useState(true);
    const [openDialogLogin, setOpenDialogLogin] = React.useState<boolean>(false);

    const handleJoinEvent = () => {
        if (userState?.api_token) {
            setOpenDialogPass(!openDialogPass);
        } else {
            setOpenDialogLogin(true);
        }
    };

    return (
        <Box width='100%'>
            <Box
                sx={{
                    mb: 2,
                    position: 'sticky',
                    top: 10,
                    zIndex: 999,
                    padding: '0px 20px',
                    backgroundColor: 'transparent'
                }}
            >
                <Header isBack={isBack} hrefBack='/games' point={102_300} profilePicture='/icons/dummy/profile.png' />
            </Box>
            <Box
                sx={{
                    backgroundImage: `url(https://prizeplay-minigames.s3.ap-southeast-3.amazonaws.com/thumbs/1/pp.png)`,
                    height: '50vh',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    position: 'relative',
                    zIndex: 1,
                    padding: '10px 0',
                    mt: '-61px',
                    borderRadius: '0px 0px 25px 25px'
                }}
            >
                <Box
                    sx={{
                        backgroundImage: 'linear-gradient(180deg, #353535 9.93%, rgba(53, 53, 53, 0) 90.83%)',
                        width: '99.5%',
                        height: '50%',
                        position: 'absolute',
                        top: '0px'
                    }}
                />
                <Grid container padding='0px 20px' />
                <Grid container padding='10px 20px' justifyContent='center' gap={2} position='relative' zIndex={2}>
                    <Grid item xs={12}>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'flex-end',
                                alignItems: 'center',
                                width: '100%',
                                height: '100%'
                            }}
                        >
                            <Box sx={{ width: '100%' }}>
                                <Typography
                                    sx={{ fontWeight: 'bold', color: 'white', fontSize: { xs: '23px', sm: '27px' }, lineHeight: '30px' }}
                                >
                                    Event Name
                                </Typography>
                                <Typography
                                    sx={{ fontWeight: 'bold', color: 'white', fontSize: { xs: '20px', sm: '25px' }, lineHeight: '30px' }}
                                >
                                    Hop Up
                                </Typography>
                            </Box>
                            <Grid
                                container
                                justifyContent='space-between'
                                sx={{ marginTop: { xs: '5%', sm: '10%' } }}
                                gap='10px'
                                width='100%'
                                alignItems='center'
                            >
                                <Grid item xs={8}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'start' }}>
                                        <ButtonBase
                                            sx={{
                                                color: 'black',
                                                backgroundColor: '#FFDD50',
                                                padding: '1px 10px',
                                                borderRadius: '24px',
                                                display: 'flex',
                                                width: '105px',
                                                justifyContent: 'space-between',
                                                alignItems: 'center',
                                                gap: '3px'
                                            }}
                                        >
                                            <AccessTime sx={{ width: '14px', fontWeight: 'bold' }} />
                                            <Typography sx={{ fontSize: '12px', fontWeight: 'bold' }}>{getRemainingTimes(newD)}</Typography>
                                        </ButtonBase>
                                        <ButtonBase
                                            sx={{
                                                color: 'white',
                                                backgroundColor: '#949494',
                                                padding: '1px 10px',
                                                borderRadius: '24px',
                                                display: 'flex',
                                                width: '100px',
                                                justifyContent: 'space-between',
                                                alignItems: 'center',
                                                gap: '3px'
                                            }}
                                        >
                                            <Typography sx={{ fontSize: '12px', fontWeight: 'bold' }}>Tutorials</Typography>
                                            <HelpOutline sx={{ width: '14px', fontWeight: 'bold' }} />
                                        </ButtonBase>
                                    </Box>
                                </Grid>
                                <Grid item xs='auto'>
                                    <Grid
                                        container
                                        alignItems='center'
                                        justifyContent='space-between'
                                        gap='10px'
                                        width='100px'
                                        sx={{ backgroundColor: '#FFDD50', paddingTop: '3px', paddingX: '1px', borderRadius: '10px' }}
                                    >
                                        <Grid item xs={4}>
                                            <img src='/images/users-img.png' alt='user-img' />
                                        </Grid>
                                        <Grid
                                            item
                                            xs={6}
                                            width='100
                                        %'
                                        >
                                            <Typography sx={{ fontSize: '11px', color: 'black', fontWeight: 'bold' }}>
                                                {numberFormat(100000)}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
                <Box
                    sx={{
                        backgroundImage: 'linear-gradient(transparent, #353535)',
                        width: '99.5%',
                        height: '50%',
                        position: 'absolute',
                        bottom: '0px',
                        borderRadius: '0px 0px 25px 25px'
                    }}
                />
            </Box>
            <Box sx={{ mt: '15px' }}>
                <ParentTabs value={value} handleChange={handleChangeTabs} />
            </Box>
            <TabPrizes index={0} value={value} />
            <TabLeaderboard index={1} value={value} />
            <Box sx={{ position: 'sticky', bottom: '20px', zIndex: 0, mx: '20px' }}>
                <ButtonBase
                    onClick={() => {
                        // setOpenDialogPass(!openDialogPass);
                        handleJoinEvent();
                    }}
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        width: '100%',
                        padding: '15px',
                        backgroundColor: '#A54CE5',
                        borderRadius: '10px'
                    }}
                >
                    <Typography sx={{ color: 'white', fontWeight: 600 }}>Join Event Tournament</Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <img src='/images/xs-coin.png' alt='coin' />
                        <Typography sx={{ fontWeight: 'bold', color: 'white' }}>20</Typography>
                    </Box>
                </ButtonBase>
            </Box>
            <DialogPassword form={form} open={openDialogPass} setOpen={setOpenDialogPass} />
            <DialogBarcode open={openDialogBarcode} setOpen={setOpenDialogBarcode} />
            <SignupLoginDialog open={openDialogLogin} setOpen={setOpenDialogLogin} />
        </Box>
    );
};

export default LiveDetailContainer;
