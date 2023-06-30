import { useState } from "react";
import "./form.css";
import ApiQuery from "../apiquery/ApiQuery";
import Results from "../../pure/results/Results";
import Presentation from "../../pure/presentation/Presentation";

function FormQuery() {
  const [inputValues, setInputValues] = useState({
    author: "",
    title: "",
    query: "",
  });
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonClicked(true);
  };

  const handleValue = (e) => {
    const { name, value } = e.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
    setButtonClicked(false);
  };

  return (
    <div className="mainFormContent">
      <div className="left-background"></div>
      <div className="right-background"></div>
      <div className="formContent">
        <form onSubmit={handleSubmit} className="form">
          <label>Autor:</label>
          <input
            onChange={handleValue}
            value={inputValues.author}
            type="text"
            name="author"
            placeholder="Günter Grass"
          />
          <label>Título:</label>
          <input
            onChange={handleValue}
            value={inputValues.title}
            type="text"
            name="title"
            placeholder="El tambor de hojalata"
          />
          <label>Correspondencia:</label>
          <input
            onChange={handleValue}
            value={inputValues.query}
            type="text"
            name="query"
            placeholder="Historia de España"
          />
          <button type="submit" className="button">
            Buscar
          </button>
        </form>

        {buttonClicked ? (
          <ApiQuery inputValues={inputValues}>
            {(booksData, noData) => {
              if (booksData.length === 0) {
                return <Presentation />;
              } else {
                return <Results booksData={booksData} noData={noData} />;
              }
            }}
          </ApiQuery>
        ) : (
          <Presentation />
        )}
      </div>
    </div>
  );
}

export default FormQuery;
