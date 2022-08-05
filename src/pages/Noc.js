import React, { useEffect } from "react";
import NocBg from "../images/NOC/support-bg.png";
import NocImg from "../images/NOC/noc.png";
import QuoteBg from "../images/NOC/quote-bg.jpg";
import NocCore from "../images/NOC/noc-core.png";
import SocCore from "../images/NOC/Socksupport.png";
import vendor from "../images/NOC/vendor.svg";
import network from "../images/NOC/network.svg";
import maintaining from "../images/NOC/maintaining.svg";
import voice from "../images/NOC/voice.svg";
import prevention from "../images/NOC/prevention.svg";
import documentation from "../images/NOC/documentation.svg";
import NocACs from "../images/NOC/noc-acs.png";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";

const Noc = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>HIRE NOC & SOC Support Company</title>
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
        style={{ backgroundImage: `url(${NocBg})` }}
      >
        <div className="container">
          <div className="row py-3">
            <div className="col-md-7 col-lg-7 col-xl-7 m-auto">
              <div className="sap-hire-content-container">
                <h1 className="text-animated-one">
                  HIRE NOC & SOC Support Engineers
                </h1>
                <p className="hire-para">
                  Ensure the performance and health of your network by hiring
                  SOC & NOC engineers. By providing you with a team of engineers
                  with full visibility into a network, our goal is to detect,
                  analyze, and respond to cybersecurity incidents with a
                  combination of technology solutions and firm processes
                </p>
                <p className="hire-para">
                  Our NOC team is responsible for ensuring that the corporate
                  network infrastructure is capable of meeting the needs of the
                  business.The organization uses the corporate network for
                  certain purposes, and the ACS-NOC team optimizes and
                  troubleshoots the corporate network to ensure that it is
                  capable of meeting the needs of the business.
                </p>
              </div>
            </div>
            <div className="col-md-5 col-lg-5 col-xl-5 m-auto">
              <div className="sap-hire-img-sec">
                <img src={NocImg} alt="" className="wp-img" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="duties-sec">
        <div className="container">
          <div className="row py-5">
            <div className="col-md-6 col-lg-6 col-xl-6 m-auto">
              <div className="duties-img-sec text-center ">
                <img src={NocCore} className="wp-team" alt="" />
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-6 m-auto">
              <div className="duties-content-sec">
                <h3 className="duties-heading">SOC CORE Responsibilities</h3>
                <ul className="duties-ul">
                  <li className="duties-list">
                    <i className="fa-solid fa-circle-check"></i>Investigating
                    Potential Incidents
                  </li>
                  <li className="duties-list">
                    <i className="fa-solid fa-circle-check"></i>Triaging and
                    Prioritizing Detected Incidents
                  </li>
                  <li className="duties-list d-flex">
                    <i className="fa-solid fa-circle-check"></i>Coordinating an
                    Incident Response
                  </li>
                  <li className="duties-list d-flex">
                    <i className="fa-solid fa-circle-check"></i>Maintaining
                    Relevance
                  </li>
                  <li className="duties-list d-flex">
                    <i className="fa-solid fa-circle-check"></i>Rapidly
                    Responding to Attacks
                  </li>
                  <li className="duties-list d-flex">
                    <i className="fa-solid fa-circle-check"></i>Patching
                    Vulnerable Systems
                  </li>
                  <li className="duties-list d-flex">
                    <i className="fa-solid fa-circle-check"></i>Reporting to
                    Management
                  </li>
                </ul>
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
                <h3 className="duties-heading">NOC CORE Responsibilities</h3>
                <ul className="duties-ul">
                  <li className="duties-list">
                    <i className="fa-solid fa-circle-check"></i>Monitors
                    multiple networks and systems
                  </li>
                  <li className="duties-list">
                    <i className="fa-solid fa-circle-check"></i>Maintain uptime
                    for all IT systems
                  </li>
                  <li className="duties-list d-flex">
                    <i className="fa-solid fa-circle-check"></i>Monitor network
                    errors, malware, and all issues pertaining to security
                  </li>
                  <li className="duties-list d-flex">
                    <i className="fa-solid fa-circle-check"></i>Troubleshooting
                    and Resolution
                  </li>
                  <li className="duties-list d-flex">
                    <i className="fa-solid fa-circle-check"></i>Alarm Handling
                    and Escalation:
                  </li>
                  <li className="duties-list d-flex">
                    <i className="fa-solid fa-circle-check"></i>Client
                    Interaction
                  </li>
                  <li className="duties-list d-flex">
                    <i className="fa-solid fa-circle-check"></i>Documentation
                    and Reporting
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-6 m-auto">
              <div className="duties-img-sec text-center ">
                <img src={SocCore} className="wp-team" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="Developer-skill-sec"
        style={{ backgroundImage: `url(${NocBg})` }}
      >
        <div className="container">
          <p className="skill-head">Additional Capabilities</p>
          <div className="row gx-5 py-5 justify-content-center align-items-center">
            <div className="col-xl-3 col-lg-3 col-md-3 mb-3">
              <div className="skill-inner-sec react-skill-inner-sec noc-skill-inner-sec py-4">
                <img src={vendor} className="skill-inner-img mb-3" alt="" />
                <p className="skill-para mb-0">Vendor ticket management</p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3  mb-3">
              <div className="skill-inner-sec react-skill-inner-sec noc-skill-inner-sec py-4">
                <img src={network} className="skill-inner-img mb-3" alt="" />
                <p className="skill-para mb-0">
                  Network analysis and routine troubleshooting
                </p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3  mb-3">
              <div className="skill-inner-sec react-skill-inner-sec noc-skill-inner-sec py-4">
                <img
                  src={maintaining}
                  className="skill-inner-img mb-3"
                  alt=""
                />
                <p className="skill-para mb-0">
                  Maintaining the stability of the core network
                </p>
              </div>
            </div>
          </div>
          <div className="row gx-5 pb-5 justify-content-center align-items-center">
            <div className="col-xl-3 col-lg-3 col-md-3  mb-3">
              <div className="skill-inner-sec react-skill-inner-sec noc-skill-inner-sec py-4">
                <img src={voice} className="skill-inner-img mb-3" alt="" />
                <p className="skill-para mb-0">
                  Voice and video data management
                </p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3  mb-3">
              <div className="skill-inner-sec react-skill-inner-sec noc-skill-inner-sec py-4">
                <img src={prevention} className="skill-inner-img mb-3" alt="" />
                <p className="skill-para mb-0">
                  Identification and prevention of any potential issues
                  regarding the network
                </p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3  mb-3">
              <div className="skill-inner-sec react-skill-inner-sec noc-skill-inner-sec py-4">
                <img
                  src={documentation}
                  className="skill-inner-img mb-3"
                  alt=""
                />
                <p className="skill-para mb-0">Documentation and reporting.</p>
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
                  WHY ACS network and technologies?
                </h3>
                <ul className="duties-ul">
                  <li className="duties-list flex-list mb-3">
                    <i className="fa-solid fa-circle-check why-acs-i"></i>
                    Easy monthly billing cycle
                  </li>
                  <li className="duties-list flex-list mb-3">
                    <i className="fa-solid fa-circle-check why-acs-i"></i>
                    One-stop solution for all IT help desk support
                  </li>
                  <li className="duties-list flex-list mb-3">
                    <i className="fa-solid fa-circle-check why-acs-i"></i>
                    Faster replacement of resources (if required)
                  </li>
                  <li className="duties-list flex-list mb-3">
                    <i className="fa-solid fa-circle-check why-acs-i"></i>
                    weekly calls to be on the same page.
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-6 m-auto">
              <div className="duties-img-sec ">
                <img src={NocACs} className="sap-lappy" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="benefit-of-hire">
        <div className="container">
          <p className="benefit-head">
            Key benefits of hiring NOC support engineers from ACS.
          </p>
          <div className="row gx-5 justify-content-center align-item-center">
            <div className="col-lg-5">
              <div className="benefit-ul-sec">
                <ul className="duties-ul">
                  <li className="duties-list flex-list mb-3">
                    <i className="fa-solid fa-circle-check why-acs-i"></i>
                    Knowledge of VOIP technology.
                  </li>
                  <li className="duties-list flex-list mb-3">
                    <i className="fa-solid fa-circle-check why-acs-i"></i>
                    Knowledge of SYS admin and Linux skills.
                  </li>
                  <li className="duties-list flex-list mb-3">
                    <i className="fa-solid fa-circle-check why-acs-i"></i>
                    Knowledge of network cabling, network classification, and
                    network topology
                  </li>
                  <li className="duties-list flex-list mb-3">
                    <i className="fa-solid fa-circle-check why-acs-i"></i>
                    Ability to multitask
                  </li>
                  <li className="duties-list flex-list mb-3">
                    <i className="fa-solid fa-circle-check why-acs-i"></i>
                    Strong skills in working with clients and communication
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="benefit-content-sec">
                <p className="benefit-para">
                  Among the general responsibilities of the NOC, engineers are
                  responding to alerts and supporting calls, and coordinating
                  with technicians to ensure incidents are addressed. A
                  technician at a NOC has to maintain documentation pertaining
                  to all IT queries and solutions. They maintain and manage the
                  infrastructure of the customer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="benefit-of-hire">
        <div className="container">
          <p className="benefit-head">
            Key benefits of hiring SOC support engineers from ACS.
          </p>
          <div className="row gx-5 justify-content-center align-item-center">
            <div className="col-lg-5">
              <div className="benefit-content-sec">
                <p className="benefit-para">
                  Our experienced SOC team is responsible for protecting an
                  organization against cyber threats. The SOC team analysts are
                  responsible for hardening corporate assets to prevent attacks
                  and performing incident detection and response in the event of
                  a security incident.
                </p>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="benefit-ul-sec">
                <ul className="duties-ul">
                  <li className="duties-list flex-list mb-3">
                    <i className="fa-solid fa-circle-check why-acs-i"></i>
                    Rapid Incident Investigations
                  </li>
                  <li className="duties-list flex-list mb-3">
                    <i className="fa-solid fa-circle-check why-acs-i"></i>
                    Strong knowledge of LAN & WAN networking using routers,
                    switches, and infrastructure products.
                  </li>
                  <li className="duties-list flex-list mb-3">
                    <i className="fa-solid fa-circle-check why-acs-i"></i>
                    Knowledge of SYS admin and Linux skills.
                  </li>
                  <li className="duties-list flex-list mb-3">
                    <i className="fa-solid fa-circle-check why-acs-i"></i>
                    Ability to work under pressure
                  </li>
                  <li className="duties-list flex-list mb-3">
                    <i className="fa-solid fa-circle-check why-acs-i"></i>
                    Strong skills in working with clients and communication
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="bottom-hire-sec mb-3"
        style={{ backgroundImage: `url(${QuoteBg})` }}
      >
        <div className="container">
          <div className="row justify-content-center align-item-center">
            <div className="col-md-5">
              <div className="hire-inner-sec text-center">
                <p className="hire-head">
                  We make it easy for you to hire a NOC expert.
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

export default Noc;
