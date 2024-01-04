import { useState, useEffect } from "react";
import BookedData from "./BookedData";
const About = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   getData();
  // }, []);

  // async function getData() {
  //   try {
  //     const json = await fetch("http://localhost:3000/getclient");
  //     const mydata = await json.json();
  //     // console.log(mydata);
  //     setData(mydata);
  //   } catch (error) {
  //     setError(error);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // }

  // if (isLoading) {
  //   return <p>Loading...</p>;
  // }

  // if (error) {
  //   return <p>Error: {error.message}</p>;
  // }

  // if (!data) {
  //   return null;
  // }

  return (
   
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://gico.io/wowhair/images/gallery/2.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://gico.io/wowhair/images/gallery/4.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://gico.io/wowhair/images/blog/1.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://gico.io/wowhair/images/gallery/5.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://gico.io/wowhair/images/gallery/8.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://gico.io/wowhair/images/gallery/3.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://gico.io/wowhair/images/service/4.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://gico.io/wowhair/images/service/2.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://gico.io/wowhair/images/blog/4.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://gico.io/wowhair/images/blog/5.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://gico.io/wowhair/images/blog/10.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://gico.io/wowhair/images/blog/6.jpg"
            alt=""
          />
        </div>
      </div>
    
  );
};

export default About;
