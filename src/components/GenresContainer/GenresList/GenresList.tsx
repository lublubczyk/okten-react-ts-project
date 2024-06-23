import { FC } from "react";

import { IGenre } from "../../../interfaces";
import { GenreBadge } from "../GenreBadge";

interface IProps { genres: IGenre[] };

const GenresList: FC<IProps> = ({ genres }) => {

    return (
        <div>
            {genres.map(genre=> <GenreBadge key={genre.id} genre={genre} />)}
        </div>
    )
};

export { GenresList };