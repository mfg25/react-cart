import React, { useContext } from 'react';
import "./MainLoginPage.css";
import { Link } from "react-router-dom";
import { useState } from 'react';
import { registerUser, loginUser, useAuth } from '../../services/authService';
import { useNavigate } from "react-router-dom";

export const MainLoginPage = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const {login} = useAuth()
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); // Evita o reload da página
    setLoading(true);
    console.log(email)
    console.log(password)

    try {
      const user = await loginUser(email, password);
      setMessage(`Login bem-sucedido! Bem-vindo, ${user.displayName || user.email}`);
      login(user)
      navigate("/")
    } catch (error) {
      setMessage('Erro ao fazer login: ' + error.message);
    } finally {
      setLoading(false);
      console.log(message)
    }
  };

  return (
    <main id='main-login-page'>
    <div id="form-container">
      <form action="" onSubmit={handleSubmit} id="form" novalidate>
        <div id="email-div">
          <input
            type="email"
            id="email"
            placeholder="Email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <p class="error-message" id="email-error"></p>
        </div>
        <div>
          <input
            type="password"
            id="password"
            placeholder="Senha"
            required
            minLength="8"
            maxLength="20"
            onChange={(e) => setPassword(e.target.value)}
          />
          <p class="error-message" id="password-error"></p>
        </div>
        <button id="entrar" type='submit'>Entrar</button>
        <p id="esqueceu-senha">Esqueceu a senha?</p>
        <div id="line"></div>
        <Link id="new-account" to="/register">
          <button id="nova-conta">Criar nova conta</button>
        </Link>
      </form>
    </div>
    </main>
  );
};

export const MainRegisterPage = () => {

  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); // Evita o comportamento padrão de recarregar a página
    setLoading(true);

    try {
      await registerUser(email, password, username, phoneNumber)
      console.log(email + " " + username + " " + password)
      setMessage("Usuário cadastrado com sucesso!");
      navigate("/login")
    } catch (error) {
      setMessage("Erro ao cadastrar usuário: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main id='main-login-page'>
    <div id="form-container">
      <h1>Registrar</h1>
      <form action="" id="form" onSubmit={handleSubmit}>
        <div id="email-password-container">
          <div>
            <input
              type="text"
              id="username"
              placeholder="Nome de usuário"
              required
              minLength="3"
              maxLength="20"
              onChange={(e) => setUsername(e.target.value)}
            />
            <p class="error-message" id="username-error"></p>
          </div>
          <div>
            <input
              type="tel"
              id="phone"
              placeholder="Número de telefone"
              required
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <p class="error-message" id="username-error"></p>
          </div>
          <div id="email-div">
            <input
              type="email"
              id="email"
              placeholder="Email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <p class="error-message" id="email-error"></p>
          </div>
          <div>
            <input
              type="password"
              id="password"
              placeholder="Senha"
              required
              minLength="8"
              maxLength="20"              
              onChange={(e) => setPassword(e.target.value)}
            />
            <p class="error-message" id="password-error"></p>
          </div>
        </div>
          <button id="nova-conta" type='submit' disabled={loading}>Criar nova conta</button>
      </form>
    </div>
    </main>
  );
};
