import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { ISearchParams } from "../../interfaces";

const Search = () => {
    
    const { register, handleSubmit, reset } = useForm<ISearchParams>();
    const navigate = useNavigate();

    const search = ({ query }: ISearchParams) => {
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