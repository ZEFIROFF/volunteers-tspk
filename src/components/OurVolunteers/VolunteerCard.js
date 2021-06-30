import React from 'react';
import blindImg from '../../img/lsaDEpVYSGs.jpg'
import sn from './OurVolunteers.module.css';
import s from '../Events/Events.module.css'


const VolunteerCard = () => {
    return (
        <div className={'card m-3 border-0 ' + sn.card_item + " "+ s.block}>
            <img src={blindImg} className="card-img-top " alt="image-profile"/>
                <div className="card-body">
                    <h5 className={s.title}>Фамилия Имя (Отчество)</h5>
                    <h5 className={s.title}>Группа: Название группы</h5>
                    <p className={s.description}>Описание профиля</p>
                    <p className="card-text fw-bold text-danger">Offline</p>
                </div>
        </div>
    );
};

export default VolunteerCard;
