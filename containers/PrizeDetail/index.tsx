/* eslint-disable no-param-reassign */
import { Box, Typography, Divider, Grid } from '@mui/material';
import React from 'react';
import Header from 'components/Header';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import numberFormat from 'helper/numberFormat';
import Button from 'components/Button/Index';
import Paragraph from 'components/Paragraph';
import NotifDialog from 'components/Dialog/notifDialog';
import AgeConfirmationDialog from 'components/Dialog/AgeConfirmationDialog';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import SignupLoginDialog from 'components/Dialog/SignupLoginDialog';
import useAPICaller from 'hooks/useAPICaller';
import { useRouter } from 'next/router';
import useNotify from 'hooks/useNotify';
import PrizeSkeletonDetail from './PrizeDetailSkeleton';
import PrizeDetailSlider from './PrizeDetailSlider';

const PrizeDetailContainer = () => {
    const userState = useSelector((state: any) => state.webpage?.user?.user);
    const [isFavorite, setIsFavorite] = React.useState<boolean>(false);
    const [open, setOpen] = React.useState<boolean>(false);
    const [dialogConfirm, setDialogConfirm] = React.useState<boolean>(false);
    const [dialogSignupLogin, setDialogSignupLogin] = React.useState<boolean>(false);
    const [isLoading, setIsLoading] = React.useState<boolean>(true);
    const [data, setData] = React.useState<any>(null);

    const { fetchAPI } = useAPICaller();
    const router = useRouter();
    const notify = useNotify();

    const form = useForm({
        mode: 'all',
        defaultValues: {
            date: new Date().getDate() || '',
            month: new Date().getMonth()?.toLocaleString() || '',
            year: new Date().getFullYear() || ''
        }
    });

    const [borderValue, setBorderValue] = React.useState<string>('none');
    const handleScroll = () => {
        if (window.scrollY === 0) {
            return setBorderValue('none');
        }
        return setBorderValue('0.5px solid rgba(148, 148, 148, 0.35)');
    };

    const getDetailRedeem = async () => {
        setIsLoading(true);
        const response = await fetchAPI({ method: 'GET', endpoint: `redemptions/${router.query.id}` });
        if (response.status === 200) {
            setData(response.data.data);
        } else if (response.status === 401) {
            router.push('/shops');
        } else {
            notify(response.data.message, 'error');
        }
        setIsLoading(false);
    };

    React.useEffect(() => {
        const watchScroll = () => {
            window.addEventListener('scroll', handleScroll);
        };
        watchScroll();
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const handleReedem = () => {
        if (userState) {
            if (userState?.point < data.price) {
                return setOpen(!open);
            }
            return setDialogConfirm(true);
        }
        return setDialogSignupLogin(true);
    };

    React.useEffect(() => {
        getDetailRedeem();
    }, []);

    if (isLoading) {
        return <PrizeSkeletonDetail />;
    }
    return (
        <Box sx={{ width: '100%' }}>
            <Box
                padding='25px'
                sx={{
                    borderBottom: borderValue,
                    position: 'sticky',
                    top: -1,
                    backgroundColor: 'white',
                    zIndex: 999,
                    width: '-webkit-fill-available'
                }}
            >
                <Header isShops hrefBack='/shops' isBack point={numberFormat(userState?.point)} profilePicture='/icons/dummy/profile.png' />
            </Box>
            <PrizeDetailSlider>
                {data?.images.map((item: any, idx: number) => (
                    <Box key={idx}>
                        <img
                            src={item.image_url}
                            alt='ps5-icon'
                            style={{ width: '99%' }}
                            onError={({ currentTarget }) => {
                                currentTarget.onerror = null;
                                currentTarget.src = '/images/img_error.svg';
                            }}
                        />
                    </Box>
                ))}
            </PrizeDetailSlider>
            <Box padding='10px 20px'>
                <Box sx={{ mt: '15px' }}>
                    <Grid container justifyContent='space-between'>
                        <Grid item xs={6}>
                            <Typography sx={{ fontWeight: 'bold', fontSize: '24px' }}>{data?.name}</Typography>
                        </Grid>
                        <Grid
                            item
                            xs={1}
                            onClick={() => {
                                setIsFavorite(!isFavorite);
                            }}
                        >
                            {isFavorite ? (
                                <Favorite sx={{ color: 'red', cursor: 'pointer' }} />
                            ) : (
                                <FavoriteBorder sx={{ color: '#949494', cursor: 'pointer' }} />
                            )}
                        </Grid>
                    </Grid>
                    <Box sx={{ display: 'flex', gap: '8px', alignItems: 'center', mt: '40px' }}>
                        <Box>
                            <img src='/images/point-shops.png' alt='pointshops' />
                        </Box>
                        <Typography sx={{ fontWeight: 'bold', fontSize: '24px' }}>{numberFormat(data?.price)}</Typography>
                    </Box>
                </Box>
            </Box>
            <Divider sx={{ my: '25px' }} />
            <Box padding='20px 20px' position='relative'>
                {/* <Paragraph
                    title='Highlight'
                    paragraph=' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                /> */}
                <Paragraph title='Description' paragraph={data?.description} />
                {/* <Box sx={{ mb: '180px' }}>
                    <Paragraph
                        title='Terms and Conditions'
                        paragraph='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                    />
                </Box> */}
                <Box sx={{ position: 'sticky', bottom: '20px', zIndex: 0 }}>
                    <Button onClick={handleReedem} title='Reedem' backgoundColor='#A54CE5' color='white' />
                </Box>
            </Box>
            <NotifDialog
                setOpenDialog={setOpen}
                open={open}
                body='You don’t have Points in your balance. 
Play Tournament and get points to continue'
                textButton='Show Tournaments'
            />
            <AgeConfirmationDialog
                form={form}
                nameDate='date'
                nameMonth='month'
                nameYear='year'
                open={dialogConfirm}
                setOpen={setDialogConfirm}
            />
            <SignupLoginDialog open={dialogSignupLogin} setOpen={setDialogSignupLogin} />
        </Box>
    );
};

export default PrizeDetailContainer;
