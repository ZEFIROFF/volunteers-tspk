import React from 'react';
import Header from "./Header";
import Events from "./Events";
import Gallery from "./Gallery";
import Footer from "./Footer";

const Home = () => {
    return (
        <div className="content">
            <Header />
            <Events/>
            <Gallery/>
            <Footer/>
        </div>
    );
};

export default Home;
