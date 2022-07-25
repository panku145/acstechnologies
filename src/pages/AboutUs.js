import React, { useEffect, useState } from "react";
import ourStory from "../images/our-story.png";
import vision from "../images/vision.svg";
import Design from "../images/Design.svg";
import Develop from "../images/Develop.svg";
import DM from "../images/DM.svg";
import Loader from "../components/Loader";

function AboutUs() {
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
        <div className="vision-sec">
          <div className="container">
            <div className="row pt-5 vision-rw py-3">
              <div className="col-md-7 m-auto vision-txt-col">
                <div className="vision-txt-sec">
                  <h2>Insight</h2>
                  <p>
                    ACS Networks & Technologies sees itself as a top leader in
                    the industry in terms of delivering IT solutions of every
                    kind to its clients. We aim to be the one-stop shop for all
                    digital services.
                  </p>
                </div>
              </div>
              <div className="col-md-5 py-3">
                <div className="vision-img-sec">
                  <img src={vision} className="vision" alt="vision" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="amazing-product py-5">
          <div className="container">
            <div className="row amazing-product-rw">
              <div className="col-md-6 decate-head m-auto">
                <h5>
                  More Than A Decade <br /> Of Rendering Amazing Products
                </h5>
              </div>
              <div className="col-md-3 px-4 py-3">
                <div className="project-sec">
                  <p>10+</p>
                  <span>Successfull Projects</span>
                </div>
              </div>
              <div className="col-md-3 px-4 py-3">
                <div className="client-sec">
                  <p>8+</p>
                  <span>Satisfied Client</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="our-story-sec py-5">
          <div className="container">
            <div className="row our-story-outer-row">
              <div className="our-story-content">
                <div className="row">
                  <div className="col-md-7">
                    <div className="our-story-txt">
                      <h2>
                        Our <span>Story</span>
                      </h2>
                      <p>
                        ACS Networks & Technologies has several strings to its
                        bow.With our exuberant team of professional designers
                        and developers, we strive to go an extra mile for our
                        clients to ensure they succeed in their endeavors.
                      </p>
                      <br />
                      <strong>Here's a sneak peak at our services:</strong>
                      <div className="row story-services py-3 pe-3">
                        <div className="col-md-4">
                          <div className="row">
                            <div className="col col-md-6 col-sm-6 story-dev">
                              <img
                                src={Design}
                                className="Design"
                                alt="Design"
                              />
                            </div>
                            <div className="col col-md-6 col-sm-6 m-auto">
                              <p>Web Designing </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="row">
                            <div className="col col-md-6 col-sm-6 story-dev">
                              <img
                                src={Develop}
                                className="Develop"
                                alt="Develop"
                              />
                            </div>
                            <div className="col col-md-6 col-sm-6 m-auto">
                              <p>Web Development</p>
                            </div>
                          </div>
                        </div>
                        {/* <div className="col-md-4">
                          <div className="row">
                            <div className="col col-md-6 col-sm-6 story-dev">
                              <img src={DM} className="DM" alt="DM" />
                            </div>
                            <div className="col col-md-6 col-sm-6 m-auto">
                              <p>Digital Marketing</p>
                            </div>
                          </div>
                        </div> */}
                      </div>
                      <p>
                        We develop intelligent web solutions using React,
                        Angular/Node, and WordPress. We also provide dedicated
                        end to end web design and development support to budding
                        businesses as well as established players.
                      </p>
                      <p>
                        To foster business in achieving more through social
                        media our digital marketing team offers strategies
                        tailored to specific business niches.
                      </p>
                      <p>
                        Entrepreneurs, startups, agencies, organizations,
                        non-profits, small to medium-sized businesses have all
                        sought our assistance in maintaining an active online
                        presence.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-5 m-auto">
                    <div className="our-story-img">
                      <img src={ourStory} className="ourStory" alt="ourStory" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default AboutUs;
