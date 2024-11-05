import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

/**
 * Composant TextSlider affiche un titre et un texte/liste avec un bouton pour ouvrir/fermer.
 * @component
 * @param {Object} props
 * @param {string} props.page - La page sur laquelle le composant va être utilisé.
 * @param {string} props.title - Le titre du composant.
 * @param {string | string[]} props.text - Le contenu du composant, qui peut être du texte ou une liste de texte.
 * @returns {JSX.Element} - un composant dépliable
 */
const TextSlider = ({ page, title, text }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Vérifie si le texte est un tableau ou une chaîne
  const renderText = () => {
    if (Array.isArray(text)) {
      return (
        <ul className="list-disc pl-4">
          {text.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      );
    }
    return <p>{text}</p>;
  };

  return (
    <div className="border rounded-lg">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-4 font-semibold"
      >
        {title}
        {isOpen ? (
          <ChevronUp className="w-5 h-5" />
        ) : (
          <ChevronDown className="w-5 h-5" />
        )}
      </button>
      {isOpen && <div className="p-4 border-t">{renderText()}</div>}
    </div>
  );
};

export default TextSlider;
