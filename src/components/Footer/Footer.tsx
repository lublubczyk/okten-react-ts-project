import { Pagination } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

import { useAppSelector } from '../../hooks';
import style from './Footer.module.css';

const Footer = () => {

    const { movies } = useAppSelector(state => state.movies);
    const navigate = useNavigate();
    const { pathname, search } = useLocation();

    const count = movies ? movies.total_pages < 500 ? movies.total_pages : 500 : 500;
    const page = +search.split('=').reverse()[0];

    const changePage = (_: any, number: number) => {
        navigate(`${pathname}?page=${number}`);
    };

    return (
        <div className={style.Footer}>
            {pathname.endsWith('movies') ?
                <Pagination 
                    count={count}
                    page={page}
                    onChange={changePage}
                />
                : <h1>{pathname.slice(1) }</h1>
            }
        </div>
    )
};

export { Footer };