import React from "react";
import Banner from "../components/Banner";
import Collapse from "../components/Collapse";
import TextList from "../data/text-list.json";
import aboutBanner from "../assets/bannerAbout.png";

const AboutPage = () => {
  return (
    <main className="about-page">
      <Banner image={aboutBanner} />
      <div className="about-collapse">
        {TextList.map((rule, id) => (
          <Collapse className="about" key={id} title={rule.title}>
            {rule.text}
          </Collapse>
        ))}
      </div>
    </main>
  );
};

export default AboutPage;
