import "./Products.css";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const result = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const json = await response.json();
      setProducts(json);
    };

    result();
  }, []);

  const handleClick = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const handleCartClick = () => {
    setIsCartOpen(!isCartOpen);
  };

  const calculateTotalPrice = () => {
    return cart
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  const increaseQuantity = (id) => {
    const increase = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(increase);
  };

  const decreaseQuantity = (id) => {
    const decrease = cart.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCart(decrease);
  };

  const removeItem = (id) => {
    const remove = cart.filter((item) => item.id !== id);
    setCart(remove);
  };

  const goToCheckout = () => {
    navigate("/checkout", { state: { productsCart: cart }});
  }

  return (
    <>
      <NavBar
        cart={cart}
        isCartOpen={isCartOpen}
        onCartClick={handleCartClick}
        calculateTotalPrice={calculateTotalPrice}
        removeItem={removeItem}
        decreaseQuantity={decreaseQuantity}
        increaseQuantity={increaseQuantity}
        goToCheckout={goToCheckout}
      />
      <div className="container">
        {products.map((product) => {
          return (
            <>
              <div className="products-container">
                <div className="products-image">
                  <img src={product.image} width="250" height="250px" />
                </div>
                <p className="products-title">Produto: {product.title}</p>
                <p className="products-price">Preço: R${product.price}</p>
                <Link to={`/products/${product.id}`}>
                  <p className="more-details">
                    <strong>Clique aqui para mais detalhes</strong>
                  </p>
                </Link>
                <button
                  onClick={() => handleClick(product)}
                  className="add-to-cart"
                >
                  Adicionar ao carrinho
                </button>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
