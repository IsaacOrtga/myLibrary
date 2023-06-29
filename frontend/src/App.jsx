import "./App.css";
import FormQuery from "./components/container/formQuery/FormQuery";
import Navbar from "./components/pure/navbar/Navbar";

function App() {
  return (
    <div className="container">
      <header>
        <Navbar />
      </header>
      <main className="mainContent">
        <FormQuery />
      </main>
    </div>
  );
}

export default App;
