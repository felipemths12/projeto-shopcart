import { useLocation, useNavigate } from "react-router-dom";
import "./Checkout.css";
import { useState } from "react";
import NavBar from "../components/NavBar";

export default function Checkout() {
  const location = useLocation();
  const { productsCart: cart } = location.state || { cart: [] };
  const [itemsCheckout, setItemCheckout] = useState(cart);
  const [isCheckedPix, setIsCheckedPix] = useState(false);
  const [isCheckedCC, setIsCheckedCC] = useState(false);
  const [isCheckedBol, setIsCheckedBol] = useState(false);

  const finish = useNavigate();

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
    return itemsCheckout
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  const handleFinish = () => {
    alert("Compra finalizada com sucesso");
    finish("/products");
  };

  return (
    <>
      <NavBar
      hideCartButton={true}
      />
      <div className="checkout-container">
        <h2 className="title">Checkout</h2>
          {itemsCheckout.map((item) => (
            <div className="checkout-item">
              <div className="checkout-item-container">
              <div className="checkout-item-imagem">
                <img src={item.image} width="50px" height="50px" />
              </div>

              <p className="item-info">Produto: {item.title}</p>
              <p className="item-info">Quantidade: {item.quantity}</p>
              <p className="item-info">Preço: R${item.price}</p>
              <div className="button-container">
              <button
                className="actionButtons"
                onClick={() => increaseQuantity(item.id)}
                >
                +
              </button>
              <button
                className="actionButtons"
                onClick={() => decreaseQuantity(item.id)}
                >
                -
              </button>
              </div>
              <div className="remover">
              <button
                className="rButton"
                onClick={() => removeItem(item.id)}
                >
                Remover
              </button>
              </div>
            </div>
                </div>
          ))}
        <h3 className="item-info">Total: R${calculateTotalPrice()}</h3>
        <div className="payment-details">
          <p className="item-info"><strong>Selecione sua forma de pagamento:</strong></p>
          <div className="payment-options">
            <label id="pix-option" htmlFor="pix">
              <input
                type="checkbox"
                checked={isCheckedPix}
                onChange={() => setIsCheckedPix(!isCheckedPix)}
                name="PIX"
                id="pix"
              />{" "}
              PIX
            </label>
            <label htmlFor="credit-card">
              <input
                type="checkbox"
                checked={isCheckedCC}
                onChange={() => setIsCheckedCC(!isCheckedCC)}
                name="credit-card"
                id="credit-card"
              />{" "}
              Cartão de Crédito
            </label>
            <label htmlFor="boleto">
              <input
                type="checkbox"
                checked={isCheckedBol}
                onChange={() => setIsCheckedBol(!isCheckedBol)}
                name="boleto"
                id="boleto"
              />
              Boleto
            </label>
          </div>
          <div className="finish-container">
          <button
            disabled={!isCheckedPix && !isCheckedCC && !isCheckedBol}
            onClick={() => handleFinish()}
            className="finish"
            >
            Finalizar compra
          </button>
          </div>
        </div>
      </div>
    </>
  );
}
