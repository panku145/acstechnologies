import React, { useEffect, useState } from "react";
import sapBg from "../images/SAP/sap-bg.jpg";
import WpSkill from "../images/wordpress/wp-skill.png";
import phpLOgo from "../images/reactjs/php.png";
import sapLappy from "../images/reactjs/phpbanefit.png";
import Reusable from "../images/reactjs/reusable.svg";
import binding from "../images/reactjs/binding.svg";
import adopt from "../images/reactjs/adopt.svg";
import fast from "../images/reactjs/fast.svg";
import SEO from "../images/reactjs/SEO.svg";
import Unique from "../images/reactjs/unique.svg";
import ACS from "../images/reactjs/react-lappy.png";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";
import Loader from "../components/Loader";

const PhpDev = () => {
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
          <title>PHP Development Company| ReactJs Development</title>
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
          className="react-first-sec"
          style={{ backgroundImage: `url(${WpSkill})` }}
        >
          <div className="container">
            <div className="row py-5">
              <div className="col-md-7 col-lg-7 col-xl-7 m-auto">
                <div className="sap-hire-content-container">
                  <h1 className="text-animated-one">HIRE PHP Developers </h1>
                  <p className="hire-para">
                    ACS-Technologies offers more than just expertise, we give
                    you solutions. Our Team consists of Technical and
                    Well-Versed PHP Developers who have years of experience in
                    PHP development. We’re good at what we do because we
                    communicate effectively and listen to your needs. Your
                    dedicated PHP developers take your ideas and turn them into
                    web applications, portals, and more.
                  </p>
                  <ul className="hire-sap-ul">
                    <li className="sap-list">
                      <i class="fa-solid fa-circle-check"></i>40 successfully
                      completed projects
                    </li>
                    <li className="sap-list">
                      <i class="fa-solid fa-circle-check"></i> 7+ years in PHP
                      web development
                    </li>
                    <li className="sap-list">
                      <i class="fa-solid fa-circle-check"></i>Work Across Global
                      Time Zones.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-5 col-lg-5 col-xl-5">
                <div className="sap-hire-img-sec">
                  <img src={phpLOgo} alt="" className="sap-hire-img" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="duties-sec">
          <div className="container py-5">
            <div className="row pb-5">
              <div className="col-md-6 col-lg-6 col-xl-6 m-auto">
                <div className="duties-content-sec">
                  <h3 className="duties-heading"> Benefits of using PHP</h3>
                  <ul className="duties-ul">
                    <li className="duties-list flex-list mb-3">
                      <i class="fa-solid fa-circle-check why-acs-i"></i>Tested,
                      proven and trusted
                    </li>
                    <li className="duties-list flex-list mb-3">
                      <i class="fa-solid fa-circle-check why-acs-i"></i>Platform
                      independent
                    </li>
                    <li className="duties-list flex-list mb-3">
                      <i class="fa-solid fa-circle-check why-acs-i"></i>Supports
                      all servers
                    </li>
                    <li className="duties-list flex-list mb-3 d-flex">
                      <i class="fa-solid fa-circle-check why-acs-i"></i> Secured
                    </li>
                    <li className="duties-list flex-list mb-3 d-flex">
                      <i class="fa-solid fa-circle-check why-acs-i"></i> Speedy
                    </li>
                    <li className="duties-list flex-list mb-3 d-flex">
                      <i class="fa-solid fa-circle-check why-acs-i"></i>{" "}
                      Maintenance
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
              Our PHP Developer Possess The Following Skills
            </p>
            <div className="row gx-5 py-5 justify-content-center align-items-center">
              <div className="col-xl-3 col-lg-3 col-md-3 mb-3">
                <div className="skill-inner-sec react-skill-inner-sec py-4">
                  {/* <img src={Reusable} className="skill-inner-img mb-3" alt="" /> */}
                  <i className="fa-solid fa-head-side-virus analytical-icon"></i>
                  <p className="skill-para mb-0">
                    Analytical <br /> Skills
                  </p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-3  mb-3">
                <div className="skill-inner-sec react-skill-inner-sec py-4">
                  <img src={binding} className="skill-inner-img mb-3" alt="" />
                  {/* <i className="fa-solid fa-puzzle problem-solving-icn"></i> */}
                  <p className="skill-para mb-0">
                    Problem
                    <br /> solving
                  </p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-3  mb-3">
                <div className="skill-inner-sec react-skill-inner-sec py-4">
                  <img src={adopt} className="skill-inner-img mb-3" alt="" />
                  <p className="skill-para mb-0">Communication</p>
                </div>
              </div>
            </div>
            <div className="row gx-5 pb-5 justify-content-center align-items-center">
              <div className="col-xl-3 col-lg-3 col-md-3  mb-3">
                <div className="skill-inner-sec react-skill-inner-sec py-4">
                  <img src={fast} className="skill-inner-img mb-3" alt="" />
                  <p className="skill-para mb-0">
                    Interpersonal
                    <br /> Skills
                  </p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-3  mb-3">
                <div className="skill-inner-sec react-skill-inner-sec py-4">
                  <img src={SEO} className="skill-inner-img mb-3" alt="" />
                  <p className="skill-para mb-0">Teamwork</p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-3  mb-3">
                <div className="skill-inner-sec react-skill-inner-sec py-4">
                  <img src={Unique} className="skill-inner-img mb-3" alt="" />
                  <p className="skill-para mb-0">
                    Knowledge of <br /> trending frameworks
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
              Key benefits of hiring a PHP developer from ACS.
            </p>
            <div className="row gx-5 justify-content-center align-item-center">
              <div className="col-lg-5">
                <div className="benefit-content-sec">
                  <p className="benefit-para">
                    We understand the versatility and reliability of PHP and
                    have hired a team of experts who share our knowledge of the
                    programming language. Our team of PHP developers are the
                    best at what they do. Acs Networks & Technologies offers
                    end-to-end outsourced PHP development to IT product
                    companies and non-IT enterprises worldwide, helping deliver
                    high-quality software on time.
                  </p>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="benefit-ul-sec">
                  <ul className="duties-ul">
                    <li className="duties-list flex-list mb-3">
                      <i className="fa-solid fa-circle-check why-acs-i"></i>
                      <h5>Flexible Due To Its Modular Structure</h5>
                    </li>
                    <li className="duties-list flex-list mb-3">
                      <i className="fa-solid fa-circle-check why-acs-i"></i>
                      <h5>High Performance</h5>
                    </li>
                    <li className="duties-list flex-list mb-3">
                      <i className="fa-solid fa-circle-check why-acs-i"></i>
                      <h5>Allows Writing Custom Components</h5>
                    </li>
                    <li className="duties-list flex-list mb-3">
                      <i className="fa-solid fa-circle-check why-acs-i"></i>
                      <h5>Strong Community support</h5>
                    </li>
                    <li className="duties-list flex-list mb-3">
                      <i className="fa-solid fa-circle-check why-acs-i"></i>
                      <h5>Follow Clients Requirements</h5>
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
                    You can hire PHP expert quickly with ACS
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
  }
};

export default PhpDev;
