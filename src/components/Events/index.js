import React from 'react';
import s from './Events.module.css'
import Block from './BlockEvent'
import tspk from '../../img/ТСПК.png'

const MyComponent = () => {
    return (
        <div className="container-xxl mt-5">
            <section className="container-lg m-0 p-0 row align-items-center">
                <div className="col">
                    <h3 className="my-3">Предстоящие события</h3>
                    <div className={s.content}>
                        <Block/>
                        <Block/>
                    </div>
                    <div className="mx-auto col-8">
                        <h3 id={s.readmore}>Смотреть дальше</h3>
                    </div>
                </div>
                <div className="col-2">
                    <img src={tspk} alt="ТСПК"/>
                </div>
            </section>
        </div>
    );
};

export default MyComponent;
