import { createAsyncThunk, createSlice, isFulfilled, isPending, isRejected } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

import { IError, IGenreParams, IMovies, ISearchParams } from "../../interfaces";
import { moviesService } from "../../services";

interface IState {
    movies: IMovies | null;
    errors: IError | null;
    isLoading: boolean;
};

const initialState: IState = {
    movies: null,
    errors: null,
    isLoading: null
};

const getAll = createAsyncThunk<IMovies, string>(
    'moviesSlice/getAll',
    async (page, { rejectWithValue }) => {
        try {
            const { data } = await moviesService.getAllMovies(page);
            return data
        } catch (e) {
            const error = e as AxiosError;
            return rejectWithValue(error.response?.data)
        }
    }
);

const getGenreMovies = createAsyncThunk<IMovies, IGenreParams>(
    'moviesSlice/getGenreMovies',
    async (params, { rejectWithValue }) => {
        try {
            const { data } = await moviesService.getGenreMovies(params);
            return data;
        } catch (e) {
            const error = e as AxiosError;
            return rejectWithValue(error.response?.data);
        }
    }
);

const getSearchMovie = createAsyncThunk<IMovies, ISearchParams>(
    'moviesSlice/getSearchMovie',
    async (params, { rejectWithValue }) => {
        try {
            const { data } = await moviesService.searchMovie(params);
            return data;
        } catch (e) {
            const error = e as AxiosError;
            return rejectWithValue(error.response?.data);
        }
    }
);

const moviesSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addMatcher(isRejected(getAll, getGenreMovies, getSearchMovie), (state, action) => {
                state.isLoading = false;
                state.errors = action.payload;
            })
            .addMatcher(isPending(getAll, getGenreMovies, getSearchMovie), state => {
                state.isLoading = true;
            })
            .addMatcher(isFulfilled(getAll, getGenreMovies, getSearchMovie), (state, action) => {
                state.movies = action.payload;
                state.isLoading = false;
                state.errors = null;
            })
});

const { reducer: moviesReduser, actions } = moviesSlice;

const moviesActions = { ...actions, getAll, getGenreMovies, getSearchMovie };

export { moviesReduser, moviesActions };