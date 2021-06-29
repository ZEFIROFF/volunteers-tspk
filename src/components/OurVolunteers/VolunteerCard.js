import React from 'react';
import blindImg from '../../img/lsaDEpVYSGs.jpg'
import sn from './OurVolunteers.module.css';

const VolunteerCard = () => {
    return (
        <div className={'card m-3 ' + sn.card_item}>
            <img src={blindImg} className="card-img-top " alt="image-profile"/>
                <div className="card-body">
                    <h5 className="card-title ">Фамилия Имя (Отчество)</h5>
                    <h5 className="card-title ">Группа: Название группы</h5>
                    <p className="card-text ">Описание профиля или еще что то</p>
                    <p className="card-text "><small className="text-muted">Offline</small></p>
                </div>
        </div>
    );
};

export default VolunteerCard;
