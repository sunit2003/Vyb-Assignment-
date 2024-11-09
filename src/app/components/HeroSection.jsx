import styles from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.imageContainer}>
        <img src="Frame 1164.png" alt="Image 1" className={styles.heroImage} />
      </div>
      <div className={styles.imageContainer}>
        <img src="iamge.png" alt="Image 2" className={styles.heroImage} />
      </div>
    </section>
  );
};

export default HeroSection;
