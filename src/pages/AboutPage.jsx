// AboutPage.jsx
/*import React from "react";
import Banner from "../components/Banner";
import Collapse from "../components/Collapse";
import TextList from "../data/TextList.json";

const AboutPage = () => {
  return (
    <div>
      <Banner />
      {TextList.map((rule, id) => (
        <Collapse
          key={id}
          aboutTitle={rule.title} // Changé de rule.aboutTitle à rule.title
          aboutText={rule.text} // Changé de rule.aboutText à rule.text
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

export default AboutPage;
