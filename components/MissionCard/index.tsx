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
            sx={{ opacity: isClaimed ? 0.5 : 'none', backgroundColor: '#F4F1FF', borderRadius: '10px', padding: '12px', mt: 3 }}
        >
            <Grid item xs={7}>
                <Box sx={{ display: 'flex', gap: '10px', mb: 2, alignItems: 'center' }}>
                    <Typography sx={{ fontWeight: 'bold' }}>{achievMission}</Typography>
                    {isCompleted && (
                        <Box sx={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
                            <Verified sx={{ color: '#00AE50', width: '12px' }} />
                            <Typography sx={{ fontSize: { xs: '12px', sm: '20px' } }}>{statusMission}</Typography>
                        </Box>
                    )}
                </Box>
                <Typography sx={{ fontWeight: 'bold', fontSize: { xs: '12px', sm: '20px' } }}>{descMission}</Typography>
            </Grid>
            <Grid
                item
                xs={5}
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: isClaimed ? 'end' : 'center',
                    alignItems: 'center',
                    gap: isClaimed ? null : 1
                }}
            >
                {children}
            </Grid>
        </Grid>
    );
};

export default MissionCard;
