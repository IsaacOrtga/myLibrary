import Navbar from "../navbar/Navbar";
import FormQuery from "../../container/formQuery/FormQuery";

function Home () {
  return (
    <>
         <header>
        <Navbar />
      </header>
      <main className="mainContent">
        <FormQuery />
      </main>
    </>
  )
}
export default Home;
