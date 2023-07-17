import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Main from "./components/useContext/Main";

function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </div>
  );
}

export default App;
