import { configureStore } from "@reduxjs/toolkit";

import { genresReducer, movieInfoReduser, moviesReduser, themeTriggerReducer } from "./slices";

const store = configureStore({
    reducer: {
        movies: moviesReduser,
        genres: genresReducer,
        moviesInfo: movieInfoReduser,
        themeTrigger: themeTriggerReducer
    }
}); 

export { store };