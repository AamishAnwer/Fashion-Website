import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import ShopFullWidth from "./pages/ShopFullWidth";
import ShopFullFiller from "./pages/ShopFullFiller";
import Detail from "./pages/Detail";
import Cart from "./pages/Cart";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/shop-full-width":
        title = "";
        metaDescription = "";
        break;
      case "/shop-full-filler":
        title = "";
        metaDescription = "";
        break;
      case "/detail":
        title = "";
        metaDescription = "";
        break;
      case "/cart":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop-full-width" element={<ShopFullWidth />} />
      <Route path="/shop-full-filler" element={<ShopFullFiller />} />
      <Route path="/detail" element={<Detail />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}
export default App;
