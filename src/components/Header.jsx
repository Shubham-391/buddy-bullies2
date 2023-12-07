import React from "react";

function Header() {
  function open() {
    document.querySelector(".small-view").classList.toggle("end-0");
    document.querySelector("body").classList.toggle("overflow-hidden");
  }
  function close() {
    document.querySelector(".small-view").classList.toggle("end-0");
    document.querySelector("body").classList.remove("overflow-hidden");
  }

  return (
    <>
      <header className="bg-img d-flex flex-wrap flex-column">
        <nav className="container d-flex flex-wrap justify-content-between align-items-center padt-26">
          <div className="l-h-150 m2 fw-semibold white poppins f-style-normal">
            <a href="">Logo</a>
          </div>
          <div className="icon" onClick={open}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className="d-flex flex-wrap align-items-center mb-0 p-0 gap-80 small-view">
            <li className="l-h-normal s fw-medium white poppins f-style-normal position-relative line" onClick={close}>
              <a href="#mint">Minting</a>
            </li>
            <li className="l-h-normal s fw-medium white poppins f-style-normal position-relative line" onClick={close}>
              <a href="#roadmap">Road Map</a>
            </li>
            <li className="l-h-normal s fw-medium white poppins f-style-normal position-relative line" onClick={close}>
              <a href="#faq">Faq</a>
            </li>
            <li className="l-h-normal s fw-medium white poppins f-style-normal position-relative line" onClick={close}>
              <a href="#team">Team</a>
            </li>
            <li className="l-h-normal s fw-medium white poppins f-style-normal position-relative line" onClick={close}>
              <a href="#join">Join Us</a>
            </li>
          </ul>
        </nav>
        <div className="container d-flex flex-wrap flex-column justify-content-center align-items-start flex-grow-1">
          <h1 className="max-w-515 l-h-124 xxl white poppins f-style-normal fw-normal m-0">
            Vitae nunc,
            <br />
            <span className="fw-bold">blandit a odio</span>
          </h1>
          <p className="max-w-547 text1 l-h-41 m1 fw-medium white poppins f-style-normal marginy1">
            Semper in egestas risus id tempus. Pellentesque dolor eros
            sollicitudin feugiat ut odio semper. Mattis fermentum eget ut
            vestibulum dolor diam
          </p>
          <button className="button1 l-h-normal poppins m3 fw-medium poppins f-style-normal">
            Get Started
          </button>
        </div>
      </header>
    </>
  );
}

export default Header;
