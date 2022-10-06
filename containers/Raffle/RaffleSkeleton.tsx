/* eslint-disable no-nested-ternary */
import React from 'react';
import HeaderSkeleton from 'components/Header/HeaderSkeleton';
import { Box, Skeleton, Grid } from '@mui/material';

interface RaffleSkeletonProps {
    roundDay?: boolean;
}

const RaffleSkeleton: React.FC<RaffleSkeletonProps> = ({ roundDay }) => {
    return (
        <Box sx={{ width: '100%' }}>
            <Box padding='20px'>
                <HeaderSkeleton />
            </Box>
            <Box padding='10px 20px'>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: '10px' }}>
                    <Skeleton variant='rounded' width={150} />
                    <Skeleton variant='rounded' width={80} />
                </Box>
                <Skeleton variant='rounded' width='100%' height={300} sx={{ borderRadius: '17px' }} />
                {roundDay && (
                    <Box sx={{ width: '100%', mt: '20px' }}>
                        <Skeleton variant='rounded' height={50} sx={{ borderRadius: '10px' }} />
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                mt: 3
                            }}
                        >
                            <Skeleton variant='rounded' width={200} height={30} />
                            <Box
                                sx={{
                                    mt: '20px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}
                            >
                                <Skeleton variant='rounded' width={100} height={100} />
                                <Skeleton variant='rounded' width={200} height={30} sx={{ mt: 2 }} />
                            </Box>
                        </Box>
                    </Box>
                )}
                <Box sx={{ width: '100%', mt: '20px' }}>
                    <Skeleton variant='rounded' height={70} sx={{ borderRadius: '20px' }} />
                </Box>
                {!roundDay && (
                    <Grid container justifyContent='center' alignItems='center' sx={{ mt: '50px' }}>
                        <Grid item xs={3}>
                            <Skeleton variant='rounded' width='100%' />
                        </Grid>
                        <Grid container justifyContent='space-between' sx={{ mt: '20px' }} alignItems='center'>
                            <Skeleton variant='circular' width={60} height={60} />
                            <Skeleton variant='rounded' width={50} height={50} />
                            <Skeleton variant='circular' width={60} height={60} />
                        </Grid>
                        <Grid item xs={6} mt={3}>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
                                <Skeleton variant='rounded' width={15} height={15} />
                                <Skeleton variant='rounded' height={15} width={50} />
                            </Box>
                        </Grid>
                    </Grid>
                )}
                <Box sx={{ width: '100%', mt: '45px' }}>
                    <Grid container>
                        <Grid item xs={12}>
                            <Skeleton variant='rounded' width={250} height={30} />
                        </Grid>
                    </Grid>
                    <Grid container mt='35px' sx={{ borderBottom: '1px solid rgba(40, 38, 38, 0.2)', padding: '20px 0' }}>
                        <Grid item xs={2}>
                            <Skeleton variant='rounded' width={50} height={25} />
                        </Grid>
                        <Grid item container xs={10} sx={{ color: 'rgba(40, 38, 38, 0.5)' }}>
                            <Grid item xs={5}>
                                <Skeleton variant='rounded' width={100} height={25} />
                            </Grid>
                            <Grid item xs={3}>
                                <Skeleton variant='rounded' width={60} height={25} />
                            </Grid>
                            <Grid item xs={4}>
                                <Skeleton variant='rounded' width={90} height={25} />
                            </Grid>
                        </Grid>
                    </Grid>
                    {[...Array(6)].map((item: any, idx: number) => (
                        <Box key={idx} sx={{ mt: 3 }}>
                            <Skeleton variant='rounded' height={25} />
                        </Box>
                    ))}
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '30px', my: '30px', justifyContent: 'center' }}>
                    <Skeleton variant='circular' width={50} height={50} />
                    <Skeleton variant='circular' width={50} height={50} />
                </Box>
            </Box>
        </Box>
    );
};

export default RaffleSkeleton;
