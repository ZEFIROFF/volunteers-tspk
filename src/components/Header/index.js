import React from 'react';
import logo from '../../favicon.png'
import s from './Header.module.css'
import emoji from '../../img/emoji.png'
import SignIn from "../Sign/SignIn";

const Header = () => {
    return (
        <>
            <header>
                <div className="container-xxl p-0 ">
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
                                    <a className="nav-link active" aria-current="page" id={s.active}
                                       href="./">Главная</a>
                                </li>
                                <li className="nav-item mx-2">
                                    <a className="nav-link" href="./our-volunteers">Наши волонтеры</a>
                                </li>
                                <li className="nav-item mx-2">
                                    <a className="nav-link" href="#">Фотоальбом</a>
                                </li>
                            </ul>
                            <button type="button" className={s.signIn + " col-md-auto text-dark"}
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal">
                                Войти
                            </button>
                            <SignIn/>
                        </div>
                    </nav>
                    <div className={s.title + " container-md row mx-auto justify-content-md-between p-5 m-0 pb-0"}>
                        <div className={s.name + " col-md-5 p-0 text-white"}>
                            <h1>Волонтерский центр <br/> "Добро = счастье" ГАПОУ TСПК</h1>
                        </div>
                        <div className="col-md-auto">
                            <img className="img-fluid d-none d-md-block" src={emoji} alt="emoji"/>
                        </div>
                    </div>

                </div>
            </header>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#8bd2fc" fill-opacity="1"
                      d="M0,64L80,96C160,128,320,192,480,192C640,192,800,128,960,101.3C1120,75,1280,85,1360,90.7L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
            </svg>
        </>
    );
};

export default Header;