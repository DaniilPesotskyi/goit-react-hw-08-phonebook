import { Route, Routes } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Contacts from '../../pages/Contacts/Contacts';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Contacts />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
