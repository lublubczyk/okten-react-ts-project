import { Navigate, createBrowserRouter } from "react-router-dom";

import { MainLayout } from "../layouts";
import { GenresPage, MoviesPage, SearchPage } from "../pages";
import { MovieInfo, MoviesList } from "../components";

const router = createBrowserRouter([
    {
        path: '', element: <MainLayout />, children: [
            { index: true, element: <Navigate to={'movies?page=1'} /> },
            {
                path: 'movies', element: <MoviesPage />, children: [
                    { path: '', element: <MoviesList /> },
                    { path: 'info', element: <MovieInfo /> }
                ]
            },
            {
                path: 'genre/:id/movies', element: <GenresPage />, children: [
                    { path: '', element: <MoviesList /> },
                    { path: 'info', element: <MovieInfo /> }
                    
                ]
            },
            {
                path: 'search', element: <SearchPage />, children: [
                    { path: ':query/movies', element: <MoviesList /> },
                    { path: ':query/movies/info', element: <MovieInfo />}
                ]
            }
        ]
    }
])

export { router };