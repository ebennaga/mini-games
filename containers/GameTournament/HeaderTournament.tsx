/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-vars */
import { Box, ButtonBase, Typography } from '@mui/material';
import BadgeImages from 'components/BadgeImages';
import getRemainingTimes from 'helper/getRemainingTime';
// import Header from 'components/Header';
import React from 'react';
import { ExpandMore, ExpandLess } from '@mui/icons-material';
import TypeTournamentCard from 'components/TournamentCard/TyypeTournamentCard';
import CostumProgress from './CostumProgress';

interface HeaderTournamentProps {
    backgroundImage: string;
    titleGame: string;
    tournamentType: string;
    time: any;
    end: any;
    totalPlayer: number;
    playerImg1: string;
    playerImg2: string;
    playerImg3: string;
    isComingSoon?: boolean;
    type: string;
}

const HeaderTournament = (props: HeaderTournamentProps) => {
    const { type, end, backgroundImage, isComingSoon, titleGame, tournamentType, time, totalPlayer, playerImg1, playerImg2, playerImg3 } =
        props;
    const value = 50;
    const [isExpand, setIsExpand] = React.useState<boolean>(false);
    const newD = new Date(time).toLocaleString('en-US');
    const endT = new Date(end).toLocaleString('en-US');

    return (
        <Box>
            <Box
                component='header'
                sx={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '300px',
                    borderBottomLeftRadius: '15px',
                    borderBottomRightRadius: '15px',
                    marginTop: '-87px',
                    paddingTop: '30px'
                }}
            >
                <Box
                    sx={{
                        background: 'linear-gradient(0deg, #353535 9.93%, rgba(53, 53, 53, 0) 90.83%)',
                        height: '-webkit-fill-available',
                        padding: '20px 20px 50px 20px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-end'
                    }}
                >
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end' }}>
                        <Box sx={{ color: '#fff' }}>
                            <Typography component='h3' fontSize='14px' fontWeight={700}>
                                {titleGame}
                            </Typography>
                            <Typography component='h2' fontSize='24px' fontWeight={700}>
                                {tournamentType}
                            </Typography>
                            <TypeTournamentCard type={type} isTransparent />
                            {getRemainingTimes(newD) && getRemainingTimes(newD)[0] !== '-' && (
                                <Box
                                    sx={{
                                        color: '#282626',
                                        background: '#FFDD50',
                                        borderRadius: '19px',
                                        padding: '4.5px 5px',
                                        width: 'fit-content',
                                        display: 'flex',
                                        alignItems: 'center',
                                        mt: 1
                                    }}
                                >
                                    <img src='/icons/time.png' width='17px' height='17px' alt='time' loading='lazy' />
                                    <Typography component='span' height='18px' fontSize='14px' fontWeight={800} marginLeft='8px'>
                                        {getRemainingTimes(newD)}
                                    </Typography>
                                </Box>
                            )}
                            {getRemainingTimes(endT)[0] === '-' && (
                                <Box
                                    sx={{
                                        color: '#282626',
                                        background: '#FFDD50',
                                        borderRadius: '19px',
                                        padding: '4.5px 5px',
                                        width: 'fit-content',
                                        display: 'flex',
                                        alignItems: 'center',
                                        mt: 1
                                    }}
                                >
                                    <img src='/icons/time.png' width='17px' height='17px' alt='time' loading='lazy' />
                                    <Typography component='span' height='18px' fontSize='14px' fontWeight={800} marginLeft='8px'>
                                        {getRemainingTimes(endT)[0] === '-'
                                            ? 'Ended'
                                            : isComingSoon
                                            ? 'Coming Soon'
                                            : getRemainingTimes(newD)}
                                    </Typography>
                                </Box>
                            )}
                        </Box>
                        <BadgeImages images1={playerImg1} images2={playerImg2} images3={playerImg3} total={totalPlayer} />
                    </Box>
                </Box>
            </Box>
            <Box
                onClick={() => {
                    setIsExpand(!isExpand);
                }}
                sx={{
                    position: 'relative',
                    bottom: 1,
                    width: '100%',
                    backgroundColor: '#353535',
                    // height: '35px',
                    paddingY: '10px',
                    height: '100%',
                    borderBottomLeftRadius: '15px',
                    borderBottomRightRadius: '15px',
                    textAlign: 'center'
                }}
            >
                <Box sx={{ height: isExpand ? '250px' : '0px', paddingX: '20px' }}>
                    {isExpand && (
                        <>
                            <Typography sx={{ textAlign: 'start', color: 'white', fontSize: '18px', fontWeight: 700 }}>
                                Prizepool Prize
                            </Typography>
                            <Box sx={{ mt: '0px', display: 'flex', gap: '30px' }}>
                                <Box sx={{ ml: '-155px', transform: 'rotate(90deg)', width: '180px', position: 'relative' }}>
                                    <CostumProgress variant='determinate' value={value} />
                                    <Box
                                        sx={{
                                            width: '100%',
                                            position: 'absolute',
                                            top: '-6px',
                                            display: 'flex',
                                            justifyContent: 'space-between'
                                        }}
                                    >
                                        <Box />
                                        <img src={value >= 40 ? '/images/step-poin.png' : '/images/step.png'} alt='step' loading='lazy' />
                                        <img src={value >= 60 ? '/images/step-poin.png' : '/images/step.png'} alt='step' loading='lazy' />
                                        <img src={value >= 80 ? '/images/step-poin.png' : '/images/step.png'} alt='step' loading='lazy' />
                                    </Box>
                                </Box>
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '15px', pt: '40px', width: '100%' }}>
                                    <Box
                                        sx={{
                                            width: '100%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between'
                                        }}
                                    >
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                            <img src='/images/sm-point.png' alt='point' loading='lazy' />
                                            <Typography sx={{ color: 'white' }}>
                                                <span style={{ fontWeight: 'bold', fontSize: '20px' }}>2500</span> Pool
                                            </Typography>
                                        </Box>
                                        <Box sx={{ display: 'flex', width: '40%', justifyContent: 'space-between' }}>
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                                <Box>
                                                    <img src='/icons/icon-user.png' alt='user' loading='lazy' />
                                                </Box>
                                                <Typography sx={{ fontWeight: 600, color: 'white' }}>150</Typography>
                                            </Box>
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                                <Box>
                                                    <img src='/icons/icon-trophy.png' alt='user' loading='lazy' />
                                                </Box>
                                                <Typography sx={{ fontWeight: 600, color: 'white' }}>50</Typography>
                                            </Box>
                                        </Box>
                                    </Box>
                                    <Box
                                        sx={{
                                            width: '100%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between'
                                        }}
                                    >
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                            <img src='/images/sm-point.png' alt='' loading='lazy' />
                                            <Typography sx={{ color: 'white' }}>
                                                <span style={{ fontWeight: 'bold', fontSize: '25px' }}>5000</span> Pool
                                            </Typography>
                                        </Box>
                                        <Box sx={{ display: 'flex', width: '40%', justifyContent: 'space-between' }}>
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                                <Box>
                                                    <img src='/icons/icon-user.png' alt='user' loading='lazy' />
                                                </Box>
                                                <Typography sx={{ fontWeight: 600, color: 'white' }}>400</Typography>
                                            </Box>
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                                <Box>
                                                    <img src='/icons/icon-trophy.png' alt='user' loading='lazy' />
                                                </Box>
                                                <Typography sx={{ fontWeight: 600, color: 'white' }}>250</Typography>
                                            </Box>
                                        </Box>
                                    </Box>
                                    <Box
                                        sx={{
                                            width: '100%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between'
                                        }}
                                    >
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                            <img src='/images/sm-point.png' alt='' loading='lazy' />
                                            <Typography sx={{ color: 'white' }}>
                                                <span style={{ fontWeight: 'bold', fontSize: '30px' }}>8000</span> Pool
                                            </Typography>
                                        </Box>
                                        <Box sx={{ display: 'flex', width: '40%', justifyContent: 'space-between' }}>
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                                <Box>
                                                    <img src='/icons/icon-user.png' alt='user' loading='lazy' />
                                                </Box>
                                                <Typography sx={{ fontWeight: 600, color: 'white' }}>500</Typography>
                                            </Box>
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                                <Box>
                                                    <img src='/icons/icon-trophy.png' alt='user' loading='lazy' />
                                                </Box>
                                                <Typography sx={{ fontWeight: 600, color: 'white' }}>350</Typography>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </>
                    )}
                </Box>
                <ButtonBase
                    onClick={() => {
                        setIsExpand(!isExpand);
                    }}
                >
                    {isExpand ? (
                        <ExpandLess sx={{ color: 'white', cursor: 'pointer' }} />
                    ) : (
                        <ExpandMore sx={{ color: 'white', cursor: 'pointer' }} />
                    )}
                </ButtonBase>
            </Box>
        </Box>
    );
};

export default HeaderTournament;
