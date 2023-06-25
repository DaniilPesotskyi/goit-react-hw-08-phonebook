import { createSlice } from '@reduxjs/toolkit';
import initialState from '../initialState';
import {
  createContact,
  createType,
  deleteContact,
  fetchContacts,
  fetchTypes,
} from '../operations';

const handlePending = state => {
  state.contacts.isLoading = true;
  state.contacts.error = '';
};

const handleRejected = (state, { payload }) => {
  state.contacts.isLoading = false;
  state.contacts.error = payload;
};

const contactsSlice = createSlice({
  name: 'contacts',

  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.contacts.items = payload;
        state.contacts.isLoading = false;
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.contacts.isLoading = false;
        return {
          ...state,
          contacts: {
            ...state.contacts,
            items: state.contacts.items.filter(
              contact => contact.id !== payload
            ),
          },
        };
      })
      .addCase(createContact.fulfilled, (state, { payload }) => {
        state.contacts.isLoading = false;
        state.contacts.items.push(payload);
      })
      .addCase(fetchTypes.fulfilled, (state, { payload }) => {
        state.contacts.isLoading = false;
        state.contactTypes = payload;
      })
      .addCase(createType.fulfilled, (state, { payload }) => {
        state.contacts.isLoading = false;
        state.contactTypes.push(payload);
      })
      .addMatcher(action => {
        action.type.endsWith('/pending');
      }, handlePending)
      .addMatcher(action => {
        action.type.endsWith('/rejected');
      }, handleRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;
// export const { createType } = contactsSlice.actions;
