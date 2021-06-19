import React from 'react';
import Header from './Header';
import Card from './Card';
import s from './PersonalCabinet.module.css';

const PersonalCabinet = () => {
    return (
        <div>
            <Header />
            <div className={`${s.container} ${s.content}`}>
                <div className="container-fluid row">
                    <div className="col-md-3">
                        <div className={s.sidebar}>
                            <ul>
                                <li>ФИО...</li>
                                <li>Дата рождения...</li>
                                <li>Номер телефона...</li>
                                <li>Прописка...</li>
                                <li>Группа...</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className={s.cards}>
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonalCabinet;