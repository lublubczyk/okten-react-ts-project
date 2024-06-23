import { Avatar } from "@mui/material"

import { baseURL } from "../../../constants";
import style from './UserInfo.module.css';

const UserInfo = () => {
    
    const src = baseURL.poster + "8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg";
    const alt = 'login';
    const sx = { width: 70, height: 60 };
    
    return (
        <div className={style.UserInfo}>
            Hello
            <Avatar src={src} alt={alt} sx={sx} />
            Okten
        </div>
    )
};

export { UserInfo };