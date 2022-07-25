import React from "react";
import quote from "../images/quote.png";
import testimonial1 from "../images/testimonial11.jpg";
import testimonial2 from "../images/testimonial22.jpg";
import testimonial3 from "../images/testimonial44.jpg";
import testimonial4 from "../images/testimonial33.jpg";
import testimonial5 from "../images/testimonial5.png";
import testimonial6 from "../images/testimonial6.png";

const Testimonial = () => {
  return (
    <div className="testimonial-sec py-5 Testimonial">
      <div className="sectionHeading py-4 text-center">
        <h2 className="techno-heading">Client Testimonial</h2>
        <div className="techno-underline"></div>
      </div>
      <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          {/* <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button> */}
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container">
              <div className="row ">
                <div className="col-md-6 text-center">
                  <img
                    src={testimonial1}
                    className="testimonial1 testimonial-img"
                    alt="testimonial1"
                  />
                </div>
                <div className="col-md-6">
                  <div className="carousel-caption" id="testomonial-txt">
                    <img src={quote} className="qoute-img" alt="quote" />
                    <p>
                      <strong>Rahul Singh</strong> - They are very professional
                      in their work, I hired them to build my website, and they
                      did an outstanding job. One of the best IT Company in
                      Dehradun. Highly recommended.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item ">
            <div className="container">
              <div className="row">
                <div className="col-md-6 text-center">
                  <img
                    src={testimonial2}
                    className="testimonial2 testimonial-img"
                    alt="testimonial2"
                  />
                </div>
                <div className="col-md-6">
                  <div className="carousel-caption" id="testomonial-txt">
                    <img src={quote} className="qoute-img" alt="quote" />
                    <p>
                      <strong>Leo J. Knotts</strong> - ACS Technologies team
                      provided us with some great strategic insights, ideas, and
                      creatives. Their data-driven approach is highly detailed,
                      systematic, and comprehensive which helped us make some
                      critical decisions during our marketing campaign.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item ">
            <div className="container">
              <div className="row">
                <div className="col-md-6 text-center">
                  <img
                    src={testimonial3}
                    className="testimonial3 testimonial-img"
                    alt="testimonial3"
                  />
                </div>
                <div className="col-md-6">
                  <div className="carousel-caption" id="testomonial-txt">
                    <img src={quote} className="qoute-img" alt="quote" />
                    <p>
                      <strong>Rachel D. Van</strong> - I am their regular client
                      and I have taken the SEO services from ACS network &
                      technologies which are quite good and they provided
                      resolutions according to my requirements. I recommend
                      taking services from ACS to all those who are looking for
                      SEO or website design or development services.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item ">
            <div className="container">
              <div className="row">
                <div className="col-md-6 text-center">
                  <img
                    src={testimonial4}
                    className="testimonial4 testimonial-img"
                    alt="testimonial4"
                  />
                </div>
                <div className="col-md-6">
                  <div className="carousel-caption" id="testomonial-txt">
                    <img src={quote} className="qoute-img" alt="quote" />
                    <p>
                      <strong>Philip L. Agan</strong> - The team came through
                      with detailed help on what we needed and with a wide array
                      of strategies and recommendations, both during the
                      pre-campaign period and throughout the campaign. They were
                      responsive to communication on a day-to-day basis and were
                      accommodating when we needed to talk.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="carousel-item ">
            <div className="container">
              <div className="row">
                <div className="col-md-6 text-center">
                  <img
                    src={testimonial5}
                    className="testimonial5"
                    alt="testimonial5"
                  />
                </div>
                <div className="col-md-6">
                  <div className="carousel-caption" id="testomonial-txt">
                    <img src={quote} className="qoute-img" alt="quote" />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item ">
            <div className="container">
              <div className="row">
                <div className="col-md-6 text-center">
                  <img
                    src={testimonial6}
                    className="testimonial6"
                    alt="testimonial6"
                  />
                </div>
                <div className="col-md-6">
                  <div className="carousel-caption" id="testomonial-txt">
                    <img src={quote} className="qoute-img" alt="quote" />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#myCarousel"
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
          data-bs-target="#myCarousel"
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
  );
};

export default Testimonial;
