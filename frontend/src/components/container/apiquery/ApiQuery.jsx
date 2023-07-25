import { useEffect, useState, useContext } from "react";
import PropTypes from "prop-types";
import { CounterContext } from "../../useContext/CounterContext";

function ApiQuery({ inputValues, children }) {
  const [booksData, setBooksData] = useState([]);
  const [noData, setNoData] = useState(false);
  const { startIn } = useContext(CounterContext);

  useEffect(() => {
    if (!inputValues || !inputValues.author && !inputValues.title && !inputValues.query) {
        return;
      }
    const getData = async () => {
      let URL = "https://www.googleapis.com/books/v1/volumes?q=";
      // const API_KEY = "AIzaSyBRJ5gV7ZIE__Ecv_zBBfBqrK1XyKk2cfk";
      const { author, title, query } = inputValues;
      

      let queryToSearch = "";
      let authorToSearch = "";
      let titleToSearch = "";
      if (author) {
        authorToSearch += encodeURIComponent(author);
        URL += `+inauthor:${authorToSearch}&maxResults=10&startIndex=${startIn}`;
      }
      if (title) {
        titleToSearch += encodeURIComponent(title);
        URL += `+intitle:${titleToSearch}&maxResults=10&startIndex=${startIn}`;
      }
      if (query) {
        queryToSearch += encodeURIComponent(query);
        URL += `${queryToSearch}&maxResults=10&startIndex=${startIn}`;
      }

      try {
        const response = await fetch(URL);
        const result = await response.json();
        if (result && result.items && Array.isArray(result.items)) {
          setNoData(false);
          const booksInfo = result.items.map((element) => {
            return {
              ...element.volumeInfo,
            };
  
          });
          setBooksData(booksInfo);
        }
        if (!result || !result.items || !Array.isArray(result.items)) {
          setNoData(true);
        }
      } catch (error) {
        console.log("error", error);
      }
    };
    getData();
  }, [inputValues, startIn]);

  return children(booksData, noData);
}
ApiQuery.propTypes = {
  inputValues: PropTypes.shape({
    author: PropTypes.string,
    title: PropTypes.string,
    query: PropTypes.string,
  })
};
export default ApiQuery;
