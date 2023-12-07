import React from "react";
import section1gif from "../assets/images/section1gif.gif";
import instagram from "../assets/images/instagram.webp";
import twitter from "../assets/images/twitter.webp";
import discord from "../assets/images/discord.webp";

function Section1() {
  return (
    <>
      <section id="mint" className="container d-flex s1">
        <div className="col-s1-6 col-s1-12 j-c d-flex position-relative">
          <div className="ellipse1 position-absolute ellipse"></div>
          <img
            className="s1img position-relative"
            src={section1gif}
            alt="cartoons"            
          />
        </div>
        <div className="col-s1-6 col-s1-12 d-flex justify-content-center">
          <div className="d-flex flex-column align-items-start justify-content-end mt-4 mt-xl-0">
            <h2 className="mint l-h-136 xl fw-semibold white poppins f-style-normal mb-0">
              Mint Your Bat
            </h2>
            <p className="minttext l-h-136 l fw-medium white poppins f-style-normal mb-0 mt-4 mt-md-5">
              Minting: 1,5 SOL
            </p>
            <p className="minttext2 l-h-136 vs fw-normal white poppins f-style-normal mb-0">
              Before 2 SOL
            </p>
            <p className="minttext l-h-136 l fw-medium white poppins f-style-normal mb-0 margint-21">
              Whitelist: 0,88 SOL
            </p>
            <p className="minttext2 vs fw-normal white poppins f-style-normal mb-0">
              Before 1 SOL
            </p>
            <button className="button2 l-h-normal poppins vs fw-medium poppins f-style-normal position-relative">
              Coming soon
            </button>
            <div className="d-flex align-items-center justify-content-between socialm-width cursor-pointer w-100">
              <a className="Social transition" href="https://www.instagram.com/" target="_blank">
                <img
                  className="position-relative instagram1"
                  src={instagram}
                  alt="instagram-icon"
                />
              </a>
              <a className="Social transition" href="https://twitter.com/i/flow/login" target="_blank">
                <img
                  className="position-relative twitter1"
                  src={twitter}
                  alt="twitter-icon"
                />
              </a>
              <a className="Social transition" href="https://discord.com/" target="_blank">
                <img
                  className="position-relative discord1"
                  src={discord}
                  alt="discord-icon"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Section1;
