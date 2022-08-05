import React, { useEffect, useState } from "react";
import wordpressLogo from "../images/wordpress/wordpress-logo.svg";
import wordCompo from "../images/wordpress/word-compo.png";
import easySimple from "../images/wordpress/easy-simple.svg";
import theme from "../images/wordpress/theme.svg";
import plugin from "../images/wordpress/plugin.svg";
import wordLap from "../images/wordpress/word-lap.jpg";
import Loader from "../components/Loader";
import { Helmet } from "react-helmet";

const WordpressPage = () => {
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
          <title>
            Wordpress services in India | Wordpress development company{" "}
          </title>
          <meta
            name="description"
            content="ACS offers a full range of WordPress services including custom WordPress theme development, plugin customizations, and SEO-friendly websites. "
          />
          <meta
            name="keywords"
            content="wordpress development company, wordpress website designer, WordPress development services, WordPress E-commerce Development"
          />
        </Helmet>
        <div className="reactjs-hero-sec">
          <div className="container">
            <div className="row">
              <div className="col-md-5 react-img-col">
                <div className="react-js-img">
                  <img
                    src={wordpressLogo}
                    className="wordpressLogo"
                    alt="wordpressLogo"
                  />
                </div>
              </div>
              <div className="col-md-7 m-auto">
                <div className="hero-sec-txt react-js-txt">
                  <div className="button-req design-hero-btn web-design-btn react-js-button">
                    <button>Web Development</button>
                  </div>
                  <h2>
                    Hire &nbsp;<span>WordPress</span>
                    <br />
                    Development Experts
                  </h2>

                  <p>
                    Ready to work on fresh development projects or to take a
                    gig.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="react-js-three-component">
          <div className="container">
            <div className="row  react-js-rw">
              <div
                className="col-lg-3 col-md-4 col-sm-12 react-js-col"
                id="wordpress-col"
              >
                <div className="react-js-inner-sec">
                  <div className="measerable-img pb-4 react-js-img-sec ">
                    <img
                      src={easySimple}
                      className="easySimple"
                      alt="easySimple"
                    />
                  </div>
                  <div className="measerable-txt word-txt reactjs-txt">
                    <h4>Entirely Customizable</h4>
                    <p>
                      It's possible to build almost any type of site you'd like,
                      and it can be tailored to fit the needs.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-4 col-sm-12 react-js-col"
                id="wordpress-col"
              >
                <div className="react-js-inner-sec">
                  <div className="measerable-img pb-4 react-js-img-sec">
                    <img src={theme} className="theme" alt="theme" />
                  </div>
                  <div className="measerable-txt word-txt reactjs-txt">
                    <h4>
                      Theme <br />
                      Development
                    </h4>
                    <p>
                      We can take your design and transform it into a dynamic
                      website with our exceptional team of professionals
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-4 col-sm-12 react-js-col"
                id="wordpress-col"
              >
                <div className="react-js-inner-sec">
                  <div className="measerable-img pb-4 react-js-img-sec">
                    <img src={plugin} className="plugin" alt="plugin" />
                  </div>
                  <div className="measerable-txt word-txt reactjs-txt">
                    <h4>
                      Easy <br /> to Maintain
                    </h4>
                    <p>
                      Websites created with WordPress require less maintenance,
                      which means you have more time to focus on growing your
                      site.
                      {/* instead of worrying that it's running properly. */}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hire-designers pb-5 why-react-js">
          <div className="container">
            <div className="row gx-5">
              <div className="col-md-5 designer-col py-4">
                <div className="hire-designer-bg react-why-us-img">
                  <img src={wordLap} className="wordLap" alt="wordLap" />
                </div>
              </div>
              <div className="col-md-6 react-why-us-col">
                <div className="line-design-head pb-3 hire-designers-head react-js-head">
                  <h2>Why WordPress ?</h2>
                  <div className="dev-hr-line react-underline"></div>
                  <p>
                    With WordPress accounting for roughly one-third of websites
                    across the globe, you can rest assured that your site will
                    be in good hands if you use it as well. Many people use
                    WordPress around the globe, which is why there are countless
                    guides, tutorials, and resources available online.
                  </p>
                  <p>
                    Above all it is easy to maintain from both users as well as
                    Developer's Perspective.
                  </p>
                  <div className="button-req design-hero-btn web-design-btn react-js-button react-hire-us">
                    <button>Hire Us Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="nodejs-dev py-5 text-center">
          <div className="container">
            <div className="row py-5">
              <div className="nodejs-img">
                <img src={wordCompo} className="wordCompo" alt="wordCompo" />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default WordpressPage;
