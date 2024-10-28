import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import "./ProductsDetails.css"

export default function ProductsDetails() {

    const { id } = useParams()
    const [product, setProduct] = useState([]);

    useEffect (() => {
        const result = async () => {
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            const json = await response.json()
            setProduct(json)
        }

        
        
        result()

    }, [id]);

    return(
        <>
        <NavBar/>
        <div className="details-container">
            <div className="products-details">
                <img src={product.image} alt={product.description}  width="250" height="250px" />
                <p className="name">Nome: {product.title}</p>
                <p className="value">Valor: R${product.price}</p>
                <p className="description">{product.description}</p>
                {/* <p className="rate">Avaliação: {product.rating.rate} {product.rating.count}</p> */}
            </div>
        </div>
        </>
    )
}