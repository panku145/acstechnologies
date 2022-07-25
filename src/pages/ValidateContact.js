import React from "react";
import { useState } from "react";
import contact1 from "../images/contact1.svg";

const ValidateContact = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [userErr, setUserErr] = useState(false);
  const [passErr, setPassErr] = useState(false);

  function sendForm(e) {
    e.preventDefault();
  }

  function userHandler(e) {
    let item = e.target.value;
    if (item.length < 3) {
      setUserErr(true);
    } else {
      setUserErr(false);
    }
    setUser(item);
  }

  function passwordHandler(e) {
    let item = e.target.value;
    if (item.length < 6) {
      setPassErr(true);
    } else {
      setPassErr(false);
    }
    setUser(item);
  }

  return (
    <div>
      <form className="pb-5 mb-5" onSubmit={sendForm}>
        <div className="contact-sec ">
          <div className="container info-block ">
            <div className="row">
              <div className="col">
                <div className=" contact-info text-start">
                  <h5 className="text-center py-3">Basic Information</h5>
                  <label htmlFor="">
                    Name <span>(Required)</span>
                    <input
                      type="text"
                      name="name"
                      placeholder="John Smith"
                      onChange={userHandler}
                    />
                    {userErr ? <span>Invalid User Name</span> : ""}
                  </label>
                  <label htmlFor="">
                    Email <span>(Required)</span>
                    <input
                      type="text"
                      name="user_email"
                      placeholder="john.smith@company.com"
                      onChange={passwordHandler}
                    />
                    {passErr ? (
                      <span>Password Should be Minimuim 6 characters</span>
                    ) : (
                      ""
                    )}
                  </label>
                  <label htmlFor="">
                    Phone <span>(Required)</span>
                    <input
                      type="number"
                      name="mobile_number"
                      placeholder="+91 9876 5432 10"
                    />
                  </label>
                </div>
                <div className="next-button-sec text-center">
                  <button type="submit">next</button>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-img-sec">
            <img src={contact1} classNameName="contact1" alt="contact1" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ValidateContact;
