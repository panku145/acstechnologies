import React from "react";
import { useState } from "react";
import CareerHero from "../images/career/career-hero.jpg";
import Slider1 from "../images/career/slider1.jpg";
const Career = () => {
  const [show, setShow] = useState(false);

  const clickSubmit = (e) => {
    console.log("working");
  };

  return (
    <>
      <div className="career-hero-sec">
        <div className="container">
          <div className="row pb-5">
            <div className="col-md-6 m-auto">
              <div className="career-inner-sec">
                <div className="career-sec-txt">
                  <h3>Careers</h3>
                  <h2>
                    Help Us <br />
                    Reinvent <br />
                    The Future
                  </h2>
                  <button>Explore all jobs</button>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <img src={CareerHero} alt="CareerHero" className="career-hero" />
            </div>
          </div>
          <div className="row scroll-btn-row">
            <div className="scroll-down-btn">
              <button>
                <i className="fa-solid fa-arrow-down"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="image-slider-sec">
        <div className="container-fluid">
          <div className="img-slider-head text-center pb-5">
            <h2>Don't Think Just Do It !</h2>
            <button className="explore-all">Explore jobs</button>
          </div>
          <img className="d-block w-100" src={Slider1} alt="First slide" />
        </div>
      </div>

      <div className="benefit-sec">
        <div className="container">
          <h3>Benefits in ACS !</h3>
          <div className="row py-5 benefis-rw">
            <div className="col-md-4">
              <div className="inner-benefit-sec">
                <i className="fa-solid fa-face-smile"></i>
                <h4>
                  Fun <br />
                  Team
                </h4>
                <p>
                  Lorem ipsum dolor sit amet <br /> consectetur adipisicing
                  elit. Nihil consectetur adipi.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="inner-benefit-sec">
                <i className="fa-solid fa-handshake"></i>
                <h4>
                  Friendly
                  <br />
                  Environment
                </h4>
                <p>
                  Lorem ipsum dolor sit amet <br /> consectetur adipisicing
                  elit. Nihil consectetur adipi.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="inner-benefit-sec">
                <i className="fa-solid fa-chart-line"></i>
                <h4>
                  Career <br /> Growth
                </h4>
                <p>
                  Lorem ipsum dolor sit amet <br /> consectetur adipisicing
                  elit. Nihil consectetur adipi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="open-position-sec">
        <div className="container">
          <div className="open-position-head text-center">
            <h3>Open Positions</h3>
          </div>
          <div className="position-inner-dropdown">
            <div className="all-position">
              <input
                type="text"
                name="position"
                list="position"
                placeholder="All Positions"
              />
              <datalist id="position">
                <option value="Fullstack Developer" onClick={clickSubmit} />
                <option value="Digital Marketing Executive" />
                <option value="Graphic Designer" />
              </datalist>
            </div>
            <div className="all-team">
              <input
                type="text"
                name="team"
                list="team"
                placeholder="All Teams"
              />
              <datalist id="team">
                <option value="Managment" />
                <option value="Sales" />
                <option value="Development" />
                <option value="Designing" />
                <option value="Marketing" />
              </datalist>
            </div>
          </div>
          {show ? <h2>hello world</h2> : ""}
        </div>
      </div>
    </>
  );
};

export default Career;
