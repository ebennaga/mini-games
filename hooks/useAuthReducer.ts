import { useSelector } from 'react-redux';
import { pageSlice, selectPage, useAppDispatch } from 'redux/store';

const useAuthReducer = () => {
    const dispatch = useAppDispatch();
    const { user } = useSelector(selectPage);
    const setUser = async (userData: any) => {
        return dispatch(
            pageSlice.actions.setAuthData({
                user: userData
            })
        );
    };

    const clearUser = () =>
        dispatch(
            pageSlice.actions.setAuthData({
                user: null
            })
        );
    return { user, setUser, clearUser };
};

export default useAuthReducer;
