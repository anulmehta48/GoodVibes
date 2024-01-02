import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Booking = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [fullname, setFullName] = useState("");
  const [email, seTEmail] = useState("");
  const [number, setNumber] = useState("");
  const [services, setServices] = useState("");
  const [notes, setNotes] = useState("");
  const navigate = useNavigate();

  const resetForm = () => {
    setDate("");
    setTime("");
    setFullName("");
    seTEmail("");
    setNumber("");
    setServices("");
    setNotes("");
  };

  const validateForm = () => {
    if (!date || !time || !fullname || !email || !number || !services) {
      toast.error("Please fill in all required fields");
      return false;
    }

    const timeRegex = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
    if (!timeRegex.test(time)) {
      toast.error("Please enter a valid time format (HH:mm)");
      return false;
    }

    if (fullname.length < 4) {
      toast.error("Full name should be at least 4 characters");
      return false;
    }
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address");
      return false;
    }

    // Validate mobile number (assuming a valid number is a 10-digit number)
    if (!/^\d{10}$/.test(number)) {
      toast.error("Please enter a valid 10-digit mobile number");
      return false;
    }

    // Additional validation checks if needed
    return true;
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();
    console.log({ date, time, fullname, email, number, services, notes });

    if (!validateForm()) {
      return;
    }
    try {
      const response = await fetch("http://localhost:3000/appointment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          appointDate: date,
          appointTime: time,
          fullName: fullname,
          email: email,
          mobile: number,
          services: services,
          notes: notes,
        }),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData);
        toast.success("Your Booking has been successfully");
        resetForm();
      } else {
        const errorData = await response.json();
        toast.error(` ${errorData.message}`);
      }
    } catch (error) {
      toast.error(`${error.message}`);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-[860px] bg-slate-500 grid items-center p-14  md:p-10 rounded-3xl">
        <div className="max-w-80 grid gap-5">
          <h1 className="text-5xl font-bold text-white flex justify-center items-center">
            Booking
          </h1>
          <form className="space-y-6 text-white" onSubmit={HandleSubmit}>
            <div className="relative">
              <div className="absolute top-1 left-1 bg-white-medium p-2 rounded-full flex items-centerer justify-center text-blue-600">
                <i className="fa-solid fa-calendar-days"></i>
              </div>
              <input
                type="date"
                placeholder="Date"
                min="2023-12-31"
                name="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
                className="w-60 easy-click bg-white-light px-12 py-2 rounded-full focus:bg-black focus:outline-none focus:ring-1 focus:ring-purple-500 focus:drop-shadow-lg"
              />
            </div>
            <div className="relative">
              <div className="absolute top-1 left-1 bg-white-medium p-2 rounded-full flex items-centerer justify-center text-blue-600">
                <i className="fa-solid fa-clock"></i>
              </div>
              <input
                type="time"
                placeholder="Time"
                name="time"
                min="10:00"
                max="21:30"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
                className="w-60 bg-white-light px-12 py-2 rounded-full focus:bg-black focus:outline-none focus:ring-1 focus:ring-purple-500 focus:drop-shadow-lg"
              />
            </div>
            <div className="relative">
              <div className="absolute top-1 left-1 bg-white-medium p-2 rounded-full flex items-centerer justify-center text-blue-600">
                <i className="fa-solid fa-user"></i>
              </div>
              <input
                type="text"
                placeholder="fullName"
                name="fullname"
                value={fullname}
                onChange={(e) => setFullName(e.target.value)}
                required
                className="w-60 bg-white-light px-12 py-2 rounded-full focus:bg-black focus:outline-none focus:ring-1 focus:ring-purple-500 focus:drop-shadow-lg"
              />
            </div>
            <div className="relative">
              <div className="absolute top-1 left-1 bg-white-medium p-2 rounded-full flex items-centerer justify-center text-blue-600">
                <i className="fa-solid fa-envelope-open "></i>
              </div>
              <input
                type="email"
                placeholder="Email Address"
                name="email"
                value={email}
                onChange={(e) => seTEmail(e.target.value)}
                required
                className="w-60 bg-white-light px-12 py-2 rounded-full focus:bg-black focus:outline-none focus:ring-1 focus:ring-purple-500 focus:drop-shadow-lg"
              />
            </div>
            <div className="relative">
              <div className="absolute top-1 left-1 bg-white-medium p-2 rounded-full flex items-centerer justify-center text-blue-600">
                <i className="fa-solid fa-mobile"></i>
              </div>
              <input
                type="number"
                placeholder="Mobile Number"
                name="number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                required
                className="w-60 bg-white-light px-12 py-2 rounded-full focus:bg-black focus:outline-none focus:ring-1 focus:ring-purple-500 focus:drop-shadow-lg"
              />
            </div>
            <div className="relative">
              <div className="absolute top-1 left-1 bg-white-medium p-2 rounded-full flex items-centerer justify-center text-blue-600">
                <i className="fa-solid fa-scissors"></i>
              </div>
              <select
                className="w-60 bg-white-light px-12 py-2  rounded-full focus:bg-black focus:outline-none focus:ring-1 focus:ring-purple-500 focus:drop-shadow-lg"
                required
                name="services"
                value={services}
                onChange={(e) => setServices(e.target.value)}
              >
                <option>--Select Services--</option>
                <option>HairCut</option>
                <option>BeardCut</option>
                <option>Facial</option>
                <option>Steaming</option>
              </select>
            </div>
            <div className="relative">
              <div className="absolute top-1 left-1 bg-white-medium p-2 rounded-full flex items-centerer justify-center text-blue-600">
                <i className="fa-regular fa-message"></i>
              </div>
              <input
                type="text"
                placeholder="Notes(optional)"
                name="notes"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-60 bg-white-light px-12 py-2 rounded-full focus:bg-black focus:outline-none focus:ring-1 focus:ring-purple-500 focus:drop-shadow-lg"
              />
            </div>
            <button
              type="submit"
              className="bg-gradient-to-r from-cyan-200 to-indigo-600 w-60 font-semibold rounded-full px-3 py-2"
            >
              Book Now
            </button>
            <ToastContainer />
          </form>
          <div className="text-white border-t border-white-light pt-3 space-y-1 text-sm">
            <p>
              Already have an account?
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
