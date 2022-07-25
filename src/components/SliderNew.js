import React from 'react';

import slider1 from "../images/slider-img/slider1.png";
import slider2 from "../images/slider-img/slider2.png";
import slider3 from "../images/slider-img/slider3.png";
import slider4 from "../images/slider-img/slider4.png";
import slider5 from "../images/slider-img/slider5.png";
import slider6 from "../images/slider-img/slider6.png";

const SliderNew = () => {
    return (
      <div>
            <div className="conatiner">
                <div className="slider-sec">

        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"
                    aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                    aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3"
                    aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4"
                    aria-label="Slide 5"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item  active">
                    <div className="container">
                        <div className="row py-5">
                            <div className="col-md-6 text-end m-auto  col-sm-12">
                                <img
                      src={slider1}
                      className="d-block carousel-img"
                      alt="carousel-img"
                    />
                            </div>
                            <div className="col-md-6">
                                <div className="carousel-caption">
                                    <h1 className="text-animated-one">Full Stack <br/> Development</h1>
                                    <p className="text-animated-two">Your business can benefit from an online presence.
                                        <strong> ACS
                                            Technologies</strong> can help you unlock your online potential.
                                    </p>
                                    <div className="underline"></div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="container">
                        <div className="row py-5">
                            <div className="col-md-6 text-end m-auto col-sm-12" id="slider2-col">
                                 <img
                      src={slider2}
                      className="d-block carousel-img"
                      alt="carousel-img"
                    />
                            </div>
                            <div className="col-md-6">
                                <div className="carousel-caption">
                                    <h1 className="text-animated-one">Digital Marketing <br/>
                                        Services</h1>
                                    <p className="text-animated-two">It takes patience, commitment, and time to optimize a
                                        website for search engines. This is where the team at <strong>ACS</strong> can
                                        help.
                                    </p>
                                    <div className="underline"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="container">
                        <div className="row py-5">
                            <div className="col-md-6 text-end  m-auto col-sm-12">
                                <img
                      src={slider3}
                      className="d-block carousel-img"
                      alt="carousel-img"
                    />
                            </div>
                            <div className="col-md-6">
                                <div className="carousel-caption  ">
                                    <h1 className="text-animated-one">UI/UX Designing
                                        <br/> Services
                                    </h1>
                                    <p className="text-animated-two">Natural reactions are elicited by design. Let's unblock
                                        ourselves by using <strong>ACS Technologies</strong> web designing services
                                    </p>
                                    <div className="underline"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="container">
                        <div className="row py-5">
                            <div className="col-md-6 text-end  m-auto col-sm-12">
                                 <img
                      src={slider4}
                      className="d-block carousel-img"
                      alt="carousel-img"
                    />
                            </div>
                            <div className="col-md-6">
                                <div className="carousel-caption  ">
                                    <h1 className="text-animated-one">E Commerce</h1>
                                    <p className="text-animated-two">Lorem ipsum dolor sit amet, consectetur adipiscing
                                        elit, magna aliqua. Ut enim ad minim veniam.
                                    </p>
                                    <div className="underline"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="container">
                        <div className="row py-5">
                            <div className="col-md-6 text-end  m-auto col-sm-12">
                                <img
                      src={slider5}
                      className="d-block carousel-img"
                      alt="carousel-img"
                    />
                            </div>
                            <div className="col-md-6">
                                <div className="carousel-caption  ">
                                    <h1 className="text-animated-one">IT Help Desk</h1>
                                    <p className="text-animated-two">Lorem ipsum dolor sit amet, consectetur adipiscing
                                        elit, magna aliqua. Ut enim ad minim veniam.
                                    </p>
                                    <div className="underline"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </div>
        </div>
      </div>
    );
};

export default SliderNew;
