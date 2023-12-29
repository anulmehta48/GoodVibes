import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-[860px] bg-slate-500 grid items-center p-16 md:p20 rounded-3xl">
        <div className="max-w-80 grid gap-5">
          <h1 className="text-5xl font-bold text-white">Login</h1>
          <form action="" className="space-y-6 text-white">
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
                <i class="fa-solid fa-lock"></i>
              </div>
              <input
                type="password"
                placeholder="Password"
                className="w-60 bg-white-light px-12 py-2 rounded-full focus:bg-black focus:outline-none focus:ring-1 focus:ring-purple-500 focus:drop-shadow-lg"
              />
            </div>
            <button className="bg-gradient-to-r from-cyan-200 to-indigo-600 w-60 font-semibold rounded-full px-3 py-2">
              Login
            </button>
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
            <p>
              Forget password{" "}
              <Link
                to="/reset"
                className="text-blue-800 cursor-pointer font-semibold"
              >
                Reset password
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
