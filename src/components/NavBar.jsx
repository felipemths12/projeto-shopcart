import "./Navbar.css";
import { useLocation, useNavigate } from "react-router-dom";

export default function NavBar({
  cart,
  isCartOpen,
  onCartClick,
  calculateTotalPrice,
  removeItem,
  decreaseQuantity,
  increaseQuantity,
  goToCheckout,
  hideCartButton,
}) {
  const navigate = useNavigate();

  const location = useLocation();
  const isDetailsPage = location.pathname.includes("/products/");
  const isCheckoutPage = location.pathname.includes("/checkout");

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="navbar">
        <ul className="external ul">
          <li className="back">
            <button className="bback" onClick={handleBackClick}>
              VOLTAR
            </button>
          </li>
          <li className={isDetailsPage ? "shopcart-centered" : "title-navbar" && isCheckoutPage ? "shopcart-center" : "title-navbar"}>
            <strong>ShopCart</strong>
          </li>
          {!hideCartButton && (
            <li className="cart">
              <button onClick={onCartClick} className="ccart">
                CARRINHO
              </button>
            </li>
          )}
        </ul>

        {isCartOpen && (
          <div className="modal-overlay">
            <div className="modal-content">
              <button className="close-button" onClick={onCartClick}>
                FECHAR
              </button>
              <h2 className="cart-title">Carrinho</h2>
              {cart.length > 0 ? (
                <div className="cart-container">
                  {cart.map((item) => (
                    <div className="cart-item">
                      <div className="cart-item-image">
                        <img src={item.image} width="100px" height="100px" />
                      </div>
                      <p className="teste">Produto: {item.title}</p>
                      <p className="teste">R${item.price}</p>
                      <p className="teste">Quantidade: {item.quantity}</p>
                      <div className="button-container">
                      <button
                        className="actionButtons"
                        onClick={() => decreaseQuantity(item.id)}
                        >
                        -
                      </button>
                      <button
                        className="actionButtons"
                        onClick={() => increaseQuantity(item.id)}
                        >
                        +
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
                  ))}
                  <p className="total">
                    <strong>Total: R${calculateTotalPrice()}</strong>
                  </p>
                  <button onClick={goToCheckout} className="checkout-button">
                    Finalizar compra
                  </button>
                </div>
              ) : (
                <p className="teste">Seu carrinho está vazio.</p>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
