import { useState } from "react";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
const Signup = () => {
  const [fullName, setFullName] = useState("");
  const [email, seTEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const resetForm = () => {
    setFullName("");
    seTEmail("");
    setMobile("");
    setPassword("");
  };

  const validateForm = () => {
    if (!fullName || !email || !mobile || !password) {
      toast.error("Please fill in all required details");
      return false;
    }

    if (fullName.length < 7) {
      toast.error("Full name should be at least 7 characters");
      return false;
    }
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address");
      return false;
    }

    // Validate mobile number (assuming a valid number is a 10-digit number)
    if (!/^\d{10}$/.test(mobile)) {
      toast.error("Please enter a valid 10-digit mobile number");
      return false;
    }
    if (password.length < 8) {
      toast.error("Please enter 8 charcter  paasword");
      return false;
    }
    if (!/(?=.*[A-Z])(?=.*\d)/.test(password)) {
      toast.error("Please enter one uppercase letter & one digit paasword");
      return false;
    }

    // Additional validation checks if needed
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({ fullName, email, mobile, password });

    if (!validateForm()) {
      return;
    }
    setIsButtonDisabled(true);
    try {
      const response = await fetch("https://goodvibes-backend.onrender.com/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: fullName,
          email: email,
          mobile: mobile,
          password: password,
        }),
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        toast.success("Registration has been successfully");
        resetForm();
      } else {
        const errorData = await response.json();
        toast.error(` ${errorData.message}`);
      }
    } catch (error) {
      toast.error(`${error.message}`);
    } finally {
      setIsButtonDisabled(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-[860px] bg-slate-500 grid items-center p-16 md:p20 rounded-3xl">
        <div className="max-w-80 grid gap-5">
          <h1 className="text-5xl font-bold text-white">Register</h1>
          <form className="space-y-6 text-white" onSubmit={handleSubmit}>
            <div className="relative">
              <div className="absolute top-1 left-1 bg-white-medium p-2 rounded-full flex items-centerer justify-center text-blue-600">
                <i className="fa-solid fa-user"></i>
              </div>
              <input
                required
                type="text"
                placeholder="FullName"
                name="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-60 bg-white-light px-12 py-2 rounded-full focus:bg-black focus:outline-none focus:ring-1 focus:ring-purple-500 focus:drop-shadow-lg"
              />
            </div>
            <div className="relative">
              <div className="absolute top-1 left-1 bg-white-medium p-2 rounded-full flex items-centerer justify-center text-blue-600">
                <i className="fa-solid fa-envelope-open "></i>
              </div>
              <input
                required
                type="email"
                placeholder="Email Address"
                name="email"
                value={email}
                onChange={(e) => seTEmail(e.target.value)}
                className="w-60 bg-white-light px-12 py-2 rounded-full focus:bg-black focus:outline-none focus:ring-1 focus:ring-purple-500 focus:drop-shadow-lg"
              />
            </div>
            <div className="relative">
              <div className="absolute top-1 left-1 bg-white-medium p-2 rounded-full flex items-centerer justify-center text-blue-600">
                <i className="fa-solid fa-mobile"></i>
              </div>
              <input
                required
                type="number"
                placeholder="Mobile Number"
                name="mobile"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                className="w-60 bg-white-light px-12 py-2 rounded-full focus:bg-black focus:outline-none focus:ring-1 focus:ring-purple-500 focus:drop-shadow-lg"
              />
            </div>
            <div className="relative">
              <div className="absolute top-1 left-1 bg-white-medium p-2 rounded-full flex items-centerer justify-center text-blue-600">
                <i className="fa-solid fa-lock"></i>
              </div>
              <input
                required
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-60 bg-white-light px-12 py-2 rounded-full focus:bg-black focus:outline-none focus:ring-1 focus:ring-purple-500 focus:drop-shadow-lg"
              />
            </div>
            <button
              disabled={isButtonDisabled}
              type="submit"
              className="bg-gradient-to-r from-cyan-200 to-indigo-600 w-60 font-semibold rounded-full px-3 py-2"
            >
              Signup
            </button>
            <ToastContainer />
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

export default Signup;
