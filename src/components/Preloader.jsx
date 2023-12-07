import React from 'react'

function Preloader() {
 setTimeout(() => {
    document.getElementById("Preloader").classList.add("d-none");
    document.body.classList.remove("overflow-hidden");
  }, 2000);
  return (
    <>
      <div
        id="Preloader"
        className="d-flex justify-content-center align-items-center W-100"
      >
        <div className="Loader"></div>
      </div>
    </>
  );
}

export default Preloader;