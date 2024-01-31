import ImageCrousel from "./Crousel";
import { Link } from "react-router-dom";

const Body = () => {
  return (
    <div>
      <section className="lg:flex">
        <div className="flex item-center justify-center lg:flex-1 lg:order-2 lg:justify-end">
          <ImageCrousel />
        </div>
        <div className="space-y-6 mt-16 lg:flex-1 lg:order-1 lg:mt-36">
          <div className="text-6xl font-serif leading-tight text-center">
            <h1 className="hover:text-lime-600 ">Why Good Vibes</h1>
          </div>
          <p className="text-2xl font-serif text-center text-slate-700">
            Our team of experienced stylists and beauty professionals is
            dedicated to staying ahead of the latest trends and techniques.
            <br /> Your satisfaction is our priority.
          </p>
          <div className="flex flex-col gap-2 md:flex-row md:gap-0 justify-center items-center">
            <Link to="/booking">
              <button className="w-80 md:w-32 hover:bg-lime-600 hover:text-black bg-purple-900 px-4 py-3 max-md:rounded-md md:rounded-md text-white rounded-r-md font-medium whitespace-nowrap">
                Book Now
              </button>
            </Link>
          </div>
          <div className="flex flex-col gap-4 items-center">
            <p className="font-bold font-serif  text-slate-700 ">
              GoodVibes Hair Studio
            </p>
            <ul className="flex gap-6">
              <Link
                to="https://www.instagram.com/goodvibes_hairstudio?utm_source=ig_web_button_share_sheet&igsh=OGQ5ZDc2ODk2ZA=="
                target="_blank"
              >
                <li>
                  <i className="fa-brands fa-instagram fa-2x"></i>
                </li>
              </Link>
              <li>
                <i className="fa-brands fa-facebook fa-2x"></i>
              </li>
              <Link
                to="https://youtube.com/@princeprofessionalsalon1151?si=ZG5MxkQz8wpLbLZ5"
                target="_blank"
              >
                <li>
                  <i className="fa-brands fa-youtube fa-2x"></i>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </section>
      <section className="py-10 bg-w sm:py-16 lg:py-24 z-40 relative">
        <div className="container mx-auto">
          <h2 className="text-2xl font-semibold gap-2 py-3 text-center text-balck sm:text-4xl lg:text-5xl">
            Our Services
          </h2>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-4 ">
            <Link to="/booking" className=" shadow-2xl relative ">
              <div className="  h-full relative shadow-2xl shadow-lime-600 overflow-hidden group ">
                <div className=" absolute -bottom-10 group-hover:top-0 left-0 w-full h-full group-hover:bg-lime-600 transition-all ease-in-out duration-500  ">
                  <div className="w-full h-full  p-5   relative">
                    <div className="absolute bottom-0 group-hover:bottom-24 text-white  text-left   transition-all ease-in-out duration-500 ">
                      <h2 className="text-2xl font-bold  text-white mb-1 pb-1">
                        Hair Wash
                      </h2>
                      <p className="text-lg font-light text-white">
                        Book an appointment
                      </p>
                    </div>
                  </div>
                </div>
                <img
                  src="https://gico.io/wowhair/images/service/3.jpg"
                  className="w-full z-0  h-full    object-fill example "
                />
              </div>
            </Link>
            <Link to="/booking" className=" shadow-2xl relative ">
              <div className="  h-full relative shadow-2xl shadow-lime-600 overflow-hidden group ">
                <div className=" absolute -bottom-10 group-hover:top-0 left-0 w-full h-full group-hover:bg-lime-600 transition-all ease-in-out duration-500  ">
                  <div className="w-full h-full   p-5   relative">
                    <div className="absolute bottom-0 group-hover:bottom-24 text-white  text-left   transition-all ease-in-out duration-500 ">
                      <h2 className="text-2xl font-bold  text-white mb-1 pb-1">
                        Trending Haircut
                      </h2>
                      <p className="text-lg font-light text-white">
                        Book an appointment
                      </p>
                    </div>
                  </div>
                </div>
                <img
                  src="https://gico.io/wowhair/images/haircut/1.jpg"
                  className="w-full z-0  h-full    object-fill example "
                />
              </div>
            </Link>
            <Link to="/booking" className=" shadow-2xl relative ">
              <div className="  h-full relative shadow-2xl shadow-lime-600 overflow-hidden group ">
                <div className=" absolute -bottom-10 group-hover:top-0 left-0 w-full h-full group-hover:bg-lime-600 transition-all ease-in-out duration-500  ">
                  <div className="w-full h-full   p-5   relative">
                    <div className="absolute bottom-0 group-hover:bottom-24 text-white  text-left   transition-all ease-in-out duration-500 ">
                      <h2 className="text-2xl font-bold  text-white mb-1 pb-1">
                        Hair Pump
                      </h2>
                      <p className="text-lg font-light text-white">
                        Book an appointment
                      </p>
                    </div>
                  </div>
                </div>
                <img
                  src="https://gico.io/wowhair/images/haircut/2.jpg"
                  className="w-full z-0  h-full    object-fill example "
                />
              </div>
            </Link>
            <Link to="/booking" className=" shadow-2xl relative ">
              <div className="  h-full relative shadow-2xl shadow-lime-600 overflow-hidden group ">
                <div className=" absolute -bottom-10 group-hover:top-0 left-0 w-full h-full group-hover:bg-lime-600 transition-all ease-in-out duration-500  ">
                  <div className="w-full h-full   p-5   relative">
                    <div className="absolute bottom-0 group-hover:bottom-24 text-white  text-left   transition-all ease-in-out duration-500 ">
                      <h2 className="text-2xl font-bold  text-white mb-1 pb-1">
                        Normal Haircut
                      </h2>
                      <p className="text-lg font-light text-white">
                        Book an appointment
                      </p>
                    </div>
                  </div>
                </div>
                <img
                  src="https://gico.io/wowhair/images/service/1.jpg"
                  className="w-full z-0  h-full    object-fill example "
                />
              </div>
            </Link>
          </div>
        </div>
      </section>
      <section className="relative pt-12 bg-blueGray-50">
        <div className="items-center flex flex-wrap">
          <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
            <img
              alt="..."
              className="max-w-full rounded-lg shadow-lg"
              src="https://gico.io/wowhair/images/about/1.jpg"
            />
          </div>
          <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
            <div className="md:pr-12">
              <h3 className="text-3xl font-semibold">
                Mr.Chanchal - GoodVibes
              </h3>
              <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
              we're passionate about bringing out your unique beauty and making you feel absolutely fabulous.
              </p>
              <ul className="list-none mt-6">
                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                        <i className="fas fa-fingerprint"></i>
                      </span>
                    </div>
                    <div>
                      <h4 className="text-blueGray-500">
                      Passionate about bringing out your unique beauty.
                      </h4>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                      <i className="far fa-paper-plane"></i>
                      </span>
                    </div>
                    <div>
                      <h4 className="text-blueGray-500">
                      Luxurious services crafted to pamper and enhance.
                      </h4>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                      
                        <i className="fa-solid fa-scissors"></i>
                      </span>
                    </div>
                    <div>
                      <h4 className="text-blueGray-500">From cutting-edge hairstyles to revitalizing spa treatments.</h4>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Body;
