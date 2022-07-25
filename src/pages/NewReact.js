import React from "react";
import sapBg from "../images/SAP/sap-bg.jpg";
import WpSkill from "../images/wordpress/wp-skill.png";
import ReactLogo from "../images/reactjs/react-logo.png";
import sapLappy from "../images/reactjs/react-dev.png";
import Reusable from "../images/reactjs/reusable.svg";
import binding from "../images/reactjs/binding.svg";
import adopt from "../images/reactjs/adopt.svg";
import fast from "../images/reactjs/fast.svg";
import SEO from "../images/reactjs/SEO.svg";
import Unique from "../images/reactjs/unique.svg";
import ACS from "../images/reactjs/react-lappy.png";
import { Link } from "react-router-dom";

const NewReact = () => {
  return (
    <>
      <div
        className="react-first-sec"
        style={{ backgroundImage: `url(${WpSkill})` }}
      >
        <div className="container">
          <div className="row py-5">
            <div className="col-md-7 col-lg-7 col-xl-7 m-auto">
              <div className="sap-hire-content-container">
                <h1 className="text-animated-one">HIRE React.JS Developers </h1>
                <p className="hire-para">
                  React.JS is a great choice. Ideal for startups with large
                  scalability plans or for large businesses. Hire remote React
                  developers in India at affordable rates.ReactJS is flexible
                  and has a lot more to offer.
                </p>
                <ul className="hire-sap-ul">
                  <li className="sap-list">
                    <i class="fa-solid fa-circle-check"></i>Develop a team of
                    dedicated React developers
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
                <img src={ReactLogo} alt="" className="sap-hire-img" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="duties-sec">
        <div className="container">
          <div className="row pb-5">
            <div className="col-md-6 col-lg-6 col-xl-6 m-auto">
              <div className="duties-content-sec">
                <h3 className="duties-heading">Benefits of Using React</h3>
                <ul className="duties-ul">
                  <li className="duties-list">
                    <i class="fa-solid fa-circle-check"></i>Fast rendering
                  </li>
                  <li className="duties-list">
                    <i class="fa-solid fa-circle-check"></i>Fewer HTTP requests
                  </li>
                  <li className="duties-list">
                    <i class="fa-solid fa-circle-check"></i>Rich UI
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
                <img src={sapLappy} className="sap-lappy" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="Developer-skill-sec"
        style={{ backgroundImage: `url(${sapBg})` }}
      >
        <div className="container">
          <p className="skill-head">Advantages of using React</p>
          <div className="row gx-5 py-5 justify-content-center align-items-center">
            <div className="col-xl-3 col-lg-3 col-md-3 mb-3">
              <div className="skill-inner-sec react-skill-inner-sec py-4">
                <img src={Reusable} className="skill-inner-img mb-3" alt="" />
                <p className="skill-para mb-0">
                  Reusable <br /> Components
                </p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3  mb-3">
              <div className="skill-inner-sec react-skill-inner-sec py-4">
                <img src={binding} className="skill-inner-img mb-3" alt="" />
                <p className="skill-para mb-0">
                  Proficient <br /> Data Binding
                </p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3  mb-3">
              <div className="skill-inner-sec react-skill-inner-sec py-4">
                <img src={adopt} className="skill-inner-img mb-3" alt="" />
                <p className="skill-para mb-0">
                  Easy <br /> to adopt
                </p>
              </div>
            </div>
          </div>
          <div className="row gx-5 pb-5 justify-content-center align-items-center">
            <div className="col-xl-3 col-lg-3 col-md-3  mb-3">
              <div className="skill-inner-sec react-skill-inner-sec py-4">
                <img src={fast} className="skill-inner-img mb-3" alt="" />
                <p className="skill-para mb-0">
                  offers <br /> fast rendering
                </p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3  mb-3">
              <div className="skill-inner-sec react-skill-inner-sec py-4">
                <img src={SEO} className="skill-inner-img mb-3" alt="" />
                <p className="skill-para mb-0">
                  SEO <br /> friendly
                </p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3  mb-3">
              <div className="skill-inner-sec react-skill-inner-sec py-4">
                <img src={Unique} className="skill-inner-img mb-3" alt="" />
                <p className="skill-para mb-0">
                  Unique <br /> Abstraction Layer
                </p>
              </div>
            </div>
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
                    <i className="fa-solid fa-circle-check why-acs-i"></i>SAP
                    Daily/Bi-weekly/weekly calls to be on the same page
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-6 m-auto">
              <div className="duties-img-sec ">
                <img src={ACS} className="sap-lappy" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="benefit-of-hire">
        <div className="container">
          <p className="benefit-head">
            Key benefits of hiring a REACT developer from ACS.
          </p>
          <div className="row gx-5 justify-content-center align-item-center">
            <div className="col-lg-5">
              <div className="benefit-content-sec">
                <p className="benefit-para">
                  eing a popular front end library, REACT is an efficient,
                  declarative, and flexible open-source JavaScript library for
                  building simple, fast, and scalable frontends of web
                  applications
                </p>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="benefit-ul-sec">
                <ul className="duties-ul">
                  <li className="duties-list flex-list mb-3">
                    <i className="fa-solid fa-circle-check why-acs-i"></i>
                    Flexible due to its modular structure
                  </li>
                  <li className="duties-list flex-list mb-3">
                    <i className="fa-solid fa-circle-check why-acs-i"></i>
                    high performance
                  </li>
                  <li className="duties-list flex-list mb-3">
                    <i className="fa-solid fa-circle-check why-acs-i"></i>
                    allows writing custom components
                  </li>
                  <li className="duties-list flex-list mb-3">
                    <i className="fa-solid fa-circle-check why-acs-i"></i>
                    strong community support
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
        style={{ backgroundImage: `url(${sapBg})` }}
      >
        <div className="container">
          <div className="row justify-content-center align-item-center">
            <div className="col-md-5">
              <div className="hire-inner-sec text-center">
                <p className="hire-head">
                  You can hire React expert quickly with ACS
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

export default NewReact;
