import { useState } from "react";

const data = 0;
const About = () => {
  const [count, setCount] = useState(data);

  return (
    <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8">
      <h1 className="text-9xl text-red-600">About Section</h1>
      <h1 className=" ml-20 font-bold">{count}</h1>
      <button
        className="font-bold p-4 m-5"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Add Button
      </button>
      <button
        className="font-bold p-4 m-5"
        onClick={() => {
          if (count > 0) {
            setCount(count-1);
          } 
        }}
      >
        Subtract Button
      </button>
    </div>
  );
};

export default About;
