import { createAsyncThunk } from '@reduxjs/toolkit'
import {getToken, removeToken, setToken} from '../../utils/HelperFunctions';
import api from '../../services/api';

export const registerEvent=createAsyncThunk('auth/register', async (payload)=>{
    const response = await api.post('/users/register', payload);
    return response.data;
})

export const login = createAsyncThunk('auth/login', async (payload) => {
    const response = await api.post('/users/login', payload);
    setToken(response.data.accessToken);
    return response.data;
});

export const signOut = createAsyncThunk('auth/signOut', async () => {
    removeToken();
});
export const fetchUserData = createAsyncThunk('auth/fetchUserData', async (_, {rejectWithValue}) => {
    try{
        const accessToken = getToken();
        api.defaults.headers.Authorization = `Bearer ${accessToken}`;
        const response = await api.get('/users');
        return {...response.data, accessToken};
    }catch(e){
        removeToken();
        return rejectWithValue('');
    }
});
