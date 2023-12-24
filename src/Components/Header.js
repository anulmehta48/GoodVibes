import { Link } from "react-router-dom";
import Logo from "../public/logo_gv.jpg";
const Header = () => {
  return (
    <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8">
      <div className="flex justify-between bg-red-300  shadow-lg container mx-auto">
        <a href="/">
          <img className="h-20 rounded-full ml-16 p-2" alt="logo" src={Logo} />
        </a>
        <div className="navbar">
          <ul className="flex py-6 ">
            <li className="px-4">
              <Link to="/">Home</Link>
            </li>
            <li className="px-4">
              <Link to="/about">About</Link>
            </li>
            <li className="px-4">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="px-4">
              <Link to="/booking">Booking</Link>
            </li>
            <button className="px-4">
              <Link to="/login">Login</Link>
            </button>
            <button className="px-4">
              <Link to="/signup">Signup</Link>
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
