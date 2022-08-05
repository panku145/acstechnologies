import React from "react";

import slider1 from "../images/email-marketing/slider.jpg";
import Second from "../images/email-marketing/second.jpg";
import Third from "../images/email-marketing/third.jpg";
import Fourth from "../images/email-marketing/fourth.jpg";
import Fifth from "../images/email-marketing/fifth.jpg";
import EmailBg from "../images/email-marketing/emailBg.png";
import EmailBanner from "../images/email-marketing/emailBanner.png";
import letUsBg from "../images/email-marketing/letusBg.png";
import listImg1 from "../images/email-marketing/list-img1.png";
import listImg2 from "../images/email-marketing/list-img2.png";
import listImg3 from "../images/email-marketing/list-img3.png";
import listImg4 from "../images/email-marketing/list-img4.png";
import listImg5 from "../images/email-marketing/list-img5.png";
import listImg6 from "../images/email-marketing/list-img6.png";
import listImg7 from "../images/email-marketing/list-img7.png";
import analyze from "../images/email-marketing/analyze-img.png";
import startegy from "../images/email-marketing/startegy.png";
import emBg from "../images/email-marketing/emBg.png";
import TD from "../images/email-marketing/td.png";
import LM from "../images/email-marketing/lm.png";
import CP from "../images/email-marketing/cp.png";
import RM from "../images/email-marketing/rm.png";
import DEP from "../images/email-marketing/dep.png";
import why from "../images/email-marketing/why.png";

