import { useState } from 'react';
import css from './LoginPage.module.css';
import { logIn } from '../../redux/authOperations';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch()
  const navigate = useNavigate()

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

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(email, password);
    await dispatch(
      logIn({
        email: email,
        password: password,
      })
    );
    await navigate("/contacts")
  };

  return (
    <>
      <h1 className={css.pageTitle}>Login</h1>
      <form className={css.form} autoComplete="off" onSubmit={handleSubmit}>
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
