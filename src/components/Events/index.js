import React from 'react';
import s from './Events.module.css'
import Block from './BlockEvent'

const MyComponent = () => {
    return (
        <div className="container-xxl mt-5">
            <section className="container-lg p-0">
                <h3 className="my-3">Предстоящие события</h3>
                <Block/>
                <Block/>
                <div className="btnBlock mx-auto col-8">
                    <h3 id={s.readmore}>Смотреть дальше</h3>
                </div>
            </section>
        </div>
    );
};

export default MyComponent;
