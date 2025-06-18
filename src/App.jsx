import News from "./components/News/News";
import Home from "./components/Home/Home";
import Feature from "./components/Feature/Feature";
import Categories from "./components/Categories";
import Offers from "./components/Offers";
import Seller from "./components/Seller";
import Rotate from "./components/Rotate";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Home />
      <Feature></Feature>
      <Categories />
      <Offers />
      <Seller />
      <Rotate />
      <News></News>
      <Footer />
    </>
  );
}

export default App;
