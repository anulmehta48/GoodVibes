import { useState } from "react";

const data = 0;
const About = () => {
  const [count, setCount] = useState(data);

  return (
    <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8">
      <h1 className="text-9xl text-red-600">About Section</h1>
    </div>
  );
};

export default About;
