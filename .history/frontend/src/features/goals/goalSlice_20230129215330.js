import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

const initialState= {
    goals:[],
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:''
}

//create new goal
export const createGoal = createAsyncThunk('goals/create',async(user,thunkAPI) => {
    try {
        return await authService.register(user)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const goalSlice = createSlice({
    name:'goal',
    initialState,
    reducers:{
        reset: (state) =>initialState /* {
            state.=
            state.=
            state.=
            state.=
            state.=
        } */
    }
})

export const {reset}=goalSlice.actions
export default goalSlice.reducer 