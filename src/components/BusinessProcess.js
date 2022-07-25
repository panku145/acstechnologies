import React from "react";
import experience from "../images/experience.png";
import hours from "../images/hours.png";
import expert2 from "../images/expert23.png";
import project from "../images/project.png";
import bussiness from "../images/bussiness.jpg";
import { useState } from "react";
import { useEffect } from "react";

const BusinessProcess = () => {
  const [YE, setYE] = useState(0);
  const [HOE, setHOE] = useState(0);
  const [QPD, setQPD] = useState(0);
  const [EX, setEX] = useState(40);

  useEffect(() => {
    setTimeout(() => {
      if (YE <= 1) {
        setYE((prev) => prev + 1);
      }
    }, 100);
    setTimeout(() => {
      if (HOE <= 11) {
        setHOE((prev) => prev + 1);
      }
    }, 100);
    setTimeout(() => {
      if (QPD <= 9) {
        setQPD((prev) => prev + 1);
      }
    }, 100);
    setTimeout(() => {
      if (EX <= 49) {
        setEX((prev) => prev + 1);
      }
    }, 100);
  }, [EX]);

  return (
    <div className="bussiness-pro-sec py-5 BusinessProcess">
      <div className="container">
        <div className="sectionHeading py-4 text-center">
          <h2 className="techno-heading">Business Process</h2>
          <div className="techno-underline"></div>
        </div>
        <div className="row py-5 ">
          <div className="col-lg-6 col-md-6 ps-5">
            <div className="row bussiness-first-row">
              <div className="col-md-6 min-width-col lg-me-4">
                <div className="col  ps-3 year-exp" data-aos="zoom-in">
                  <div className="first-inner-col ps-3 py-4">
                    <div className="col-md-10">
                      <img
                        src={experience}
                        className="experience"
                        alt="experience"
                      />
                    </div>
                    <div className="col-md-10">
                      <h1 className="count">{YE}+</h1>
                    </div>
                    <div className="col-md-10">
                      <h5>
                        Years <br />
                        Experience
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 min-width-col lg-me-4 align-self-end">
                <div className="col ps-3 year-exp" data-aos="zoom-in">
                  <div className="first-inner-col ps-3 py-4">
                    <div className="col-md-10">
                      <img src={project} className="project" alt="project" />
                    </div>
                    <div className="col-md-10">
                      <h1 className="count">{QPD}+</h1>
                    </div>
                    <div className="col-md-10">
                      <h5>
                        Quality Project
                        <br /> Delivered
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row bussiness-second-row">
              <div className="col-md-6 min-width-col lg-me-4">
                <div className="col ps-3 year-exp" data-aos="zoom-in">
                  <div className="first-inner-col ps-3 py-4">
                    <div className="col-md-10">
                      <img src={hours} className="hours" alt="hours" />
                    </div>
                    <div className="col-md-10">
                      <h1 className="count">{HOE}K+</h1>
                    </div>
                    <div className="col-md-10">
                      <h5>
                        Hours
                        <br /> of Experience
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 min-width-col lg-me-4 align-self-end">
                <div className="col ps-3 year-exp" data-aos="zoom-in">
                  <div className="first-inner-col ps-3 py-4">
                    <div className="col-md-10">
                      <img src={expert2} className="expert2" alt="expert2" />
                    </div>
                    <div className="col-md-10">
                      <h1 className="count">{EX}+</h1>
                    </div>
                    <div className="col-md-10">
                      <h5>
                        Experts <br />
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-6 col-md-6 text-center m-auto py-4"
            data-aos="zoom-in"
          >
            <div className="bussiness-process-img">
              <img src={bussiness} className="bussiness" alt="bussiness" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessProcess;
