import React from "react";
import sapBg from "../images/SAP/sap-bg.jpg";
import Hire from "../images/SAP/sap-slider.png";
import sapLappy from "../images/SAP/sap-lappy.jpg";
import Analytical from "../images/SAP/analytical.svg";
import Problem from "../images/SAP/problem.svg";
import Knowledge from "../images/SAP/knowledge.svg";
import Communication from "../images/SAP/message.svg";
import Interpersonal from "../images/SAP/interpersonal.svg";
import Teamwork from "../images/SAP/teamwork.svg";
import ACS from "../images/SAP/acs.svg";
import { Link } from "react-router-dom";

const SAP = () => {
  return (
    <>
      <div
        className="asap-first-sec"
        style={{ backgroundImage: `url(${sapBg})` }}
      >
        <div className="container">
          <div className="row py-5">
            <div className="col-md-7 col-lg-7 col-xl-7 m-auto">
              <div className="sap-hire-content-container">
                <h1 className="text-animated-one">HIRE SAP ABAP Developers </h1>
                <p className="hire-para">
                  Hire remote SAP ABAP developers in India for 70% lower rates.
                  They will create Systems Applications and Products in Data
                  Processing (SAP) modules to follow customers' requirements.
                </p>
                <ul className="hire-sap-ul">
                  <li className="sap-list">
                    <i class="fa-solid fa-circle-check"></i>Build Your Dedicated
                    Development Team
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
                <img src={Hire} alt="" className="sap-hire-img" />
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
                <h3 className="duties-heading">
                  SAP ABAP Developers May Perform The <br /> Following Duties:
                </h3>
                <ul className="duties-ul">
                  <li className="duties-list">
                    <i class="fa-solid fa-circle-check"></i>Writing ABAP code
                    for the client's application modules
                  </li>
                  <li className="duties-list">
                    <i class="fa-solid fa-circle-check"></i>Allocating resources
                    to complete client projects
                  </li>
                  <li className="duties-list">
                    <i class="fa-solid fa-circle-check"></i>Assisting end-users
                    with troubleshooting procedures
                  </li>
                  <li className="duties-list">
                    <i class="fa-solid fa-circle-check"></i>SAP training for end
                    users
                  </li>
                  <li className="duties-list">
                    <i class="fa-solid fa-circle-check"></i>Conducting usability
                    tests before releasing an update
                  </li>
                  <li className="duties-list flex-list">
                    <i class="fa-solid fa-circle-check"></i>Collaboration with
                    employees from different departments to develop an SAP
                    solution.
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
          <p className="skill-head">
            An SAP ABAP Developer Possess The Following Skills
          </p>
          <div className="row gx-5 py-5 justify-content-center align-items-center">
            <div className="col-xl-3 col-lg-3 col-md-3 mb-3">
              <div className="skill-inner-sec py-4">
                <img src={Analytical} className="skill-inner-img mb-3" alt="" />
                <p className="skill-para mb-0">
                  Analytical <br /> Skills
                </p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3  mb-3">
              <div className="skill-inner-sec py-4">
                <img src={Problem} className="skill-inner-img mb-3" alt="" />
                <p className="skill-para mb-0">
                  Problem <br /> Solving
                </p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3  mb-3">
              <div className="skill-inner-sec py-4">
                <img src={Knowledge} className="skill-inner-img mb-3" alt="" />
                <p className="skill-para mb-0">
                  Knowledge Of SAP <br /> Systems
                </p>
              </div>
            </div>
          </div>
          <div className="row gx-5 pb-5 justify-content-center align-items-center">
            <div className="col-xl-3 col-lg-3 col-md-3  mb-3">
              <div className="skill-inner-sec py-4">
                <img
                  src={Communication}
                  className="skill-inner-img mb-3"
                  alt=""
                />
                <p className="skill-para mb-0">Communication</p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3  mb-3">
              <div className="skill-inner-sec py-4">
                <img
                  src={Interpersonal}
                  className="skill-inner-img mb-3"
                  alt=""
                />
                <p className="skill-para mb-0">
                  Interpersonal <br /> Skills
                </p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3  mb-3">
              <div className="skill-inner-sec py-4">
                <img src={Teamwork} className="skill-inner-img mb-3" alt="" />
                <p className="skill-para mb-0">Teamwork</p>
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
                    Daily/Bi-weekly/weekly calls to be on the same page.
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
            Benefits Of Hiring A SAP ABAP Developer From ACS
          </p>
          <div className="row gx-5 justify-content-center align-item-center">
            <div className="col-lg-5">
              <div className="benefit-content-sec">
                <p className="benefit-para">
                  ACS provides SAP ABAP software development services to allow
                  companies to enrich their ideas and turn them into reality.
                </p>
                <p className="benefit-para">
                  It is after us how these experts deliver quality. Our
                  developers are well versed in Advanced Business Application
                  Programming (ABAP) language.
                </p>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="benefit-ul-sec">
                <ul className="duties-ul">
                  <li className="duties-list flex-list mb-3">
                    <i className="fa-solid fa-circle-check why-acs-i"></i>
                    Follow clients requirements
                  </li>
                  <li className="duties-list flex-list mb-3">
                    <i className="fa-solid fa-circle-check why-acs-i"></i>
                    write reports for the whole application development
                  </li>
                  <li className="duties-list flex-list mb-3">
                    <i className="fa-solid fa-circle-check why-acs-i"></i>
                    test and support the modules they create.
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
                  Hiring A SAP ABAP Developer Was Never So Easy
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

export default SAP;
