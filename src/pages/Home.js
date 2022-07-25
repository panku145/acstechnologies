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
          <title>
            Website Development & Desiging services: ACS Networks & Technologies
          </title>
          <meta
            name="description"
            content="India-based custom Web Development & website designing company. Delivering result-oriented strategies and campaigns for small and large enterprises. "
          />
          <meta
            name="keywords"
            content="top website development company dehradun India , best ecommerce website development/ designing company dehradun India, B2B advertising dehradun India , top B2B marketing companies dehradun India "
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
