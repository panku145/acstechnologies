import React, { useEffect, useState } from "react";
import nodeComponent from "../images/node/node-component.png";
import nodeLapp from "../images/node/node-lapp.jpg";
import cross from "../images/node/cross.svg";
import node from "../images/node/node.svg";
import scalable from "../images/node/scalable.svg";
import error from "../images/node/error.svg";
import Loader from "../components/Loader";
import { Helmet } from "react-helmet";

const NodePage = () => {
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
          <title>Node.Js Development company in India: Node.Js Services</title>
          <meta
            name="description"
            content="Hire a Node.js developers company in India to complete your project on time and on budget. Build a scalable website with our expertise in node.js development. "
          />
          <meta
            name="keywords"
            content="top Node JS development company Dehradun India, Top Node JS developers India "
          />
        </Helmet>
        <div className="reactjs-hero-sec">
          <div className="container">
            <div className="row">
              <div className="col-md-5 react-img-col">
                <div className="react-js-img">
                  <img src={node} className="node" alt="node" />
                </div>
              </div>
              <div className="col-md-7 m-auto">
                <div className="hero-sec-txt react-js-txt">
                  <div className="button-req design-hero-btn web-design-btn react-js-button">
                    <button>Web Development</button>
                  </div>
                  <h2>
                    World class <br />
                    <span>Node JS</span> Developers
                  </h2>
                  <p>
                    Thanks to its ease of use and lightweight characteristics,
                    Node.js is ideal for businesses and startups alike.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="react-js-three-component">
          <div className="container">
            <div className="row react-js-rw">
              <div
                className="col-lg-3 col-md-4 col-sm-12 react-js-col"
                id="wordpress-col"
              >
                <div className="react-js-inner-sec">
                  <div className="measerable-img pb-4 react-js-img-sec ">
                    <img src={scalable} className="scalable" alt="scalable" />
                  </div>
                  <div className="measerable-txt word-txt reactjs-txt ">
                    <h4>Scalable Apps</h4>
                    <p>
                      Keep your eyes open for growth by using technology that
                      seamlessly integrates microservices and serverless
                      computing.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-4 col-sm-12 react-js-col"
                id="wordpress-col"
              >
                <div className="react-js-inner-sec">
                  <div className="measerable-img pb-4 react-js-img-sec">
                    <img src={cross} className="cross" alt="cross" />
                  </div>
                  <div className="measerable-txt word-txt reactjs-txt">
                    <h4>Real-Time</h4>
                    <p>
                      With WebSockets built on Node.js, Your data-intensive
                      applications will be updated immediately, eliminating
                      delay in updates.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-4 col-sm-12 react-js-col"
                id="wordpress-col"
              >
                <div className="react-js-inner-sec">
                  <div className="measerable-img pb-4 react-js-img-sec">
                    <img src={error} className="error" alt="error" />
                  </div>
                  <div className="measerable-txt word-txt reactjs-txt">
                    <h4>Rich Ecosystem</h4>
                    <p>
                      Node Js is taking the internet market by an explosion.
                      It's now being regarded as a go-to technology that is
                      preferred by firms to develop IoT application development.
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
              <div className="col-md-5 py-4 designer-col">
                <div className="hire-designer-bg react-why-us-img">
                  <img src={nodeLapp} className="nodeLapp" alt="nodeLapp" />
                </div>
              </div>
              <div className="col-md-6 react-why-us-col">
                <div className="line-design-head pb-3 hire-designers-head react-js-head">
                  <h2>Why Node JS ?</h2>
                  <div className="dev-hr-line react-underline"></div>
                  <p>
                    Websites that utilize Node.js are able to handle a larger
                    amount of simultaneous users. It is a great tool to build
                    web applications for e-commerce stores or marketplaces and
                    content management systems. It also provides tools for
                    analyzing data, as well as more.
                  </p>

                  <p>
                    It is a robust platform that blends efficiency as well as
                    speed and durability and is the ideal choice for all your
                    custom needs.It makes use of JavaScript to be run within the
                    web server.
                  </p>
                  <div className="button-req design-hero-btn web-design-btn react-js-button react-hire-us">
                    <button>Hire Us Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="nodejs-dev py-5 text-center">
          <div className="container">
            <div className="row py-5">
              <div className="nodejs-img">
                <img
                  src={nodeComponent}
                  className="nodeComponent"
                  alt="nodeComponent"
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default NodePage;
