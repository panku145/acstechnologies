import React, { useEffect, useState } from "react";
import reactDev from "../images/reactjs/react-dev.png";
import easyTesting from "../images/reactjs/easy-testing.svg";
import dataBinding from "../images/reactjs/data-binding.svg";
import lappy from "../images/reactjs/lappy.jpg";
import Group28278 from "../images/reactjs/Group 28278.svg";
import component from "../images/reactjs/component.svg";
import Loader from "../components/Loader";
import { Helmet } from "react-helmet";

const ReactPage = () => {
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
            React Js Front-End Development company| ReactJs Development
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
        <div className="reactjs-hero-sec">
          <div className="container">
            <div className="row">
              <div className="col-md-5 react-img-col">
                <div className="react-js-img">
                  <img
                    src={Group28278}
                    className="Group28278"
                    alt="Group28278"
                  />
                </div>
              </div>
              <div className="col-md-7 m-auto">
                <div className="hero-sec-txt react-js-txt">
                  <div className="button-req design-hero-btn web-design-btn react-js-button">
                    <button>Web Development</button>
                  </div>
                  <h2>
                    Pioneer in <br />
                    <span>React Js</span>
                  </h2>
                  <p>
                    Ideal for startups with large scalability plans or for large
                    businesses. React.JS is a great choice. ReactJS is flexible
                    and has a lot more to offer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="react-js-three-component">
          <div className="container">
            <div className="row  react-js-rw">
              <div
                className="col-lg-3 col-md-4 col-sm-12 react-js-col"
                id="wordpress-col"
              >
                <div className="react-js-inner-sec">
                  <div className="measerable-img pb-4 react-js-img-sec ">
                    <img
                      src={easyTesting}
                      className="easyTesting"
                      alt="easyTesting"
                    />
                  </div>
                  <div className="measerable-txt word-txt reactjs-txt">
                    <h4>Fast Rendering</h4>
                    <p>Its fast rendering speeds reduce page load time.</p>
                  </div>
                </div>
              </div>
              <div
                className=" col-lg-3 col-md-4 col-sm-12 react-js-col"
                id="wordpress-col"
              >
                <div className="react-js-inner-sec">
                  <div className="measerable-img pb-4 react-js-img-sec">
                    <img
                      src={component}
                      className="component"
                      alt="component"
                    />
                  </div>
                  <div className="measerable-txt word-txt reactjs-txt">
                    <h4>Fewer Http Requests</h4>
                    <p>
                      React was designed to be fast and efficient. It is far
                      more efficient than templates.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className=" col-lg-3 col-md-4 col-sm-12 react-js-col"
                id="wordpress-col"
              >
                <div className="react-js-inner-sec">
                  <div className="measerable-img pb-4 react-js-img-sec">
                    <img
                      src={dataBinding}
                      className="dataBinding"
                      alt="dataBinding"
                    />
                  </div>
                  <div className="measerable-txt word-txt reactjs-txt">
                    <h4>Rich UI</h4>
                    <p>
                      React can replace complicated Js code by writing simple
                      and easy code.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hire-designers pb-5 why-react-js">
          <div className="container">
            <div className="row gx-5">
              <div className="col-md-5 designer-col py-4">
                <div className="hire-designer-bg react-why-us-img">
                  <img src={lappy} className="lappy" alt="lappy" />
                </div>
              </div>
              <div className="col-md-6 react-why-us-col">
                <div className="line-design-head pb-3 hire-designers-head react-js-head">
                  <h2>Why React JS ?</h2>
                  <div className="dev-hr-line react-underline"></div>
                  <p>
                    The most knowledgeable developers in the market can allow us
                    to provide the most complicated React JS development
                    services, making use of the latest technology while changing
                    them into business-driven applications.We have kept
                    ourselves updated using the most modern technologies to
                    ensure that we assist you in achieving the most effective
                    results in the fastest time feasible.
                  </p>

                  <p>
                    We are here to deliver the highest quality results and the
                    highest quality service.
                  </p>
                  <div className="button-req design-hero-btn web-design-btn react-js-button react-hire-us">
                    <button>Hire Us Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="nodejs-dev py-5 text-center react-js-dev">
          <div className="container">
            <div className="row py-5">
              <div className="nodejs-img">
                <img src={reactDev} className="reactDev" alt="reactDev" />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default ReactPage;
