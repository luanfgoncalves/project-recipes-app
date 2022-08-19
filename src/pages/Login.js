import React from 'react';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      disabled: true,
    };
  }

  isButtonDisabled = () => {
    const { email, password } = this.state;
    const check = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]/i;
    const minNumber = 6;
    if (check.test(email) && password.length > minNumber) {
      return this.setState({ disabled: false });
    }
    return this.setState({ disabled: true });
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value }, () => {
      this.isButtonDisabled();
    });
  };

  render() {
    const { email, password, disabled } = this.state;
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
            onChange={ this.handleChange }
          />
          <input
            type="password"
            name="password"
            value={ password }
            placeholder="senha"
            data-testid="password-input"
            onChange={ this.handleChange }
          />
          <button
            type="submit"
            data-testid="login-submit-btn"
            disabled={ disabled }
          >
            Enter
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
