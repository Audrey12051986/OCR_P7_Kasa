import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

/**
 * Composant Slideshow affiche un diaporama de photos.
 * @component
 * @param {Object} props
 * @param {string[]} props.pictures - un tableau d'images à afficher dans le slideshow
 * @returns {JSX.Element} - un composant de diaporama avec navigation
 */
const Slideshow = ({ pictures = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Gestion de la navigation des images
  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  const previousImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };

  // Si moins de 2 images, pas de navigation
  const showNavigation = pictures.length > 1;

  return (
    <div className="relative w-full h-96">
      {pictures.length > 0 && (
        <img
          src={pictures[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-full object-cover transition-opacity duration-300"
        />
      )}

      {/* Navigation */}
      {showNavigation && (
        <>
          <div className="absolute inset-0 flex items-center justify-between p-4">
            <button
              onClick={previousImage}
              className="bg-white/80 hover:bg-white p-2 rounded-full shadow-lg"
              aria-label="Image précédente"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextImage}
              className="bg-white/80 hover:bg-white p-2 rounded-full shadow-lg"
              aria-label="Image suivante"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Compteur d'images */}
          <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
            {currentIndex + 1} / {pictures.length}
          </div>
        </>
      )}
    </div>
  );
};

export default Slideshow;
