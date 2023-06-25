import { Route, Routes } from 'react-router-dom';
import Layout from '../Layout/Layout';
// import Contacts from '../../pages/Contacts/Contacts';
// import LoginPage from '../../pages/LoginPage/LoginPage';
import RegistrationPage from '../../pages/RegistrationPage/RegistrationPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<RegistrationPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
