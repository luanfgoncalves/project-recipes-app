import React, { useEffect, useState } from 'react';

function Login() {
  const [disabledButton, setDisabledButton] = useState(true);
  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const check = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]/i;
    const minNumber = 6;
    if (check.test(userEmail) && password.length > minNumber) {
      setDisabledButton(false);
    } else {
      setDisabledButton(true);
    }
  }, [userEmail, password]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setUserEmail(value);
    } else {
      setPassword(value);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form>
        <input
          type="email"
          name="email"
          value={ userEmail }
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
        >
          Enter
        </button>
      </form>
    </div>
  );
}

export default Login;
