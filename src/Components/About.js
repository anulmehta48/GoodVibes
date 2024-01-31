import { useState, useEffect } from "react";
import BookedData from "./BookedData";
const About = () => {
  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      const json = await fetch("http://localhost:3000/api/startCronJob");
      const mydata = await json.json();
      console.log(mydata);
    } catch (error) {
      console.log(error.message);
    }
  }
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
