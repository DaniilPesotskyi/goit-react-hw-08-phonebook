import { createSlice } from '@reduxjs/toolkit';
import initialState from '../initialState';

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter: (state, { payload }) => {
      state.filter = payload;
    },
    setActiveType: (state, { payload }) => {
      if (state.activeTypes.some(i => i === payload.name)) {
        const typeIndex = state.activeTypes.indexOf(payload.name);
        state.activeTypes.splice(typeIndex, 1);
        return;
      }

      state.activeTypes.push(payload.name);
    },
    clearActiveTypes: (state, { payload }) => {
      state.activeTypes = [];
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const { setFilter, setActiveType, clearActiveTypes } =
  filterSlice.actions;
