import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { login } from '../api/auth';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const contacts = await axios.get(
        `https://648ed18875a96b664444517b.mockapi.io/contacts`
      );
      return contacts.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const createContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const contacts = await axios.post(
        `https://648ed18875a96b664444517b.mockapi.io/contacts`,
        contact
      );

      return contacts.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      await axios.delete(
        `https://648ed18875a96b664444517b.mockapi.io/contacts/${id}`
      );
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const fetchTypes = createAsyncThunk(
//   'contacts/fetchAllTypes',
//   async (_, thunkAPI) => {
//     try {
//       const types = await axios.get(
//         `https://648ed18875a96b664444517b.mockapi.io/types`
//       );
//       return types.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const createType = createAsyncThunk(
//   'contacts/createType',
//   async (type, thunkAPI) => {
//     try {
//       const types = await axios.post(
//         `https://648ed18875a96b664444517b.mockapi.io/types`,
//         type
//       );
//       return types.data;

//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

export const getProfileThunk = createAsyncThunk(
  'auth/getProfile',
  (body) => {
    login(body)
  }
)

export const loginThunk = createAsyncThunk(
  'auth/login', async(body, {rejectWithValue, dispatch}) => {
    try {
      const data = await login(body)
      dispatch(getProfileThunk())
      return data
    } catch (error) {
      return rejectWithValue(error.response.data.message)
    }
  }
)
