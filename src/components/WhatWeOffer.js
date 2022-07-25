import React from "react";
import webDev from "../images/webDev.jpg";
import webDes from "../images/webDes.jpg";
import graDes from "../images/graDes.jpg";
import digMar from "../images/digMar.jpg";

const WhatWeOffer = () => {
  return (
    <>
      <div className="container WhatWeOffer pb-5">
        <div className="row">
          <div className="sectionHeading py-4 text-center">
            <h2 className="techno-heading">What We Offer</h2>
            <div className="techno-underline"></div>
          </div>
        </div>
        <div className="row gx-5 justify-content-center py-4">
          <div className=" col-lg-3 col-md-6 col-sm-12 py-md-3  py-lg-0">
            <div className="card py-5 px-2 home-card" data-aos="zoom-out-up">
              <div className="row cardrow">
                <div className="col-md-5 m-auto">
                  <img
                    src={webDev}
                    className="card-img-top"
                    alt="card-img-top"
                  />
                </div>
                <div className="col-md-7 d-flex align-items-end">
                  <h5>
                    Website <br /> Development{" "}
                  </h5>
                </div>
              </div>
              <div className="card-body">
                <p className="card-text">
                  Interested in creating a new website or redesigning an
                  existing one? Our website development solutions are brewed
                  with React, PHP, and WordPress. Bring your idea into the
                  Internet world with our website development service.
                </p>
              </div>
            </div>
          </div>
          <div className=" col-lg-3 col-md-6 col-sm-12 py-md-3  py-lg-0">
            <div className="card py-5 px-2 home-card" data-aos="zoom-out-up">
              <div className="row cardrow">
                <div className="col-md-5 m-auto">
                  <img
                    src={webDes}
                    className="card-img-top"
                    alt="card-img-top"
                  />
                </div>
                <div className="col-md-7 d-flex align-items-end">
                  <h5>
                    Website <br /> Designing
                  </h5>
                </div>
              </div>
              <div className="card-body">
                <p className="card-text">
                  ACS networks & technologies deliver website design services,
                  globally! We are proficient at designing responsive,
                  fast-loading, and user-friendly websites that offer a
                  consistent look and use across different web browsers.
                </p>
              </div>
            </div>
          </div>
          <div className=" col-lg-3 col-md-6 col-sm-12 py-md-3  py-lg-0">
            <div className="card py-5 px-2 home-card" data-aos="zoom-out-up">
              <div className="row cardrow">
                <div className="col-md-5 m-auto">
                  <img
                    src={digMar}
                    className="card-img-top"
                    alt="card-img-top"
                  />
                </div>
                <div className="col-md-7 d-flex align-items-end">
                  <h5>
                    Graphic <br /> Designing
                  </h5>
                </div>
              </div>
              <div className="card-body">
                <p className="card-text">
                  Our graphic designer creates the design that makes a brand.
                  With an experience of professionalism and stunning creativity
                  skills, our designers can make a great presence for your
                  business in the digital world.
                </p>
              </div>
            </div>
          </div>
          <div className=" col-lg-3 col-md-6 col-sm-12 py-md-3  py-lg-0">
            <div className="card py-5 px-2 home-card" data-aos="zoom-out-up">
              <div className="row cardrow">
                <div className="col-md-5 m-auto">
                  <img
                    src={graDes}
                    className="card-img-top"
                    alt="card-img-top"
                  />
                </div>
                <div className="col-md-7 d-flex align-items-end">
                  <h5>
                    Digital <br /> Marketing
                  </h5>
                </div>
              </div>
              <div className="card-body">
                <p className="card-text">
                  Our digital marketing service brings visibility, automation,
                  and intelligence to your business. We make the best SEO, SMO
                  strategies for your business success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatWeOffer;
