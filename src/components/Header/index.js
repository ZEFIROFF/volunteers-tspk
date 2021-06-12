import React from 'react';
import logo from '../../favicon.png'
import s from './Header.module.css'

const Header = () => {
    return (
        <div>
            <nav className={s.nav}>
                <div className={s.logo}><img src={logo} alt={logo}/></div>
                <ul className={s.nav_middle}>
                    <li><a href="">Главная</a></li>
                    <li><a href="">Наши волонтеры</a></li>
                    <li><a href="">Фотоальбом</a></li>
                </ul>
                <div className={s.signin}>Войти</div>
            </nav>
            <div className={s.title}>

            </div>
        </div>
    );
};

export default Header;
