import React, { useEffect, useState } from "react";
import Intersection from "../images/price/Intersection.png";
import mobileInter from "../images/price/mobile-intersec.jpg";
import dunvelly from "../images/price/DunValley.png";
import prepkeeda from "../images/price/PrepKeeda.png";
import technet from "../images/price/Technet.png";
import finroute from "../images/price/Finroute.png";
import anutham from "../images/price/Anutham.png";
import antahyoga from "../images/price/Antahyoga.png";
import gold from "../images/price/gold.svg";
import silver from "../images/price/silver.svg";
import prep from "../images/price/Prep.png";
import antah from "../images/price/Antah.png";
import fin from "../images/price/Fin.png";
import tech from "../images/price/Tech.png";
import anu from "../images/price/Anu.png";
import dun from "../images/price/Dun.png";
import Loader from "../components/Loader";
import { Accordion } from "react-bootstrap";

const Prices = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
  }, []);

  // If page is in loading state, display
  // loading message. Modify it as per your
  // requirement.
  if (loading) {
    return (
      <div>
        <Loader />
      </div>
    );
  } else {
    return (
      <>
        <div className="price-page-hero-sec">
          <div className="container-fluid p-0">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6 m-auto">
                <div className="hero-sec-first-col">
                  <div className="herosec-txt-container">
                    <h3>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="hero-sec-second-col">
                  <img
                    className="Intersection"
                    src={Intersection}
                    alt="Intersection"
                  />
                  <img
                    className="mobile-intersec"
                    src={mobileInter}
                    alt="Intersection"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="design-tool ">
          <div className="container">
            <div className="row our-logo-design">
              <div className="col-xl-2 col-lg-2 col-md-4  col-sm-3 col-xs-2 py-3 design-tool-img price-page-logo-sec">
                <img src={dunvelly} className="dunvelly" alt="dunvelly" />
              </div>
              <div className="col-xl-2 col-lg-2 col-md-4 col-sm-3 col-xs-2  py-3 design-tool-img price-page-logo-sec">
                <img src={prepkeeda} className="prepkeeda" alt="prepkeeda" />
              </div>
              <div className="col-xl-2 col-lg-2 col-md-4 col-sm-3 col-xs-2  py-3 design-tool-img price-page-logo-sec">
                <img src={technet} className="technet" alt="technet" />
              </div>
              <div className="col-xl-2 col-lg-2 col-md-4 col-sm-3 col-xs-2  py-3 design-tool-img price-page-logo-sec">
                <img src={anutham} className="anutham" alt="anutham" />
              </div>
              <div className="col-xl-2 col-lg-2 col-md-4 col-sm-3 col-xs-2  py-3 design-tool-img price-page-logo-sec">
                <img src={antahyoga} className="antahyoga" alt="antahyoga" />
              </div>
              <div className="col-xl-2 col-lg-2 col-md-4 col-sm-3 col-xs-2  py-3 design-tool-img price-page-logo-sec">
                <img src={finroute} className="finroute" alt="finroute" />
              </div>
            </div>
            <div className="row mobile-three-logo">
              <div className="col-4 py-3 design-tool-img price-page-logo-sec">
                <img src={dunvelly} className="dunvelly" alt="dunvelly" />
              </div>
              <div className="col-4 py-3 design-tool-img price-page-logo-sec">
                <img src={prepkeeda} className="prepkeeda" alt="prepkeeda" />
              </div>
              <div className="col-4 py-3 design-tool-img price-page-logo-sec">
                <img src={technet} className="technet" alt="technet" />
              </div>
            </div>
            <div className="row mobile-three-logo">
              <div className="col-4 py-3 design-tool-img price-page-logo-sec">
                <img src={anutham} className="anutham" alt="anutham" />
              </div>
              <div className="col-4 py-3 design-tool-img price-page-logo-sec">
                <img src={antahyoga} className="antahyoga" alt="antahyoga" />
              </div>
              <div className="col-4 py-3 design-tool-img price-page-logo-sec">
                <img src={finroute} className="finroute" alt="finroute" />
              </div>
            </div>
          </div>
        </div>

        <div className="price-sec py-5">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-3 col-md-3">
                <div className="get-start-inner-sec">
                  <h3>
                    Get Started <i class="fas fa-long-arrow-alt-right"></i>
                  </h3>

                  <ul className="get-started-ul-sec">
                    <li>
                      <p>Lorem, ipsum dolor.</p>
                    </li>
                    <li>
                      <p>Lorem, ipsum dolor.</p>
                    </li>
                    <li>
                      <p>Lorem, ipsum dolor.</p>
                    </li>
                    <li>
                      <p>Lorem, ipsum dolor.</p>
                    </li>
                    <li>
                      <p>Lorem, ipsum dolor.</p>
                    </li>
                    <li>
                      <p>Lorem, ipsum dolor.</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-3">
                <div className="price-inner-sec">
                  <span className="ps-3">Basic</span>
                  <h2 className="ps-3">$99</h2>
                  <ul className="price-ul-sec">
                    <li>
                      <img src={gold} alt="" />
                    </li>
                    <li>
                      <img src={gold} alt="" />
                    </li>
                    <li>
                      <img src={silver} alt="" />
                    </li>
                    <li>
                      <img src={silver} alt="" />
                    </li>
                    <li>
                      <img src={silver} alt="" />
                    </li>
                    <li>
                      <img src={silver} alt="" />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-3">
                <div className="price-inner-sec">
                  <span>Best Seller</span>
                  <h2>$199</h2>
                  <ul className="price-ul-sec">
                    <li>
                      <img src={gold} alt="" />
                    </li>
                    <li>
                      <img src={gold} alt="" />
                    </li>
                    <li>
                      <img src={gold} alt="" />
                    </li>
                    <li>
                      <img src={silver} alt="" />
                    </li>
                    <li>
                      <img src={silver} alt="" />
                    </li>
                    <li>
                      <img src={silver} alt="" />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-3">
                <div className="price-inner-sec">
                  <span>Popular</span>
                  <h2>$1099</h2>
                  <ul className="price-ul-sec">
                    <li>
                      <img src={gold} alt="" />
                    </li>
                    <li>
                      <img src={gold} alt="" />
                    </li>
                    <li>
                      <img src={gold} alt="" />
                    </li>
                    <li>
                      <img src={gold} alt="" />
                    </li>
                    <li>
                      <img src={gold} alt="" />
                    </li>
                    <li>
                      <img src={gold} alt="" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="empty-bg"></div>
          <div className="container">
            <div className="row  interests-you-rw">
              <div className="col-xl-10 interests-you">
                <div className="row">
                  <div className="col-md-7">
                    <div className="interest-you-inner-sec">
                      <span>Speak to us</span>
                      <h2>Services That Interests You</h2>
                    </div>
                  </div>
                  <div className="col-md-5">
                    <div className="interrest-checkbox-sec">
                      <input type="checkbox" />
                      <label for="design"> Web design</label>
                      <br />
                      <input type="checkbox" />
                      <label for="Development"> Web Development</label>
                      <br />
                      <input type="checkbox" />
                      <label for="SEO"> SEO / SMO</label>
                      <br />
                      <div className="email-submit-sec">
                        <input type="email" placeholder="Email" />{" "}
                        <button>Submit</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="price-mobile-sec pb-5">
          <div className="container">
            <div className="row">
              <div className="col-3 m-auto">
                <h3>
                  Get Started <i class="fas fa-long-arrow-alt-right"></i>
                </h3>
              </div>
              <div className="col-3">
                <Accordion defaultActiveKey={["0"]} alwaysOpen>
                  <Accordion.Item eventKey="0" className="price-accordion-item">
                    <Accordion.Header className="price-accordion-header">
                      <ul className="accorion-ul">
                        <li className="basic-plan">Basic</li>
                        <li className="amount">$99</li>
                      </ul>
                    </Accordion.Header>
                    <Accordion.Body className="prices-accordion-body">
                      <ul className="accordion-body-ul">
                        <li>Lorem, ipsum dolor.</li>
                        <li>Lorem, ipsum dolor.</li>
                        <li>Lorem, ipsum dolor.</li>
                        <li>Lorem, ipsum dolor.</li>
                        <li>Lorem, ipsum dolor.</li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
              <div className="col-3">
                <Accordion defaultActiveKey={["0"]} alwaysOpen>
                  <Accordion.Item
                    eventKey="0"
                    className="price-accordion-item second-accordion-item"
                  >
                    <Accordion.Header className="price-accordion-header">
                      <ul className="accorion-ul">
                        <li className="basic-plan">Best</li>
                        <li className="amount">$99</li>
                      </ul>
                    </Accordion.Header>
                    <Accordion.Body className="prices-accordion-body second-prices-accordion-body">
                      <ul className="accordion-body-ul">
                        <li>Lorem, ipsum dolor.</li>
                        <li>Lorem, ipsum dolor.</li>
                        <li>Lorem, ipsum dolor.</li>
                        <li>Lorem, ipsum dolor.</li>
                        <li>Lorem, ipsum dolor.</li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
              <div className="col-3">
                <Accordion defaultActiveKey={["0"]} alwaysOpen>
                  <Accordion.Item
                    eventKey="0"
                    className="price-accordion-item third-accordion-item"
                  >
                    <Accordion.Header className="price-accordion-header">
                      <ul className="accorion-ul">
                        <li className="basic-plan">Popular</li>
                        <li className="amount">$99</li>
                      </ul>
                    </Accordion.Header>
                    <Accordion.Body className="prices-accordion-body  third-prices-accordion-body">
                      <ul className="accordion-body-ul">
                        <li>Lorem, ipsum dolor.</li>
                        <li>Lorem, ipsum dolor.</li>
                        <li>Lorem, ipsum dolor.</li>
                        <li>Lorem, ipsum dolor.</li>
                        <li>Lorem, ipsum dolor.</li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>
          </div>
        </div>

        {/* our work sec  */}

        <div className="case-studies-sec text-center py-5 CaseStudies recent-client">
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
              </div>
              <div className="carousel-inner" id="carousel-inner">
                <div className="our-work-head">
                  <h3>Our Work</h3>
                  <p>Take a peek into our world</p>
                </div>
                <div className="carousel-item active">
                  <div className="container">
                    <div className="row justify-content-center">
                      <div className="col-xl-4 text-center">
                        <img
                          src={fin}
                          className="our-work-img img-inner-animate"
                          alt="case-img"
                        />
                        <h3 className="prepdun">MyFinroute</h3>
                        <div className="finroute-emty-sec"></div>
                      </div>
                      <div className="col-xl-4">
                        <img
                          src={prep}
                          className="our-work-img img-inner-animate"
                          alt="case-img"
                        />
                        <h3 className="prepdun">Prepkeeda</h3>
                        <div className="finroute-emty-sec"></div>
                      </div>
                      <div className="col-xl-4">
                        <img
                          src={antah}
                          className="our-work-img img-inner-animate"
                          alt="case-img"
                        />
                        <h3 className="prepdun">Antahyoga</h3>
                        <div className="finroute-emty-sec"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item ">
                  <div className="container">
                    <div className="row justify-content-center">
                      <div className="col-xl-4">
                        <img
                          src={tech}
                          className="our-work-img img-inner-animate"
                          alt="case-img"
                        />
                        <h3 className="prepdun">Technet</h3>
                        <div className="finroute-emty-sec"></div>
                      </div>
                      <div className="col-xl-4">
                        <img
                          src={anu}
                          className="our-work-img img-inner-animate"
                          alt="case-img"
                        />
                        <h3 className="prepdun">Anutham</h3>
                        <div className="finroute-emty-sec"></div>
                      </div>
                      <div className="col-xl-4">
                        <img
                          src={dun}
                          className="our-work-img img-inner-animate"
                          alt="case-img"
                        />
                        <h3 className="prepdun">Dunvalley</h3>
                        <div className="finroute-emty-sec"></div>
                      </div>
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
          <div className="our-work-bg-sec"></div>
        </div>
      </>
    );
  }
};

export default Prices;
