import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => {
    return {
        pointImage: {
            borderRadius: '13px',
            '&.makeStyles-pointImage-98': {
                borderRadius: '12px'
            }
        }
    };
});

export default useStyles;
