import "./Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  
  const handleClick = () => {
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

    if (emailRegex.test(email) && password >= 8){
        alert("Seja bem-vindo!");
    } else {
        alert("E-mail e/ou senha inválidas");
    }
  };

  return (
    <>
      <div className="Login">
        <div className="login-container">
          <h1 className="title">Login</h1>
          <div className="input-container">
              <input
                type="email"
                onChange={(event) => setEmail(event.target.value)}
                className="typing"
                placeholder="Digite seu e-mail"
              />
              <input
                type="password"
                onChange={(event) => setPassword(event.target.value)}
                className="typing"
                placeholder="Digite sua senha"
              />
          </div>
          <label id="labelRemember" htmlFor="rememberMe">
            <input type="checkbox" id="rememberMe" />
            Lembrar de mim
            <p id="forgotPass">
                <a id="forgotText" href="#">Esqueci minha senha</a>
            </p>
          </label>
          <button onClick={handleClick} id="button">
            Login
          </button>
        </div>
      </div>
    </>
  );
}
