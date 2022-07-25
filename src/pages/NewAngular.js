import React, { useEffect } from "react";
import reactBg from "../images/reactjs/react-bg.jpg";
import WpSkill from "../images/wordpress/wp-skill.png";
import sapBg from "../images/SAP/sap-bg.jpg";
import Angular from "../images/angular/new-angu.png";
import sapLappy from "../images/reactjs/react-dev.png";
import FastProcessing from "../images/angular/FastProcessing.svg";
import Efficient from "../images/angular/Efficient.svg";
import HighPerformance from "../images/angular/HighPerformance.svg";
import Architecture from "../images/angular/Architecture.svg";
import Routing from "../images/angular/Routing.svg";

import Teamwork from "../images/SAP/teamwork.svg";
import WhyWP from "../images/wordpress/why-wp.png";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";

const NewAngular = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Angular Development Company| ReactJs Development</title>
        <meta
          name="description"
          content="Looking for an SEO-friendly website, your search end with our ReactJs development service, get fast, and the flexible user interface leveraging ReactJS. "
        />
        <meta
          name="keywords"
          content="top Reactjs developers Dehradun India, top React website developers Dehradun India, React JS Websites, React JS website development"
        />
      </Helmet>
      <div
        className="asap-first-sec"
        style={{ backgroundImage: `url(${reactBg})` }}
      >
        <div className="container">
          <div className="row py-3">
            <div className="col-md-7 col-lg-7 col-xl-7 m-auto">
              <div className="sap-hire-content-container">
                <h1 className="text-animated-one">
                  HIRE front end Angular Developer
                </h1>
                <p className="hire-para">
                  Hire remote front end Angular developers in India at
                  affordable rates.if you are looking for a dynamic team of web
                  developers with experience implementing Angular. Our team of
                  front end developer would be the best fit in that case and can
                  deliver a seamless website
                </p>
                <p className="hire-para">
                  With Faster, Lighter,and Smarter Framework they will code , to
                  follow customers' requirements.
                </p>
                <ul className="hire-sap-ul">
                  <li className="sap-list">
                    <i class="fa-solid fa-circle-check"></i>Develop a team of
                    dedicated front end angular developers
                  </li>
                  <li className="sap-list">
                    <i class="fa-solid fa-circle-check"></i>Work Across Global
                    Time Zones.
                  </li>
                  <li className="sap-list">
                    <i class="fa-solid fa-circle-check"></i>Can be tracked
                    through project management tools.
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-5 col-lg-5 col-xl-5">
              <div className="sap-hire-img-sec">
                <img src={Angular} alt="" className="wp-img" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="duties-sec">
        <div className="container">
          <div className="row py-5">
            <div className="col-md-6 col-lg-6 col-xl-6 m-auto">
              <div className="duties-content-sec">
                <h3 className="duties-heading">Benefits of using angular</h3>
                <ul className="duties-ul">
                  <li className="duties-list">
                    <i class="fa-solid fa-circle-check"></i>Cross-Platform
                  </li>
                  <li className="duties-list">
                    <i class="fa-solid fa-circle-check"></i>High Speed and
                    Performance
                  </li>
                  <li className="duties-list d-flex">
                    <i class="fa-solid fa-circle-check"></i>Quickly create UI
                    view
                  </li>
                  <li className="duties-list d-flex">
                    <i class="fa-solid fa-circle-check"></i>can develop
                    progressive web applications
                  </li>
                  <li className="duties-list d-flex">
                    <i class="fa-solid fa-circle-check"></i>Assisting end-users
                    with bug fixing and troubleshooting procedures
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-6 m-auto">
              <div className="duties-img-sec ">
                <img src={sapLappy} className="wp-team" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="Developer-skill-sec"
        style={{ backgroundImage: `url(${reactBg})` }}
      >
        <div className="container">
          <p className="skill-head">Advantages of using Angular</p>
          <div className="row gx-5 py-5 justify-content-center align-items-center">
            <div className="col-xl-3 col-lg-3 col-md-3 mb-3">
              <div className="skill-inner-sec react-skill-inner-sec py-4">
                <img
                  src={FastProcessing}
                  className="skill-inner-img mb-3"
                  alt=""
                />
                <p className="skill-para mb-0">
                  Fast <br /> Processing
                </p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3  mb-3">
              <div className="skill-inner-sec react-skill-inner-sec py-4">
                <img src={Efficient} className="skill-inner-img mb-3" alt="" />
                <p className="skill-para mb-0">Efficient</p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3  mb-3">
              <div className="skill-inner-sec react-skill-inner-sec py-4">
                <img
                  src={HighPerformance}
                  className="skill-inner-img mb-3"
                  alt=""
                />
                <p className="skill-para mb-0">
                  High <br /> performance
                </p>
              </div>
            </div>
          </div>
          <div className="row gx-5 pb-5 justify-content-center align-items-center">
            <div className="col-xl-3 col-lg-3 col-md-3  mb-3">
              <div className="skill-inner-sec react-skill-inner-sec py-4">
                <img
                  src={Architecture}
                  className="skill-inner-img mb-3"
                  alt=""
                />
                <p className="skill-para mb-0">Architecture </p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3  mb-3">
              <div className="skill-inner-sec react-skill-inner-sec py-4">
                <img src={Routing} className="skill-inner-img mb-3" alt="" />
                <p className="skill-para mb-0">
                  Interpersonal <br /> Routing
                </p>
              </div>
            </div>
            {/* <div className="col-xl-3 col-lg-3 col-md-3  mb-3">
              <div className="skill-inner-sec react-skill-inner-sec py-4">
                <img src={Teamwork} className="skill-inner-img mb-3" alt="" />
                <p className="skill-para mb-0">Teamwork</p>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      <div className="why-acs-sec py-4">
        <div className="container">
          <div className="row py-5">
            <div className="col-md-6 col-lg-6 col-xl-6 ">
              <div className="duties-content-sec">
                <h3 className="duties-heading pb-3">
                  Why ACS Network & Technologies ?
                </h3>
                <ul className="duties-ul">
                  <li className="duties-list flex-list mb-3">
                    <i className="fa-solid fa-circle-check why-acs-i"></i>
                    Complete project management through a project management
                    tool.
                  </li>
                  <li className="duties-list flex-list mb-3">
                    <i className="fa-solid fa-circle-check why-acs-i"></i>
                    Code sharing and version control through online
                    repositories.
                  </li>
                  <li className="duties-list flex-list mb-3">
                    <i className="fa-solid fa-circle-check why-acs-i"></i>
                    Weekly sprint release.
                  </li>
                  <li className="duties-list flex-list mb-3">
                    <i className="fa-solid fa-circle-check why-acs-i"></i>
                    Daily/Bi-weekly/weekly calls to be on the same page.
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-6 m-auto">
              <div className="duties-img-sec ">
                <img src={WhyWP} className="sap-lappy" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="benefit-of-hire">
        <div className="container">
          <p className="benefit-head">
            Benefits of Hiring a Angular developer from ACS.
          </p>
          <div className="row gx-5 justify-content-center align-item-center">
            <div className="col-lg-5">
              <div className="benefit-content-sec">
                <p className="benefit-para">
                  Being a popular front end framework , Angular is feature-rich
                  and allows developing mind-blowing applications, but also
                  enables the creation of high-end animations to enhance the
                  user experience. The API of Angular is so intuitive that
                  developers can brew complex choreographic as well as animation
                  with low code.
                </p>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="benefit-ul-sec">
                <ul className="duties-ul">
                  <li className="duties-list flex-list mb-3">
                    <i className="fa-solid fa-circle-check why-acs-i"></i>
                    WordPress Elementor
                  </li>
                  <li className="duties-list flex-list mb-3">
                    <i className="fa-solid fa-circle-check why-acs-i"></i>
                    Effective Problem-Solving Patterns
                  </li>
                  <li className="duties-list flex-list mb-3">
                    <i className="fa-solid fa-circle-check why-acs-i"></i>
                    Two-way data binding
                  </li>
                  <li className="duties-list flex-list mb-3">
                    <i className="fa-solid fa-circle-check why-acs-i"></i>
                    Dependency injection components
                  </li>
                  <li className="duties-list flex-list mb-3">
                    <i className="fa-solid fa-circle-check why-acs-i"></i>
                    Strong community
                  </li>
                  <li className="duties-list flex-list mb-3">
                    <i className="fa-solid fa-circle-check why-acs-i"></i>
                    Follow clients Requirements
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="bottom-hire-sec mb-3"
        style={{ backgroundImage: `url(${sapBg})` }}
      >
        <div className="container">
          <div className="row justify-content-center align-item-center">
            <div className="col-md-5">
              <div className="hire-inner-sec text-center">
                <p className="hire-head">
                  Our Angular geeks can be hired quickly
                </p>
                <span className="but-acs">But At ACS, It Is Simple</span>
                <div className="button-li py-2">
                  <Link
                    to="/contact"
                    className="nav-link Getfree text-uppercase"
                  >
                    <button>Request A Quote</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewAngular;
