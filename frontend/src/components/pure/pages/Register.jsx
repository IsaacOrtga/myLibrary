import Navbar from "../navbar/Navbar";
import RegisterForm from "../register/RegisterForm";

function Home () {
  return (
    <>
         <header>
        <Navbar />
      </header>
      <main className="mainContent">
        <RegisterForm />
      </main>
    </>
  )
}
export default Home;
