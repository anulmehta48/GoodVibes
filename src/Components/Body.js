import ImageCrousel from "./Crousel";
import { Link } from "react-router-dom";
import image1 from "../public/image-1.jpg";
import image2 from "../public/image-2.jpg";
import image5 from "../public/image-5.jpg";
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
          <div className="flex flex-col gap-2 md:flex-row md:gap-0 justify-center">
            <button className="hover:bg-lime-600 hover:text-black bg-purple-900 px-4 py-3 max-md:rounded-md md:rounded-md text-white rounded-r-md font-medium whitespace-nowrap">
              <Link to="/booking"> Book Now </Link>
            </button>
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
      <section class="py-10 bg-w sm:py-16 lg:py-24 z-40 relative">
        <div class="container mx-auto">
          <h2 className="text-2xl font-semibold gap-2 py-3 text-center text-balck sm:text-4xl lg:text-5xl">
            Our Services
          </h2>
          <div class="grid grid-cols-1 gap-6 lg:grid-cols-4 ">
            <a href="#" class=" shadow-2xl relative ">
              <div class="  h-full relative shadow-2xl shadow-lime-600 overflow-hidden group ">
                <div class=" absolute -bottom-10 group-hover:top-0 left-0 w-full h-full group-hover:bg-lime-600 transition-all ease-in-out duration-500  ">
                  <div class="w-full h-full   p-5   relative">
                    <div class="absolute bottom-0 group-hover:bottom-24 text-white  text-left   transition-all ease-in-out duration-500 ">
                      <h2 class="text-2xl font-bold  text-white mb-0 pb-1">
                        Standard Color
                      </h2>
                      <p class="text-lg font-light text-white">
                        Lorem ipsum dolor sit amet, #brands.
                      </p>
                    </div>
                  </div>
                </div>
                <img
                  src="https://gico.io/wowhair/images/service/3.jpg"
                  class="w-full z-0  h-full    object-fill example "
                />
              </div>
            </a>
            <a href="#" class=" shadow-2xl relative ">
              <div class="  h-full relative shadow-2xl shadow-lime-600 overflow-hidden group ">
                <div class=" absolute -bottom-10 group-hover:top-0 left-0 w-full h-full group-hover:bg-lime-600 transition-all ease-in-out duration-500  ">
                  <div class="w-full h-full   p-5   relative">
                    <div class="absolute bottom-0 group-hover:bottom-24 text-white  text-left   transition-all ease-in-out duration-500 ">
                      <h2 class="text-2xl font-bold  text-white mb-0 pb-1">
                        Standard Color
                      </h2>
                      <p class="text-lg font-light text-white">
                        Lorem ipsum dolor sit amet, #brands.
                      </p>
                    </div>
                  </div>
                </div>
                <img
                  src="https://gico.io/wowhair/images/haircut/1.jpg"
                  class="w-full z-0  h-full    object-fill example "
                />
              </div>
            </a>
            <a href="#" class=" shadow-2xl relative ">
              <div class="  h-full relative shadow-2xl shadow-lime-600 overflow-hidden group ">
                <div class=" absolute -bottom-10 group-hover:top-0 left-0 w-full h-full group-hover:bg-lime-600 transition-all ease-in-out duration-500  ">
                  <div class="w-full h-full   p-5   relative">
                    <div class="absolute bottom-0 group-hover:bottom-24 text-white  text-left   transition-all ease-in-out duration-500 ">
                      <h2 class="text-2xl font-bold  text-white mb-0 pb-1">
                        Standard Color
                      </h2>
                      <p class="text-lg font-light text-white">
                        Lorem ipsum dolor sit amet, #brands.
                      </p>
                    </div>
                  </div>
                </div>
                <img
                  src="https://gico.io/wowhair/images/haircut/2.jpg"
                  class="w-full z-0  h-full    object-fill example "
                />
              </div>
            </a>
            <a href="#" class=" shadow-2xl relative ">
              <div class="  h-full relative shadow-2xl shadow-lime-600 overflow-hidden group ">
                <div class=" absolute -bottom-10 group-hover:top-0 left-0 w-full h-full group-hover:bg-lime-600 transition-all ease-in-out duration-500  ">
                  <div class="w-full h-full   p-5   relative">
                    <div class="absolute bottom-0 group-hover:bottom-24 text-white  text-left   transition-all ease-in-out duration-500 ">
                      <h2 class="text-2xl font-bold  text-white mb-0 pb-1">
                        Standard Color
                      </h2>
                      <p class="text-lg font-light text-white">
                        Lorem ipsum dolor sit amet, #brands.
                      </p>
                    </div>
                  </div>
                </div>
                <img
                  src="https://gico.io/wowhair/images/service/1.jpg"
                  class="w-full z-0  h-full    object-fill example "
                />
              </div>
            </a>
          </div>
        </div>
      </section>
      <section class="relative pt-12 bg-blueGray-50">
        <div class="items-center flex flex-wrap">
          <div class="w-full md:w-4/12 ml-auto mr-auto px-4">
            <img
              alt="..."
              class="max-w-full rounded-lg shadow-lg"
              src="https://gico.io/wowhair/images/about/1.jpg"
            />
          </div>
          <div class="w-full md:w-5/12 ml-auto mr-auto px-4">
            <div class="md:pr-12">
              <h3 class="text-3xl font-semibold">Mr.Chanchal - GoodVibes</h3>
              <p class="mt-4 text-lg leading-relaxed text-blueGray-500">
                The extension comes with three pre-built pages to help you get
                started faster. You can change the text and images and you're
                good to go.
              </p>
              <ul class="list-none mt-6">
                <li class="py-2">
                  <div class="flex items-center">
                    <div>
                      <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                        <i class="fas fa-fingerprint"></i>
                      </span>
                    </div>
                    <div>
                      <h4 class="text-blueGray-500">
                        Carefully crafted components
                      </h4>
                    </div>
                  </div>
                </li>
                <li class="py-2">
                  <div class="flex items-center">
                    <div>
                      <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                        <i class="fab fa-html5"></i>
                      </span>
                    </div>
                    <div>
                      <h4 class="text-blueGray-500">Amazing page examples</h4>
                    </div>
                  </div>
                </li>
                <li class="py-2">
                  <div class="flex items-center">
                    <div>
                      <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                        <i class="far fa-paper-plane"></i>
                      </span>
                    </div>
                    <div>
                      <h4 class="text-blueGray-500">Dynamic components</h4>
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
