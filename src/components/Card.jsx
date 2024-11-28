
import styles from "../style/card.module.css";

const Card = ({ image, title, description }) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.imgContainer}>
        <img src={image} alt={title} className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default Card;
