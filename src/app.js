import ReacDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Error from "./Components/Error";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Booking from "./Components/Booking";
import Login from "./Components/Login";
import Signup from "./Components/Signup";

const AppLayout = () => {
  return (
    <>
      <div className="bg-red-300 h-full bg-repeat max-w-[1800px] mx-auto" >
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/booking",
        element: <Booking />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
]);

const root = ReacDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
