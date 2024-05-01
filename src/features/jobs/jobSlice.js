import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


// initial state
const initialState = {
    jobs: [],
    totalCount: 0,
    loading: false,
    error: null,
    currentPage: 1, //current page
    jobSize: 10  // number of jobs per page
}



// fetching job data
export const fetchJobs = createAsyncThunk(
    'jobs/fetchJobs',
    async ({ limit, offset }) => {
        const { data } = await axios.post("https://api.weekday.technology/adhoc/getSampleJdJSON", { limit, offset })
        return { jobs: data.jdList, totalCount: data.totalCount }
    }
)


const jobSlice = createSlice({
    name: 'jobs',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchJobs.pending, (state) => {
            state.loading = true,
                state.error = null
        }).addCase(fetchJobs.fulfilled, (state, action) => {
            state.loading = false,
                state.jobs.push(...action.payload.jobs),
                state.error = null,
                state.totalCount = action.payload.totalCount
            // state.currentPage++
        }).addCase(fetchJobs.rejected, (state, action) => {
            state.loading = false,
                state.error = action.error.message
        })

    }
})


export default jobSlice.reducer;



