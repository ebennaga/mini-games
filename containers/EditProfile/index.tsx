import { Box, ButtonBase, Typography, CircularProgress } from '@mui/material';
import HeaderBack from 'components/HeaderBack';
import React from 'react';
import CreateIcon from '@mui/icons-material/Create';
import InputEdit from 'components/InputEdit';
import { useForm } from 'react-hook-form';
import useAPICaller from 'hooks/useAPICaller';
import { useSelector } from 'react-redux';
import useAuthReducer from 'hooks/useAuthReducer';
import DialogPicture from './DialogPicture';
import DialogSuccess from './DialogSuccess';

const EditProfile = () => {
    const [dialogPicture, setDialogPicture] = React.useState<boolean>(false);
    const [dialogSuccess, setDialogSuccess] = React.useState<boolean>(false);
    const [selectedAvatar, setSelectedAvatar] = React.useState<any>('');
    const [image, setImage] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const userState = useSelector((state: any) => state.webpage.user?.user);
    const { fetchAPI } = useAPICaller();
    const { setUser } = useAuthReducer();
    const form = useForm({
        mode: 'all',
        defaultValues: {
            nickname: ''
        }
    });
    const getData = async () => {
        const response = await fetchAPI({
            method: 'GET',
            endpoint: `avatars`
        });

        setImage(response.data.data);
    };

    React.useEffect(() => {
        getData();
    }, []);

    const updateUserData = async () => {
        const response = await fetchAPI({
            method: 'GET',
            endpoint: `auths`
        });
        if (response.status === 200) {
            const dataUser = { ...userState, ...response.data.data };
            setUser(dataUser);

            return dataUser;
        }

        return false;
    };
    const handleSaveChanges = async () => {
        setLoading(true);
        try {
            const filter: any = image.filter((item: any) => item.image_url === userState.avatar_url);
            const response = await fetchAPI({
                method: 'PUT',
                endpoint: `user/avatarUsername`,
                data: {
                    username: form.watch('nickname') || userState.username,
                    avatar_id: selectedAvatar.id || filter[0].id || 1
                }
            });

            if (response.status === 200) {
                await updateUserData();

                setDialogSuccess(true);
            }
        } catch (e) {
            console.log('error', 'e');
        }

        setLoading(false);
    };

    return (
        <Box component='main' sx={{ width: '-webkit-fill-available', padding: '0 20px', color: '#373737', height: '85%' }}>
            <HeaderBack title='Edit Profile' />
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                <Box>
                    <Box component='section' sx={{ margin: 'auto', width: 'fit-content', paddingTop: '48px', position: 'relative' }}>
                        <img src={selectedAvatar?.image_url || userState.avatar_url} width='146px' height='146px' alt='profile' />
                        <ButtonBase
                            onClick={() => setDialogPicture(true)}
                            sx={{
                                background: '#A54CE5',
                                width: '30px',
                                height: '30px',
                                borderRadius: '50px',
                                position: 'absolute',
                                bottom: 0,
                                left: '109px',
                                border: '2px solid #fff'
                            }}
                        >
                            <CreateIcon sx={{ fontWeight: 'bold', fontSize: '20px', color: '#fff' }} />
                        </ButtonBase>
                    </Box>
                    <Box sx={{ width: '100%', marginTop: '43px' }}>
                        <InputEdit name='nickname' form={form} label='Nickname' value={userState.username} disabled />
                    </Box>
                </Box>
                {loading ? (
                    <CircularProgress sx={{ marginX: 'auto' }} />
                ) : (
                    <ButtonBase
                        onClick={handleSaveChanges}
                        sx={{ width: '100%', background: '#A54CE5', color: '#fff', padding: '23px 0', borderRadius: '15px' }}
                    >
                        <Typography component='span' fontSize='14px' fontWeight={700}>
                            Save Changes
                        </Typography>
                    </ButtonBase>
                )}
            </Box>
            <DialogPicture open={dialogPicture} setOpen={setDialogPicture} setSelectedAvatar={setSelectedAvatar} imagesList={image} />
            <DialogSuccess open={dialogSuccess} setOpen={setDialogSuccess} />
        </Box>
    );
};

export default EditProfile;
