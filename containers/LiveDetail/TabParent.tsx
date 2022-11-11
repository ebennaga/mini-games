import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
// import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`
    };
}

interface ParentTabsProps {
    value: any;
    handleChange: any;
}

const ParentTabs: React.FC<ParentTabsProps> = ({ value, handleChange }) => {
    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs
                    indicatorColor='secondary'
                    textColor='secondary'
                    variant='fullWidth'
                    value={value}
                    onChange={handleChange}
                    aria-label='basic tabs example'
                    sx={{
                        '& .MuiTabs-indicator': {
                            backgroundColor: '#A54CE5',
                            height: '4px',
                            borderRadius: '4px 4px 0px 0px',
                            width: '160px !important',
                            ml: '15px'
                        }
                    }}
                >
                    <Tab sx={{ fontWeight: 'bold', textTransform: 'none', color: 'black' }} label='Prizes' {...a11yProps(0)} />
                    <Tab sx={{ fontWeight: 'bold', textTransform: 'none', color: 'black' }} label='Leaderboards' {...a11yProps(1)} />
                </Tabs>
            </Box>
        </Box>
    );
};

export default ParentTabs;
