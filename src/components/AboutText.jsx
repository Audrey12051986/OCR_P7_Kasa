import React from "react";
import { textList } from "../data/text-list.json";
import TextSlider from "./";

const AboutText = () => {
  return (
    <div>
      {textList.map((item) => (
        <TextSlider
          key={item.title}
          page="about"
          title={item.title}
          text={item.text}
        />
      ))}
    </div>
  );
};

export default AboutText;
