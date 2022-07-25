import React, { useEffect, useState } from "react";
import designHero from "../images/design-hero.png";
import adobe from "../images/adobe.svg";
import photoshop from "../images/photoshop.svg";
import figma from "../images/figma.svg";
import xd from "../images/xd.svg";
import quality from "../images/quality.svg";
import resource from "../images/resource.svg";
import flexible from "../images/flexible.svg";
import timely from "../images/timely.svg";
import expert from "../images/expert.png";
import Background from "../images/world-class-bg.png";
import Loader from "../components/Loader";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Designing = () => {
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
        <Helmet>
          <title>
            Web-Design Services company- ACS Networks & Technologies
          </title>
          <meta
            name="description"
            content="Invest in your website design, a good-looking website attract more traffic and build more trust. Get in touch to get your customized website Designed. "
          />
          <meta
            name="keywords"
            content="graphic design agency, graphic design firms, Best Graphic Design company, Logo Design, UI/UX Design "
          />
        </Helmet>
        <div className="design-hero-sec text-center">
          <div className="container">
            <div className="row">
              <div className="design-hero-img">
                <img src={designHero} className="designHero" alt="designHero" />
              </div>
              <div className="design-hero-txt">
                <div className="button-req design-hero-btn web-design-btn">
                  <button>Web Design</button>
                </div>
                <h2>
                  Customised <span>Designs</span> <br />
                  As Per Your Choice
                </h2>
                <p>
                  Are you looking to revamping /redesign your website ? We house
                  a highly
                  <br /> skilled team of web designers.
                </p>
                <div className="button-req design-hero-btn">
                  <Link to="/contact" target="_blank">
                    <button>Request A Quote</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="design-tool py-5">
              <div className="row pt-5">
                <div className="col-md-3 py-3 design-tool-img">
                  <img src={adobe} className="adobe" alt="adobe" />
                </div>
                <div className="col-md-3 py-3 design-tool-img">
                  <img src={photoshop} className="photoshop" alt="photoshop" />
                </div>
                <div className="col-md-3 py-3 design-tool-img">
                  <img src={xd} className="xd" alt="xd" />
                </div>
                <div className="col-md-3 py-3 design-tool-img">
                  <img src={figma} className="figma" alt="figma" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="line-design py-5">
          <div className="container">
            <div className="row">
              <div className="line-design-head text-center  pb-5">
                <h3>We Have Top Of The Line Designs</h3>
              </div>
              <div className="col-md-3 line-design-col-sec">
                <div className="measerable-img line-design-img">
                  <img src={quality} className="quality" alt="quality" />
                </div>
                <div className="measerable-txt word-txt line-design-txt">
                  <h5>Exceptional Quality</h5>
                  <p>
                    We take pride in providing <br />
                    high-quality layouts.
                  </p>
                </div>
              </div>
              <div className="col-md-3 line-design-col-sec">
                <div className="measerable-img line-design-img">
                  <img src={resource} className="resource" alt="resource" />
                </div>
                <div className="measerable-txt word-txt line-design-txt">
                  <h5>Resource Compatibility</h5>
                  <p>
                    Each of our designers have
                    <br /> an artistic approach.
                  </p>
                </div>
              </div>
              <div className="col-md-3 line-design-col-sec">
                <div className="measerable-img line-design-img">
                  <img src={flexible} className="flexible" alt="flexible" />
                </div>
                <div className="measerable-txt word-txt line-design-txt ">
                  <h5>Flexible Pricing</h5>
                  <p>
                    Prior to determining a price, numerous demands, industry
                    trends, and project goals are assessed.
                  </p>
                </div>
              </div>
              <div className="col-md-3 line-design-col-sec">
                <div className="measerable-img line-design-img">
                  <img src={timely} className="timely" alt="timely" />
                </div>
                <div className="measerable-txt word-txt line-design-txt">
                  <h5>Timely Updates</h5>
                  <p>
                    Daily updates are share on slack
                    <br /> or any other tool used for communication.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="word-class-dev py-5"
          style={{ backgroundImage: `url(${Background})` }}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <div className="wordclass-head m-auto">
                  <h2>
                    World Class <br />
                    <span>UI/ UX Designers</span>
                  </h2>
                </div>
              </div>
              <div className="col-md-4 m-auto ">
                <div className="button-req wordclass-ui-ux">
                  <Link to="/contact" target="_blank">
                    <button>Request A Quote</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="our-expert py-5">
          <div className="container">
            <div className="row py-3">
              <div className="col-md-6 text-center py-3">
                <div className="expert-img">
                  <img src={expert} className="expert" alt="expert" />
                </div>
              </div>
              <div className="col-md-6 py-5">
                <div className="our-expert-txt">
                  <h4>
                    Our Experts Are <br /> Ready To Help
                  </h4>
                  <p>Get the best team of web designers at the right price.</p>
                </div>
                <div className="row pt-4">
                  <div className="col-md-3">
                    <div className="count-exp">
                      <h2>8+</h2>
                      <p>Experience</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="count-exp">
                      <h2>50</h2>
                      <p>People</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="digital-future py-5">
          <div className="container">
            <div className="row digital-future-rw py-3">
              <div className="col-md-6 py-3">
                <div className="progress-bar-sec">
                  <p>Illustrator</p>
                  <div className="progress">
                    <div
                      className="progress-bar "
                      role="progressbar"
                      style={{ width: "60%" }}
                      aria-valuenow="60"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <p>Photoshop</p>
                  <div className="progress">
                    <div
                      className="progress-bar "
                      role="progressbar"
                      style={{ width: "70% " }}
                      aria-valuenow="70"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <p>XD</p>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "85%" }}
                      aria-valuenow="85"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <p>Figma</p>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "80%" }}
                      aria-valuenow="80"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
              <div className="col-md-5 py-5">
                <div className="our-expert-txt">
                  <h4>we design and set standard</h4>
                  <p>
                    Each web design we produce is built on an in-depth analysis.
                  </p>
                </div>
                <div className="button-req wordclass-ui-ux digital-future-btn">
                  <Link to="/contact" target="_blank">
                    <button>Request A Quote</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default Designing;
