import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { 
    fetchTransactions, 
    fetchTransactionsStats, 
    createTransaction, 
    updateTransaction, 
    deleteTransaction 
} from "../../transactionThunks";

const initialState = {
    items: [],
    stats: null,
    loading: false,
    isError: false,
    errorMessage: null,
    page: 1,
    limit: 20,
    totalItems: 0,
    totalPages: 0,
};

const transactionSlice = createSlice({
    name: "transactions",
    initialState,
    reducers: {
        clearTransactions: (state) => {
            state.items = [];
            state.stats = null;
            state.isError = false;
            state.errorMessage = null;
        },
        setPage: (state, action) => {
            state.page = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTransactions.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload.items || [];
                state.totalItems = action.payload.totalItems || 0;
                state.totalPages = action.payload.totalPages || 0;
                state.page = action.payload.page || 1;
                state.isError = false;
                state.errorMessage = null;
            })
            .addCase(fetchTransactionsStats.fulfilled, (state, action) => {
                state.loading = false;
                state.stats = action.payload;
                state.isError = false;
                state.errorMessage = null;
            })
            .addCase(createTransaction.fulfilled, (state, action) => {
                state.loading = false;
                state.items = [action.payload, ...state.items];
                state.isError = false;
                state.errorMessage = null;
            })
            .addCase(deleteTransaction.fulfilled, (state, action) => {
                state.loading = false;
                state.items = state.items.filter(item => item.id !== action.payload);
                state.isError = false;
                state.errorMessage = null;
            })
            .addMatcher(
                isAnyOf(
                    fetchTransactions.pending, 
                    fetchTransactionsStats.pending,
                    createTransaction.pending,
                    deleteTransaction.pending
                ),
                (state) => {
                    state.loading = true;
                    state.isError = false;
                    state.errorMessage = null;
                }
            )
            .addMatcher(
                isAnyOf(
                    fetchTransactions.rejected, 
                    fetchTransactionsStats.rejected,
                    createTransaction.rejected,
                    deleteTransaction.rejected
                ),
                (state, action) => {
                    state.loading = false;
                    state.isError = true;
                    state.errorMessage = action.payload?.message || "An error occurred";
                }
            );
    }
});

export const { clearTransactions, setPage } = transactionSlice.actions;
export default transactionSlice.reducer;