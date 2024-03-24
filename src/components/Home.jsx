import React from "react";
import Card from "../components/Card";
import CardProp from "../components/CardProp";

import image1 from "../assets/bitcoin.jpg";
import image2 from "../assets/bitcoin.jpg";
import image3 from "../assets/bitcoin.jpg";
import image4 from "../assets/bitcoin.jpg";

const IMAGES = [
  { url1: image1, alt1: "Card One" },
  { url2: image2, alt2: "Card Two" },
  { url3: image3, alt3: "Card Three" },
  { url4: image4, alt4: "Card Four" },
];

const Home = () => {
  const cardTitle1 = "Card One";
  const CardSubtitle1 = "Card One";

  const cardTitle2 = "Card Two";
  const CardSubtitle2 = "Card Two";

  const cardTitle3 = "Card Three";
  const CardSubtitle3 = "Card Three";

  const cardTitle4 = "Card Four";
  const cardSubtitle4 = "Card Four";

  return (
    <div>
      <h1>Card Gallery</h1>
        <Card />
        <CardProp images={IMAGES} title1={cardTitle1} subtitle1={CardSubtitle1} title2={cardTitle2} subtitle2={CardSubtitle2} title3={cardTitle3} subtitle3={CardSubtitle3} title4={cardTitle4} subtitle4={cardSubtitle4}/>
    </div>
  );
};

export default Home;
