import React from 'react';
import { Box } from '@mui/material';
import { useSelector } from 'react-redux';

const PlayGameContainer = () => {
    const [soundGame, setSoundGame] = React.useState<any>('');

    const userState = useSelector((state: any) => state.webpage?.user?.user);

    React.useEffect(() => {
        if (typeof window !== 'undefined') {
            const soundData = localStorage.getItem('prizePlaySound');
            if (soundData) {
                setSoundGame(soundData);
            } else {
                setSoundGame('true');
            }
        }
    }, []);

    if (!userState && !userState) {
        return <Box />;
    }
    return (
        <Box sx={{ width: '100%' }}>
            <iframe
                src={`${userState?.gameUrl}?sessionIDGame=${userState.sessionGame}&token=${userState?.api_token}&userID=${userState?.id}&isSound=${soundGame}`}
                // src={`http://192.168.0.137/swords_web/?sessionIDGame=${userState.sessionGame}&token=${userState?.api_token}&userID=${userState?.id}&isSound=${soundGame}`}
                style={{
                    width: '100%',
                    height: '100vh',
                    padding: '0px'
                }}
                title='Prize Play || HopUp'
            />
        </Box>
    );
};

export default PlayGameContainer;
