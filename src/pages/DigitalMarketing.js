import React, { useEffect, useState } from "react";
import specific from "../images/specific.png";
import realistic from "../images/realistic.png";
import timeBound from "../images/time-bound.png";
import actionable from "../images/actionable.png";
import plan from "../images/plan.svg";
import measerable from "../images/measerable.png";
import seo from "../images/seo.png";
import multiComponent from "../images/multi-component.png";
import Background from "../images/result-bg.png";
import digital1 from "../images/digital1.png";
import Loader from "../components/Loader";
import { Link, useParams } from "react-router-dom";

const DigitalMarketing = () => {
  let { id } = useParams();
  // Set loading state to true initially
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Loading function to load data or
    // fake it using setTimeout;
    const loadData = async () => {
      // Wait for two second
      await new Promise((r) => setTimeout(r, 1000));

      // Toggle loading state
      setLoading((loading) => !loading);
    };
    loadData();

    if (id === "seo") {
      window.scrollTo(0, 0);
    } else {
      window.scrollTo(0, 2700);
    }
  }, [id]);

  // If page is in loading state, display
  // loading message. Modify it as per your
  // requirement.
  // if (loading) {
  //   return (
  //     <div>
  //       <Loader />
  //     </div>
  //   );
  // } else {
  return (
    <>
      <div className="digital-first-sec pb-3">
        <div className="conatiner">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 digi-img">
              <img src={digital1} className="digital1" alt="digital1" />
            </div>
          </div>
        </div>
      </div>

      <div className="we-work-smart-sec sm-py-1">
        <h2 className="text-center">We Work S.M.A.R.T</h2>

        <div className="testimonial-sec py-5">
          <div
            id="myCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
          >
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
            </div>
            <div className="carousel-inner" id="carousel-inner-sec">
              <div className="carousel-item active">
                <div className="container">
                  <div className="row">
                    <div className="col-md-4 text-center">
                      <div className="measerable-img pb-4">
                        <img
                          src={specific}
                          className="specific"
                          alt="specific"
                        />
                      </div>
                      <div className="measerable-txt">
                        <h4>
                          <strong>S</strong>pecific
                        </h4>
                        <p>Personalized digital experiences for users</p>
                      </div>
                    </div>
                    <div className="col-md-4 text-center">
                      <div className="measerable-img pb-4">
                        <img
                          src={measerable}
                          className="measerable"
                          alt="measerable"
                        />
                      </div>
                      <div className="measerable-txt">
                        <h4>
                          <strong>M</strong>easureable
                        </h4>
                        <p>
                          Some thing which can be measured can be controlled
                        </p>
                      </div>
                    </div>
                    <div className="col-md-4 text-center">
                      <div className="measerable-img pb-4">
                        <img
                          src={actionable}
                          className="actionable"
                          alt="actionable"
                        />
                      </div>
                      <div className="measerable-txt">
                        <h4>
                          <strong>A</strong>ctionable
                        </h4>

                        <p>Captivating call to action</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item ">
                <div className="container">
                  <div className="row">
                    <div className="col-md-4 text-center">
                      <div className="measerable-img pb-4">
                        <img
                          src={actionable}
                          className="actionable"
                          alt="actionable"
                        />
                      </div>
                      <div className="measerable-txt">
                        <h4>
                          <strong>A</strong>ctionable
                        </h4>

                        <p>Captivating call to action</p>
                      </div>
                    </div>
                    <div className="col-md-4 text-center">
                      <div className="measerable-img pb-4">
                        <img
                          src={realistic}
                          className="realistic"
                          alt="realistic"
                        />
                      </div>
                      <div className="measerable-txt">
                        <h4>
                          <strong>R</strong>ealistic
                        </h4>
                        <p>Setting achievable results</p>
                      </div>
                    </div>
                    <div className="col-md-4 text-center">
                      <div className="measerable-img pb-4">
                        <img
                          src={timeBound}
                          className="timeBound"
                          alt="timeBound"
                        />
                      </div>
                      <div className="measerable-txt">
                        <h4>
                          <strong>T</strong>ime Bound
                        </h4>
                        <p>Achieving goals within an established timeline</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
      </div>

      <div className="result-oriented-sec">
        <div
          className="result-bg py-4"
          style={{ backgroundImage: `url(${Background})` }}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-8 result-oriented-txt">
                <h1>Result Oriented</h1>
                <h1 className="seo-tech">SEO Techniques</h1>
                <Link to="/contact" target="_blank">
                  <button>Request A Quote</button>
                </Link>
              </div>
              <div className="col-md-4 plan-img">
                <img src={plan} className="plan" alt="plan" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="seo-sec">
        <div className="container py-5">
          <div className="row pt-5">
            <div className="col-md-5 seo-img ">
              <img src={seo} className="seo" alt="seo" />
            </div>
            <div className="col-md-7 seo-point">
              <p className="seo-para-one">
                It takes patience, commitment, and time for search engine
                optimization to succeed.
              </p>
              <p className="seo-para-two">
                You can drive substantial results and impact your business.
              </p>
              <p className="seo-para-three">
                With keyword research, we can identify the most effective terms
                and phrases that potential customers use to find your business.
              </p>
              <p className="seo-para-four">
                We are here to help you become more search engine friendly by
                working with and developing your existing content.
              </p>
              <p className="seo-para-five">
                Your website could benefit from keyword research and SEO, talk
                to the team today.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="SMM-sec py-5">
        <img
          src={multiComponent}
          className="multiComponent"
          alt="multiComponent"
        />
      </div>
    </>
  );
  // }
};

export default DigitalMarketing;
