import React from 'react';
import logo from '../../favicon.png'
import s from './Header.module.css'
import emoji from '../../img/emoji.png'

const Header = () => {
    return (
        <header>
            <div className="container-xxl p-0">
                {/*<nav className="row mx-md-auto justify-content-lg-between justify-content-center align-items-center navbar">*/}
                {/*    <div className="col col-md-auto navbar-brand"><img className="d-block mx-auto mx-md-0" src={logo} alt={logo}/></div>*/}
                {/*    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"*/}
                {/*            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"*/}
                {/*            aria-expanded="false" aria-label="Toggle navigation">*/}
                {/*        <span className="navbar-toggler-icon"></span>*/}
                {/*    </button>*/}
                {/*    <ul className={s.navbar + " col col-md-auto navbar-nav align-items-center flex-wrap flex-md-nowrap row flex-column flex-md-row mx-auto mx-md-0 collapse navbar-collapse"} id="navbarSupportedContent">*/}
                {/*        <li className="col-md col-auto"><a href="#" id={s.active}>Главная</a></li>*/}
                {/*        <li className="col-md text-nowrap col-auto "><a href="#">Наши волонтеры</a></li>*/}
                {/*        <li className="col-md col-auto"><a href="#">Фотоальбом</a></li>*/}
                {/*    </ul>*/}
                {/*    <div className={s.signIn + " col-md-auto"}><a href="#signIn">Войти</a></div>*/}
                {/*</nav>*/}
                <nav className="navbar navbar-dark navbar-expand-md">
                    <a className="navbar-brand" href="#">
                        <img className="d-block mx-auto mx-md-0" src={logo} alt={logo}/>
                    </a>
                    <button className="navbar-toggler text-white" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarMobileMenu" aria-controls="navbarMobileMenu"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon text-white"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarMobileMenu">
                        <ul className={s.navbar + " navbar-nav me-auto mb-2 mb-lg-0 mx-auto align-items-center fs-4 fs-2-md text-center-md"}>
                            <li className="nav-item mx-2">
                                <a className="nav-link active" aria-current="page" id={s.active} href="#">Главная</a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link" href="#">Наши волонтеры</a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link" href="#">Фотоальбом</a>
                            </li>
                        </ul>
                        <div className={s.signIn + " col-md-auto d-flex justify-content-center"}>
                            <a href="#signIn">Войти</a>
                        </div>
                    </div>
                </nav>
                <div className={s.title + " container-md row mx-auto justify-content-md-between p-5"}>
                    <div className={s.name + " col-md-5 p-0"}>
                        <h1>Волонтерский центр <br/> "Добро = счастье" ГАПОУ TСПК</h1>
                    </div>
                    <div className="col-md-auto">
                        <img className="img-fluid d-none d-md-block" src={emoji} alt="emoji"/>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;