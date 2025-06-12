import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import PropTypes from "prop-types";
import styles from "../styles/ImageSlider.module.css";

function ImageSlider({ imageData }) {
  const [imageIndex, setImageIndex] = useState(0);

  const prevImg = imageIndex === 0 ? imageData.length - 1 : imageIndex - 1;
  const nextImg = imageIndex === imageData.length - 1 ? 0 : imageIndex + 1;

  function handlePrevImage() {
    setImageIndex(prevImg);
  }

  function handleNextImage() {
    setImageIndex(nextImg);
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.imageSliderContainer}>
          <div className={styles.imageSlider}>
            <button onClick={handlePrevImage} aria-label="previous">
              <ChevronLeft size={44} strokeWidth={2} />
            </button>

            <div className={styles.imagesContainer}>
              <div className={styles.image}>
                <img
                  src={imageData[prevImg].imageUrl}
                  alt={imageData[prevImg].alt}
                  title={imageData[prevImg].alt}
                  data-testid="prev-img"
                />
              </div>
              <div className={styles.image}>
                <img
                  src={imageData[imageIndex].imageUrl}
                  alt={imageData[imageIndex].alt}
                  title={imageData[imageIndex].alt}
                  data-testid="mid-img"
                />
              </div>
              <div className={styles.image}>
                <img
                  src={imageData[nextImg].imageUrl}
                  alt={imageData[nextImg].alt}
                  title={imageData[nextImg].alt}
                  data-testid="next-img"
                />
              </div>
            </div>

            <button onClick={handleNextImage} aria-label="next">
              <ChevronRight size={44} strokeWidth={2} />
            </button>
          </div>

          <div className={styles.dotsContainer}>
            {imageData.map((url, index) => {
              return (
                <button
                  key={index}
                  onClick={() => setImageIndex(index)}
                  className={`${styles.dot} ${
                    index === imageIndex ? styles.active : ""
                  }`}
                  data-testid="dot"
                ></button>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

// Proptypes were removed from React v19 to be silently ignored - in future use TypeScript or another solution (change to React v18/find another package)
ImageSlider.propTypes = {
  imageData: PropTypes.arrayOf(
    PropTypes.shape({
      imageUrl: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    })
  ),
};

export default ImageSlider;
