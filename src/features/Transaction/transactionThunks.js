import { createAsyncThunk } from "@reduxjs/toolkit";
import { authApi } from "../../shared/axiosAuth/axiosAuth";
import { beckendRoutes } from "../../app/routes/beckendRoutes/beckendRoutes";

export const fetchTransactions = createAsyncThunk(
    "transactions/fetchAll",
    async (params = {}, { rejectWithValue }) => {
        try {
            const { page = 1, limit = 20, type, category, dateFrom, dateTo } = params;
            const queryParams = new URLSearchParams({
                page,
                limit,
                ...(type && { type }),
                ...(category && { category }),
                ...(dateFrom && { dateFrom }),
                ...(dateTo && { dateTo }),
            });
            
            const response = await authApi.get(`${beckendRoutes.transactions}?${queryParams}`);
            return response.data;
        } catch (error) {
            return rejectWithValue(error?.response?.data || error.message);
        }
    }
);

export const fetchTransactionsStats = createAsyncThunk(
    "transactions/fetchStats",
    async (params = {}, { rejectWithValue }) => {
        try {
            const { dateFrom, dateTo } = params;
            const queryParams = new URLSearchParams({
                ...(dateFrom && { dateFrom }),
                ...(dateTo && { dateTo }),
            });
            
            const response = await authApi.get(`${beckendRoutes.transactionsStats}?${queryParams}`);
            return response.data;
        } catch (error) {
            return rejectWithValue(error?.response?.data || error.message);
        }
    }
);

export const createTransaction = createAsyncThunk(
    "transactions/create",
    async (transactionData, { getState, rejectWithValue }) => {
        try {
            const state = getState();
            const currentBalance = state.transactions.stats?.balance || 0;

            if (transactionData.type === 'expense' && transactionData.amount > currentBalance) {
                return rejectWithValue({ 
                    message: `Недостатньо коштів! Ваш баланс: ${currentBalance.toFixed(2)} грн` 
                });
            }
            
            const response = await authApi.post(beckendRoutes.transactions, transactionData);
            return response.data;
        } catch (error) {
            return rejectWithValue(error?.response?.data || error.message);
        }
    }
);

export const updateTransaction = createAsyncThunk(
    "transactions/update",
    async ({ id, data }, { getState, rejectWithValue }) => {
        try {
            const state = getState();
            const currentBalance = state.transactions.stats?.balance || 0;
            
            if (data.type === 'expense' && data.amount > currentBalance) {
                return rejectWithValue({ 
                    message: `Недостатньо коштів! Ваш баланс: ${currentBalance.toFixed(2)} грн` 
                });
            }
            
            const response = await authApi.put(beckendRoutes.transaction(id), data);
            return response.data;
        } catch (error) {
            return rejectWithValue(error?.response?.data || error.message);
        }
    }
);

export const deleteTransaction = createAsyncThunk(
    "transactions/delete",
    async (id, { rejectWithValue }) => {
        try {
            await authApi.delete(beckendRoutes.transaction(id));
            return id;
        } catch (error) {
            return rejectWithValue(error?.response?.data || error.message);
        }
    }
);