// import { createSlice, isAnyOf } from "@reduxjs/toolkit";

// import { appRoles } from "../../../../app/roles/appRoles";
// import { login, logout, refresh } from "../authThunks/authThunks";

// const authSlice = createSlice({
//     name: "users/auth",
//     initialState: {
//         user: null,
//         accessToken: null,
//         role: null,
//         loading: false,
//         isError: false,
//         isInit: false,
//     },
//     reducers: {},
//     extraReducers: (builder) => {
//         builder
//             .addCase(login.fulfilled, (state, action) => {
//                 state.loading = false;

//                 state.user = action.payload.user?.email; 
//                 state.accessToken = action.payload.accessToken;
//                 state.role = action.payload.user?.role; 
//                 state.isInit = true;
//                 state.isError = false;
//             })
//             .addCase(refresh.fulfilled, (state, action) => {
//                 state.loading = false;
//                 state.accessToken = action.payload.accessToken;
//                 state.user = action.payload.user?.email;
//                 state.role = action.payload.user?.role;
//                 state.isInit = true;
//                 state.isError = false;
//             })
//             .addCase(logout.fulfilled, (state) => {
//                 state.user = null;
//                 state.role = null;
//                 state.loading = false;
//                 state.accessToken = null;
//                 state.isInit = false;
//                 state.isError = false;
//             })

//             .addMatcher(isAnyOf(login.pending, refresh.pending, logout.pending), (state) => {
//                 state.loading = true;
//                 state.isError = false;
//             })

//             .addMatcher(isAnyOf(login.rejected, refresh.rejected, logout.rejected), (state, action) => {
//                 state.loading = false;
//                 state.isError = action.error?.message || "An error occurred";
//             });
//     }
// });

// export default authSlice.reducer;

import { createSlice, createAsyncThunk, isAnyOf } from "@reduxjs/toolkit";
import { authApi } from "../../../../shared/axiosAuth/axiosAuth";
import { beckendRoutes } from "../../../../app/routes/beckendRoutes/beckendRoutes";
import { appRoles } from "../../../../app/roles/appRoles";

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
            return;
        } catch (error) {
            return rejectWithValue(error?.response?.data);
        }
    }
);

const authSlice = createSlice({
    name: "users/auth",
    initialState: {
        user: null,
        accessToken: null,
        role: null,
        loading: false,
        isError: false,
        isInit: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(login.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload.user?.email;
                state.accessToken = action.payload.accessToken;
                state.role = action.payload.user?.role;
                state.isInit = true;
                state.isError = false;
            })
            .addCase(refresh.fulfilled, (state, action) => {
                state.loading = false;
                state.accessToken = action.payload.accessToken;
                state.user = action.payload.user?.email;
                state.role = action.payload.user?.role;
                state.isInit = true;
                state.isError = false;
            })
            .addCase(logout.fulfilled, (state) => {
                state.user = null;
                state.role = null;
                state.loading = false;
                state.accessToken = null;
                state.isInit = false;
                state.isError = false;
            })
            .addMatcher(isAnyOf(login.pending, refresh.pending, logout.pending), (state) => {
                state.loading = true;
                state.isError = false;
            })
            .addMatcher(isAnyOf(login.rejected, refresh.rejected, logout.rejected), (state, action) => {
                state.loading = false;
                state.isError = action.error?.message || "An error occurred";
            });
    }
});

export default authSlice.reducer;