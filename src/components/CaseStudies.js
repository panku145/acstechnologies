import React from "react";
// import finroute from "../images/finroute.png";
import prepkeeda from "../images/prepkeeda.png";
import antahyoga from "../images/antahyoga.png";
import anutham from "../images/anutham.png";
import technet from "../images/technet.png";
import dunvelly from "../images/dunvelly.png";

const CaseStudies = () => {
  return (
    <div className="case-studies-sec text-center py-5 CaseStudies">
      <div className="sectionHeading py-4 text-center">
        <h2 className="techno-heading">Recent Clients</h2>
        <div className="techno-underline"></div>
      </div>
      <div className="container">
        <div
          id="myCarousel2"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators" id="carousel-indicators">
            <button
              type="button"
              data-bs-target="#myCarousel2"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#myCarousel2"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#myCarousel2"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#myCarousel2"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
            <button
              type="button"
              data-bs-target="#myCarousel2"
              data-bs-slide-to="4"
              aria-label="Slide 5"
            ></button>
            {/* <button
              type="button"
              data-bs-target="#myCarousel2"
              data-bs-slide-to="5"
              aria-label="Slide 6"
            ></button> */}
          </div>
          <div className="carousel-inner" id="carousel-inner">
            {/* <div className="carousel-item active">
              <div className="container">
                <div className="row">
                  <h5 className="text-center pb-5">
                    Financial Planning Website
                  </h5>
                </div>
                <div className="row justify-content-center">
                  <img src={finroute} className="case-img" alt="case-img" />
                </div>
              </div>
            </div> */}
            <div className="carousel-item active">
              <div className="container">
                <div className="row">
                  <h5 className="text-center pb-5">
                    E - Learning website where students prepare for competitive
                    examinations, <br />
                    registers themselves
                  </h5>
                </div>
                <div className="row justify-content-center">
                  <img src={prepkeeda} className="case-img" alt="case-img" />
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container">
                <div className="row justify-content-center">
                  <h5 className="text-center pb-5">
                    Website examines one's mental health through assessment and
                    provides <br /> courses for mental wellbeing
                  </h5>
                </div>
                <div className="row justify-content-center">
                  <img src={antahyoga} className="case-img" alt="case-img" />
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container">
                <div className="row">
                  <h5 className="text-center pb-5">
                    Knowledge management and offers educational services
                  </h5>
                </div>
                <div className="row justify-content-center">
                  <img src={anutham} className="case-img" alt="case-img" />
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container">
                <div className="row">
                  <h5 className="text-center pb-5">
                    The website offers online training program Such as CCNA,
                    CCNP, CCIE
                  </h5>
                </div>
                <div className="row justify-content-center">
                  <img src={technet} className="case-img" alt="case-img" />
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container">
                <div className="row">
                  <h5 className="text-center pb-5">
                    News portal displaying local as well as National news using
                    internet <br />
                    broadcasting
                  </h5>
                </div>
                <div className="row justify-content-center">
                  <img src={dunvelly} className="case-img" alt="case-img" />
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#myCarousel2"
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
            data-bs-target="#myCarousel2"
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
    </div>
  );
};

export default CaseStudies;
