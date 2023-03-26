import Header from "./components/Header/Header";
import MainContentHome from "./components/Homepage/MainContentHome";
import "./Home.css";

function Home() {
  return (
    <div className="Home">
      <Header />
      <MainContentHome />
    </div>
  );
}

export default Home;
