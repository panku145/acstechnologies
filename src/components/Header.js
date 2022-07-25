import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
// import Develop from "../images/Develop.svg";
// import Design from "../images/Design.svg";
// import itInfra from "../images/IT Infra.svg";
// import HelpDesk from "../images/IT_Help_Desk.svg";
// import DM from "../images/DM.svg";
// import CMS from "../images/CMS.svg";
// import Angular from "../images/angular.svg";
// import reactImg from "../images/React2.svg";
// import nodeImg from "../images/Node.svg";
// import WebDesign from "../images/Web-Design.svg";
// import GraphicDesign from "../images/Graphic-design.svg";
// import seo from "../images/seo.svg";
// import smm from "../images/smm.svg";
// import smo from "../images/smo.svg";
// import helpDeskImg from "../images/help-desk-img.svg";
// import network from "../images/network.svg";
// import security from "../images/security.svg";
// import data from "../images/data.svg";
import TopScrollIndicator from "./TopScrollIndicator";
import Email from "../images/above-header/email.svg";
import India from "../images/above-header/India.svg";
import US from "../images/above-header/us.svg";
import { useWindowScroll } from "react-use";

const Header = () => {
  // const { y: pageYOffset } = useWindowScroll();
  // const [visible, setVisiblity] = useState("transparent");

  // console.log(window.location.href.split("/")[3]);

  // useEffect(() => {
  //   if (window.location.href.split("/")[3]) {
  //     setVisiblity("#002140");
  //   } else {
  //     setVisiblity("transparent");
  //     if (pageYOffset > 600) {
  //       setVisiblity("#002140");
  //     } else {
  //       setVisiblity("transparent");
  //     }
  //   }
  // });

  const navigate = useNavigate();

  // const [display, setdisplay] = useState({
  //   display1: "block",
  //   display2: "none",
  //   display3: "none",
  //   display4: "none",
  //   display5: "none",
  // });

  // const tab1 = () => {
  //   setdisplay({
  //     ...display,
  //     display1: "block",
  //     display2: "none",
  //     display3: "none",
  //     display4: "none",
  //     display5: "none",
  //   });
  // };

  // const tab2 = () => {
  //   setdisplay({
  //     ...display,
  //     display1: "none",
  //     display2: "block",
  //     display3: "none",
  //     display4: "none",
  //     display5: "none",
  //   });
  // };

  // const tab3 = () => {
  //   setdisplay({
  //     ...display,
  //     display1: "none",
  //     display2: "none",
  //     display3: "block",
  //     display4: "none",
  //     display5: "none",
  //   });
  // };

  // const tab4 = () => {
  //   setdisplay({
  //     ...display,
  //     display1: "none",
  //     display2: "none",
  //     display3: "none",
  //     display4: "block",
  //     display5: "none",
  //   });
  // };

  // const tab5 = () => {
  //   setdisplay({
  //     ...display,
  //     display1: "none",
  //     display2: "none",
  //     display3: "none",
  //     display4: "none",
  //     display5: "block",
  //   });
  // };

  // const tabfirstClick = () => {
  //   navigate("/development");
  // };

  // const { display1, display2, display3, display4, display5 } = display;

  const [hideDropDown, sethideDropDown] = React.useState(true);
  const onclickHide = () => sethideDropDown(false);

  return (
    <header id="header">
      <TopScrollIndicator />
      <div className="above-header">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="email-sec">
                <img src={Email} className="email-img" alt="" />
                <a href="mailto:info@acstechnologies.net">
                  info@acstechnologies.net
                </a>
              </div>
            </div>
            <div className="col-md-3 text-center">
              <div className="india-sec">
                <img src={India} className="india-img" alt="" />
                <span>IN +91(703) 745-3282</span>
              </div>
            </div>
            <div className="col-md-3 text-center">
              <div className="india-sec">
                <img src={US} className="us-img" alt="" />
                <span>US +1(917) 600-8797</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav
        className="navbar navbar-expand-lg navbar-light "
        // style={{ backgroundColor: visible }}
      >
        <div className="container">
          <div className="row navrow">
            <div className="col-md-3 m-auto">
              <Link to="/" className="navbar-brand">
                <img src={logo} className="logo" alt="logo" />
              </Link>
            </div>
            <div className="col-md-9 tablet-col">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav">
                  <li>
                    <div class="wrapper">
                      <div
                        class="accordion accordion-flush border-top border-start border-end"
                        id="myAccordion"
                      >
                        <div class="accordion-item">
                          <h2 class="accordion-header" id="flush-headingOne">
                            <button
                              class="accordion-button collapsed border-0 "
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapseOne"
                              aria-expanded="false"
                              aria-controls="flush-collapseOne"
                            >
                              Services
                            </button>
                          </h2>
                          <div
                            id="flush-collapseOne"
                            class="accordion-collapse collapse border-0"
                            aria-labelledby="flush-headingOne"
                            data-bs-parent="#myAccordionsub"
                          >
                            <div class="accordion-body p-0">
                              <ul class="list-unstyled m-0">
                                <li
                                  className=".."
                                  data-bs-toggle="collapse"
                                  data-bs-target=".navbar-collapse.show"
                                >
                                  <div class="accordion-item">
                                    <h2
                                      class="accordion-header"
                                      id="flush-headingSub"
                                    >
                                      <button
                                        class="accordion-button collapsed border-0 "
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseSub"
                                        aria-expanded="false"
                                        aria-controls="flush-collapseSub"
                                      >
                                        IT Outsourcing
                                      </button>
                                    </h2>
                                    <div
                                      id="flush-collapseSub"
                                      class="accordion-collapse collapse border-0"
                                      aria-labelledby="flush-headingSub"
                                      data-bs-parent="#myAccordionsub"
                                    >
                                      <div class="accordion-body p-0">
                                        <ul class="list-unstyled m-0">
                                          <li
                                            to="/wordpress-development"
                                            onClick={(e) =>
                                              navigate("/wordpress-development")
                                            }
                                            className=".."
                                            data-bs-toggle="collapse"
                                            data-bs-target=".navbar-collapse.show"
                                          >
                                            Hire WordPress Developer
                                          </li>
                                          <li
                                            to="/reactjs"
                                            onClick={(e) =>
                                              navigate("/reactjs")
                                            }
                                            className=".."
                                            data-bs-toggle="collapse"
                                            data-bs-target=".navbar-collapse.show"
                                          >
                                            Hire React Developer
                                          </li>
                                          <li
                                            to="/php-developer"
                                            onClick={(e) =>
                                              navigate("/php-developer")
                                            }
                                            className=".."
                                            data-bs-toggle="collapse"
                                            data-bs-target=".navbar-collapse.show"
                                          >
                                            Hire PHP Developer
                                          </li>
                                          <li
                                            to="/node"
                                            onClick={(e) => navigate("/node")}
                                            className=".."
                                            data-bs-toggle="collapse"
                                            data-bs-target=".navbar-collapse.show"
                                          >
                                            Hire Node JS Developer
                                          </li>
                                          <li
                                            to="/angular-development"
                                            onClick={(e) =>
                                              navigate("/angular-development")
                                            }
                                            className=".."
                                            data-bs-toggle="collapse"
                                            data-bs-target=".navbar-collapse.show"
                                          >
                                            Hire Angular JS Developer
                                          </li>
                                          <li
                                            to="/net-developer"
                                            onClick={(e) =>
                                              navigate("/net-developer")
                                            }
                                            className=".."
                                            data-bs-toggle="collapse"
                                            data-bs-target=".navbar-collapse.show"
                                          >
                                            Hire .Net Developer
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                                <li
                                  className=".."
                                  data-bs-toggle="collapse"
                                  data-bs-target=".navbar-collapse.show"
                                >
                                  <div class="accordion-item">
                                    <h2
                                      class="accordion-header"
                                      id="flush-headingGraphic"
                                    >
                                      <button
                                        class="accordion-button collapsed border-0 "
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseGraphic"
                                        aria-expanded="false"
                                        aria-controls="flush-collapseGraphic"
                                      >
                                        Graphic & Web Designer
                                      </button>
                                    </h2>
                                    <div
                                      id="flush-collapseGraphic"
                                      class="accordion-collapse collapse border-0"
                                      aria-labelledby="flush-headingGraphic"
                                      data-bs-parent="#myAccordionGraphic"
                                    >
                                      <div class="accordion-body p-0">
                                        <ul class="list-unstyled m-0">
                                          <li
                                            to="/web-designing"
                                            onClick={(e) =>
                                              navigate("/web-designing")
                                            }
                                            className=".."
                                            data-bs-toggle="collapse"
                                            data-bs-target=".navbar-collapse.show"
                                          >
                                            Hire UI/UX Designer
                                          </li>
                                          <li
                                            to="/app-designing"
                                            onClick={(e) =>
                                              navigate("/app-designing")
                                            }
                                            className=".."
                                            data-bs-toggle="collapse"
                                            data-bs-target=".navbar-collapse.show"
                                          >
                                            Hire App Designer
                                          </li>
                                          <li
                                            to="/graphic-designing"
                                            onClick={(e) =>
                                              navigate("/graphic-designing")
                                            }
                                            className=".."
                                            data-bs-toggle="collapse"
                                            data-bs-target=".navbar-collapse.show"
                                          >
                                            Hire Graphic Designer
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                                <li
                                  to="/web-designing"
                                  onClick={(e) => navigate("/web-designing")}
                                  className=".."
                                  data-bs-toggle="collapse"
                                  data-bs-target=".navbar-collapse.show"
                                >
                                  <div class="accordion-item">
                                    <h2
                                      class="accordion-header"
                                      id="flush-headingSeo"
                                    >
                                      <button
                                        class="accordion-button collapsed border-0 "
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseSeo"
                                        aria-expanded="false"
                                        aria-controls="flush-collapseSeo"
                                      >
                                        Digital Marketing
                                      </button>
                                    </h2>
                                    <div
                                      id="flush-collapseSeo"
                                      class="accordion-collapse collapse border-0"
                                      aria-labelledby="flush-headingSeo"
                                      data-bs-parent="#myAccordionSeo"
                                    >
                                      <div class="accordion-body p-0">
                                        <ul class="list-unstyled m-0">
                                          <li
                                            to="/digital-marketing/seo"
                                            onClick={(e) =>
                                              navigate("/digital-marketing/seo")
                                            }
                                            className=".."
                                            data-bs-toggle="collapse"
                                            data-bs-target=".navbar-collapse.show"
                                          >
                                            Search Engine Optimization
                                          </li>
                                          <li
                                            to="/digital-marketing/smo"
                                            onClick={(e) =>
                                              navigate("/digital-marketing/smo")
                                            }
                                            className=".."
                                            data-bs-toggle="collapse"
                                            data-bs-target=".navbar-collapse.show"
                                          >
                                            Social Media Optimization
                                          </li>
                                          <li
                                            to="/email-marketing"
                                            onClick={(e) =>
                                              navigate("/email-marketing")
                                            }
                                            className=".."
                                            data-bs-toggle="collapse"
                                            data-bs-target=".navbar-collapse.show"
                                          >
                                            Email marketing
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                                <li
                                  to="/web-designing"
                                  onClick={(e) => navigate("/web-designing")}
                                  className=".."
                                  data-bs-toggle="collapse"
                                  data-bs-target=".navbar-collapse.show"
                                >
                                  <div class="accordion-item">
                                    <h2
                                      class="accordion-header"
                                      id="flush-headingIT"
                                    >
                                      <button
                                        class="accordion-button collapsed border-0 "
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseIT"
                                        aria-expanded="false"
                                        aria-controls="flush-collapseIT"
                                      >
                                        IT Infrastructure Support
                                      </button>
                                    </h2>
                                    <div
                                      id="flush-collapseIT"
                                      class="accordion-collapse collapse border-0"
                                      aria-labelledby="flush-headingIT"
                                      data-bs-parent="#myAccordionIT"
                                    >
                                      <div class="accordion-body p-0">
                                        <ul class="list-unstyled m-0">
                                          <li
                                            to="/it-help-desk"
                                            onClick={(e) =>
                                              navigate("/it-help-desk")
                                            }
                                            className=".."
                                            data-bs-toggle="collapse"
                                            data-bs-target=".navbar-collapse.show"
                                          >
                                            IT Help Desk Support
                                          </li>
                                          <li
                                            to="/noc-support"
                                            onClick={(e) =>
                                              navigate("/noc-support")
                                            }
                                            className=".."
                                            data-bs-toggle="collapse"
                                            data-bs-target=".navbar-collapse.show"
                                          >
                                            NOC & SOC Support
                                          </li>
                                          <li
                                            to="/data-center"
                                            onClick={(e) =>
                                              navigate("/data-center")
                                            }
                                            className=".."
                                            data-bs-toggle="collapse"
                                            data-bs-target=".navbar-collapse.show"
                                          >
                                            IT Data Center Monitoring & Support
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div class="accordion-item">
                          <h2 class="accordion-header" id="flush-headingOne">
                            <button
                              class="accordion-button collapsed border-0 about-acc-btn"
                              type="button"
                              // data-bs-toggle="collapse"
                              // data-bs-target="#flush-collapseTwo"
                              // aria-expanded="false"
                              // aria-controls="flush-collapseTwo"
                              to="/about-us"
                              onClick={(e) => navigate("/about-us")}
                              className=".."
                              data-bs-toggle="collapse"
                              data-bs-target=".navbar-collapse.show"
                              id="about-accordion-btn"
                            >
                              About us
                            </button>
                          </h2>
                        </div>
                        <div class="accordion-item">
                          <h2 class="accordion-header" id="flush-headingOne">
                            <button
                              class="accordion-button collapsed border-0 about-acc-btn"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapseThree"
                              aria-expanded="false"
                              aria-controls="flush-collapseThree"
                            >
                              <button className="request-quote-btn">
                                Request A Quote
                              </button>
                            </button>
                          </h2>
                        </div>
                      </div>
                    </div>
                  </li>
                  {/* <li className="nav-item four-link">
                    <Link
                      to="/"
                      className="nav-link text-uppercase"
                      aria-current="page"
                    >
                      Home
                    </Link>
                  </li> */}
                  <li className="nav-item dropdown center-li four-link">
                    <Link
                      to="/"
                      className="nav-link dropdown-toggle text-uppercase"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Services
                    </Link>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <div className="container">
                        <div className="row">
                          <div className="col-md-4">
                            <p className="outsourcing-head">IT Outsourcing</p>
                            <ul className="outsourcing-ul">
                              {/* <li className="borderRight">
                                <Link
                                  to="/sap-abap"
                                  class="hover-underline-animation"
                                >
                                  Hire SAP ABAP Developer
                                </Link>
                              </li> */}
                              <li className="borderRight">
                                <Link
                                  to="/wordpress-development"
                                  class="hover-underline-animation"
                                >
                                  Hire WordPress Developer
                                </Link>
                              </li>
                              <li className="borderRight">
                                <Link
                                  to="/reactjs"
                                  class="hover-underline-animation"
                                >
                                  Hire React Developer
                                </Link>
                              </li>
                              <li className="borderRight">
                                <Link
                                  to="/php-developer"
                                  class="hover-underline-animation"
                                >
                                  Hire PHP Developer
                                </Link>
                              </li>
                              <li className="borderRight">
                                <Link
                                  to="/node"
                                  class="hover-underline-animation"
                                >
                                  Hire Node JS Developer
                                </Link>
                              </li>
                              {/* <li>
                                <Link
                                  to="/mern-stack"
                                  class="hover-underline-animation"
                                >
                                  Hire MERN Stack Developer
                                </Link>
                              </li> */}
                              <li>
                                <Link
                                  to="/angular-development"
                                  class="hover-underline-animation"
                                >
                                  Hire Angular JS Developer
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="/net-developer"
                                  class="hover-underline-animation"
                                >
                                  Hire .Net Developer
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div className="col-md-4 borderLeftRight">
                            <p className="outsourcing-head">
                              Graphic & Web Designer
                            </p>
                            <ul className="outsourcing-ul">
                              <li className="borderRight ">
                                <Link
                                  to="/web-designing"
                                  class="hover-underline-animation"
                                >
                                  Hire UI/UX Designer
                                </Link>
                              </li>

                              <li className="borderRight">
                                <Link
                                  to="/app-designing"
                                  class="hover-underline-animation"
                                >
                                  Hire App Designer
                                </Link>
                              </li>
                              <li className="borderRight">
                                <Link
                                  to="/graphic-designing"
                                  class="hover-underline-animation"
                                >
                                  Hire Graphic Designer
                                </Link>
                              </li>
                              <li className="borderRight"></li>
                              <li className="borderRight"></li>
                              <li className="borderRight"></li>
                              <li className="borderRight"></li>
                            </ul>
                            <div className="digital-marketing-navbar-sec">
                              <p className="outsourcing-head">
                                Digital Marketing
                              </p>
                              <ul className="outsourcing-ul">
                                <li className="borderRight borderleft">
                                  <Link
                                    to={`/digital-marketing/${"seo"}`}
                                    class="hover-underline-animation"
                                  >
                                    Search Engine Optimization
                                  </Link>
                                </li>
                                <li className="borderRight borderleft">
                                  <Link
                                    to={`/digital-marketing/${"smo"}`}
                                    class="hover-underline-animation"
                                  >
                                    Social Media Optimization
                                  </Link>
                                </li>
                                <li className="borderRight borderleft">
                                  <Link
                                    to="/email-marketing"
                                    class="hover-underline-animation"
                                  >
                                    Email marketing
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <p className="outsourcing-head">
                              IT Infrastructure Support
                            </p>
                            <ul className="outsourcing-ul">
                              <li>
                                <Link
                                  to="/it-help-desk"
                                  class="hover-underline-animation"
                                >
                                  IT Help Desk Support
                                </Link>
                              </li>
                              <li>
                                <Link
                                  to="/noc-support"
                                  class="hover-underline-animation"
                                >
                                  NOC & SOC Support
                                </Link>
                              </li>
                              {/* <li>
                                <Link
                                  to="/soc-support"
                                  class="hover-underline-animation"
                                >
                                  SOC Support
                                </Link>
                              </li> */}
                              <li>
                                <Link
                                  to="/data-center"
                                  class="hover-underline-animation"
                                >
                                  IT Data Center Monitoring & Support
                                </Link>
                              </li>
                              {/* <li>
                                <Link
                                  to="/sab-basis"
                                  class="hover-underline-animation"
                                >
                                  SAP Basis Support
                                </Link>
                              </li> */}
                            </ul>
                          </div>
                        </div>
                      </div>
                      {/* -------------------------------------------------------------- */}
                      {/* <div className="megamenu-sec">
                        <div className="container">
                          <div className="row outer-rw">
                            <div className="col-md-5">
                              <div className="row tab-rw">
                                <div className="col-md-11">
                                  <div
                                    className="row megamenu-dev"
                                    onMouseOver={tab1}
                                    onClick={tabfirstClick}
                                  >
                                    <div className="col-md-3 megamenu-icon">
                                      <img
                                        src={Develop}
                                        className="Develop"
                                        alt="Develop"
                                      />
                                    </div>
                                    <div className="col-md-8 m-auto">
                                      <h4>Web Development</h4>
                                    </div>
                                    <div className="col-md-1 right-arrw ">
                                      <i className="fas fa-arrow-right"></i>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-11">
                                  <Link to="/web-designing" className="tb-lnk">
                                    <div
                                      className="row megamenu-dev"
                                      onMouseOver={tab2}
                                    >
                                      <div className="col-md-3 megamenu-icon">
                                        <img
                                          src={Design}
                                          className="Develop"
                                          alt="Develop"
                                        />
                                      </div>
                                      <div className="col-md-8 m-auto">
                                        <h4>Designing</h4>
                                      </div>
                                      <div className="col-md-1 right-arrw">
                                        <i className="fas fa-arrow-right"></i>
                                      </div>
                                    </div>
                                  </Link>
                                </div>
                                {/* <div className="col-md-11">
                                  <Link
                                    to="/digital-marketing"
                                    className="tb-lnk"
                                  >
                                    <div
                                      className="row megamenu-dev"
                                      onMouseOver={tab3}
                                    >
                                      <div className="col-md-3 megamenu-icon">
                                        <img src={DM} className="DM" alt="DM" />
                                      </div>
                                      <div className="col-md-8 m-auto">
                                        <h4>Digital Marketing</h4>
                                      </div>
                                      <div className="col-md-1 right-arrw">
                                        <i className="fas fa-arrow-right"></i>
                                      </div>
                                    </div>
                                  </Link>
                                </div> */}
                      {/* <div className="col-md-11">
                                  <Link to="/it-help-desk" className="tb-lnk">
                                    <div
                                      className="row megamenu-dev"
                                      onMouseOver={tab4}
                                    >
                                      <div className="col-md-3 megamenu-icon">
                                        <img
                                          src={HelpDesk}
                                          className="itInfra"
                                          alt="itInfra"
                                        />
                                      </div>
                                      <div className="col-md-8 m-auto">
                                        <h4>IT Help Desk</h4>
                                      </div>
                                      <div className="col-md-1 right-arrw">
                                        <i className="fas fa-arrow-right"></i>
                                      </div>
                                    </div>
                                  </Link>
                                </div>
                                <div className="col-md-11">
                                  <Link to="/" className="tb-lnk">
                                    <div
                                      className="row megamenu-dev"
                                      id="dev-border"
                                      onMouseOver={tab5}
                                    >
                                      <div className="col-md-3 megamenu-icon">
                                        <img
                                          src={itInfra}
                                          className="HelpDesk"
                                          alt="HelpDesk"
                                        />
                                      </div>
                                      <div className="col-md-8 m-auto">
                                        <h4>IT Infrastructure Managment</h4>
                                      </div>
                                      <div className="col-md-1 right-arrw">
                                        <i className="fas fa-arrow-right"></i>
                                      </div>
                                    </div>
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <div 
                              className="col-md-7"
                              style={{ display: display1 }}
                            >
                              <div className="webdevelopment-description text-center">
                                <p>
                                  Helping you create a web presence that is
                                  rich, engaging, and optimized.
                                </p>
                              </div>
                              <div className="row tab-content-components-sub-row">
                                <div className="col-md-5 my-3 tab-content-components">
                                  <Link to={"/react"} className="sub-tab-lnk">
                                    <div className="row tab-content-rw">
                                      <div className="col-md-3 mega-dev-img">
                                        <img
                                          src={reactImg}
                                          className="reactImg"
                                          alt="reactImg"
                                        />
                                      </div>
                                      <div className="col-md-9">
                                        <h4 className="develoment-head">
                                          React.Js Development
                                        </h4>
                                      </div>
                                    </div>
                                  </Link>
                                </div>

                                <div className="col-md-5 tab-content-components my-3">
                                  <Link to="/node" className="sub-tab-lnk">
                                    <div className="row tab-content-rw">
                                      <div className="col-md-3 mega-dev-img">
                                        <img
                                          src={nodeImg}
                                          className="nodeImg"
                                          alt="nodeImg"
                                        />
                                      </div>
                                      <div className="col-md-9">
                                        <h4 className="develoment-head">
                                          Node.Js Development
                                        </h4>
                                      </div>
                                    </div>
                                  </Link>
                                </div>

                                <div className="col-md-5 tab-content-components my-3">
                                  <Link to="/wordpress" className="sub-tab-lnk">
                                    <div className="row tab-content-rw">
                                      <div className="col-md-3 mega-dev-img">
                                        <img
                                          src={CMS}
                                          className="CMS"
                                          alt="CMS"
                                        />
                                      </div>
                                      <div className="col-md-9">
                                        <h4 className="develoment-head">
                                          CMS Development
                                        </h4>
                                      </div>
                                    </div>
                                  </Link>
                                </div>
                                <div className="col-md-5 tab-content-components my-3">
                                  <Link to="/angular" className="sub-tab-lnk">
                                    <div className="row tab-content-rw">
                                      <div className="col-md-3 mega-dev-img">
                                        <img
                                          src={Angular}
                                          className="CMS"
                                          alt="CMS"
                                        />
                                      </div>
                                      <div className="col-md-9">
                                        <h4 className="develoment-head">
                                          Angular.Js Development
                                        </h4>
                                      </div>
                                    </div>
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <div
                              className="col-md-7"
                              style={{ display: display2 }}
                            >
                              <div className="webdevelopment-description text-center">
                                <p>
                                  As UX has become mainstream, We take your
                                  steer on the design.
                                </p>
                              </div>
                              <div className="row tab-content-components-sub-row">
                                <div className="col-md-5 tab-content-components my-3">
                                  <div className="row tab-content-rw">
                                    <div className="col-md-3 mega-design-img">
                                      <img
                                        src={WebDesign}
                                        className="WebDesign"
                                        alt="WebDesign"
                                      />
                                    </div>
                                    <div className="col-md-9">
                                      <h4 className="develoment-head">
                                        Web Design
                                      </h4>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-5 tab-content-components my-3">
                                  <div className="row tab-content-rw">
                                    <div className="col-md-3 mega-design-img">
                                      <img
                                        src={GraphicDesign}
                                        className="GraphicDesign"
                                        alt="GraphicDesign"
                                      />
                                    </div>
                                    <div className="col-md-9">
                                      <h4 className="develoment-head">
                                        Graphic Design
                                      </h4>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="col-md-7"
                              style={{ display: display3 }}
                            >
                              <div className="webdevelopment-description text-center">
                                <p>
                                  We help you capitalize on your online
                                  potential across multiple search engines and
                                  browsers.
                                </p>
                              </div>
                              <div className="row tab-content-components-sub-row">
                                <div className="col-md-5 tab-content-components my-3">
                                  <div className="row tab-content-rw">
                                    <div className="col-md-3 mega-design-img">
                                      <img
                                        src={seo}
                                        className="seo"
                                        alt="seo"
                                      />
                                    </div>
                                    <div className="col-md-9">
                                      <h4 className="develoment-head">
                                        Search Engine Optimization(SEO)
                                      </h4>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-5 tab-content-components my-3">
                                  <div className="row tab-content-rw">
                                    <div className="col-md-3 mega-design-img">
                                      <img
                                        src={smm}
                                        className="smm"
                                        alt="smm"
                                      />
                                    </div>
                                    <div className="col-md-9">
                                      <h4 className="develoment-head">
                                        Social Media Marketing(SMM)
                                      </h4>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-5 tab-content-components my-3">
                                  <div className="row tab-content-rw">
                                    <div className="col-md-3 mega-design-img">
                                      <img
                                        src={smo}
                                        className="smo"
                                        alt="smo"
                                      />
                                    </div>
                                    <div className="col-md-9">
                                      <h4 className="develoment-head">
                                        Social Media Optimization(SMO)
                                      </h4>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="col-md-7 help-desk-sec"
                              style={{ display: display4 }}
                            >
                              <div className="row">
                                <div className="col-md-6  my-3">
                                  <div className="hep-desk">
                                    <img
                                      src={helpDeskImg}
                                      className="helpDeskImg"
                                      alt="helpDeskImg"
                                    />
                                  </div>
                                </div>
                                <div className="col-md-6 my-3">
                                  <div className="help-desk-txt">
                                    <h5>IT Help Desk</h5>
                                    <p>
                                      You can drive substantial results from
                                      your resource while we work for you 24*7
                                      ,Team Acs are here to help you unlock your
                                      potential by freeing up your team so that
                                      they can spend their high priced time on
                                      other more important as well as high
                                      priority tasks.
                                    </p>
                                    <span>
                                      <Link to="/it-help-desk">
                                        Read More....
                                      </Link>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="col-md-7"
                              style={{ display: display5 }}
                            >
                              <div className="webdevelopment-description text-center">
                                <p>
                                  We provide all essential resources (virtual
                                  ,physical,network components ) required to run
                                  an enterprise seamlessly.
                                </p>
                              </div>
                              <div className="row tab-content-components-sub-row">
                                <div className="col-md-5 tab-content-components my-3">
                                  <div className="row tab-content-rw">
                                    <div className="col-md-3 mega-design-img">
                                      <img
                                        src={WebDesign}
                                        className="WebDesign"
                                        alt="WebDesign"
                                      />
                                    </div>
                                    <div className="col-md-9">
                                      <h4 className="develoment-head">
                                        Tech Support
                                      </h4>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-5 tab-content-components my-3">
                                  <div className="row tab-content-rw">
                                    <div className="col-md-3 mega-design-img">
                                      <img
                                        src={network}
                                        className="network"
                                        alt="network"
                                      />
                                    </div>
                                    <div className="col-md-9">
                                      <h4 className="develoment-head">
                                        Network Integration
                                      </h4>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-5 tab-content-components my-3">
                                  <div className="row tab-content-rw">
                                    <div className="col-md-3 mega-design-img">
                                      <img
                                        src={security}
                                        className="security"
                                        alt="security"
                                      />
                                    </div>
                                    <div className="col-md-9">
                                      <h4 className="develoment-head">
                                        Network Security
                                      </h4>
                                    </div>
                                  </div>
                                </div>
                                {/* <div className="col-md-5 tab-content-components my-3">
                                  <div className="row tab-content-rw">
                                    <div className="col-md-3 mega-design-img">
                                      <img
                                        src={data}
                                        className="data"
                                        alt="data"
                                      />
                                    </div>
                                    <div className="col-md-9">
                                      <h4 className="develoment-head">
                                        Data Center Support & Solutions
                                      </h4>
                                    </div>
                                  </div>
                                </div> 
                              </div>
                            </div>
                          </div>
                        </div>
                      </div> */}

                      {/* -------------------------------------------------------------- */}
                    </ul>
                  </li>
                  <li className="nav-item four-link">
                    <Link
                      to="/about-us"
                      className="nav-link text-uppercase"
                      aria-current="page"
                    >
                      About Us
                    </Link>
                  </li>
                  <li className="nav-item four-link">
                    <Link
                      to="/career"
                      className="nav-link text-uppercase"
                      aria-current="page"
                    >
                      Career
                    </Link>
                  </li>
                  <li className="nav-item button-li">
                    <Link
                      to="/contact"
                      className="nav-link Getfree text-uppercase"
                    >
                      <button>Request A Quote</button>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
