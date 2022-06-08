import React from "react";
import web from "../src/images/react.png";

const Home = () => {

    return(
        <>
            <section id="intro-header" className="d-flex align-items-center">
                <div className="container-fluid nav_bg">
                    <div clssName="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-lg-6 col-md-12 order-lg-1 d-flex justify-content-center flex-column">
                                    <h1>Grow Your Knowledge with <strong>React Js</strong></h1>
                                    <h2>Single Page Application Solution</h2>
                                    <div className="react-intro">
                                        <p>Develop Awesome UI with the help of React. Single page application with the power of JavaScript</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 order-lg-2">
                                    <img src={web} className="img-fluid intro-image my-3" alt="Intro Image"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
    
}

export default Home;