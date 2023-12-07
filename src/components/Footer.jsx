import React from 'react';
import instagram from "../assets/images/instagram.webp";
import twitter from "../assets/images/twitter.webp";
import discord from "../assets/images/discord.webp";

function Footer() {
  return (
    <>
      <footer className="bg-d-blue3 pt-5 pt-md-0">
        <div className="fcon">
          <h3
            id="join"
            className="white text-center poppins xl f-style-normal fw-semibold l-h-124 paddingt-179 mb-0"
          >
            JOIN US
          </h3>
          <div className=" d-flex align-items-center justify-content-md-between justify-content-center flex-wrap mt-4 mt-md-5 pt-md-5 gap-4 gap-md-0">
            <div className="col-xl-9 col-md-8 col-12 text-align-center mt-md-2">
              <h4 className="white poppins l f-style-normal fw-medium l-h-124 mb-0">
                <a href="">LOGO</a>
              </h4>
              <p className="margint-21 marginb-20 white poppins vs f-style-normal fw-normal l-h-150 opacity-60">
                Aenean arcu sed rhoncus sapien euismod
                <br /> cursus morbi lacus, blandit. Placerat tortor duis
                <br /> fames cras pellentesque dui adipiscing neque
                <br /> gravida. Sociis neque consectetur id quis
                <br /> pharetra.
              </p>
              <p className="white poppins vs f-style-normal fw-normal l-h-150 mb-0">
                <a
                  className="position-relative line"
                  href="https://accounts.google.com/InteractiveLogin/signinchooser?continue=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&emr=1&followup=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&osid=1&passive=1209600&service=mail&ifkv=AXo7B7WsYcCsqtDncsMjcyEcPAqsVPSEqqzUY4gpojemsKTz8KHYigkNHA9AsfKNdFFs0YOcr_wNUg&flowName=GlifWebSignIn&flowEntry=ServiceLogin"
                  target="_blank"
                >
                  Email@gmail.com
                </a>
              </p>
            </div>
            <div className="col-md-2 col-12 d-flex flex-column justify-content-end text-align-center">
              <h6 className="white poppins vs f-style-normal fw-medium l-h-150 marginb-10">
                Resources
              </h6>
              <p className="white poppins vvs f-style-normal fw-normal l-h-136 mb-0">
                <a className="position-relative line" href="#roadmap">
                  Roadmap
                </a>
              </p>
              <p className="white poppins vvs f-style-normal fw-normal l-h-136 marginy-6">
                <a className="position-relative line" href="#faq">
                  FAQs
                </a>
              </p>
              <p className="white poppins vvs f-style-normal fw-normal l-h-136 mb-0">
                <a className="position-relative line" href="#mint">
                  Mint your Bully
                </a>
              </p>
            </div>
            <div className="col-xl-1 col-md-2 col-12 mb-4 mb-md-0 text-align-center">
              <h6 className="white poppins vs f-style-normal fw-medium l-h-150 marginb-21">
                Community
              </h6>
              <div className="width-80 d-flex justify-content-between align-items-center marginx-auto">
                <a
                  className="Social transition"
                  href="https://www.instagram.com/"
                  target="_blank"
                >
                  <img className="Instagram2" src={instagram} alt="instagram" />
                </a>
                <a
                  className="Social transition"
                  href="https://twitter.com/i/flow/login"
                  target="_blank"
                >
                  <img className="Twitter2" src={twitter} />
                </a>
                <a
                  className="Social transition"
                  href="https://discord.com/"
                  target="_blank"
                >
                  <img className="Discord2" src={discord} alt="discord" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer