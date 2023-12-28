import ImageCrousel from "./Crousel";
import image1 from "../public/image-1.jpg";
import image2 from "../public/image-2.jpg";
import image5 from "../public/image-5.jpg";
import image4 from "../public/image-4.jpg";

const Body = () => {
  return (
    <main className="lg:flex">
      <div className="flex item-center justify-center lg:flex-1 lg:order-2 lg:justify-end">
        <ImageCrousel />
      </div>
      <div className="space-y-6 mt-16 lg:flex-1 lg:order-1 lg:mt-36">
        <div className="text-6xl font-serif leading-tight text-center">
          <h1 className="hover:text-lime-600 ">Why Good Vibes</h1>
        </div>
        <p className="text-2xl font-serif text-center text-slate-700">
          Our team of experienced stylists and beauty professionals is dedicated
          to staying ahead of the latest trends and techniques.
          <br /> Your satisfaction is our priority.
        </p>
        <div className="flex flex-col gap-2 md:flex-row md:gap-0 justify-center">
          <button className="hover:bg-lime-600 hover:text-black bg-purple-900 px-4 py-3 max-md:rounded-md md:rounded-md text-white rounded-r-md font-medium whitespace-nowrap">
            Book Now
          </button>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <p className="font-bold font-serif  text-slate-700 ">
            GoodVibes Hair Studio
          </p>
          <ul className="flex gap-6">
            <li>
              <i className="fa-brands fa-instagram fa-2x"></i>
            </li>
            <li>
              <i className="fa-brands fa-facebook fa-2x"></i>
            </li>
            <li>
              <i className="fa-brands fa-youtube fa-2x"></i>
            </li>
          </ul>
        </div>
        {/* <div className="flex item-center justify-center gap-10 bg-slate-400 w-[300px] h-[300px]">
          <img src={image1} alt="feat" />
          <img src={image2} alt="feat" />
          <img src={image4} alt="feat" />
        </div>
        <div className="">
          <img src="" alt="own" />
          <h1>About GOODVIBES</h1>
          <p>Mr. Chanchal Sen</p>
        </div>
        <div className="">
          <img src="" alt="feat" />
          <img src="" alt="feat" />
          <img src="" alt="feat" />
        </div>
        <div className="">
          <img src="" alt="own" />
          <h1>About GOODVIBES</h1>
          <p>Mr. Chanchal Sen</p>
        </div> */}
      </div>
    </main>
  );
};

export default Body;
