import { useState } from 'react';
import css from './RegistrationPage.module.css';

const RegistrationPage = () => {
  const [name, setName] = useState('');
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
      case 'name':
        setName(e.currentTarget.value);
        break;
      default:
        return;
    }
  };

  return (
    <>
      <h1 className={css.pageTitle}>Registration</h1>
      <form className={css.form} autoComplete="off">
        <div className={css.inputList}>
          <input
            type="text"
            className={css.input}
            name="name"
            id="name"
            value={name}
            onChange={onInputChange}
            placeholder="Name"
            required
          />
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
        <button className={css.submitBtn} type="submit">
          Register
        </button>
      </form>
    </>
  );
};

export default RegistrationPage;
