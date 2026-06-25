import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { login, logout, refresh, register } from "../authThunks/authThunks";

const authSlice = createSlice({
    name: "users/auth",
    initialState: {
        user: null,
        accessToken: null,
        role: null,
        loading: false,
        isError: false,
        isInit: false,
        registerSuccess: false,
        userName: null,
    },
    reducers: {
        resetRegisterStatus: (state) => {
            state.registerSuccess = false;
            state.isError = false;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload.user?.email;
                state.userName = action.payload.user?.name || action.payload.user?.fullName; // Додаємо
                state.accessToken = action.payload.accessToken;
                state.role = action.payload.user?.role;
                state.isInit = true;
                state.isError = false;
                
                localStorage.setItem('accessToken', action.payload.accessToken);
                localStorage.setItem('user', JSON.stringify(action.payload.user));
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
                state.registerSuccess = false;
            })
            .addCase(register.fulfilled, (state, action) => {
                state.loading = false;
                state.registerSuccess = true;
                state.isError = false;
            })
            .addCase(register.pending, (state) => {
                state.loading = true;
                state.isError = false;
                state.registerSuccess = false;
            })
            .addCase(register.rejected, (state, action) => {
                state.loading = false;
                state.isError = action.payload?.message || "Помилка реєстрації";
                state.registerSuccess = false;
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

export const { resetRegisterStatus } = authSlice.actions;
export default authSlice.reducer;
export { login, refresh, logout, register };