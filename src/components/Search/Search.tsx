import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { useAppDispatch } from "../../hooks";
import { ISearchParams } from "../../interfaces";
import { moviesActions } from "../../redux";

const Search = () => {
    
    const { register, handleSubmit, reset } = useForm<ISearchParams>();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const search =async ({ query }: ISearchParams) => {
        await dispatch(moviesActions.getSearchMovie({ query }));
        navigate(`/search/:${query}/movies?page=1`);
        reset()
    }

    return (
        <div>
            <form onSubmit={handleSubmit(search)}>
                <input type="taxt" placeholder="print serch params" {...register('query')} />
                <button>Search</button>
            </form>
        </div>
    )
};

export { Search };