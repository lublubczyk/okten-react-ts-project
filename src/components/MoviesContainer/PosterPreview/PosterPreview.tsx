import { FC } from "react";

import { baseURL } from "../../../constants";
import style from './PosterPreview.module.css';

interface IProps {posterPath : string}

const PosterPreview: FC<IProps> = ({ posterPath }) => {
    return (
        <div>
            <img
                src={baseURL.poster + posterPath}
                alt="File Not Found"
                className={style.PosterPreview}
            />
        </div>
    )
};

export { PosterPreview };