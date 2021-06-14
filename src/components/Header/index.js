import React from 'react';
import logo from '../../favicon.png'
import s from './Header.module.css'
import emoji from '../../img/emoji.png'

const Header = () => {
    return (
        <header>
            <div className="container-xxl p-0">
                <nav className="row justify-content-between align-items-center">
                    <div className="col col-lg-4"><img src={logo} alt={logo}/></div>
                    <ul className={s.navbar + " col col-md-7 row "}>
                        <li className="col-md-3"><a href="#" id={s.active}>Главная</a></li>
                        <li className="col-md-3"><a href="#">Наши волонтеры</a></li>
                        <li className="col-md-3"><a href="#">Фотоальбом</a></li>
                    </ul>
                    <div className={s.signIn + " col-lg-auto"}><a href="#signIn">Войти</a></div>
                </nav>
                <div className={s.title + " container-md row mx-auto justify-content-between p-0"}>
                    <div className={s.name + " col-md-5 p-0"}>
                        <h1>Волонтерский центр <br/> "Добро = счастье" ГАПОУ TСПК</h1>
                    </div>
                    <div className="col-md-4">
                    <img src={emoji} alt="emoji"/>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;