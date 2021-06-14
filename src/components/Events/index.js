import React from 'react';
import s from './Events.module.css'
import Block from './BlockEvent'
import TspkRight from '../../img/ТСПК.png'
import TspkLeft from '../../img/ГАПОУ.png'

const MyComponent = () => {
    return (
        <div className="container-xxl p-0 mt-5">
            <section className="container-lg flex-nowrap justify-content-between m-0 p-0 row align-items-center">
                <div className="col-7">
                    <h3 className="my-3">Предстоящие события</h3>
                    <div className={s.content + " col"}>
                        <Block/>
                        <Block/>
                    </div>
                    <div className="mx-auto col-4">
                        <h3 id={s.readmore}>Смотреть дальше</h3>
                    </div>
                </div>
                <div className="col-auto p-0">
                    <img src={TspkRight} alt="ТСПК"/>
                </div>
            </section>
            <section className="container-lg flex-nowrap justify-content-between m-0 p-0 row align-items-center">
                <div className="col-auto p-0">
                    <img src={TspkLeft} alt="ТСПК"/>
                </div>
                <div className="col-7">
                    <h3 className="my-3">Прошедшие события</h3>
                    <div className={s.content + " col"}>
                        <Block/>
                        <Block/>
                    </div>
                    <div className="mx-auto col-4">
                        <h3 id={s.readmore}>Смотреть дальше</h3>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default MyComponent;
