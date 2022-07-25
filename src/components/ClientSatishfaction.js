import React from "react";
import satishfaction from "../images/satishfaction.png";

const ClientSatishfaction = () => {
  return (
    <div
      className="client-sec client-satishfaction-sec py-5 mt-5 mb-4"
      data-aos="zoom-in-up"
    >
      <div className="container">
        <div className="row">
          <div className="col-md-6 ps-5 py-3 satishfaction">
            <h3>
              Client <span>Satisfaction</span>
            </h3>
            <h4 className="my-3">The essence of our glorious journey!</h4>
          </div>
          <div className="col-md-6 py-3 satishfaction-img text-center">
            <img
              src={satishfaction}
              className="satishfaction"
              alt="satishfaction"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientSatishfaction;
