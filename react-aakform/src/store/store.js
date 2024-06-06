import {configureStore} from '@reduxjs/toolkit';
import { postSignUp } from '../redux/registration';

const store = configureStore({
    reducer: {
        postSignUp
    },
});

export default store;
