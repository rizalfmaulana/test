import axios from "axios";
import { useEffect, useState } from "react";
import { INews } from "../types/news";

const useFetch = (url: string) => {
  const [news, setNews] = useState<INews>();
  const [isError, setIsError] = useState(false);
  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      setNews(response.data);
    } catch (error) {
      setIsError(true);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return { isError, news };
};
export default useFetch;
