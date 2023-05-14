import SearchBar from '../SearchBar/SearchBar.jsx'
import style from './navBar.module.css'
import { NavLink } from "react-router-dom";

const navBar = ({onSearch}) => {
return (
    <div className={style.nav}>
        <SearchBar onSearch={onSearch}/>
            <NavLink className={style.linkNav} to= '/'>Log Out</NavLink>
            <NavLink className={style.linkNav} to='/home'>Home</NavLink>
            <NavLink className={style.linkNav} to='/about'>About</NavLink>
            <NavLink className={style.linkNav} to='/favorites'>Favorites</NavLink>

    </div>
    );
};
export default navBar;