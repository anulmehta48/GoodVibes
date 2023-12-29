import { Link } from "react-router-dom";

const Booking = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-[860px] bg-slate-500 grid items-center p-16 md:p20 rounded-3xl">
        <div className="max-w-80 grid gap-5">
          <h1 className="text-5xl font-bold text-white flex justify-center items-center">Booking</h1>
          <form action="" className="space-y-6 text-white">
            <div className="relative">
              <div className="absolute top-1 left-1 bg-white-medium p-2 rounded-full flex items-centerer justify-center text-blue-600">
              <i class="fa-solid fa-calendar-days"></i>
              </div>
              <input
                type="text"
                placeholder="Date"
                className="w-60 bg-white-light px-12 py-2 rounded-full focus:bg-black focus:outline-none focus:ring-1 focus:ring-purple-500 focus:drop-shadow-lg"
              />
            </div>
            <div className="relative">
              <div className="absolute top-1 left-1 bg-white-medium p-2 rounded-full flex items-centerer justify-center text-blue-600">
              <i class="fa-solid fa-clock"></i>
              </div>
              <input
                type="text"
                placeholder="Time"
                className="w-60 bg-white-light px-12 py-2 rounded-full focus:bg-black focus:outline-none focus:ring-1 focus:ring-purple-500 focus:drop-shadow-lg"
              />
            </div>
            <div className="relative">
              <div className="absolute top-1 left-1 bg-white-medium p-2 rounded-full flex items-centerer justify-center text-blue-600">
                <i class="fa-solid fa-user"></i>
              </div>
              <input
                type="text"
                placeholder="FullName"
                className="w-60 bg-white-light px-12 py-2 rounded-full focus:bg-black focus:outline-none focus:ring-1 focus:ring-purple-500 focus:drop-shadow-lg"
              />
            </div>
            <div className="relative">
              <div className="absolute top-1 left-1 bg-white-medium p-2 rounded-full flex items-centerer justify-center text-blue-600">
                <i class="fa-solid fa-envelope-open "></i>
              </div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-60 bg-white-light px-12 py-2 rounded-full focus:bg-black focus:outline-none focus:ring-1 focus:ring-purple-500 focus:drop-shadow-lg"
              />
            </div>
            <div className="relative">
              <div className="absolute top-1 left-1 bg-white-medium p-2 rounded-full flex items-centerer justify-center text-blue-600">
                <i class="fa-solid fa-mobile"></i>
              </div>
              <input
                type="number"
                placeholder="Mobile Number"
                className="w-60 bg-white-light px-12 py-2 rounded-full focus:bg-black focus:outline-none focus:ring-1 focus:ring-purple-500 focus:drop-shadow-lg"
              />
            </div>
            <div className="relative">
              <div className="absolute top-1 left-1 bg-white-medium p-2 rounded-full flex items-centerer justify-center text-blue-600">
              <i class="fa-solid fa-scissors"></i>
              </div>
              <input
                type="text"
                placeholder="Service"
                className="w-60 bg-white-light px-12 py-2 rounded-full focus:bg-black focus:outline-none focus:ring-1 focus:ring-purple-500 focus:drop-shadow-lg"
              />
            </div>
            <div className="relative">
              <div className="absolute top-1 left-1 bg-white-medium p-2 rounded-full flex items-centerer justify-center text-blue-600">
              <i class="fa-regular fa-message"></i>
              </div>
              <input
                type="text"
                placeholder="Notes(optional)"
                className="w-60 bg-white-light px-12 py-2 rounded-full focus:bg-black focus:outline-none focus:ring-1 focus:ring-purple-500 focus:drop-shadow-lg"
              />
            </div>
            <button className="bg-gradient-to-r from-cyan-200 to-indigo-600 w-60 font-semibold rounded-full px-3 py-2">
              Book Now
            </button>
          </form>
          <div className="text-white border-t border-white-light pt-3 space-y-1 text-sm">
            <p>
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-blue-800 cursor-pointer font-semibold"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
