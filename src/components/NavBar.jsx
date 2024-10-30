import { useState } from "react"
import "./Navbar.css"
import { Link, useNavigate } from "react-router-dom"

export default function NavBar({ cart, isCartOpen, onCartClick, calculateTotalPrice, removeItem, decreaseQuantity, increaseQuantity }) {
    
    const navigate = useNavigate()

    const handleBackClick = () => {
        navigate(-1)
    }
    
    return(
        <>
        <div className="navbar">
            <ul>
                <li className="back"><button className="bback" onClick={handleBackClick}>VOLTAR</button></li>
                <li className="title-navbar"><strong>ShopCart</strong></li>
                <li className="cart"><button onClick={onCartClick} className="ccart">CARRINHO</button></li>
            </ul>

        {isCartOpen && (
            <div className="modal-overlay" >
          <div className="modal-content">
            <button className="close-button" onClick={onCartClick}>FECHAR</button>
            <h2 className="cart-title">Carrinho</h2>
            {cart.length > 0 ? (
                <ul>
                {cart.map((item) => (
                    <div className="cart-item">
                        <div className="cart-item-image"><img src={item.image} width="100px" height="100px" /></div>
                        <p className="teste">Produto: {item.title}</p>
                        <p className="teste">R${item.price}</p>
                        <p className="teste">Quantidade: {item.quantity}</p>
                        <button className="actionButtons" onClick={() => decreaseQuantity(item.id)}>-</button>
                        <button className="actionButtons" onClick={() => increaseQuantity(item.id)}>+</button>
                        <button className="actionButtons" onClick={() => removeItem(item.id)}>Remover</button>                        
                    </div>
                ))}
                <p className="total"> Total: R${calculateTotalPrice()}</p>
              </ul>
        
            ) : (
                <p className="teste">Seu carrinho está vazio.</p>
            )}
            {/* Botão de Checkout */}
            {/* <button onClick={goToCheckout} className="checkout-button">
              Ir para o Checkout
              </button> */}
          </div>
        </div>
      )}
      </div>
        </>
    )
}