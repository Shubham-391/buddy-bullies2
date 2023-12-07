import React from "react";
import s5img1 from "../assets/images/s5img1.webp";
import s5img2 from "../assets/images/s5img2.webp";
import s5img3 from "../assets/images/s5img3.webp";
const box2Data = [
  {
    id: 0,
    image: s5img1,
    para1: "Prime Bullister",
    para2: "Pruduct Designer",
  },
  {
    id: 1,
    image: s5img2,
    para1: "Solvador Bulli",
    para2: "Artist",
  },
  {
    id: 2,
    image: s5img3,
    para1: "Prime Bullister",
    para2: "Pruduct Designer",
  },
];

function Section5() {
  const box2Components = box2Data.map((box2Data) => (
    <div key={box2Data.id} className="col-lg-4 col-md-6 col-12 text-center ">
      <img src={box2Data.image} alt="buddy-bullies" />
      <p className="white poppins l f-style-normal fw-semibold l-h-136 margint-32 mb-0">
        {box2Data.para1}
      </p>
      <p className="white poppins s f-style-normal fw-normal l-h-136 mb-0">
        {box2Data.para2}
      </p>
    </div>
  ));
  return (
    <>
      {/* section5 */}
      <section id="team" className="s5con mx-auto mt-md-5 pt-5 paddingb-42">
        <h3 className="white poppins xl f-style-normal fw-semibold l-h-136 text-center marginb-26">
          Our Team
        </h3>
        <div className="d-flex flex-row flex-wrap justify-content-center align-items-center">
          {box2Components}
        </div>
      </section>
    </>
  );
}

export default Section5;
