import { useEffect, useState } from "react";
import BookedData from "./BookedData";

const Admin = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      const json = await fetch("https://goodvibes-backend.onrender.com/getclient");
      const mydata = await json.json();
      // console.log(mydata);
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
    <div>
      <BookedData {...data} />
    </div>
  );
};

export default Admin;
