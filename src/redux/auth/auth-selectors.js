const getIsAuthenticated = state => state.auth.getIsAuthenticated;

const getUserName = state => state.auth.user.name;

export { getIsAuthenticated, getUserName };
