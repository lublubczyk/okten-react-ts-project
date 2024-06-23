import { NavLink } from "react-router-dom"

import style from './HeaderLinks.module.css';

const HeaderLinks = () => {
    return (
        <div className={style.HeaderLinks}>
            <NavLink to={'movies?page=1'}>Movies</NavLink>
            <NavLink to={'search'}>Search</NavLink>
        </div>
    )
};

export { HeaderLinks };