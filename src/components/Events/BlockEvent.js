import React from 'react';
import s from './Events.module.css'
import map from '../../img/placeholder.png'
import BtnReadmore from "./BtnReadmore";

const BlockEvent = () => {
    return (
        <div className={s.block + " container-md-4 my-5 px-5 py-4 col-7"}>
            <h3 className={s.title}>Sample name [date]</h3>
            <div className="row justify-content-evenly my-3">
                <div className="col">
                    <button type="button" className="btn btnRed">status...</button>
                </div>
                <div className="col">
                    <div className={s.amount + " row"}>
                        <h5 className="col">Участвуют: ?</h5>
                        <h5 className="col">Запас: ?</h5>
                    </div>
                </div>
            </div>
            <p className={s.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur
                culpa dolor eveniet,
                exercitationem fugit harum ipsa iste nulla numquam officia, perspiciatis tempore vel? Iusto laudantium
                nobis perferendis perspiciatis recusandae!</p>
            <div className="row align-items-center justify-content-between">
                <div className="col-auto"><img width="30px" src={map} alt=""/> <small>- Местоположение</small></div>
                <div className="col-auto"><BtnReadmore/></div>
            </div>
        </div>
    );
};

export default BlockEvent;
