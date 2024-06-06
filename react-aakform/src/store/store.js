import {configureStore} from '@reduxjs/toolkit';
import SignUpUser from '../redux/registration';

const store = configureStore({
    reducer: {
        user: SignUpUser
    },
});

export default store;