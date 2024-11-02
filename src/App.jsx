import "./App.css";
import Login from "./pages/Login";
import Products from "./pages/Products";
import { Routes, Route } from "react-router-dom"
import ProductsDetails from "./pages/ProductsDetails";
import Checkout from "./pages/Checkout";

function App() {
  return(
    <>
    <Routes>
      <Route path="/" element={ <Login/> }/>
      <Route path="/products" element={ <Products /> }/>  
      <Route path="/products/:id" element={ <ProductsDetails/> }/>
      <Route path="/checkout" element={ <Checkout/> }/>
    </Routes>
    </>
  )
}

export default App;
