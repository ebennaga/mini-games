/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-vars */
import { Box, ButtonBase, Skeleton, Typography } from '@mui/material';
import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import numberFormat from 'helper/numberFormat';
import useAuthReducer from 'hooks/useAuthReducer';
import useApiCaller from 'hooks/useAPICaller';
import useNotify from 'hooks/useNotify';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { getAuth, onAuthStateChanged, User } from 'firebase/auth';
import useStyles from './useStyle';
import HeaderSkeleton from './HeaderSkeleton';

interface HeaderProps {
    logo?: string;
    point?: number | string;
    profilePicture: string;
    widthLogo?: any;
    heightLogo?: any;
    isBack?: boolean;
    hrefBack?: any;
    paddingX?: string;
    isShops?: boolean;
    dataLocal?: any;
}

const Header: React.FC<HeaderProps> = ({
    logo,
    point,
    profilePicture,
    isBack,

    hrefBack,
    paddingX,
    widthLogo = '75px',
    heightLogo = '39px',
    isShops = false,
    dataLocal
}) => {
    const userState = useSelector((state: any) => state?.webpage?.user?.user);
    const classes = useStyles();
    const router = useRouter();
    const [userData, setUserData] = React.useState<any>(null);
    const { setUser } = useAuthReducer();
    const { fetchAPI, isLoading } = useApiCaller();
    const [isFirebaseLoading, setIsFirebaseLoading] = React.useState<boolean>(false);
    const notify = useNotify();

    const fetchData = async () => {
        if (userState?.api_token) {
            try {
                const result = await fetchAPI({
                    endpoint: 'auths',
                    method: 'GET'
                });
                if (result?.data?.data) {
                    setUser({ ...userState, ...result.data.data });
                    setUserData(result.data.data);
                }
            } catch (error) {
                notify('Fetch account data failed!', 'error');
            }
        }
    };

    React.useEffect(() => {
        fetchData();
    }, []);
    const handleLoginGoogle = async (user: User) => {
        if (userState?.api_token == null) {
            const response = await fetchAPI({
                method: 'POST',
                endpoint: 'auths/login/google',
                data: {
                    email: user.email,
                    username: user.displayName,
                    google_id: user.uid
                }
            });
            if (response.status === 200) {
                setUser(response.data.data);
                router.push('/');
            } else {
                notify('Login Failed', 'error');
            }
        }
    };

    React.useEffect(() => {
        setIsFirebaseLoading(true);
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                const { uid } = user;
                handleLoginGoogle(user);
                // ...
            } else {
                // User is signed out
                // ...
            }
            setIsFirebaseLoading(false);
        });
    }, []);
    console.log(userData);
    if (isLoading) {
        return <HeaderSkeleton />;
    }
    if (isFirebaseLoading) {
        return (
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: paddingX ? '-webkit-fill-available' : '100%',
                    position: 'sticky',
                    top: paddingX ? 0 : 10,
                    // zIndex: dataLocal && dataLocal?.isTutorial && dataLocal?.listTutorial.welcome ? 1 : 999,
                    zIndex: 999,
                    paddingY: paddingX ? '20px' : 0,
                    paddingX: paddingX || 0
                }}
            >
                {isBack ? (
                    <ButtonBase
                        onClick={() => router.back()}
                        sx={{ width: '24px', height: '24px', borderRadius: '50px', background: '#A54CE5' }}
                    >
                        <ArrowBackIcon sx={{ color: '#fff', width: '20px', height: '20px', fontWeight: 'bold' }} />
                    </ButtonBase>
                ) : (
                    <ButtonBase onClick={() => router.push('/')}>
                        <img src={logo} width={widthLogo} height={heightLogo} alt='prize play' />
                    </ButtonBase>
                )}
            </Box>
        );
    }
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: paddingX ? '-webkit-fill-available' : '100%',
                position: 'sticky',
                top: paddingX ? 0 : 10,
                // zIndex: dataLocal && dataLocal?.isTutorial && dataLocal?.listTutorial.welcome ? 1 : 999,
                zIndex: 999,
                paddingY: paddingX ? '20px' : 0,
                paddingX: paddingX || 0
            }}
        >
            {isBack ? (
                <ButtonBase
                    onClick={() => router.back()}
                    sx={{ width: '24px', height: '24px', borderRadius: '50px', background: '#A54CE5' }}
                >
                    <ArrowBackIcon sx={{ color: '#fff', width: '20px', height: '20px', fontWeight: 'bold' }} />
                </ButtonBase>
            ) : (
                <ButtonBase onClick={() => router.push('/')}>
                    <img src={logo} width={widthLogo} height={heightLogo} alt='prize play' />
                </ButtonBase>
            )}
            {userState ? (
                <Box className={classes.headerRight} sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box
                        className={classes.pointContainer}
                        sx={{
                            background: isShops ? '#C7E7FF' : '#FFF5CD',
                            borderRadius: isShops ? '10px' : '27px',
                            height: '30px',
                            position: 'relative',
                            marginRight: '11px'
                        }}
                    >
                        {!isShops && (
                            <Box sx={{ position: 'absolute', top: '-7px' }}>
                                <img src='/icons/plus-point.png' width='16px' height='16px' alt='plus point' />
                            </Box>
                        )}
                        <Box
                            className={classes.pointSection}
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                padding: '0 9px',
                                paddingTop: '2px',
                                gap: '5px'
                            }}
                        >
                            {isShops ? (
                                <img src='/images/point-shops.png' width='20px' height='20.02px' alt='point icon' />
                            ) : (
                                <img src='/images/xs-coin.png' width='21px' height='20.02px' alt='point icon' />
                            )}
                            <Typography
                                variant='subtitle1'
                                component='span'
                                className={classes.pointText}
                                sx={{ fontWeight: 'bold', fontSize: '14px', color: '#373737' }}
                            >
                                {numberFormat(
                                    router.pathname.includes('/shops') && !isLoading
                                        ? userData?.point
                                        : userData?.coin
                                        ? userData?.coin
                                        : '0'
                                )}
                            </Typography>
                        </Box>
                    </Box>
                    <ButtonBase onClick={() => router.push('/profile')}>
                        <img src={profilePicture} width='46px' height='46px' alt='profile' />
                    </ButtonBase>
                </Box>
            ) : (
                <Box>
                    <ButtonBase
                        onClick={() => router.push('/login')}
                        // onClick={() => signIn()}
                        sx={{
                            border: '1px solid #A54CE5',
                            background: '#fff',
                            borderRadius: '8px',
                            padding: '14px',
                            width: '108px',
                            '@media(max-width: 360px)': { width: '80px' }
                        }}
                    >
                        <Typography component='span' fontSize='12px' fontWeight={700} sx={{ color: '#A54CE5' }}>
                            Log in
                        </Typography>
                    </ButtonBase>
                    <ButtonBase
                        onClick={() => router.push('/signup')}
                        sx={{
                            background: '#A54CE5',
                            borderRadius: '8px',
                            padding: '14px',
                            width: '108px',
                            ml: '8px',
                            '@media(max-width: 360px)': { width: '80px' }
                        }}
                    >
                        <Typography component='span' fontSize='12px' fontWeight={700} sx={{ color: '#fff' }}>
                            Sign Up
                        </Typography>
                    </ButtonBase>
                </Box>
            )}
        </Box>
    );
};

export default Header;
