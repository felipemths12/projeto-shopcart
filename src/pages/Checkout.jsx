import { useLocation } from "react-router-dom";
import "./Checkout.css";
import { useState } from "react";

export default function Checkout(){

    const location = useLocation()
    console.log(location);

    const [productsCart, setProductsCart] = useState({})

    return(
        <>
            <div className="checkout-container">

            </div>
        </>
    )
    
}