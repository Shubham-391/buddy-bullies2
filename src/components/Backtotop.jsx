import React from "react";
import backtotop from "../assets/images/backtotop.webp";

function Backtotop() {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      document.getElementById("Top").style.display = "flex";
    } else {
      document.getElementById("Top").style.display = "none";
    }
  });

  function up() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <>
      <button id="Top" className="cursor-pointer" onClick={up}>
        <img className="w-100" src={backtotop} alt="back to top icon" />
      </button>
    </>
  );
}

export default Backtotop;
