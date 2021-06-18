import React from 'react';
import s from './CreateEvent.module.css'

const AdminCreateEvent = () => {
    return (
        <div className={"mt-5 shadow-lg my-auto " + s.main_box}>
            <h2 className={s.title}>Создание мероприятия</h2>
            <div className={s.inputs}>
                <div className="d-flex justify-content-between mt-5">
                    <input className={`${s.input} ${s.top_input}`} type="text" placeholder="Введите название мероприятия" />
                    <input className={`${s.input} ${s.top_input}`} type="text" placeholder="Введите дату начала-конца мероприятия" />
                </div>
                <textarea placeholder="Введите описание мероприятия" className="mt-5"></textarea>
                <div className="d-flex justify-content-between mt-5">
                    <div>
                        <input placeholder="Введите местоположение мероприятия" type="text" className={s.input} />
                    </div>
                    <div className={s.bottom_right_inputs}>
                        <input placeholder="Введите количество участников" type="text" className={s.input} />
                        <input placeholder="Введите количество запасных" type="text" className={s.input} />
                    </div>
                </div>
                <div className={"mt-5 d-flex justify-content-center " + s.buttons}>
                    <input type="button" value="Добавить сертификат" className={`${s.btn} ${s.btn_primary}`} />
                    <input type="button" value="Создать" className={`${s.btn} ${s.btn_danger}`} />
                </div>
            </div>
        </div>
    );
};

export default AdminCreateEvent;