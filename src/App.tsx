import { Routes, Route } from "react-router-dom"
import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import ProductDetail from "./Components/ProductDetail";
function App() {

  return (
    <>
      {/* <div className="container text-center py-5"> */}
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="about" element={ <About/> } />
        <Route path="product-detail" element={ <ProductDetail/> } />
      </Routes>
    {/* </div> */}
  




    </>
  );
}

export default App;
