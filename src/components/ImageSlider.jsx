import { useState } from "react";
import styles from "../styles/ImageSlider.module.css";

function ImageSlider({ imageUrls }) {
  const [imageIndex, setImageIndex] = useState(0);
  const prevImg = imageIndex === 0 ? imageUrls.length - 1 : imageIndex - 1;
  const nextImg = imageIndex === imageUrls.length - 1 ? 0 : imageIndex + 1;

  function handlePrevImage() {
    setImageIndex(prevImg);
  }

  function handleNextImage() {
    setImageIndex(nextImg);
  }

  return (
    <>
      <div className={styles.imagesContainer}>
        <div className={styles.image}>
          <img src={imageUrls[prevImg]} alt="" />
        </div>
        <div className={styles.image}>
          <img src={imageUrls[imageIndex]} alt="" />
        </div>
        <div className={styles.image}>
          <img src={imageUrls[nextImg]} alt="" />
        </div>
      </div>
      <button onClick={handlePrevImage}>prev</button>
      <button onClick={handleNextImage}>next</button>
    </>
  );
}

export default ImageSlider;
