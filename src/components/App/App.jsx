import { Route, Routes } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Contacts from '../../pages/Contacts/Contacts';
import RegistrationPage from '../../pages/RegistrationPage/RegistrationPage';
import LoginPage from '../../pages/LoginPage/LoginPage';
import { PrivateRoute } from '../PrivateRoute';
import { useEffect } from 'react';
import { refreshUser } from '../../redux/authOperations';
import { useDispatch } from 'react-redux';
import HomePage from '../../pages/HomePage/HomePage';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<Contacts />} />
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
