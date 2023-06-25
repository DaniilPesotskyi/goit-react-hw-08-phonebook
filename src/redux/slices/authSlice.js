const { createSlice } = require("@reduxjs/toolkit");
const { default: initialState } = require("../initialState");

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: (builder) => {
    }
})