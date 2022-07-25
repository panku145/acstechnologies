import React, { useEffect, useState } from "react";
// import wordpress from "../images/wordpress.png";
import hero1 from "../images/hero1.png";
// import node from "../images/node.png";
import manageble from "../images/manageble.png";
import feature from "../images/feature.png";
import feature2 from "../images/feature2.png";
import react from "../images/react.png";
import mvc from "../images/mvc.png";
import custom from "../images/custom.png";
import di from "../images/di.png";
import design from "../images/design.png";
import Background from "../images/world-class-bg.png";
import Loader from "../components/Loader";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Development = () => {
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
          <title>Custom website Development company in India- ACS</title>
          <meta
            name="description"
            content="The leading Custom Website Development Company in India for Startups, Small, and Large Enterprises. Get your custom website now & build an online presence. "
          />
          <meta
            name="keywords"
            content="Full-Stack Development Services in India, top Full Stack web developer Dehradun India, top full stack developer dehradun India, E-commerce Development"
          />
        </Helmet>
        <div className="hero-sec md-pb-5">
          <div className="container">
            <div className="row py-5">
              <div className="col-md-6 m-auto py-3">
                <div className="hero-sec-txt">
                  <h2 className="web-dev-head-txt">
                    Web Development <br /> <span>Service </span> Offerings By
                    ACS
                  </h2>
                  <p>
                    We develop web experiences that are user oriented , fast to
                    load , feature rich and deliver value to its stakeholders.
                  </p>
                  <div className="dev-hr-line"></div>
                </div>
              </div>
              <div className="col-md-6 py-3">
                <div className="hero-sec-img">
                  <img src={hero1} className="hero1" alt="hero1" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="react-sec py-5">
          <div className="container">
            <div className="row pt-5 px-3">
              <div className="col-md-4">
                <div className="react-img ">
                  <img src={react} className="react" alt="react" />
                  <div className="ract-img-txt py-3">
                    <h3>
                      Using Applications <br />
                      <span>of React</span>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="col-md-8">
                <div className="react-txt">
                  <p>
                    Every driven young entrepreneur is putting in a lot of
                    effort to improve the quality of their web presence.ACS
                    Technologies assists budding businesses as well as
                    Enterprises with its Web development services. Businesses
                    with solid online presence witness unimaginable outcomes.
                    <p>
                      Web development covers a broad range of solutions which
                      are tailored to clients needs. We at ACS are committed to
                      offer services like Web development using custom
                      frameworks as well as CMS.
                    </p>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mvc-archi-sec py-5">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-3 col-md-6" id="wordpress-col">
                <div className="mvc-archi-inner-shadow">
                  <div className="measerable-img pb-4">
                    <img src={mvc} className="mvc" alt="mvc" />
                  </div>
                  <div className="measerable-txt word-txt">
                    <h4>Agile Development Approach</h4>
                    <p>We follow an agile development approach</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6" id="wordpress-col">
                <div className="mvc-archi-inner-shadow">
                  <div className="measerable-img pb-4">
                    <img src={custom} className="custom" alt="custom" />
                  </div>
                  <div className="measerable-txt word-txt">
                    <h4>Dedicated Development Teams</h4>
                    <p>
                      Our dedicated team of developers assist in development as
                      well as maintenance of websites.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6" id="wordpress-col">
                <div className="mvc-archi-inner-shadow">
                  <div className="measerable-img pb-4">
                    <img src={di} className="di" alt="di" />
                  </div>
                  <div className="measerable-txt word-txt">
                    <h4>Complete Project Management</h4>
                    <p>
                      We make use of project management tools like Trello,
                      Monday, etc
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6" id="wordpress-col">
                <div className="mvc-archi-inner-shadow">
                  <div className="measerable-img pb-4">
                    <img src={design} className="design" alt="design" />
                  </div>
                  <div className="measerable-txt word-txt">
                    <h4>Code Sharing and Version Control</h4>
                    <p>
                      For code sharing as well as versioning we make use of
                      repositories like Github, SVN,JIRA.
                    </p>
                  </div>
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
                    World class <br />
                    <span>Front End Developers</span>
                  </h2>
                </div>
              </div>
              <div className="col-md-4 m-auto ">
                <div className="button-req">
                  <Link to="/contact" target="_blank">
                    <button>Request A Quote</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="wordpress py-5">
          <div className="container">
            <div className="row">
              {/* <div className="col-md-3" id="wordpress-col">
              <div className="measerable-img pb-4">
                <img src={wordpress} className="wordpress" alt="wordpress" />
              </div>
              <div className="wordpress-txt">
                <h3>
                  WordPress <br />
                  <span>Development</span>
                </h3>
              </div>
            </div> */}
              <div className="dev-hr-line" id="dev-hr-line"></div>
              <div className="col-md-3" id="wordpress-col">
                <div className="measerable-img pb-4">
                  <img src={manageble} className="manageble" alt="manageble" />
                </div>
                <div className="measerable-txt word-txt">
                  <h4>Custom Development</h4>
                  <p>
                    We develop solutions that are tailored to business needs of
                    clients.
                  </p>
                </div>
              </div>
              <div className="col-md-3" id="wordpress-col">
                <div className="measerable-img pb-4">
                  <img src={feature} className="feature" alt="feature" />
                </div>
                <div className="measerable-txt word-txt">
                  <h4>CMS Based Website</h4>
                  <p>
                    WordPress has been a perfect choice if a client needs to
                    develop a quick website that is easily manageable.
                  </p>
                </div>
              </div>
              <div className="col-md-3" id="wordpress-col">
                <div className="measerable-img pb-4">
                  <img src={feature2} className="feature2" alt="feature2" />
                </div>
                <div className="measerable-txt word-txt">
                  <h4>Scalable Development</h4>
                  <p>
                    With Full stack development services we develop websites
                    that are scalable in future.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="nodejs-dev py-5 text-center">
        <div className="container">
          <div className="row py-5">
            <div className="nodejs-img">
              <img src={node} className="node" alt="node" />
            </div>
          </div>
        </div>
      </div> */}
      </>
    );
  }
};

export default Development;
