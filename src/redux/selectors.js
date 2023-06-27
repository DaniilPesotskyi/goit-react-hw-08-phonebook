export const getContacts = state => state.contacts.contacts;
export const getFilter = state => state.filter;
export const getContactTypes = state => state.contacts;
export const selectActiveTypes = state => state.filter.activeTypes;

export const selectIsLoggedIn = state => state.auth;

export const selectUser = state => state.auth.user;

export const selectIsRefreshing = state => state.auth.isRefreshing;
