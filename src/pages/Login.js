import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

function Login() {
  const [disabledButton, setDisabledButton] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  useEffect(() => {
    const check = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]/i;
    const minNumber = 6;
    if (check.test(email) && password.length > minNumber) {
      setDisabledButton(false);
    } else {
      setDisabledButton(true);
    }
  }, [email, password]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else {
      setPassword(value);
    }
  };

  const handleClick = () => {
    const savedEmail = { email };
    localStorage.setItem('user', JSON.stringify(savedEmail));
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);
    history.push('/foods');
  };

  return (
    <div>
      <h1>Login</h1>
      <form>
        <input
          type="email"
          name="email"
          value={ email }
          placeholder="email"
          data-testid="email-input"
          onChange={ handleChange }
        />
        <input
          type="password"
          name="password"
          value={ password }
          placeholder="senha"
          data-testid="password-input"
          onChange={ handleChange }
        />
        <button
          type="submit"
          data-testid="login-submit-btn"
          disabled={ disabledButton }
          onClick={ handleClick }
        >
          Enter
        </button>
      </form>
    </div>
  );
}

export default Login;
