import React from 'react';
import Header from "./Header";
import Events from "./Events";
import Gallery from "./Gallery";

const Home = () => {
    return (
        <div className="content">
            <Header />
            <Events/>
            <Gallery/>
        </div>
    );
};

export default Home;
