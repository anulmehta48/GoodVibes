import { useState } from "react";
import logo from "../public/logo_gv.jpg";
const data = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNipdOnjoiA2PWjuNcxsfBtrh4LaRQq-EmIdKeu59vHw&s",
  "https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg",
  "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630",
  "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_640.jpg",
];

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

  return (
    <div className="flex justify-center">
      <button className="font-bold p-4 m-10" onClick={hangePreviousClick}>
        Previous
      </button>
      <img className="w-[700px] " src={data[activeImageIndex]} alt="png" />
      <button className="font-bold p-4 m-10" onClick={handleNextClick}>
        Next
      </button>
    </div>
  );
};

export default ImageCrousel;
