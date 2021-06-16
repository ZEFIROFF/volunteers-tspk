import React from 'react';
import s from './Footer.module.css';
import vkIcon from '../../img/kisspng-vk-computer-icons-logo-vk-logo-5b37eb8ce8cca4.4974944915303914369536.png'
import logo from '../../favicon.png'
import vkInsta from '../../img/kisspng-computer-icons-logo-logo-instagram-5ac88fc414f009.4634305715230934440858.png'

const Footer = () => {
    return (
        <footer>
            <div className="container-xxl justify-content-lg-between mx-auto p-3 row">
                <nav className="col-5">
                    <ul className="nav flex-column">
                        <li className="nav-item"><a className="nav-link link-white" href="#">Главная</a></li>
                        <li><a className="nav-link link-white" href="#">Наши волонтеры</a></li>
                        <li><a className="nav-link link-white" href="#">События</a></li>
                        <li><a className="nav-link link-white" href="#">Фотоальбом</a></li>
                    </ul>
                </nav>
                <div className="col-5">
                    <ul className="nav flex-column">
                        <li className="nav-item"><img src={vkIcon} alt="vkIcon"/>-<a className="nav-link link-white d-inline" href="#">VK</a></li>
                        {/*<li><a className="nav-link d-inline link-white" href="#">Twitter</a></li>*/}
                        <li><img src={vkInsta} alt="vkInsta"/>-<a className="nav-link link-white d-inline" href="#">Instagram</a></li>
                        {/*<li><a className="nav-link d-inline link-white" href="#">Facebook</a></li>*/}
                    </ul>
                </div>
                <div className="col-2"><img className="img-fluid" src={logo} alt="logo"/></div>
            </div>
        </footer>
    );
};

export default Footer;
