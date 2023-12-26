import { useState, useEffect } from "react";
const About = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      const json = await fetch("http://localhost:3000/getclient");
      const mydata = await json.json();
      console.log(mydata);
      setData(mydata);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!data) {
    return null;
  }

  return (
    <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8">
      <h1 className="text-9xl text-red-600">About Section</h1>
      {data?.data?.map((res) => {
        return <h1 key={res._id}>{res?.fullName}</h1>;
      })}
    </div>
  );
};

export default About;
