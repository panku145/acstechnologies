import React, { useState, useEffect } from "react";
import WhatWeOffer from "../components/WhatWeOffer";
import Slider from "../components/Slider";
import TechnologyStack from "../components/TechnologyStack";
import CaseStudies from "../components/CaseStudies";
import BusinessProcess from "../components/BusinessProcess";
import ClientSatishfaction from "../components/ClientSatishfaction";
import { Helmet } from "react-helmet";
import Loader from "../components/Loader";
import ImgGellery from "../components/ImgGellery";
import Testimonial from "../components/Testimonial";

function Home() {
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
          <title>Website Development In India | Web Design Services</title>
          <meta
            name="description"
            content="We provide best website development services in India. Contact us for website design, and digital marketing services solutions."
          />
          <meta
            name="keywords"
            content="Website Development Company in India, Website Designing Service in India, Digital Marketing Services in India  "
          />
        </Helmet>
        <Slider />
        <WhatWeOffer />
        <TechnologyStack />
        <BusinessProcess />
        <ImgGellery />
        <CaseStudies />
        <ClientSatishfaction />
        <Testimonial />
      </>
    );
  }
}

export default Home;
