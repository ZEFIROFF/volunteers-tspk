import React from 'react';
import s from './Сard.module.css';

const Card = () => {
    return (
        <div className={s.card}>
            <div className={s.cardContent}></div>
            <div className={s.buttons}>
                <input type="button" className={`${s.yelllowButton} ${s.btn}`} />
                <input type="button" className={`${s.greenButton} ${s.btn}`} />
            </div>
        </div>
    );
};

export default Card;