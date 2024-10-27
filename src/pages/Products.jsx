import "./Products.css"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Products (){

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect (() => {
        const result = async () => {
            const response = await fetch ('https://fakestoreapi.com/products');
            const json = await response.json();
            setProducts(json)
        }

        result()

    }, []);

    const handleClick = (product) => {
        
        setCart([...cart, product]);


    }
    
    

    return (
        <>
        <div className="container">
        {products.map((product) => {
            return(
                <>
                <div className="products-container">
                    <div className="products-image">
                        <img src={product.image} width="250" height="250px" />
                    </div>
                    <p className="products-title">Produto: {product.title}</p>
                    <p className="products-price">Preço: R${product.price}</p>
                    <Link to={`/products/${product.id}`}>
                    <p className="more-details"><strong>Clique aqui para mais detalhes</strong></p>
                    </Link>
                    <button onClick={ () => handleClick(product) } className="add-to-cart">Adicionar ao carrinho</button>
                </div>
                </>
            )
        })}
        </div>

        </>
    )
    

    
}