import React, { useEffect, useState } from "react";
import helpDeskImg from "../images/help-desk-img.svg";
import IssueDetection from "../images/Issue_Detection.svg";
import Ticket from "../images/Ticket.svg";
import Resolution from "../images/Resolution.svg";
import Update from "../images/Update.svg";
import Check from "../images/Check.svg";
import Review from "../images/Review.svg";
import offshore from "../images/offshore.svg";
import flow from "../images/flow.svg";
import work from "../images/work.svg";
import single from "../images/single.svg";
import Loader from "../components/Loader";
import { Helmet } from "react-helmet";

const ItHelpDesk = () => {
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
          <title>IT Help desk services: ACS Networks & Technologies</title>
          <meta
            name="description"
            content="Designed IT help desk services in a way so that you can enable your team or users to resolve their issues, your own technical support team for your business."
          />
          <meta
            name="keywords"
            content="IT help desk services, IT services, IT Help desk, IT Help desk services company, IT technical support "
          />
        </Helmet>
        <div className="hero-sec md-pb-5 help-desk-hero-sec">
          <div className="container">
            <div className="row py-5">
              <div className="col-md-6 py-3">
                <div className="hero-sec-img">
                  <img
                    src={helpDeskImg}
                    className="helpDeskImg"
                    alt="helpDeskImg"
                  />
                </div>
              </div>
              <div className="col-md-6 m-auto py-3">
                <div className="hero-sec-txt it-help-desk-txt">
                  <button>Renowned Contact Center</button>
                  <h2>
                    Customer
                    <span>Service</span>
                    <br /> Outsourcing Providers
                  </h2>
                  <p>
                    We have designed our IT help desk services in a way so that
                    you can <br /> enable your team or users to resolve their
                    issues.
                  </p>
                </div>
              </div>
              <div className="here-to-offer">
                <h4>
                  We Are Here To Offer You Extensible & Flexible <br /> Support
                  Anytime, Anywhere You Need
                </h4>
              </div>
              <div className="it-help-desk-services-btn">
                <button>IT Help Desk Services</button>
                <p>
                  We are here to offer you the freedom to be the business that
                  you want to be. By providing you with technical support from
                  our <br /> professionals.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="line-design py-5">
          <div className="container">
            <div className="row">
              <div className="line-design-head text-center  pb-5">
                <h3>Our Process</h3>
              </div>
              <div className="col-md-4 line-design-col-sec">
                <div className="  it-help-img">
                  <img
                    src={IssueDetection}
                    className="IssueDetection"
                    alt="IssueDetection"
                  />
                </div>
                <div className="measerable-txt word-txt line-design-txt it-help-txt ">
                  <h5>Issue Detection</h5>
                  <p>
                    The issue gets detected by the user or through real-time
                    monitoring. We logged via email, phone,chat, SMS, sales
                    service, etc.
                  </p>
                </div>
              </div>
              <div className="col-md-4 line-design-col-sec">
                <div className="  it-help-img">
                  <img src={Ticket} className="Ticket" alt="Ticket" />
                </div>
                <div className="measerable-txt word-txt line-design-txt it-help-txt">
                  <h5>Raise Ticket</h5>
                  <p>
                    The service desk professional will whether solve the issue
                    or raise a ticket number
                  </p>
                </div>
              </div>
              <div className="col-md-4 line-design-col-sec">
                <div className="  it-help-img">
                  <img
                    src={Resolution}
                    className="Resolution"
                    alt="Resolution"
                  />
                </div>
                <div className="measerable-txt word-txt line-design-txt it-help-txt ">
                  <h5>Issue Resolution</h5>
                  <p>
                    In this step, either the issue is resolved, or the issue is
                    transferred to an in-house cloud business, or back to the
                    customer's internal technical team, or third party solver
                    team via pre-agreed upsurge routes.
                  </p>
                </div>
              </div>
            </div>
            <div className="row py-3">
              <div className="col-md-4 line-design-col-sec">
                <div className="  it-help-img">
                  <img src={Update} className="Update" alt="Update" />
                </div>
                <div className="measerable-txt word-txt line-design-txt it-help-txt">
                  <h5>Continuous Updates</h5>
                  <p>
                    Our team will supervise and communicate continuous updates.
                    Also, we have live updates via our customer portal.
                  </p>
                </div>
              </div>
              <div className="col-md-4 line-design-col-sec">
                <div className="  it-help-img">
                  <img src={Check} className="Check" alt="Check" />
                </div>
                <div className="measerable-txt word-txt line-design-txt it-help-txt">
                  <h5>Quality Check</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore
                  </p>
                </div>
              </div>
              <div className="col-md-4 line-design-col-sec">
                <div className="  it-help-img">
                  <img src={Review} className="Review" alt="Review" />
                </div>
                <div className="measerable-txt word-txt line-design-txt it-help-txt">
                  <h5>Review</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="why-us-sec py-5">
          <div className="container">
            <div className="row">
              <div className="line-design-head text-center  pb-3">
                <h3>Why Us</h3>
              </div>
              <div className="why-us-para text-center">
                <p>
                  We provide flexible, professional support options for the
                  different service levels. we have a team of multiple service
                  desks who are able to add value to your business as well as
                  users. We offer IT service desk services to all sectors,
                  including private, public sector companies from medium to
                  multinational.
                </p>
                <p>
                  <strong>ACS Technologies</strong> comprehends the unique needs
                  of users/organizations, so we hold customized resolutions to
                  satisfy the customer requirements.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="why-us-second mb-5">
          <div className="container">
            <div className="row">
              <div className="col-md-3 line-design-col-sec">
                <div className="measerable-img line-design-img why-us-second mb-3">
                  <img src={offshore} className="offshore" alt="offshore" />
                </div>
                <div className="measerable-txt word-txt line-design-txt">
                  <h5>
                    Onshore, Near-Shore, <br />& Offshore
                  </h5>
                </div>
              </div>
              <div className="col-md-3 line-design-col-sec">
                <div className="measerable-img line-design-img why-us-second mb-3">
                  <img src={work} className="work" alt="work" />
                </div>
                <div className="measerable-txt word-txt line-design-txt">
                  <h5>Remote Work </h5>
                </div>
              </div>
              <div className="col-md-3 line-design-col-sec ">
                <div className="measerable-img line-design-img why-us-second mb-3">
                  <img src={flow} className="flow" alt="flow" />
                </div>
                <div className="measerable-txt word-txt line-design-txt ">
                  <h5>24*7 Work Flow </h5>
                </div>
              </div>
              <div className="col-md-3 line-design-col-sec">
                <div className="measerable-img line-design-img why-us-second mb-3">
                  <img src={single} className="single" alt="single" />
                </div>
                <div className="measerable-txt word-txt line-design-txt">
                  <h5>
                    Single Or Multi- <br /> Lingual Services{" "}
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default ItHelpDesk;
