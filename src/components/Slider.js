import React from "react";
import { Carousel } from "react-bootstrap";
import slider1 from "../images/slider-img/slider1.png";
import slider2 from "../images/slider-img/slider2.png";
import slider3 from "../images/slider-img/slider3.png";
import slider4 from "../images/slider-img/slider4.png";
import slider5 from "../images/slider-img/slider5.png";
import slider6 from "../images/slider-img/slider6.png";
import sliderBackground from "../images/slider-img/slider-bg.jpg";

const Slider = () => {
  return (
    <>
      <div className="slider-sec slider-gradient py-5">
        <div
          id="carouselExampleDark"
          className="carousel slide carousel-dark"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators" id="home-slider">
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="4"
              aria-label="Slide 5"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="5"
              aria-label="Slide 6"
            ></button>
          </div>

          <div
            className="carousel-inner"
            // style={{ backgroundImage: `url(${sliderBackground})` }}
          >
            {/* <div className="carousel-item  active " data-bs-interval="3000">
              <div className="container">
                <div className="row item-row">
                  <div className="col-md-6 px-5 m-auto">
                    <div className="carousel-caption welcome-slider">
                      <h1 className="text-animated-one">Welcome To</h1>
                      <p className="text-animated-two acs-company-para">
                        Aadira Cyber Systems
                        <br />
                        Networks & Technologies Private Limited
                      </p>
                      <p className="text-animated-two acs-private-lmt">
                        ( ACS Networks & Technologies Private Limited ) We see
                        ourselves as a top leader in the industry in terms of
                        delivering IT solutions of every kind to its clients. We
                        aim to be the one-stop-shop for all digital services.
                        ACS Networks & Technologies has several strings to its
                        bow. With our exuberant team of professional designers
                        and developers, we strive to go an extra mile for our
                        clients to ensure they succeed in their endeavors.
                      </p>
                      <div className="underline"></div>
                    </div>
                  </div>
                  <div className="col-md-6 text-end m-auto  col-sm-12">
                    <img
                      src={slider6}
                      className="d-block carousel-img"
                      alt="carousel-img"
                    />
                  </div>
                </div>
              </div>
            </div> */}
            <div className="carousel-item active " data-bs-interval="3000">
              <div className="container">
                <div className="row item-row">
                  <div className="col-md-6 text-end m-auto  col-sm-12">
                    <img
                      src={slider1}
                      className="d-block carousel-img"
                      alt="carousel-img"
                    />
                  </div>
                  <div className="col-md-6 px-5">
                    <div className="carousel-caption">
                      <h1 className="text-animated-one">
                        Full Stack <br /> Development
                      </h1>
                      <p className="text-animated-two">
                        Your business can benefit from an online presence. ACS
                        Technologies can help you unlock your online potential.
                      </p>
                      <div className="underline"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item " data-bs-interval="3000">
              <div className="container">
                <div className="row">
                  <div className="col-md-6 text-end m-auto  col-sm-12">
                    <img
                      src={slider2}
                      className="d-block carousel-img"
                      alt="carousel-img"
                    />
                  </div>
                  <div className="col-md-6 px-5">
                    <div className="carousel-caption">
                      <h1 className="text-animated-one">
                        Digital Marketing <br />
                        Services
                      </h1>
                      <p className="text-animated-two">
                        It takes patience, commitment, and time to optimize a
                        website for search engines. This is where the team at{" "}
                        ACS can help.
                      </p>
                      <div className="underline"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item " data-bs-interval="3000">
              <div className="container">
                <div className="row item-row">
                  <div className="col-md-6 text-end m-auto  col-sm-12">
                    <img
                      src={slider3}
                      className="d-block carousel-img"
                      alt="carousel-img"
                    />
                  </div>
                  <div className="col-md-6 px-5">
                    <div className="carousel-caption  ">
                      <h1 className="text-animated-one">
                        UI/UX Designing
                        <br /> Services
                      </h1>
                      <p className="text-animated-two">
                        Natural reactions are elicited by design. Let's unblock
                        ourselves by using ACS Technologies web designing
                        services
                      </p>
                      <div className="underline"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item " data-bs-interval="3000">
              <div className="container">
                <div className="row item-row">
                  <div className="col-md-6 text-end m-auto  col-sm-12">
                    <img
                      src={slider4}
                      className="d-block carousel-img"
                      alt="carousel-img"
                    />
                  </div>
                  <div className="col-md-6 px-5">
                    <div className="carousel-caption  ">
                      <h1 className="text-animated-one">E Commerce</h1>
                      <p className="text-animated-two">
                        Get a custom B2B/B2C ecommerce website /online store
                        tailored to your needs. With features such as Multi
                        vendor, inventory management,supplier management.
                      </p>
                      <div className="underline"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item " data-bs-interval="3000">
              <div className="container">
                <div className="row item-row">
                  <div className="col-md-6 text-end m-auto  col-sm-12">
                    <img
                      src={slider5}
                      className="d-block carousel-img"
                      alt="carousel-img"
                    />
                  </div>
                  <div className="col-md-6 px-5">
                    <div className="carousel-caption  ">
                      <h1 className="text-animated-one">IT Help Desk</h1>
                      <p className="text-animated-two">
                        24*7 IT Help Desk Support Services Renowned Contact
                        Center and Customer Service outsourcing providers. To
                        put it simply. we want to make ourselves work harder for
                        you.
                      </p>
                      <div className="underline"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Slider;
