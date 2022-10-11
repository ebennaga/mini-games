import { Dialog, Box, Typography, ButtonBase } from '@mui/material';
import React, { useState } from 'react';
import CoinsDialog from './CoinsDialog';
import ProfileDialog from './ProfileDialog';
import GamesDialog from './GamesDialog';
import TournamentDialog from './TournamentDialog';
import ListOfGamesDialog from './ListOfGamesDialog';
import PrizesDialog from './PrizesDialog';
import TopUpCoinsDialog from './TopUpCoinsDialog';

interface IWelcomeDialog {
    open: boolean;
    setOpen: any;
    dataLocal: any;
    setDataLocal: any;
    setPrevTutorial: any;
}

const WelcomeDialog: React.FC<IWelcomeDialog> = ({ open, setOpen, dataLocal, setDataLocal, setPrevTutorial }) => {
    const [coinsDialog, setCoinsDialog] = useState<boolean>(false);
    const [profileDialog, setProfileDialog] = useState<boolean>(false);
    const [gamesDialog, setGamesDialog] = useState<boolean>(false);
    const [tournamentDialog, setTournamentDialog] = useState<boolean>(false);
    const [listGamesDialog, setListGamesDialog] = useState<boolean>(false);
    const [prizesDialog, setPrizesDialog] = useState<boolean>(false);
    const [topUpDialog, setTopUpDialog] = useState<boolean>(false);

    const handleClose = () => {
        const local: any = localStorage.getItem('tutorial');
        const resLocal: any = JSON.parse(local);
        resLocal.isTutorial = false;
        localStorage.removeItem('tutorial');
        localStorage.setItem('tutorial', JSON.stringify(resLocal));
        setDataLocal(resLocal);
        setOpen(false);
    };

    const handleStart = () => {
        const local: any = dataLocal;
        local.listTutorial.welcome = false;
        setDataLocal(local);
        setOpen(false);
        setCoinsDialog(true);
    };

    const handleCloseDialog = (name: string, currentSetDialog: any, nextSetDialog: any, scrollY: number = 0) => {
        setPrevTutorial(name);
        const local: any = dataLocal;
        local.listTutorial[name] = false;
        currentSetDialog(false);
        nextSetDialog(true);
        setDataLocal(local);
        window.scrollTo(0, scrollY);
    };

    const handleTopUp = () => {
        const local: any = dataLocal;
        local.listTutorial.topUpCoins = false;
        local.isTutorial = false;
        setDataLocal(local);
        localStorage.setItem('tutorial', JSON.stringify(local));
        setTopUpDialog(false);
        window.scrollTo(0, 0);
    };

    return (
        <>
            <Dialog
                open={dataLocal.isTutorial && dataLocal.listTutorial.welcome && open}
                sx={{
                    '& .MuiBackdrop-root': {
                        background: 'rgba(0, 0, 0, 0.75)'
                    },
                    '& .MuiPaper-root': {
                        width: '-webkit-fill-available',
                        padding: '18px 30px',
                        margin: 0,
                        position: 'absolute',
                        bottom: 0
                    }
                }}
            >
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#373737' }}>
                    <img src='/icons/mission.png' width='163.6px' height='142px' alt='Welcome Prize Play' />
                    <Typography component='h2' fontSize='24px' marginTop='58px' marginBottom='25px' fontWeight={700}>
                        Welcome Friend
                    </Typography>
                    <Typography component='p' fontSize='14px' lineHeight='14px' width='80%' fontWeight={400} textAlign='center'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio
                        mattis.
                    </Typography>
                    <ButtonBase
                        onClick={handleStart}
                        sx={{ background: '#A54CE5', borderRadius: '15px', padding: '23px 0', width: '100%', mt: '42px' }}
                    >
                        <Typography component='span' fontSize='14px' fontWeight={700} sx={{ color: '#fff' }}>
                            Lets Start
                        </Typography>
                    </ButtonBase>
                    <ButtonBase onClick={handleClose} sx={{ padding: '13px 0', width: '100%', mt: '10px' }}>
                        <Typography component='span' fontSize='14px' fontWeight={700}>
                            Skip
                        </Typography>
                    </ButtonBase>
                </Box>
            </Dialog>

            <CoinsDialog open={coinsDialog} onClose={() => handleCloseDialog('coins', setCoinsDialog, setProfileDialog)} />
            <ProfileDialog open={profileDialog} onClose={() => handleCloseDialog('profile', setProfileDialog, setGamesDialog, 250)} />
            <GamesDialog open={gamesDialog} onClose={() => handleCloseDialog('games', setGamesDialog, setTournamentDialog, 600)} />
            <TournamentDialog
                open={tournamentDialog}
                onClose={() => handleCloseDialog('tournaments', setTournamentDialog, setListGamesDialog)}
            />
            <ListOfGamesDialog
                open={listGamesDialog}
                onClose={() => handleCloseDialog('listOfGames', setListGamesDialog, setPrizesDialog)}
            />
            <PrizesDialog open={prizesDialog} onClose={() => handleCloseDialog('prizes', setPrizesDialog, setTopUpDialog)} />
            <TopUpCoinsDialog open={topUpDialog} onClose={handleTopUp} />
        </>
    );
};

export default WelcomeDialog;
