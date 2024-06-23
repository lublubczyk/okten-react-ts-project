import { ChangeTheme } from './ChangeTheme';
import { HeaderLinks } from './HeaderLinks';
import { Title } from './Title';
import { UserInfo } from './UserInfo';
import style from './Header.module.css';

const Header = () => {
    return (
        <div className={style.Header} >
            <Title/>
            <HeaderLinks />
            <div className={style.RightDiv}>
                <ChangeTheme/>
                <UserInfo/>
            </div>
        </div>
    )
};

export { Header };