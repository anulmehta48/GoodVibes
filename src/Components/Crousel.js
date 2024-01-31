import { useEffect, useState } from "react";
// import logo from "../public/logo_gv.jpg";

import image1 from "../public/image-006.jpg";
import image2 from "../public/image-007.jpg";
import image3 from "../public/image-008.jpg";
const data = [image1, image2, image3];

const ImageCrousel = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const hangePreviousClick = () => {
    if (activeImageIndex == 0) {
      setActiveImageIndex(data.length - 1);
    } else {
      setActiveImageIndex(activeImageIndex - 1);
    }
  };
  const handleNextClick = () => {
    setActiveImageIndex((activeImageIndex + 1) % data.length);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNextClick();
    }, 3000);

    return () => clearInterval(intervalId);
  }, [activeImageIndex]);

  return (
    <div className="mt-3 relative w-full h-96 rounded-full overflow-hidden outline outline-white shadow-2xl shadow-black lg:h-[550px] lg:w-[550px] lg:rounded-full">
      <img
        className="w-full h-full object-cover transition-transform transform scale-105 duration-500 "
        src={data[activeImageIndex]}
        alt="png"
      />
      <div className="absolute inset-0 flex items-center justify-between">
        <button onClick={hangePreviousClick}></button>
        <button onClick={handleNextClick}></button>
      </div>
    </div>
  );
};

export default ImageCrousel;
