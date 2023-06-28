import { useEffect, useState } from "react";
import Form from "../pure/form/Form";
import Results from "../pure/results/Results";

function ApiQuery() {
  const [booksData, setBooksData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      let URL = "https://www.googleapis.com/books/v1/volumes?q=";
      fetch(URL + "reverte")
        .then((response) => response.json())
        .then((result) => {
          if (result && result.items && Array.isArray(result.items)) {
            const booksInfo = result.items.map((element) => {
              return {
                ...element.volumeInfo,
       
              };
            });
            setBooksData(booksInfo);
          } else {
            console.log("No hay resultados para esta búsqueda");
          }
        })

        .catch((error) => console.log("error", error));
    };
    getData();
  }, [booksData]);

  return (
    <div>
      <Form />
      <Results booksData = { booksData }/>
    </div>
  );
}
export default ApiQuery;
