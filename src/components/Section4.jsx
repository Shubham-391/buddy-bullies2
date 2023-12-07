import React from "react";
import Accordion from "react-bootstrap/Accordion";

function Section4() {
  return (
    <>
      {/* section4 */}
      <section id="faq" className="mt-md-5 pt-5 mb-md-4 s4con mx-auto position-relative">
        <h3 className="white poppins xl f-style-normal fw-semibold l-h-136 text-center">
          FAQs
        </h3>

        <Accordion defaultActiveKey="0" className="d-flex flex-column gap-4">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              What's the blockchain the buddybullies call home ?
            </Accordion.Header>
            <Accordion.Body className="white montserrat vs fst-normal fw-medium l-h-normal opacity-70">
              Hac varius turpis sit pulvinar lorem magna velit sit. Dapibus
              mattis adipiscing ornare arcu vitae enim. Proin turpis enim
              egestas sed in accumsan, feugiat neque turpis. Fringilla dui donec
              nullam faucibus vitae non, integer. Non.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              What's the blockchain the buddybullies call home ?
            </Accordion.Header>
            <Accordion.Body className="white montserrat vs fst-normal fw-medium l-h-normal opacity-70">
              Hac varius turpis sit pulvinar lorem magna velit sit. Dapibus
              mattis adipiscing ornare arcu vitae enim. Proin turpis enim
              egestas sed in accumsan, feugiat neque turpis. Fringilla dui donec
              nullam faucibus vitae non, integer. Non.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              What's the blockchain the buddybullies call home ?
            </Accordion.Header>
            <Accordion.Body className="white montserrat vs fst-normal fw-medium l-h-normal opacity-70">
              Hac varius turpis sit pulvinar lorem magna velit sit. Dapibus
              mattis adipiscing ornare arcu vitae enim. Proin turpis enim
              egestas sed in accumsan, feugiat neque turpis. Fringilla dui donec
              nullam faucibus vitae non, integer. Non.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              What's the blockchain the buddybullies call home ?
            </Accordion.Header>
            <Accordion.Body className="white montserrat vs fst-normal fw-medium l-h-normal opacity-70">
              Hac varius turpis sit pulvinar lorem magna velit sit. Dapibus
              mattis adipiscing ornare arcu vitae enim. Proin turpis enim
              egestas sed in accumsan, feugiat neque turpis. Fringilla dui donec
              nullam faucibus vitae non, integer. Non.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </section>
    </>
  );
}

export default Section4;
