import Logo from "../public/logo_gv.jpg";
const Header = () => {
  return (
    <div className="flex justify-between bg-orange-500 shadow-lg">
      <a href="/">
        <img className="h-20 rounded-full ml-16 p-2" alt="logo" src={Logo} />
      </a>
      <div className="navbar">
        <ul className="flex py-6 ">
          <li className="px-4">Home</li>
          <li className="px-4">About</li>
          <li className="px-4">Contact</li>
          <li className="px-4">Booking</li>
          <li className="px-4">SignIn</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
