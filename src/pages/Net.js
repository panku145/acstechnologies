import React from "react";
import netBg from "../images/net/net-bg.jpg";
import NetImg from "../images/net/net.png";
import NetBanefits from "../images/net/net-banefite.png";
import FastProcessing from "../images/angular/FastProcessing.svg";
import Efficient from "../images/angular/Efficient.svg";
import HighPerformance from "../images/angular/HighPerformance.svg";
import Architecture from "../images/angular/Architecture.svg";
import Routing from "../images/angular/Routing.svg";
import WhyWP from "../images/wordpress/why-wp.png";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";

const Net = () => {
  return (
    <>
      <Helmet>
        <title>DotNet Development Company| ReactJs Development</title>
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
        style={{ backgroundImage: `url(${netBg})` }}
      >
        <div className="container">
          <div className="row py-3">
            <div className="col-md-7 col-lg-7 col-xl-7 m-auto">
              <div className="sap-hire-content-container">
                <h1 className="text-animated-one">HIRE .Net Developer</h1>
                <p className="hire-para">
                  Hire dot net developers with extensive experience in .net who
                  can build your next gen scalable web portal.Our team of .net
                  developers are specialized in Telerik, DevExpress,
                  RADControls, ComponentOne, Visual WebGUI.
                </p>

                <ul className="hire-sap-ul">
                  <li className="sap-list">
                    <i className="fa-solid fa-circle-check"></i>Develop a
                    dedicated team of developers.
                  </li>
                  <li className="sap-list">
                    <i className="fa-solid fa-circle-check"></i>Work Across
                    Global Time Zones.
                  </li>
                  <li className="sap-list">
                    <i className="fa-solid fa-circle-check"></i>Can be tracked
                    through project management tools.
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-5 col-lg-5 col-xl-5">
              <div className="sap-hire-img-sec">
                <img src={NetImg} alt="" className="wp-img" />
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
                <h3 className="duties-heading">Benefits of using Dotnet</h3>
                <ul className="duties-ul">
                  <li className="duties-list">
                    <i className="fa-solid fa-circle-check"></i>Easy
                    development.
                  </li>
                  <li className="duties-list">
                    <i className="fa-solid fa-circle-check"></i>Scalability.
                  </li>
                  <li className="duties-list d-flex">
                    <i className="fa-solid fa-circle-check"></i>OOPS Support.
                  </li>
                  <li className="duties-list d-flex">
                    <i className="fa-solid fa-circle-check"></i>Unified MVC and
                    Web API FrameWorks.
                  </li>
                  <li className="duties-list d-flex">
                    <i className="fa-solid fa-circle-check"></i>Assisting
                    end-users with bug fixing and troubleshooting procedures.
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-6 m-auto">
              <div className="duties-img-sec ">
                <img src={NetBanefits} className="wp-team" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="Developer-skill-sec"
        style={{ backgroundImage: `url(${netBg})` }}
      >
        <div className="container">
          <p className="skill-head">Advantages of using Dotnet</p>
          <div className="row gx-5 py-5 justify-content-center align-items-center">
            <div className="col-xl-3 col-lg-3 col-md-3 mb-3">
              <div className="skill-inner-sec react-skill-inner-sec py-4">
                <img
                  src={FastProcessing}
                  className="skill-inner-img mb-3"
                  alt=""
                />
                <p className="skill-para mb-0">
                  Reusable <br /> Components
                </p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3  mb-3">
              <div className="skill-inner-sec react-skill-inner-sec py-4">
                <img src={Efficient} className="skill-inner-img mb-3" alt="" />
                <p className="skill-para mb-0">
                  Proficient <br /> Data Binding
                </p>
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
                  Easy to <br /> adopt
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
                <p className="skill-para mb-0">
                  Offers <br /> fast rendering
                </p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3  mb-3">
              <div className="skill-inner-sec react-skill-inner-sec py-4">
                <img src={Routing} className="skill-inner-img mb-3" alt="" />
                <p className="skill-para mb-0">
                  SEO <br /> Friendly
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
                  WHY ACS network and technologies?
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
            Approach followed by a dotnet developer hired from ACS.
          </p>
          <div className="row gx-5 justify-content-center align-item-center">
            <div className="col-lg-5">
              <div className="benefit-content-sec">
                <p className="benefit-para">
                  ACS provides Dotnet development services and allows you to
                  enrich your ideas and turn them into reality. Thus you can
                  rest assured that your site will be in good hands if you use
                  our developer. Above all, it is easy to maintain from both
                  user's and the Developer's Perspectives.
                </p>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="benefit-ul-sec">
                <ul className="duties-ul">
                  <li className="duties-list flex-list mb-3">
                    <i className="fa-solid fa-circle-check why-acs-i"></i>
                    Follow standard coding conventions/ practices and write well
                    documented/commented code.
                  </li>
                  <li className="duties-list flex-list mb-3">
                    <i className="fa-solid fa-circle-check why-acs-i"></i>
                    Experience in Agile Development Process.
                  </li>
                  <li className="duties-list flex-list mb-3">
                    <i className="fa-solid fa-circle-check why-acs-i"></i>
                    Daily and weekly meetings.
                  </li>
                  <li className="duties-list flex-list mb-3">
                    <i className="fa-solid fa-circle-check why-acs-i"></i>
                    Time Zone overlapping.
                  </li>
                  <li className="duties-list flex-list mb-3">
                    <i className="fa-solid fa-circle-check why-acs-i"></i>
                    Strong community support
                  </li>
                  <li className="duties-list flex-list mb-3">
                    <i className="fa-solid fa-circle-check why-acs-i"></i>
                    Follow clients requirements
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="bottom-hire-sec mb-3"
        style={{ backgroundImage: `url(${netBg})` }}
      >
        <div className="container">
          <div className="row justify-content-center align-item-center">
            <div className="col-md-5">
              <div className="hire-inner-sec text-center">
                <p className="hire-head">
                  Our Dotnet geeks can be hired quickly
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

export default Net;
