/*import React from "react";
import Banner from "../components/Banner";
import Collapse from "../components/Collapse";
import TextList from "../data/TextList.json";
import aboutBanner from "../assets/bannerAbout.png"; // Importez votre image de banner

const AboutPage = () => {
  return (
    <div>
      <Banner image={aboutBanner} className="banner--about" />
      {TextList.map((rule, id) => (
        <Collapse
          key={id}
          aboutTitle={rule.title}
          aboutText={rule.text}
          aboutStyle="about-style"
        />
      ))}
    </div>
  );
};

export default AboutPage;*/

import React from "react";
import Banner from "../components/Banner";
import Collapse from "../components/Collapse";
import TextList from "../data/text-list.json";
import aboutBanner from "../assets/bannerAbout.png";

const AboutPage = () => {
  return (
    <main className="about-page">
      <Banner image={aboutBanner} className="banner--about" />
      <div className="about-page__content">
        {TextList.map((rule, id) => (
          <Collapse key={id} title={rule.title} style="about-style">
            {rule.text}
          </Collapse>
        ))}
      </div>
    </main>
  );
};

export default AboutPage;
