import React from 'react';
import s from './Events.module.css'

const BtnReadmore = () => {
    return (
        <div className={s.btnReadmore +" btnRed"}>
            <a href="">Поподробнее</a>
        </div>
    );
};

export default BtnReadmore;
