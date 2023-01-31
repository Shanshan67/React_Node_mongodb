import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

const initialState = {
    user:user ? user : null,
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:''
}