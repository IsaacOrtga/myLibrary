import { useEffect, useState } from "react";
import PropTypes from "prop-types";


function ApiQuery({ inputValues, children }) {
  const [booksData, setBooksData] = useState([]);
  const [noData, setNoData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      let URL = "https://www.googleapis.com/books/v1/volumes?q=";
      // const API_KEY = "AIzaSyBRJ5gV7ZIE__Ecv_zBBfBqrK1XyKk2cfk";
      const { author, title, query } = inputValues;
      if (!author && !title && !query) {
        return;
      }
      let queryToSearch = "";
      if (author) {
        queryToSearch += encodeURIComponent(author);
        URL += `+inauthor:${queryToSearch}`;
      }
      if (title) {
        queryToSearch += encodeURIComponent(title);
        URL += `+intitle:${queryToSearch}`;
      }
      if (query) {
        queryToSearch += encodeURIComponent(query);
        URL += `${queryToSearch}`;
      }

      try {
        const response = await fetch(URL);
        const result = await response.json();
        console.log(result)
       
        if (result && result.items && Array.isArray(result.items)) {
          const booksInfo = result.items.map((element) => {
            return {
              ...element.volumeInfo,
            };
          });
          setBooksData(booksInfo);
        } if(!result || !result.items || !Array.isArray(result.items)) {
          setNoData("No se han encontrado resultados para esta búsqueda");
        }
      } catch (error) {
        console.log("error", error);
      }
      
    };
    getData();
  }, [inputValues]);

  return children(booksData, noData);
}
ApiQuery.propTypes = {
  inputValues: PropTypes.shape({
    author: PropTypes.string,
    title: PropTypes.string,
    query: PropTypes.string,
  }).isRequired,
};
export default ApiQuery;