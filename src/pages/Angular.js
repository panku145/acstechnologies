import React, { useEffect, useState } from "react";
import angularCompo from "../images/angular/angular-compo.png";
import angular from "../images/angular/angular.svg";
import code from "../images/angular/code.svg";
import enjection from "../images/angular/enjection.svg";
import binding from "../images/angular/binding.svg";
import angularLappy from "../images/angular/angular-lappy.jpg";
import Loader from "../components/Loader";

const AngularPage = () => {
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
        <div className="reactjs-hero-sec">
          <div className="container">
            <div className="row">
              <div className="col-md-5 react-img-col">
                <div className="react-js-img">
                  <img src={angular} className="angular" alt="angular" />
                </div>
              </div>
              <div className="col-md-7 m-auto">
                <div className="hero-sec-txt react-js-txt">
                  <div className="button-req design-hero-btn web-design-btn react-js-button">
                    <button>Web Development</button>
                  </div>
                  <h2>
                    Faster, Lighter, <br />
                    <span>and Smarter</span> Framework
                  </h2>
                  <p>
                    Looking for a dynamic developer with experience implementing
                    Angular. Our team will deliver a seamless website.
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
                    <img src={code} className="code" alt="code" />
                  </div>
                  <div className="measerable-txt word-txt reactjs-txt">
                    <h4>Cross-Platform</h4>
                    <p>
                      With Angular, you can develop progressive web applications
                      ,Build native mobile apps,Create desktop-installed apps.
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
                    <img
                      src={enjection}
                      className="enjection"
                      alt="enjection"
                    />
                  </div>
                  <div className="measerable-txt word-txt reactjs-txt">
                    <h4>High Speed and Performance</h4>
                    <p>
                      Loading time of Angular apps is faster than any other
                      front end framework.
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
                    <img src={binding} className="binding" alt="binding" />
                  </div>
                  <div className="measerable-txt word-txt reactjs-txt">
                    <h4>Productivity</h4>
                    <p>
                      Quickly create UI views, start building fast, add
                      components and tests, then instantly deploy.
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
                  <img
                    src={angularLappy}
                    className="angularLappy"
                    alt="angularLappy"
                  />
                </div>
              </div>
              <div className="col-md-6 react-why-us-col">
                <div className="line-design-head pb-3 hire-designers-head react-js-head">
                  <h2>Why Angular ?</h2>
                  <div className="dev-hr-line react-underline"></div>
                  <p>
                    Being a popular front end framework , Angular is
                    feature-rich and allows developing mind-blowing
                    applications, but also enables the creation of high-end
                    animations to enhance the user experience. The API of
                    Angular is so intuitive that developers can brew complex
                    choreographic as well as animation with low code.
                  </p>

                  <p>
                    Version 12 of its TypeScript-based web framework was
                    released in May 2021. Angular is still the most popular
                    framework among developers.
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
                  src={angularCompo}
                  className="angularCompo"
                  alt="angularCompo"
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default AngularPage;
