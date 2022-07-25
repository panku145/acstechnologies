import React, { useEffect, useState } from "react";
import Loader from "../components/Loader";
import blogbg from "../images/blog/blog-bg.jpg";
import webDesign from "../images/blog/web-design.jpg";
import idea from "../images/blog/idea.jpg";

const Blog = () => {
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
        <div className="empty-blank-div"></div>
        <div
          className="blog-banner-sec"
          style={{ backgroundImage: `url(${blogbg})` }}
        >
          <div className="blog-inner-sec">
            <h2>Blogs</h2>
          </div>
        </div>

        <div className="search-bar-sec py-5">
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <div className="col-xl-6 col-lg-6 col-md-6 d-flex justify-content-center align-items-center">
                <div className="search-inner-sec w-75 d-flex">
                  <input type="text" placeholder="Search Blogs..." />{" "}
                  <button>Search</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="latest-blog-sec py-5">
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <div className="col-xl-6 col-lg-6 col-md-6 ">
                <img
                  src={webDesign}
                  className="web-design w-100"
                  alt="webDesign"
                />
                <div className="post-content-sec px-3 py-2">
                  <div className="date-sec d-flex align-items-center pb-2">
                    <p>January 31, 2022</p>
                    <span>Featured</span>
                  </div>
                  <h4>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod...
                  </p>
                  <div className="read-more-sec date-sec d-flex align-items-center justify-content-between">
                    <div className="read-more-txt">
                      <p>Read More</p>
                    </div>
                    <div className="share-like-sec">
                      <i className="fas fa-share-alt pe-3"></i>
                      <i className="far fa-heart"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="muiltiple-blog-sec py-3 mb-3">
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="muiltiple-blog-inner-sec">
                  <img
                    src={webDesign}
                    className="web-design w-100"
                    alt="webDesign"
                  />
                  <div className="post-content-sec px-3 py-2">
                    <div className="date-sec d-flex align-items-center pb-2">
                      <p>January 31, 2022</p>
                    </div>
                    <h4>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod...
                    </p>
                    <div className="read-more-sec date-sec d-flex align-items-center justify-content-between">
                      <div className="read-more-txt">
                        <p>Read More</p>
                      </div>
                      <div className="share-like-sec">
                        <i className="fas fa-share-alt pe-3"></i>
                        <i className="far fa-heart"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="muiltiple-blog-inner-sec">
                  <img
                    src={idea}
                    className="web-design w-100"
                    alt="webDesign"
                  />
                  <div className="post-content-sec px-3 py-2">
                    <div className="date-sec d-flex align-items-center pb-2">
                      <p>January 31, 2022</p>
                    </div>
                    <h4>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod...
                    </p>
                    <div className="read-more-sec date-sec d-flex align-items-center justify-content-between">
                      <div className="read-more-txt">
                        <p>Read More</p>
                      </div>
                      <div className="share-like-sec">
                        <i className="fas fa-share-alt pe-3"></i>
                        <i className="far fa-heart"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="muiltiple-blog-inner-sec">
                  <img
                    src={webDesign}
                    className="web-design w-100"
                    alt="webDesign"
                  />
                  <div className="post-content-sec px-3 py-2">
                    <div className="date-sec d-flex align-items-center pb-2">
                      <p>January 31, 2022</p>
                    </div>
                    <h4>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod...
                    </p>
                    <div className="read-more-sec date-sec d-flex align-items-center justify-content-between">
                      <div className="read-more-txt">
                        <p>Read More</p>
                      </div>
                      <div className="share-like-sec">
                        <i className="fas fa-share-alt pe-3"></i>
                        <i className="far fa-heart"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="muiltiple-blog-inner-sec">
                  <img
                    src={webDesign}
                    className="web-design w-100"
                    alt="webDesign"
                  />
                  <div className="post-content-sec px-3 py-2">
                    <div className="date-sec d-flex align-items-center pb-2">
                      <p>January 31, 2022</p>
                    </div>
                    <h4>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod...
                    </p>
                    <div className="read-more-sec date-sec d-flex align-items-center justify-content-between">
                      <div className="read-more-txt">
                        <p>Read More</p>
                      </div>
                      <div className="share-like-sec">
                        <i className="fas fa-share-alt pe-3"></i>
                        <i className="far fa-heart"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="muiltiple-blog-inner-sec">
                  <img
                    src={idea}
                    className="web-design w-100"
                    alt="webDesign"
                  />
                  <div className="post-content-sec px-3 py-2">
                    <div className="date-sec d-flex align-items-center pb-2">
                      <p>January 31, 2022</p>
                    </div>
                    <h4>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod...
                    </p>
                    <div className="read-more-sec date-sec d-flex align-items-center justify-content-between">
                      <div className="read-more-txt">
                        <p>Read More</p>
                      </div>
                      <div className="share-like-sec">
                        <i className="fas fa-share-alt pe-3"></i>
                        <i className="far fa-heart"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="muiltiple-blog-inner-sec">
                  <img
                    src={webDesign}
                    className="web-design w-100"
                    alt="webDesign"
                  />
                  <div className="post-content-sec px-3 py-2">
                    <div className="date-sec d-flex align-items-center pb-2">
                      <p>January 31, 2022</p>
                    </div>
                    <h4>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod...
                    </p>
                    <div className="read-more-sec date-sec d-flex align-items-center justify-content-between">
                      <div className="read-more-txt">
                        <p>Read More</p>
                      </div>
                      <div className="share-like-sec">
                        <i className="fas fa-share-alt pe-3"></i>
                        <i className="far fa-heart"></i>
                      </div>
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
};

export default Blog;
