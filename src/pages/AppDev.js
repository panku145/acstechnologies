import React, { useEffect, useState } from "react";
import graphic from "../images/graphic.svg";
import adobe from "../images/adobe.svg";
import photoshop from "../images/photoshop.svg";
import xd from "../images/xd.svg";
import figma from "../images/figma.svg";
import Quality from "../images/quality2.svg";
import Updates from "../images/Updates.svg";
import AffordablePrices from "../images/Affordable_Prices.svg";
import Advancement from "../images/Advancement.svg";
import Support from "../images/Support.svg";
import Satisfaction from "../images/Satisfaction.svg";
import designer from "../images/designer.jpg";
import howwedo from "../images/how-we-do.png";
import Loader from "../components/Loader";
import expert from "../images/expert.png";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";

const AppDev = () => {
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
            App Development & Designing Company| ReactJs Development
          </title>
          <meta
            name="description"
            content="Looking for an SEO-friendly website, your search end with our ReactJs development service, get fast, and the flexible user interface leveraging ReactJS. "
          />
          <meta
            name="keywords"
            content="top Reactjs developers Dehradun India, top React website developers Dehradun India, React JS Websites, React JS website development"
          />
        </Helmet>
        <div className="design-hero-sec text-center">
          <div className="container">
            <div className="row">
              <div className="design-hero-img">
                <img src={graphic} className="graphic" alt="graphic" />
              </div>
              <div className="design-hero-txt">
                <div className="button-req design-hero-btn web-design-btn">
                  <button>Graphic Design</button>
                </div>
                <h2>
                  Customised <span>App Designs</span> <br />
                  As Per Your Choice
                </h2>
                <p>
                  Our mobile apps are designed perfectly for smartphones,
                  crossing multiple <br /> platforms such as iOS, Android and
                  hybrid apps.
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

        <div className="hire-designers pb-5">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="line-design-head pb-3 hire-designers-head">
                  <h3>Why Choose US?</h3>
                  <p>
                    Deadlines are important to us. We deliver mobile app design
                    on time and within budget. We are also transparent about our
                    services and charges.
                  </p>

                  <ol>
                    <li>On-Time and On-Budget with Complete Transparency</li>
                    <li>
                      Experts in Cross-Platform Mobile Development and Extensive
                      Integration
                    </li>
                    <li>Rigorous Quality Assurance (QA) Testing</li>
                    <li>Project Intake</li>
                    <li>Revision and Approval</li>
                  </ol>
                </div>
                <div className="row">
                  <div className="col-md-4 text-center quality">
                    <img src={Quality} className="Quality" alt="Quality" />
                    <p>
                      Remarkable <br />
                      Quality
                    </p>
                  </div>
                  <div className="col-md-4 text-center update">
                    <img src={Updates} className="Updates" alt="Updates" />
                    <p>
                      Continuous <br />
                      Updates
                    </p>
                  </div>
                  <div className="col-md-4 text-center affordable">
                    <img
                      src={AffordablePrices}
                      className="AffordablePrices"
                      alt="AffordablePrices"
                    />
                    <p>
                      Affordable <br />
                      Prices
                    </p>
                  </div>
                  <div className="col-md-4 text-center advance">
                    <img
                      src={Advancement}
                      className="Advancement"
                      alt="Advancement"
                    />
                    <p>
                      Technology <br />
                      Advancement
                    </p>
                  </div>
                  <div className="col-md-4 text-center support">
                    <img src={Support} className="Support" alt="Support" />
                    <p>
                      Support <br />
                      All-Time
                    </p>
                  </div>
                  <div className="col-md-4 text-center satisfaction">
                    <img
                      src={Satisfaction}
                      className="Satisfaction"
                      alt="Satisfaction"
                    />
                    <p>
                      Satisfaction <br />
                      At Work
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 designer-col">
                <div className="hire-designer-bg">
                  <img src={designer} className="designer" alt="designer" />
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
                  <p>
                    We have a team of dedicated mobile app developers for your
                    needs.
                  </p>
                </div>
                <div className="row pt-4">
                  <div className="col-md-3">
                    <div className="count-exp">
                      <h2>7+</h2>
                      <p>Experience</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="count-exp">
                      <h2>40</h2>
                      <p>People</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="how-we-do-sec py-5">
          <div className="conatiner">
            <div className="line-design-head text-center  pb-5">
              <h3>How We Do It</h3>
            </div>
            <div className="row">
              <div className="we-do-img text-center">
                <img src={howwedo} className="howwedo" alt="howwedo" />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default AppDev;
