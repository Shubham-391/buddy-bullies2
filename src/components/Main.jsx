import React from "react";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";

function Main() {
  return (
    <>
      <main className="bg-d-blue3 position-relative overflow-hidden">
        <div className="position-absolute ellipse-tr ellipse"></div>
        <div className="position-absolute ellipse ellipse-lm"></div>
        <div className="position-absolute ellipse-rb ellipse"></div>
        {/* section1 */}
        <Section1 />
        {/* section2 */}
        <Section2 />
        {/* section3 */}
        <Section3 />
        {/* section4 */}
        <Section4 />
        {/* section5 */}
        <Section5 />
      </main>
    </>
  );
}

export default Main;
