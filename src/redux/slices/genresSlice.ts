import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

import { IError, IGenres } from "../../interfaces";
import { infoService } from "../../services";

interface IState {
    genres: IGenres | null;
    genreId: number | null;
    errors: IError | null;
    isLoading: boolean;
};

const initialState: IState = {
    genres: null,
    genreId: null,
    errors: null,
    isLoading: null
};

const getGenres = createAsyncThunk<IGenres, void>(
    'genresSlice/getGenres',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await infoService.getGenres();
            return data;
        } catch (e) {
            const error = e as AxiosError;
            return rejectWithValue(error.response?.data);
        }
    }
);

const genresSlice = createSlice({
    name: 'genresSlice',
    initialState,
    reducers: {
        setGenreId: (state, action) => {
            state.genreId = action.payload;
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getGenres.fulfilled, (state, action) => {
                state.genres = action.payload;
                state.isLoading = false;
                state.errors = null;
            })
            .addCase(getGenres.pending, state => {
                state.isLoading = true;
            })
            .addCase(getGenres.rejected, (state, action) => {
                state.errors = action.payload;
                state.isLoading = false;
            })
});

const { reducer: genresReducer, actions } = genresSlice;

const genresActions = { ...actions, getGenres };

export { genresReducer, genresActions };