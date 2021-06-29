import React from 'react';
import s from './Gallery.module.css';
import waveBG from '../../img/footerBC.png'

const Gallery = () => {
    return (
        <section className="Gallery">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#8bd2fc" fill-opacity="1" d="M0,64L80,96C160,128,320,192,480,192C640,192,800,128,960,101.3C1120,75,1280,85,1360,90.7L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
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
