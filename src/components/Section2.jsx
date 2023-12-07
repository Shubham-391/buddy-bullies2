import React from "react";
import s2img1 from "../assets/images/s2img1.webp";
import s2img2 from "../assets/images/s2img2.webp";
import s2img3 from "../assets/images/s2img3.webp";
import s2img4 from "../assets/images/s2img4.webp";
import s2img5 from "../assets/images/s2img5.webp";
import s2img6 from "../assets/images/s2img6.webp";
const boxData = [
  {
    id: 0,
    image: s2img1,
    heading: "ART COLLECTION",
    para: "Complete the art collection in full with +70 unique traits, and publish our rarity chart on our webpage.",
  },
  {
    id: 1,
    image: s2img2,
    heading: "SPECIAL BULLIES",
    para: `<span class="fw-medium">20 Buddybullies</span> {out of 10k} will have a very <span class="fw-medium">special and ersonalized</span> resembling of <span class="fw-medium">famous people</span> who are into <span class="fw-medium">NFTs</span> { those will be available after the minting }.`,
  },
  {
    id: 2,
    image: s2img3,
    heading: "BREEDING",
    para: `Our <span class="fw-medium">BuddyBullies</span> will not come alone, as we will announce the <span class="fw-medium">breeding function</span> after the minting and you will be able to get <span class="fw-medium">a PuppyBully</span> { for free}.`,
  },
  {
    id: 3,
    image: s2img4,
    heading: "DIGITALMARKETS",
    para: `<span class="fw-medium">Communicate with all the digital markets</span>available in the Solana<span class="fw-medium> NFT</span> world for getting our collection<span class="fw-medium"> successfully listed.</span>`,
  },
  {
    id: 4,
    image: s2img5,
    heading: "MERCH",
    para: `The team is <span class="fw-medium">working on the future merch</span> thet will be available for the community members directly on our webpage.`,
  },
  {
    id: 5,
    image: s2img6,
    heading: "CHARITY",
    para: `We will be giving <span class="fw-medium">30% of the royalties to charity</span> permanently and we will keep spending on marketing, promotions and partnership.<span class="fw-medium">50% of the riyalties</span> will go back to the <span class="fw-medium">community</span> as rewards.`,
  },
];

function Section2() {
  const boxComponents = boxData.map((boxData) => (
    <div key={boxData.id} className="col-xxl-4 col-lg-6 col-12 box">
      <div className="box1 bg-d-blue2 h1-511">
        <img src={boxData.image} alt="buddy-bullies" />
        <h3 className="s2heading l-h-1005 l fw-semibold white poppins f-style-normal">
          {boxData.heading}
        </h3>
        <p
          className="white poppins f-style-normal l-h-150 opacity-70 m1 fw-normal"
          dangerouslySetInnerHTML={{ __html: boxData.para }}
        ></p>
      </div>
    </div>
  ));

  return (
    <>
      <section className="s2con mb-md-4 pb-md-3 d-flex flex-wrap justify-content-center align-items-center row-g-41 position-relative">
        {boxComponents}
      </section>
    </>
  );
}

export default Section2;
