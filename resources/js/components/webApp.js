import React from "react";
import NavBar from "./NavBar/NavBar";
import Intro from "./Tim/Intro";
import Main from "./Tim/Main";
import Footer from "./Layout/Footer";

const webApp = () => {
    return (
        <div>
            <NavBar />
            <Intro />
            <Main />
            <Footer />
        </div>
    );
};

export default webApp;
