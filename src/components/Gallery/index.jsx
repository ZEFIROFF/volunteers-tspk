import React from 'react';
import s from './Gallery.module.css';
import waveBG from '../../img/footerBC.png'

const Gallery = () => {
    return (
        <section className="Gallery">
            <img className={s.waveBG} width="100%" src={waveBG} alt=""/>
            <div className={s.gallery}>
                <h2 className={s.title + " text-center m-0"}>Фотоальбом</h2>
                <div className="Gallery-grid container-md flex-wrap flex flex-column my-5">
                    <div className="col-md-auto col flex-md-row row flex-column">
                        <div className={s.gallery_item + " col-md col-12 p-0"}></div>
                        <div className={s.gallery_item + " col-md-4 col-12 p-0"}></div>
                    </div>
                    <div className="col-md-auto col flex-md-row row flex-column">
                        <div className={s.gallery_item + " " + s.XL + " col-md p-0 col-12"}></div>
                        <div className={s.gallery_item + " " + s.XL + " col-md p-0 col-12"}></div>
                        <div className={s.gallery_item + " " + s.XL + " col-md p-0 col-12"}></div>
                    </div>
                    <div className="col-md-auto col flex-md-row row flex-column">
                        <div className={s.gallery_item + " col-md-4 p-0 col-12"}></div>
                        <div className={s.gallery_item + " col-md p-0 col-12"}></div>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <a className="btn btn-primary" href="#" role="button">Смотреть еще</a>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
