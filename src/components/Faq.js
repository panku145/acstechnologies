import React from "react";
import { Accordion } from "react-bootstrap";

const Faq = () => {
  return (
    <div>
      <div className="faq-sec mb-5">
        <div className="container">
          <div className="row text-center py-4">
            <h2 className="sec-3-heading">FAQ</h2>
          </div>

          <div className="faq-accordion-sec">
            <div className="row justify-content-center pb-5">
              <div className="col-md-10">
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header className="faq-heading">
                      How much time does a Website development take?
                    </Accordion.Header>
                    <Accordion.Body>
                      Generally, we aim for a six to eight-week turnaround time
                      for website development from scratch. The outcome will be
                      based on the input provided by the clients. It all depends
                      on the functionality of the website, a more complex site
                      will take more time for development.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header className="faq-heading">
                      Will my website design be mobile-friendly?
                    </Accordion.Header>
                    <Accordion.Body>
                      Definitely! Owning a mobile-friendly website is more
                      important than ever! We work hard to assure your website
                      looks great on a variety of devices.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header className="faq-heading">
                      What are the digital marketing services you provide?
                    </Accordion.Header>
                    <Accordion.Body>
                      Our digital marketing services are SEO(Search Engine
                      Optimization), SMO(Social Media Optimization ), SMM
                      (Social Media Marketing), Email Marketing, Linkedin
                      Marketing, Google Ads, Facebook & Instagram Ads.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header className="faq-heading">
                      How does your graphic design process work?
                    </Accordion.Header>
                    <Accordion.Body>
                      After a detailed brief, and initial design concepts, you
                      will be able to pick one that you want to go ahead with
                      and adjust it to your final needs. The completed project
                      will be sent to you via email or external file sharing
                      service.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="4">
                    <Accordion.Header className="faq-heading">
                      When will I Pay ?
                    </Accordion.Header>
                    <Accordion.Body>
                      For all short term projects and designs we always need
                      upfront payment. For more advanced projects and complex
                      artworks 50% deposit is required before any design work
                      will commence. The final payment should be made when your
                      files are ready to be sent to you.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
