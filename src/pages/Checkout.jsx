import { useLocation, useNavigate } from "react-router-dom";
import "./Checkout.css";
import { useState } from "react";

export default function Checkout() {
  const location = useLocation();
  const { productsCart: cart } = location.state || { cart: [] };
  const [itemsCheckout, setItemCheckout] = useState(cart);

  const finish= useNavigate()

  console.log(itemsCheckout);

  const increaseQuantity = (id) => {
    const increase = itemsCheckout.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setItemCheckout(increase);
  };

  const decreaseQuantity = (id) => {
    const decrease = itemsCheckout.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setItemCheckout(decrease);
  };

  const removeItem = (id) => {
    const remove = itemsCheckout.filter((item) => item.id !== id);
    setItemCheckout(remove);
  };

  const calculateTotalPrice = () => {
    return cart
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  const handleFinish = () =>{
    alert("Compra finalizada com sucesso");
    finish("/products");
  }

  return (
    <>
      <div className="checkout-container">
        <h2 className="title">Checkout</h2>
        <ul>
          {cart.map((item) => (
            <div className="checkout-item">
              <div className="checkout-item-imagem">
                <img src={item.image} width="50px" height="50px" />
              </div>
              <p className="item-info">Produto: {item.title}</p>
              <p className="item-info">Quantidade: {item.quantity}</p>
              <p className="item-info">Preço: R${item.price}</p>
              <button
                className="action-buttons"
                onClick={() => increaseQuantity(item.id)}
              >
                +
              </button>
              <button
                className="action-buttons"
                onClick={() => decreaseQuantity(item.id)}
              >
                -
              </button>
              <button
                className="action-buttons"
                onClick={() => removeItem(item.id)}
              >
                Remover
              </button>
            </div>
          ))}
        </ul>
        <h3 className="item-info">Total: R${calculateTotalPrice()}</h3>
        <div className="payment-details">
          <p className="item-info">Selecione sua forma de pagamento:</p>
          <div className="payment-options">
            <label id="pix-option" htmlFor="pix">
              <input type="checkbox" name="PIX" id="pix" /> PIX
            </label>
            <label htmlFor="credit-card">
              <input type="checkbox" name="credit-card" id="credit-card" />{" "}
              Cartão de Crédito
            </label>
            <label htmlFor="boleto">
              <input type="checkbox" name="boleto" id="boleto" />
              Boleto
            </label>
          </div>
          <button onClick={() => handleFinish()}>Finalizar compra</button>
        </div>
      </div>
    </>
  );
}
