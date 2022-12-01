/* eslint-disable no-param-reassign */
import { Box, Typography, ImageList, ImageListItem, TextField, InputAdornment } from '@mui/material';
import { Search } from '@mui/icons-material';
import React from 'react';
import Header from 'components/Header';
import { Controller, useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import useAPICaller from 'hooks/useAPICaller';
import useNotify from 'hooks/useNotify';
import dataComingSoon from 'utils/dataComingSoon';
import ImageListItemComingSoon from 'components/ImageListComingSoon';
import { useSelector } from 'react-redux';
import SignupLoginDialog from 'components/Dialog/SignupLoginDialog';
import PrizeSkeleton from './PrizeSkeleton';

interface InputPrizesProps {
    placeholder: string;
    form: any;
    name: string;
}

const InputPrizes: React.FC<InputPrizesProps> = ({ placeholder, form, name }) => {
    return (
        <Controller
            control={form.control}
            name={name}
            render={({ field }) => {
                return (
                    <TextField
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position='start'>
                                    <Search sx={{ color: '#373737', width: '50px' }} />
                                </InputAdornment>
                            )
                        }}
                        sx={{
                            '& .MuiInputBase-input': { outline: 'none', border: 'none !important', paddingY: '10px' },
                            '& .MuiOutlinedInput-notchedOutline': { border: 'none !important' },
                            backgroundColor: '#F4F1FF',
                            width: '100%',
                            borderRadius: '33px'
                        }}
                        placeholder={placeholder}
                        {...field}
                    />
                );
            }}
        />
    );
};

const PrizeContainer = () => {
    const router = useRouter();
    const userState = useSelector((state: any) => state.webpage?.user?.user);

    const [borderValue, setBorderValue] = React.useState<string>('none');
    const [isLoading, setIsLoading] = React.useState<boolean>(true);
    const [data, setData] = React.useState<any>(null);
    const [popupLogin, setPopupLogin] = React.useState<boolean>(false);

    const isComingSoon = process.env.NEXT_PUBLIC_PRIZES_COMING_SOON === 'true';

    const { fetchAPI } = useAPICaller();
    const notify = useNotify();

    const form = useForm({
        mode: 'all',
        defaultValues: {
            search: ''
        }
    });
    const handleScroll = () => {
        if (window.scrollY === 0) {
            return setBorderValue('none');
        }
        return setBorderValue('0.5px solid rgba(148, 148, 148, 0.35)');
    };

    const getDataPrizes = async () => {
        setIsLoading(true);
        if (!isComingSoon) {
            try {
                const response = await fetchAPI({
                    method: 'GET',
                    endpoint: 'home/redemptions'
                });
                if (response.status === 200) {
                    setData(response.data.data.catalogues);
                } else {
                    notify(response.data.message, 'error');
                }
                setIsLoading(false);
            } catch (err: any) {
                notify(err.message, 'error');
                setIsLoading(false);
            }
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

    React.useEffect(() => {
        getDataPrizes();
    }, []);

    const handleClickCard = (id: string) => {
        if (userState?.api_token) {
            router.push(`/shops/prize/${id}`);
        } else {
            setPopupLogin(true);
        }
    };

    // const Loading: boolean = true;

    if (isLoading) {
        return <PrizeSkeleton />;
    }

    return (
        <Box sx={{ width: '100%' }}>
            <Box
                padding='20px'
                sx={{
                    borderBottom: borderValue,
                    mb: 2,
                    position: 'sticky',
                    top: -1,
                    backgroundColor: 'white',
                    zIndex: 999,
                    width: '-webkit-fill-available'
                }}
            >
                <Header isShops hrefBack='/shops' isBack point={102_300} profilePicture='/icons/dummy/profile.png' />
            </Box>
            <Box padding='10px 20px'>
                <Typography sx={{ fontSize: '24px', fontWeight: '700', mb: 2 }}>Prizes</Typography>
                <InputPrizes form={form} placeholder='Search prize' name='search' />
                <ImageList variant='masonry' cols={2} gap={30} sx={{ mt: 4, '& .MuiImageListItem-root': { overflow: 'auto' } }}>
                    {isComingSoon
                        ? dataComingSoon.map((item: any) => {
                              return <ImageListItemComingSoon key={item.name} image={item.image_url} name={item.name} />;
                          })
                        : data.map((item: any) => (
                              <ImageListItem sx={{ cursor: 'pointer' }} key={item.id}>
                                  <Box
                                      onClick={() => {
                                          //   router.push(`/shops/prize/${item.id}`);
                                          handleClickCard(item.id);
                                      }}
                                  >
                                      <Box sx={{ backgroundColor: '#F4F1FF', padding: { xs: '20px', sm: '45px' }, borderRadius: '14px' }}>
                                          <img
                                              src={item.image_url}
                                              alt={item.name}
                                              style={{ width: '100%' }}
                                              onError={({ currentTarget }) => {
                                                  currentTarget.onerror = null;
                                                  currentTarget.src = '/images/img_error.svg';
                                              }}
                                          />
                                      </Box>
                                      <Box>
                                          <Typography sx={{ fontSize: '12px', fontWeight: '700', mt: 1 }}>{item.name}</Typography>
                                          <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                                              <img src='/images/point-shops.png' alt='point-shop' loading='lazy' />
                                              <Typography sx={{ fontSize: '12px', fontWeight: '700' }}>{item.price}</Typography>
                                          </Box>
                                      </Box>
                                  </Box>
                              </ImageListItem>
                          ))}
                </ImageList>
            </Box>
            <SignupLoginDialog open={popupLogin} setOpen={setPopupLogin} />
        </Box>
    );
};

export default PrizeContainer;
