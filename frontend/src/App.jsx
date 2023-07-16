import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Main from "./components/useContext/Main";

function App() {
  return (
    <userProvider>
      <div className="App">
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </div>
    </userProvider>
  );
}

export default App;
