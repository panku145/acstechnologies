import React from "react";
import WpSkill from "../images/wordpress/wp-skill.png";
import sapBg from "../images/SAP/sap-bg.jpg";
import WordPress from "../images/wordpress/new-word.png";
import w1 from "../images/wordpress/w1.svg";
import w2 from "../images/wordpress/w2.svg";
import w3 from "../images/wordpress/w3.svg";
import w4 from "../images/wordpress/w4.svg";
import w6 from "../images/wordpress/w6.svg";
import w5 from "../images/wordpress/w5.svg";
import WpTeam from "../images/wordpress/wp-team.png";
import Analytical from "../images/SAP/analytical.svg";
import Problem from "../images/SAP/problem.svg";
import Knowledge from "../images/SAP/knowledge.svg";
import Communication from "../images/SAP/message.svg";
import Interpersonal from "../images/SAP/interpersonal.svg";
import Teamwork from "../images/SAP/teamwork.svg";
import WhyWP from "../images/wordpress/why-wp.png";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";

const NewWordPress = () => {
  return (
    <>
      <Helmet>
        <title>WordPress Development Company| ReactJs Development</title>
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
        style={{ backgroundImage: `url(${sapBg})` }}
      >
        <div className="container">
          <div className="row py-3">
            <div className="col-md-7 col-lg-7 col-xl-7 m-auto">
              <div className="sap-hire-content-container">
                <h1 className="text-animated-one">Hire WordPress Developers</h1>
                <p className="hire-para">
                  Hire remote WordPress developers in India at affordable rates.
                  They will create Websites from designs shared by clients or
                  through the themes, customise existing websites, to follow
                  customers’ requirements.
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
                <img src={WordPress} alt="" className="wp-img" />
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
                  Work done by our WordPress team is
                </h3>
                <ul className="duties-ul">
                  <li className="duties-list">
                    <i class="fa-solid fa-circle-check"></i>Easy to Maintain
                  </li>
                  <li className="duties-list">
                    <i class="fa-solid fa-circle-check"></i>Entirely
                    Customizable
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
                <img src={WpTeam} className="wp-team" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="Developer-skill-sec"
        style={{ backgroundImage: `url(${WpSkill})` }}
      >
        <div className="container">
          <p className="skill-head">
            An WordPress Developer Possess The Following Skills
          </p>
          <div className="row gx-5 py-5 justify-content-center align-items-center">
            <div className="col-xl-3 col-lg-3 col-md-3 mb-3">
              <div className="skill-inner-sec react-skill-inner-sec py-4">
                <img src={w1} className="skill-inner-img mb-3" alt="" />
                <p className="skill-para mb-0">
                  Analytical <br /> Skills
                </p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3  mb-3">
              <div className="skill-inner-sec react-skill-inner-sec py-4">
                <img src={w2} className="skill-inner-img mb-3" alt="" />
                <p className="skill-para mb-0">
                  Problem <br /> Solving
                </p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3  mb-3">
              <div className="skill-inner-sec react-skill-inner-sec py-4">
                <img src={w3} className="skill-inner-img mb-3" alt="" />
                <p className="skill-para mb-0">
                  Strong Community <br /> Support
                </p>
              </div>
            </div>
          </div>
          <div className="row gx-5 pb-5 justify-content-center align-items-center">
            <div className="col-xl-3 col-lg-3 col-md-3  mb-3">
              <div className="skill-inner-sec react-skill-inner-sec py-4">
                <img src={w4} className="skill-inner-img mb-3" alt="" />
                <p className="skill-para mb-0">Communication</p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3  mb-3">
              <div className="skill-inner-sec react-skill-inner-sec py-4">
                <img src={w5} className="skill-inner-img mb-3" alt="" />
                <p className="skill-para mb-0">
                  Interpersonal <br /> Skills
                </p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3  mb-3">
              <div className="skill-inner-sec react-skill-inner-sec py-4">
                <img src={w6} className="skill-inner-img mb-3" alt="" />
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
            Benefits of Hiring a WordPress developer from ACS.
          </p>
          <div className="row gx-5 justify-content-center align-item-center">
            <div className="col-lg-5">
              <div className="benefit-content-sec">
                <p className="benefit-para">
                  ACS provides WordPress development services and allows you to
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
                    WordPress Elementor
                  </li>
                  <li className="duties-list flex-list mb-3">
                    <i className="fa-solid fa-circle-check why-acs-i"></i>
                    Write efficient custom code in PHP. (If required)
                  </li>
                  <li className="duties-list flex-list mb-3">
                    <i className="fa-solid fa-circle-check why-acs-i"></i>
                    Theme development from PSD/XD/Figma
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
                  With ACS, you’ll have access to WordPress experts quickly
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

export default NewWordPress;
