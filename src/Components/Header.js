import { Link } from "react-router-dom";
import Logo from "../public/logo_gv.jpg";
const Header = () => {
  return (
    <header className="flex justify-between items-center text-white   ">
      <a href="/" className="flex items-center ">
        <img className="h-16 rounded-full" alt="logo" src={Logo} />
      </a>
      <ul className="lg:flex lg:items-center lg:gap-10 lg:text-lg lg:font-medium flex justify-center ">
        <li className="px-3 hover:text-lime-600">
          <Link to="/">Home</Link>
        </li>
        <li className="px-3 hover:text-lime-600">
          <Link to="/about">About</Link>
        </li>
        <li className="px-3 hover:text-lime-600">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="px-3 hover:text-lime-600 ">
          <Link to="/booking">Booking</Link>
        </li>
      </ul>
      <div className="hidden lg:flex lg:items-center lg:gap-5 lg:text-lg lg:font-medium  ">
        <Link to="/login">
          <button className="bg-purple-900 px-2 py-1 font-medium rounded-md hover:bg-lime-500 hover:text-black">
            Login
          </button>
        </Link>
        <Link to="/signup">
          <button className="bg-purple-900 px-2 py-1 font-medium rounded-md hover:bg-lime-500 hover:text-black">
            Register
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
