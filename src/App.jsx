import "./App.css";
import Login from "./pages/Login";
import Products from "./pages/Products";
import { Routes, Route } from "react-router-dom"

function App() {
  return(
    <>
    <Routes>
      <Route path="/" element={ <Login/> }/>
      <Route path="/products" element={ <Products /> }/>
    </Routes>
    </>
  )
}

export default App;
