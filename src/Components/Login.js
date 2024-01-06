import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const resetForm = () => {
    setEmail("");
    setPassword("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({ email, password });
    try {
      const response = await fetch("https://goodvibes-backend.onrender.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email, password: password }),
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        resetForm();
        if (data.status === true) {
          navigate("/admin");
          toast.success("Login successfully");
        }
      } else {
        const errorData = await response.json();
        toast.error(` ${errorData.message}`);
      }
    } catch (error) {
      toast.error(` ${errorData.message}`);
    }
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-[860px] bg-slate-500 grid items-center p-16 md:p20 rounded-3xl">
        <div className="max-w-80 grid gap-5">
          <h1 className="text-5xl font-bold text-white">Login</h1>
          <form onSubmit={handleSubmit} className="space-y-6 text-white">
            <div className="relative">
              <div className="absolute top-1 left-1 bg-white-medium p-2 rounded-full flex items-centerer justify-center text-blue-600">
                <i className="fa-solid fa-envelope-open "></i>
              </div>
              <input
                required
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-60 bg-white-light px-12 py-2 rounded-full focus:bg-black focus:outline-none focus:ring-1 focus:ring-purple-500 focus:drop-shadow-lg"
              />
            </div>
            <button
              type="submit"
              className="bg-gradient-to-r from-cyan-200 to-indigo-600 w-60 font-semibold rounded-full px-3 py-2"
            >
              Login
            </button>
            <ToastContainer />
          </form>
          <div className="text-white border-t border-white-light pt-3 space-y-1 text-sm">
            <p>
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="text-blue-800 cursor-pointer font-semibold"
              >
                Sign up
              </Link>
            </p>
            {/* <p>
              Forget password{" "}
              <Link
                to="/reset"
                className="text-blue-800 cursor-pointer font-semibold"
              >
                Reset password
              </Link>
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
