import Header from "./components/Header/Header";
import MainContentHome from "./components/Homepage/MainContentHome";
import "./Home.css";
import Footer from "./components/Footer/Footer";
function Home() {
  return (
    <div className="Home">
      <Header />
      <MainContentHome />
      <Footer />
    </div>
  );
}

export default Home;
