import { useContext, useState } from "react";
import "./form.css";
import ApiQuery from "../apiquery/ApiQuery";
import Results from "../../pure/results/Results";
import Presentation from "../../pure/presentation/Presentation";
import NoResults from "../../pure/noResults/NoResults";
import Logout from "../../pure/logout/Logout";
import { UserContext } from "../../useContext/UserContext";

function FormQuery() {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [query, setQuery] = useState("");
  const [buttonClicked, setButtonClicked] = useState(false);
  const [inputValues, setInputValues] = useState(null)
  const {user} = useContext(UserContext);
  console.log(user)
  const existUser = Object.values(user).some((value) => value.trim() !=='');

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonClicked(true);
    setInputValues({
      author,
      title,
      query
    });
  };

   

  return (
    <div className="mainFormContent">
      <div className="left-background"></div>
      <div className="right-background"></div>
      <div className="formContent">
        <form onSubmit={handleSubmit} className="form">
          <label>Autor:</label>
          <input
            onChange={(e) => setAuthor(e.target.value)}
            value={author}
            type="text"
            name="author"
            placeholder="Günter Grass"
          />
          <label>Título:</label>
          <input
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            type="text"
            name="title"
            placeholder="El tambor de hojalata"
          />
          <label>Buscar por coincidencia:</label>
          <input
            onChange={(e) => setQuery(e.target.value)}
            value={query}
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
              if (noData) {
                return <NoResults />;
              } else {
                return <Results booksData={booksData} noData={noData} />;
              }
            }}
          </ApiQuery>
        ) : existUser ?
        (
          <Logout />
        )
        :
         (
          <Presentation />
        )}
      </div>
    </div>
  );
}

export default FormQuery;
