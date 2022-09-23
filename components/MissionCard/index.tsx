/* eslint-disable no-unused-vars */
import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import { Verified } from '@mui/icons-material';

interface MissionCardProps {
    isCompleted: boolean;
    isClaimed?: boolean;
    statusMission?: string;
    descMission?: string;
    children?: any;
    achievMission?: string;
}

const MissionCard: React.FC<MissionCardProps> = ({
    achievMission,
    children,
    isCompleted = true,
    isClaimed,
    statusMission,
    descMission
}) => {
    return (
        <Grid
            container
            alignItems='center'
            sx={{ opacity: isClaimed ? 0.5 : 'none', backgroundColor: '#F4F1FF', borderRadius: '10px', padding: '16px 18px', mt: 3 }}
        >
            <Grid item xs={6}>
                <Box sx={{ display: 'flex', gap: '10px', mb: 2, alignItems: 'center' }}>
                    <Typography sx={{ fontWeight: 'bold' }}>{achievMission}</Typography>
                    {isCompleted && (
                        <Box sx={{ display: 'flex', gap: '5px' }}>
                            <Verified sx={{ color: '#00AE50' }} />
                            <Typography sx={{ fontSize: '20px' }}>{statusMission}</Typography>
                        </Box>
                    )}
                </Box>
                <Typography sx={{ fontWeight: 'bold' }}>{descMission}</Typography>
            </Grid>
            <Grid
                item
                xs={6}
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: isClaimed ? 'end' : 'space-evenly',
                    alignItems: 'center'
                }}
            >
                {children}
            </Grid>
        </Grid>
    );
};

export default MissionCard;