const EmailMarketing = () => {
  return (
    <div>
      <div className="email-marketing-sec">
        <div
          className="asap-first-sec"
          style={{ backgroundImage: `url(${EmailBg})` }}
        >
          <div className="container">
            <div className="row py-3">
              <div className="col-md-6 col-lg-6 col-xl-6 m-auto">
                <div className="sap-hire-content-container">
                  <p className="em-pera">Did you know ?</p>
                  <p className="em-heading">
                    APPROXIMATELY
                    <span style={{ color: "rgb(255, 182, 35)" }}>
                      3.9 billion people
                    </span>
                    USE EMAIL FOR COMMUNICATION NO OTHER PLATFORM COMES CLOSE TO
                    IT
                  </p>
                  <p className="em-pera-2">
                    Using our goal-driven email marketing strategies, we can set
                    up an email campaign that fits your company's objectives
                    perfectly.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-xl-6 text-center">
                <div className="sap-hire-img-sec">
                  <img src={EmailBanner} alt="" className="em-slide-img" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="email-let-us-section"
          style={{ backgroundImage: `url(${letUsBg})` }}
        >
          <div className="container py-5">
            <div className="row">
              <div className="col-md-4">
                <div className="row my-5">
                  <div className="col-md-2 m-auto">
                    <img className="list-img" src={listImg1} alt="" />
                  </div>
                  <div className="col-md-10 m-auto list-text">
                    Billion daily email users
                  </div>
                </div>
                <div className="row my-5">
                  <div className="col-md-2 m-auto">
                    <img className="list-img" src={listImg2} alt="" />
                  </div>
                  <div className="col-md-10 m-auto list-text">
                    of marketers report that email engagement has increased in
                    the last year
                  </div>
                </div>
                <div className="row my-5">
                  <div className="col-md-2 m-auto">
                    <img className="list-img" src={listImg3} alt="" />
                  </div>
                  <div className="col-md-10 m-auto list-text">
                    of millennials prefer communications from businesses to come
                    via email
                  </div>
                </div>
                <div className="row my-5">
                  <div className="col-md-2 m-auto">
                    <img className="list-img" src={listImg4} alt="" />
                  </div>
                  <div className="col-md-10 m-auto list-text">
                    of business professionals believe that email marketing
                    increases customer retention
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center m-auto">
                <img src={analyze} alt="" className="list-center-img" />
              </div>
              <div className="col-md-4">
                <div className="row my-5">
                  <div className="col-md-2 m-auto">
                    <img className="list-img" src={listImg5} alt="" />
                  </div>
                  <div className="col-md-10 m-auto list-text">
                    of small businesses reach customers via email
                  </div>
                </div>
                <div className="row my-5">
                  <div className="col-md-2 m-auto">
                    <img className="list-img" src={listImg6} alt="" />
                  </div>
                  <div className="col-md-10 m-auto list-text">
                    of B2B marketers say email newsletters are the best way to
                    nurture prospects
                  </div>
                </div>
                <div className="row my-5">
                  <div className="col-md-2 m-auto">
                    <img className="list-img" src={listImg7} alt="" />
                  </div>
                  <div className="col-md-10 m-auto list-text">
                    of marketers rate email as the number one digital channel
                    for ROI
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="strategy-sec">
          <div className="conatiner my-5">
            <div className="row text-center py-3">
              <h2 className="sec-3-heading">Our Email Marketing Strategy</h2>
            </div>
            <div className="row py-5">
              <img src={startegy} alt="" className="ProcessImg m-auto" />
            </div>
          </div>
        </div>

        <div className="em-sec" style={{ backgroundImage: `url(${emBg})` }}>
          <div className="container py-5">
            <div className="row py-5 d-flex justify-content-around">
              <div className="col-md-3">
                <div className="row col1row1">
                  <h2 style={{ color: "white" }}>
                    OUR EMAIL MARKETING
                    <br />
                    <span style={{ color: "rgb(255, 182, 35)" }}>SERVICES</span>
                  </h2>
                </div>
                <div className="row">
                  <div className="py-3 col1row2">
                    <img src={TD} alt="" className="TemplateDesign" />
                    <p className="em-sec4-heding">
                      Template designing according to requirements
                    </p>
                    <p className="em-sec4-pera">
                      We will create a professional informative email template
                      design according to the latest trend of the B2B market
                      which will help to add more subscribers to your business.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-7 ">
                <div className="row d-flex align-items-end">
                  <div className="col-md-6">
                    <div
                      className="py-3 col1row2"
                      style={{ marginBottom: "50px" }}
                    >
                      <img src={LM} alt="" className="TemplateDesign" />
                      <p className="em-sec4-heding">List Management</p>
                      <p className="em-sec4-pera">
                        Handling the email list of subscribers and growing it
                        with promising and loyal customers, to ensure good
                        engagement
                      </p>
                    </div>
                    <div
                      className="py-3 col1row2"
                      style={{ marginBottom: "50px" }}
                    >
                      <img src={CP} alt="" className="TemplateDesign" />
                      <p className="em-sec4-heding">
                        Content that reaches the minds of people
                      </p>
                      <p className="em-sec4-pera">
                        Our experienced content marketing team will write the
                        best email marketing campaign content for you.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div
                      className="py-3 col1row2"
                      style={{ marginBottom: "50px" }}
                    >
                      <img src={RM} alt="" className="TemplateDesign" />
                      <p className="em-sec4-heding">
                        Regular Monitoring of the result
                      </p>
                      <p className="em-sec4-pera">
                        Continuous monitoring of responses to estimate the
                        effectiveness of your campaign, and making satisfactory
                        changes in the campaign, whenever required.
                      </p>
                    </div>
                    <div
                      className="py-3 col1row2"
                      style={{ marginBottom: "50px" }}
                    >
                      <img src={DEP} alt="" className="TemplateDesign" />
                      <p className="em-sec4-heding">Deployment</p>
                      <p className="em-sec4-pera">
                        Execution & deployment of the email marketing strategy
                        to reach the target audience more effectively to get
                        engagements.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="why-choose-email my-5">
          <div className="container">
            <div className="row text-center py-3">
              <h2 className="sec-3-heading">Why Choose Us</h2>
            </div>
            <div className="why-img-container">
              <img src={why} alt="" className="em-why-img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailMarketing;
