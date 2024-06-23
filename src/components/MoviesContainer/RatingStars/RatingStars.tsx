import { Rating } from "@mui/material";
import { FC } from "react";
import { useLocation } from "react-router-dom";

import style from './RatingStars.module.css';

interface IProps { voteAverage: number };

const RatingStars: FC<IProps> = ({ voteAverage }) => {

    const { pathname } = useLocation();
    const size = pathname.endsWith('info') ? 'large' : 'small';

    return (
        <div className={style.RatingStars}>
            <Rating
                name="size-small" value={voteAverage}
                precision={0.5} max={10}
                size={size}
                readOnly
            />
        </div>
    )
};

export { RatingStars };