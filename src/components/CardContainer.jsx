import { useState } from "react";
import Card from "./Card";
import styles from "../style/cardContainer.module.css";

const CardsContainer = ({ cardsData }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === cardsData.length - 1 ? 0 : prevIndex + 1
      );
    };
  
    const prevSlide = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? cardsData.length - 1 : prevIndex - 1
      );
    };
  return (
    <div className={styles.carouselContainer}>
    <button onClick={prevSlide} className={styles.arrowLeft}>
      ◀
    </button>
    <div className={styles.cardWrapper}>
      <Card
        image={cardsData[currentIndex].image}
        title={cardsData[currentIndex].title}
        description={cardsData[currentIndex].description}
      />
    </div>
    <button onClick={nextSlide} className={styles.arrowRight}>
      ▶
    </button>
  </div>
  );
};

export default CardsContainer;
