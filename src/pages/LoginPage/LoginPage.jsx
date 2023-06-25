import { useState } from 'react';
import css from './LoginPage.module.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onInputChange = e => {
    switch (e.currentTarget.name) {
      case 'email':
        setEmail(e.currentTarget.value);
        break;
      case 'password':
        setPassword(e.currentTarget.value);
        break;
      default:
        return;
    }
  };

  return (
    <>
      <h1 className={css.pageTitle}>LOGIN</h1>
      <form className={css.form} autoComplete="off">
        <div className={css.inputList}>
          <input
            type="text"
            className={css.input}
            name="email"
            id="email"
            value={email}
            onChange={onInputChange}
            placeholder="Email"
            required
          />
          <input
            type="text"
            className={css.input}
            name="password"
            id="password"
            value={password}
            onChange={onInputChange}
            placeholder="Password"
            required
          />
        </div>
        <button className={css.submitBtn} type="submit">Login</button>
      </form>
    </>
  );
};

export default LoginPage;
