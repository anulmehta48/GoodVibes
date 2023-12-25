import ImageCrousel from "./Crousel";

const Body = () => {
  return (
    <div className="max-w-8xl mx-auto px-4  sm:px-6 md:px-8">
      {/* <h1 className="text-9xl text-red-600">Body section</h1> */}
      <ImageCrousel />
      <div className="items-center mt-5">
        <h1 className="hover:text-lime-600 text-8xl text-emerald-600 font-serif text-center ">
          Why Good Vibes
        </h1>
        <p className=" text-2xl font-serif text-center text-slate-700">
          Our team of experienced stylists and beauty professionals is dedicated
          <br />
          to staying ahead of the latest trends and techniques.
          <br /> Your satisfaction is our priority.
        </p>
      </div>
      <div className="md:container md:mx-auto flex justify-between bg-slate-600 max-w-8xl mx-auto h-40">
        <img src="" alt="feat" />
        <img src="" alt="feat" />
        <img src="" alt="feat" />
      </div>
      <div className="md:container md:mx-auto bg-orange-600">
        <img src="" alt="own" />
        <h1>About GOODVIBES</h1>
        <p>Mr. Chanchal Sen</p>
      </div>
    </div>
  );
};

export default Body;
