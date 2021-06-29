import React from 'react';
import Footer from '../Footer'
import logo from "../../favicon.png";
import s from "../Header/Header.module.css";
import Card from './VolunteerCard';

const OurVolunteers = () => {
    return (
        <div className="container-fluid m-0 p-0">
            <header>
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
                        </div>
                    </div>
                </nav>
            </header>
            <main className="container-fluid row-cols-4 d-flex flex-row flex-wrap align-items-center">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </main>
            <Footer/>
        </div>
    );
};

export default OurVolunteers;
