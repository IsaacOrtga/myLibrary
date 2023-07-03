//  import "./App.css";
//  import FormQuery from "./components/container/formQuery/FormQuery";
//  import Navbar from "./components/pure/navbar/Navbar";
//  function App() {
//    return (
//      <div className="container">
//        <header>
//          <Navbar />
//        </header>
//        <main className="mainContent">
//          <FormQuery />
//        </main>
//      </div>
//    );
//  }
//  export default App;
 import { BrowserRouter } from "react-router-dom";
 import "./App.css";
 import AppRoutes from "./routes/AppRoutes";


 function App() {
 
   return (
    <userProvider>
     <div className='App'>
     <BrowserRouter>
     <AppRoutes />
     </BrowserRouter>
     </div>
     </userProvider>
   );
 }

 export default App;
