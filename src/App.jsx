import "./App.css";
import Login from "./pages/Login";
import Products from "./pages/Products";
import { Routes, Route } from "react-router-dom"
import ProductsDetails from "./pages/ProductsDetails";

function App() {
  return(
    <>
    <Routes>
      <Route path="/" element={ <Login/> }/>
      <Route path="/products" element={ <Products /> }/>  
      <Route path="/products/:id" element={ <ProductsDetails/> }/>
    </Routes>
    </>
  )
}

export default App;
