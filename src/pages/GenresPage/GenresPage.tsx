import { useEffect } from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";

import { useAppDispatch } from "../../hooks";
import { moviesActions } from "../../redux";
import style from './GenresPage.module.css';

const GenresPage = () => {
    
    const { id } = useParams();
    const { search: page } = useLocation();
    const dispatch = useAppDispatch();

    useEffect(() => {  
        dispatch(moviesActions.getGenreMovies({ id: +id, page }))
    }, [id, page,dispatch])
    
    return (
        <div className={style.GenresPage}>
             <Outlet />
        </div>
    )
};

export { GenresPage };