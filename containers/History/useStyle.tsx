import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => {
    return {
        header: {
            display: 'flex',
            justifyContent: 'center',
            width: '100%'
        },
        headerRight: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },
        pointOngoing: {
            marginLeft: 40
        },
        pointNode: {
            marginLeft: 65
        },
        pointPlace: {
            marginLeft: '45%',
            marginTop: -60
        },
        pointImage: {
            borderRadius: '8px'
        }
    };
});

export default useStyles;
