import { combineReducers } from '@reduxjs/toolkit';
import { contactsReducer } from './slices/contactsSlice';
import { filterReducer } from './slices/filtersSlice';

export const reducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
