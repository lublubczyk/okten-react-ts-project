import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IError, IMovieInfo } from "../../interfaces";

import { infoService } from "../../services";
import { AxiosError } from "axios";

interface IState {
    movieInfo: IMovieInfo | null;
    errors: IError | null;
    isLoading: boolean;
};

const initialState: IState = {
    movieInfo: null,
    errors: null,
    isLoading: null
};

const getMovieInfo = createAsyncThunk<IMovieInfo, number>(
    'movieInfoSlice/getMovieInfo',
    async (id, { rejectWithValue }) => {
        try {
            const { data } = await infoService.getMovieInfo(id);
            return data;
        } catch (e) {
            const error = e as AxiosError;
            return rejectWithValue(error.response?.data);
        }
    }
);

const movieInfoSlice = createSlice({
    name: 'movieInfoSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getMovieInfo.fulfilled, (state, action) => {
                state.movieInfo = action.payload;
                state.errors = null;
                state.isLoading = false;
            })
            .addCase(getMovieInfo.rejected, (state, action) => {
                state.errors = action.payload;
                state.isLoading = false;
            })
            .addCase(getMovieInfo.pending, state => {
                state.isLoading = true;
            })
});

const { reducer: movieInfoReduser, actions } = movieInfoSlice;

const movieInfoActions = { ...actions, getMovieInfo };

export { movieInfoReduser, movieInfoActions };
