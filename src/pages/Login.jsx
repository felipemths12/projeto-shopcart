import "./Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as EmailValidator from "email-validator";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailRegex =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi;

  const navigate = useNavigate();

  const buttonEnable = () => {
    return EmailValidator.validate(email) && password.length > 7;
  };

  const handleClick = () => {
    navigate("/products");
  };

  return (
    <>
      <div className="Login">
        <div className="login-container">
          <h1 className="title">Login</h1>
          <div className="input-container">
            <div id="email-input-container">
              <input
                type="email"
                onChange={(event) => setEmail(event.target.value)}
                className="typing"
                placeholder="Digite seu e-mail"
              />
              {!emailRegex.test(email) && (
                <p className="errorMessage">Insira um e-mail válido.</p>
              )}
            </div>
            <div id="password-input-container">
              <input
                type="password"
                onChange={(event) => setPassword(event.target.value)}
                className="typing"
                placeholder="Digite sua senha"
              />
              {password.length < 8 && (
                <p className="errorMessage">Digite uma senha válida</p>
              )}
            </div>
          </div>
          <label id="labelRemember" htmlFor="rememberMe">
            <input type="checkbox" id="rememberMe" />
            Lembrar de mim
            <p id="forgotPass">
              <a id="forgotText" href="#">
                Esqueci minha senha
              </a>
            </p>
          </label>
          <button onClick={handleClick} id="button" disabled={!buttonEnable()}>
            Login
          </button>
        </div>
      </div>
    </>
  );
}
