import { useState } from "react"
import "./Navbar.css"
import { Link, useNavigate } from "react-router-dom"

export default function NavBar({ cart, isCartOpen, onCartClick }) {
    const increaseQuantity = (id) => {
        setCart(cart.map(item =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        ));
    };

    const decreaseQuantity = (id) => {
        setCart(cart.map(item =>
            item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
        ));
    };
    
    const removeItem = (id) => {
        setCart(cart.filter(item => item.id !== id));
    };

    // const openCart = () => setIsCartOpen(true)
    // const closeCart = () => setIsCartOpen(false)
    
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
            <div className="modal-overlay" onClick={onCartClick}>
          <div className="modal-content">
            <button className="close-button" onClick={onCartClick}>FECHAR</button>
            <h2 className="cart-title">Carrinho</h2>
            {cart.length > 0 ? (
                <ul>
                {cart.map((item) => (
                    <div className="cart-item">
                        <div className="cart-item-image"><img src={item.image} width="100px" height="100px" /></div>
                        <p className="teste">Produto: {item.title}</p>
                        <p className="teste">R$ {item.price}</p>
                        <p className="teste">Quantidade: {item.quantity}</p>
                        <button onClick={() => decreaseQuantity(item.id)}>-</button>
                        <button onClick={() => increaseQuantity(item.id)}>+</button>
                        <button onClick={() => removeItem(item.id)}>Remover</button>
                    </div>
                ))}
              </ul>
            ) : (
                <p className="teste">Seu carrinho está vazio.</p>
            )}
            {/* Botão de Checkout */}
            {/* <button onClick={goToCheckout} className="checkout-button">
              Ir para o Checkout
              </button> */}
            {/* Botão para fechar o modal */}
            {/* <button onClick={closeCart} className="close-button">
              Fechar
            </button> */}
          </div>
        </div>
      )}
      </div>
        </>
    )
}