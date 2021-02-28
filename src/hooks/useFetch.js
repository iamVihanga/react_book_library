import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (volume, maxResults) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const apiKey = "AIzaSyBiXU6PTdHscuZ6krw-d8fH63u7eA3xH-g";

  useEffect(() => {
    setIsPending(true);
    axios(
      `https://www.googleapis.com/books/v1/volumes?q=${volume}&key=${apiKey}&maxResults=${maxResults}`
    ).then((data) => {
      setData(data.data.items);
      setIsPending(false);
    });
  }, [volume, maxResults]);

  return { data, isPending, error };
};

export default useFetch;
