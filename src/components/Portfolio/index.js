import React from 'react';
import noPhoto from '../../img/noPhoto.png'
import s from './Portfolio.module.css';
import Certificate from './Certificate';

const Portfolio = () => {
    return (
        <div className="row container-fluid">
            <div className={`col-md-3 ${s.leftBlock}`}>
                <div className={s.sidebar}>
                    <div className={s.sidebar__inner}>
                        <div className={s.photoBlock}>
                            <img src={noPhoto} />
                        </div>
                        <h2 className={`${s.fullNameTitle} mt-3`}>ФИО</h2>
                        <input type="button" value="Создать мероприятие" className={`${s.createEventButton} mt-5`} />
                    </div>
                </div>
            </div>
            <div className="col-md-9">
                <h2 className={s.portfolioTitle}>Портфолио</h2>
                <div className={`${s.rightBlock} row`}>
                    <div className={`${s.cardWrapper}`}>
                        <Certificate />
                    </div>
                    <div className={`${s.cardWrapper}`}>
                        <Certificate />
                    </div>
                    <div className={`${s.cardWrapper}`}>
                        <Certificate />
                    </div>
                    <div className={`${s.cardWrapper}`}>
                        <Certificate />
                    </div>
                </div>
                <p className={s.openPortfolio}>Открыть портфолио полностью</p>
            </div>
        </div>
    );
};

export default Portfolio;