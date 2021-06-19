import React from 'react';
import s from './Header.module.css';
import sCabinet from './PersonalCabinet.module.css';
import noPhoto from '../../img/noPhoto2.png';
import emoji from '../../img/emojik.png';
import logo from '../../favicon.png'

const Header = () => {
    return (
        <div className={s.header}>
            <div className={`${sCabinet.container} d-flex justify-content-between`}>
                <div className={s.avatar}>
                    <div className={s.avatarImg}>
                        <img src={noPhoto} />
                        <img className={s.emoji} src={emoji} />
                    </div>
                    <p className={s.avatarText}>Имя...</p>
                </div>
                <h1 className={s.cabinetTitle}>Добро пожаловать<br />в личный кабинет!</h1>
                <img src={logo} width="244" height="72" />
            </div>
        </div>
    );
};

export default Header;