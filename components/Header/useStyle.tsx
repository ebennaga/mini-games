import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => {
    return {
        header: {
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%'
        },
        headerRight: {
            display: 'flex',
            alignItems: 'center'
        },
        pointContainer: {
            background: '#FFF5CD',
            borderRadius: '27px',
            width: '96px',
            height: '30px',
            position: 'relative',
            marginRight: '11px'
        },
        pointSection: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '0 9px',
            paddingTop: '2px'
        },
        pointText: {
            fontWeight: 'bold',
            fontSize: '14px',
            color: '#373737'
        },
        searchContainer: {
            background: '#F9F0FF',
            borderRadius: '33px',
            height: '48px',
            display: 'flex',
            alignItems: 'center',
            padding: '0 24px',
            marginTop: '46px',
            marginBottom: '43px',
            '& .MuiInputBase-input': {
                fontWeight: 600
            }
        }
    };
});

export default useStyles;
