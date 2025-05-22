import { useState } from "react";

function ImageSlider({ imageUrls }) {
  const [imageIndex, setImageIndex] = useState(0);

  function handlePrevImage() {
    let newIndex = null;
    if (imageIndex === 0) {
      newIndex = imageUrls.length - 1;
    } else {
      newIndex = imageIndex - 1;
    }
    setImageIndex(newIndex);
  }

  function handleNextImage() {
    let newIndex = null;
    if (imageIndex === imageUrls.length - 1) {
      newIndex = 0;
    } else {
      newIndex = imageIndex + 1;
    }
    setImageIndex(newIndex);
  }

  return (
    <>
      <div>
        <img src={imageUrls[imageIndex]} alt="" />
        <button onClick={handlePrevImage}>prev</button>
        <button onClick={handleNextImage}>next</button>
      </div>
    </>
  );
}

export default ImageSlider;
