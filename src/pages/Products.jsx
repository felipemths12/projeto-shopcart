import "./Products.css"
import { useEffect, useState } from "react";

export default function Products (){

    const [data, setData] = useState([]);

    useEffect (() => {
        const result = async () => {
            const response = await fetch ('https://fakestoreapi.com/products');
            const json = await response.json();
            setData(json)
        }

        result()

    }, []);
    
    console.log(data)

    return (
        <>
        <div className="container">
        {data.map((data) => {
            return(
                <>
                <div className="products-container">
                    <div className="products-image">
                        <img src={data.image} width="250" height="250px" />
                    </div>
                    <p className="products-title">Produto: {data.title}</p>
                    <p className="products-price">Preço: R${data.price}</p>
                    {/* adicionar Link aqui */}
                    <p className="more-details"><strong>Clique aqui para mais detalhes</strong></p>
                    <button className="add-to-cart">Adicionar ao carrinho</button>
                </div>
                </>
            )
        })}
        </div>

        </>
    )
    

    
}