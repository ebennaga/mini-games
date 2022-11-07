import React from 'react';
import { Box, Grid, Typography, ButtonBase } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import RankRaffle from 'components/RankRaffle';

interface RaffleWinnersProps {
    dataList: any;
}

const RaffleWinners: React.FC<RaffleWinnersProps> = ({ dataList }) => {
    const totalPage = Math.ceil(dataList.length / 7);
    const [currentPage, setCurrentPage] = React.useState<number>(1);

    const goToNextPage = () => {
        if (currentPage < totalPage) {
            setCurrentPage((page) => page + 1);
        }
    };
    const goToPreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage((page) => page - 1);
        }
    };
    const getPaginatedData = () => {
        const startIndex = currentPage * 7 - 7;
        const endIndex = startIndex + 7;
        return dataList.slice(startIndex, endIndex);
    };
    return (
        <Box sx={{ width: '100vw', mt: '45px' }}>
            <Grid container>
                <Grid item xs={12}>
                    <Typography sx={{ fontSize: '24px', fontWeight: 700, color: '#373737' }}>Previous Raffle Winners</Typography>
                </Grid>
            </Grid>
            <Grid container mt='25px' sx={{ borderBottom: '1px solid rgba(40, 38, 38, 0.2)', padding: '13px 0' }}>
                <Grid item xs={2}>
                    <Typography textAlign='center' component='h3' fontSize='12px' fontWeight={600} sx={{ color: 'rgba(40, 38, 38, 0.5)' }}>
                        Round
                    </Typography>
                </Grid>
                <Grid item container xs={10} sx={{ color: 'rgba(40, 38, 38, 0.5)' }}>
                    <Grid item xs={5}>
                        <Typography textAlign='center' paddingLeft='25px' component='h3' fontSize='12px' fontWeight={600}>
                            Name
                        </Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography paddingLeft='15px' component='h3' fontSize='12px' fontWeight={600}>
                            Prize
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography textAlign='center' paddingLeft='15px' component='h3' fontSize='12px' fontWeight={600}>
                            User Ticket
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            {dataList.length > 0 &&
                getPaginatedData().map((item: any, idx: number) => (
                    <Box key={idx}>
                        <RankRaffle
                            image={item.image}
                            round={
                                currentPage === 1
                                    ? dataList.length - idx
                                    : currentPage > 1 && dataList.length - (idx + (currentPage - 1) * 7)
                            }
                            username={item.username.toLowerCase()}
                            tickets={item.tickets}
                            prize={item.prize}
                        />
                    </Box>
                ))}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '30px', my: '30px', justifyContent: 'center' }}>
                <ButtonBase
                    onClick={goToPreviousPage}
                    disableRipple
                    sx={{
                        ':active': { backgroundColor: '#D9D9D9' },
                        cursor: 'pointer',
                        padding: '10px',
                        border: '1.3px solid #D9D9D9',
                        borderRadius: '100%'
                    }}
                >
                    <ArrowBack sx={{ color: '#A54CE5' }} />
                </ButtonBase>
                <ButtonBase
                    onClick={goToNextPage}
                    disableRipple
                    sx={{
                        ':active': { backgroundColor: '#D9D9D9' },
                        cursor: 'pointer',
                        padding: '10px',
                        border: '1.3px solid #D9D9D9',
                        borderRadius: '100%'
                    }}
                >
                    <ArrowForward sx={{ color: '#A54CE5' }} />
                </ButtonBase>
            </Box>
        </Box>
    );
};

export default RaffleWinners;
