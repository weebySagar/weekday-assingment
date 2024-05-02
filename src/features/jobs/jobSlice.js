import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


// initial state
const initialState = {
    jobs: [],
    totalCount: 0,
    loading: false,
    error: null,
    currentPage: 0, //current page
    pageSize: 20,  // number of jobs per page
    filters: {
        selectedJobRole: '',
        experience: '',
        minimumSalary: 0,
        location: ''
    },
    jobRoles: ['backend', 'frontend', 'fullstack', 'ios', 'flutter', 'react native', 'android', 'tech lead', 'dev-ops', 'data engineer', 'data science', 'computer-vision', 'nlp', 'deep-learning', 'test / Qa', 'web3', 'sre', 'data infrastructre'],
    experience: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    minSalary: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
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
        setFilterValues(state, action) {

            state.filters = {
                ...state.filters,
                ...action.payload
            }
        },

        setJobValues(state, action) {
            state.filters = {
                ...state.filters,
                ...action.payload
            }
        }
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
            state.currentPage++
        }).addCase(fetchJobs.rejected, (state, action) => {
            state.loading = false,
                state.error = action.error.message
        })

    }
})

export const { setFilterValues, setJobValues } = jobSlice.actions
export default jobSlice.reducer;



