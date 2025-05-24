import { useState } from "react";
import styles from "../styles/ImageSlider.module.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

// todo: import images, dots, responsiveness

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
      <div className={styles.container}>
        <div className={styles.imageSlider}>
          <button onClick={handlePrevImage}>
            <ChevronLeft size={44} strokeWidth={2} />
          </button>

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

          <button onClick={handleNextImage}>
            <ChevronRight size={44} strokeWidth={2} />
          </button>
        </div>
      </div>
    </>
  );
}

export default ImageSlider;
