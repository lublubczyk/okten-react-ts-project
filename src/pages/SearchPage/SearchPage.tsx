import { Outlet, useLocation, useParams } from "react-router-dom";
import { useEffect } from "react";

import { Search } from "../../components";
import { useAppDispatch } from "../../hooks";
import { moviesActions } from "../../redux";
import style from './SearchPage.module.css';

const SearchPage = () => {
    
    const params = useParams();
    const { search } = useLocation();
    const dispatch = useAppDispatch();
    console.log('Serch page:', params, search);

    useEffect(() => {
        if (params) dispatch(moviesActions.getSearchMovie({query: params.query, page: search.slice(1) }))
    },[params,search,dispatch])

    return (
        <div className={style.SearchPage}>
            <Search/>
            <Outlet/>
        </div>
    )
};

export { SearchPage };