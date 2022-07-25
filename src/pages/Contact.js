import { Link } from "react-router-dom";
import home from "../images/home.svg";
import thnks from "../images/thnks.svg";
import contact1 from "../images/contact1.svg";
import contact2 from "../images/contact2.svg";
import contact3 from "../images/contact3.svg";
import contact4 from "../images/contact4.svg";
import ContactFormModel from "../models/ContactFormModel";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Loader from "../components/Loader";
import emailJs from "emailjs-com";

const Contact = () => {
  function submitForm(e) {
    e.preventDefault();

    emailJs
      .sendForm(
        "service_erp8toi",
        "template_1ua1iwd",
        e.target,
        "user_2SAcb0CZsLc7ZE6gdP16Y"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const schema = yup
    .object()
    .shape({
      name: yup.string().required().min(3).max(20),
      email: yup.string().email().required(),
      phone: yup
        .string()
        .typeError("phone is a required field")
        .required("phone is a required field")
        .matches(phoneRegExp, "Phone number is not valid")
        .min(6, "phone must be at least 6 characters")
        .max(10, "phone must be at most 10 characters"),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [display, setDisplay] = useState({
    display1: "block",
    display5: "none",
  });

  const onSubmit = (e) => {
    setDisplay({ ...display, display1: "none", display5: "block" });
    emailJs
      .sendForm(
        "service_erp8toi",
        "template_1ua1iwd",
        e.target,
        "user_2SAcb0CZsLc7ZE6gdP16Y"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  // const next2 = (e) => {
  //   e.preventDefault();
  //   setDisplay({ ...display, display2: "none", display3: "block" });
  // };

  // const next3 = (e) => {
  //   e.preventDefault();
  //   setDisplay({ ...display, display3: "none", display4: "block" });
  // };

  // const next4 = (e) => {
  //   e.preventDefault();
  //   setDisplay({ ...display, display4: "none", display5: "block" });
  // }

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
      <div className="contact-us-wrap">
        <div className="contact-sec " style={{ display: display.display1 }}>
          <div className="container info-block ">
            <div className="row">
              <div className="col">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className=" contact-info text-start">
                    <h5 className="text-center py-3">Basic Information</h5>
                    {ContactFormModel.inputs.map((input, key) => {
                      return (
                        <div key={key}>
                          <label>
                            {input.label} <span>(Required)</span>
                            <input
                              type={input.type}
                              name={input.name}
                              placeholder={input.placeholder}
                              {...register(input.name, { required: true })}
                            />
                          </label>
                          <p className="error">{errors[input.name]?.message}</p>
                        </div>
                      );
                    })}
                    <label id="massage-label">
                      Message
                      <textarea
                        type="text"
                        name="message"
                        rows="4"
                        cols="50"
                        placeholder="Enter More Details (Budget, Services, etc)"
                      ></textarea>
                    </label>
                    {/* <label className="fieldlabels mt-3" id="massage-label">
                      Upload Files &nbsp;
                      <input
                        type="file"
                        name="pic"
                        accept="image/*"
                        placeholder="Drag & Drop files to upload"
                      />
                    </label> */}
                  </div>
                  <div className="next-button-sec mt-3 text-center">
                    <button type="submit">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="contact-img-sec">
            <img src={contact1} className="contact1" alt="contact1" />
          </div>
        </div>

        {/* <div
          className="contact-sec about-your-project "
          style={{ display: display.display2 }}
        >
          <div className="container info-block ">
            <div className="row">
              <div className="col">
                <div className=" contact-info text-start">
                  <h5 className="text-center py-3">About Your Project</h5>
                  <label id="massage-label">
                    Message <span>(Required)</span>
                    <textarea
                      type="text"
                      name="message"
                      rows="4"
                      cols="50"
                    ></textarea>
                  </label>

                  <label id="radio-sec">
                    Budget <span>(Required)</span>
                    <br />
                    <input type="radio" name="radio" />
                    <span id="project-rate"> Above $50,000</span>
                    <br />
                    <input type="radio" name="radio" />
                    <span id="project-rate"> From $20,000 - $50,000</span>
                    <br />
                    <input type="radio" name="radio" />
                    <span id="project-rate"> From $5,000 - $10,000</span>
                    <br />
                    <input type="radio" name="radio" />
                    <span id="project-rate"> From $1,000 - $2,500</span>
                    <br />
                  </label>
                  <label className="fieldlabels" id="massage-label">
                    Upload Files &nbsp;
                    <span>(Required)</span>
                    <input
                      type="file"
                      name="pic"
                      accept="image/*"
                      placeholder="Drag & Drop files to upload"
                    />
                  </label>
                </div>
                <div className="next-button-sec text-center">
                  <button onClick={next2}>next</button>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-img-sec about-your-project-img">
            <img src={contact2} className="contact2" alt="contact2" />
          </div>
        </div>

        <div
          className="contact-sec Services that-interests-you"
          style={{ display: display.display3 }}
        >
          <div className="container info-block ">
            <div className="row">
              <div className="col">
                <div className=" contact-info services-that-interested text-start">
                  <h5 className="text-center py-3">
                    Services That Interests You{" "}
                    <span id="optional">(Optional)</span>
                  </h5>
                  <ul className="form-check">
                    <li>
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="flexCheckDefault"
                        name="option1"
                        value="something"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                      >
                        Consultancy
                      </label>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="check1"
                        name="option1"
                        value="something"
                      />
                      <label className="form-check-label" htmlFor="check1">
                        Partnership
                      </label>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="check1"
                        name="option1"
                        value="something"
                      />
                      <label className="form-check-label" htmlFor="check1">
                        Web design
                      </label>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="check1"
                        name="option1"
                        value="something"
                      />
                      <label className="form-check-label" htmlFor="check1">
                        Web Development
                      </label>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="check1"
                        name="option1"
                        value="something"
                      />
                      <label className="form-check-label" htmlFor="check1">
                        Mobile App Development
                      </label>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="check1"
                        name="option1"
                        value="something"
                      />
                      <label className="form-check-label" htmlFor="check1">
                        Online Reputation Management
                      </label>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="check1"
                        name="option1"
                        value="something"
                      />
                      <label className="form-check-label" htmlFor="check1">
                        Products Custom Requirements
                      </label>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="check1"
                        name="option1"
                        value="something"
                      />
                      <label className="form-check-label" htmlFor="check1">
                        Ecommerce Solutions
                      </label>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="check1"
                        name="option1"
                        value="something"
                      />
                      <label className="form-check-label" htmlFor="check1">
                        Search Engine Optimization
                      </label>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="check1"
                        name="option1"
                        value="something"
                      />
                      <label className="form-check-label" htmlFor="check1">
                        Social Media Marketing
                      </label>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="check1"
                        name="option1"
                        value="something"
                      />
                      <label className="form-check-label" htmlFor="check1">
                        Content Marketing
                      </label>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="check1"
                        name="option1"
                        value="something"
                      />
                      <label className="form-check-label" htmlFor="check1">
                        Online Marketplace Development
                      </label>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="check1"
                        name="option1"
                        value="something"
                      />
                      <label className="form-check-label" htmlFor="check1">
                        Other
                      </label>
                    </li>
                  </ul>
                </div>
                <div className="next-button-sec text-center">
                  <button onClick={next3}>next</button>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-img-sec about-your-project-img">
            <img src={contact3} className="contact3" alt="contact3" />
          </div>
        </div>

        <div
          className="contact-sec optional-but-recommended"
          style={{ display: display.display4 }}
        >
          <div className="container info-block ">
            <div className="row">
              <div className="col">
                <div className=" contact-info text-start">
                  <h5 className="text-center py-3">Optional But Recommended</h5>
                  <label>
                    Website
                    <input
                      type="text"
                      name="website"
                      placeholder="Eg  www.yourcompany.com"
                    />
                  </label>
                  <label>
                    Target Audience
                    <input
                      type="text"
                      name="Audience"
                      placeholder="Mention Your target Audience"
                    />
                  </label>
                  <label>
                    Deadline
                    <input
                      type="text"
                      name="Deadline"
                      placeholder="Your project deadlines"
                    />
                  </label>
                  <label>
                    Skype ID
                    <input
                      type="text"
                      name="Skype_ID"
                      placeholder="Share Your Skype ID"
                    />
                  </label>
                  <label>
                    Requesting Quote As
                    <input
                      type="text"
                      name="Requesting_Quote"
                      placeholder="Select One"
                    />
                  </label>
                  <div className="terms-condition">
                    <input
                      type="checkbox"
                      id="terms-condition"
                      name="option1"
                      value="something"
                    />
                    <label className="terms-condition-txt" htmlFor="check1">
                      <p>
                        I have read and accepted the
                        <Link to="/">Privacy Statement</Link> and
                        <Link to="/">Terms of Use.</Link>
                      </p>
                    </label>
                  </div>
                </div>
                <div className="next-button-sec text-center">
                  <button onClick={next4}>Submit</button>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-img-sec about-your-project-img">
            <img src={contact4} className="contact4" alt="contact4" />
          </div>
        </div> */}

        <div
          className="contact-sec about-your-project "
          style={{ display: display.display5 }}
        >
          <div className="container info-block ">
            <div className="row">
              <div className="col">
                <div className=" contact-info finish-container text-center">
                  <img src={thnks} className="thnks" alt="thnks" />
                  <h2>Thanks for Contacting Us</h2>
                  <p>One of our representative will respond back.</p>
                </div>
                <div className="next-button-sec home-img text-center">
                  <Link to="/">
                    <img src={home} className="home" alt="home" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Contact;
