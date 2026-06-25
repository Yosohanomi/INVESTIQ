
import { createAsyncThunk } from "@reduxjs/toolkit";
import { authApi } from "../../../../shared/axiosAuth/axiosAuth";
import { beckendRoutes } from "../../../../app/routes/beckendRoutes/beckendRoutes";

export const login = createAsyncThunk(
    "users/login",
    async (credentials, { rejectWithValue }) => {
        try {
            const response = await authApi.post(beckendRoutes.loginRoute, credentials);
            return response.data;
        } catch (error) {
            console.log(error);
            return rejectWithValue(error?.response?.data);
        }
    }
);

export const refresh = createAsyncThunk(
    "users/refresh",
    async (_, { rejectWithValue }) => {
        try {
            const response = await authApi.post(beckendRoutes.refreshRouta);
            return response.data;
        } catch (error) {
            return rejectWithValue(error?.response?.data);
        }
    }
);

export const logout = createAsyncThunk(
    "users/logout",
    async (_, { rejectWithValue }) => {
        try {
            await authApi.post(beckendRoutes.logoutRoute);
            document.cookie = 'refreshToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
            localStorage.removeItem('accessToken');
            localStorage.removeItem('user');
            return;
        } catch (error) {
            return rejectWithValue(error?.response?.data);
        }
    }
);

export const register = createAsyncThunk(
    "users/register",
    async (userData, { rejectWithValue }) => {
        try {
            if (userData.password !== userData.confirmPassword) {
                return rejectWithValue({ message: 'Паролі не співпадають' });
            }
            
            const { confirmPassword, ...registerData } = userData;
            const response = await authApi.post(beckendRoutes.registerRoute, registerData);
            return response.data;
        } catch (error) {
            console.log('Register error:', error);
            return rejectWithValue(error?.response?.data || { message: 'Помилка реєстрації' });
        }
    }
);