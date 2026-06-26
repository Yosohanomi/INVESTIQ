export const beckendRoutes = {
    loginRoute: "/api/auth/login",
    registerRoute: "/api/auth/register",
    refreshRouta: "/api/auth/refresh",
    logoutRoute: "/api/auth/logout",
    transactions: '/api/transactions',
    transactionsStats: '/api/transactions/stats',
    transaction: (id) => `/api/transactions/${id}`,
}