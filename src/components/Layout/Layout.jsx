import { Outlet } from 'react-router-dom';
import AuthHeader from './AuthHeader/AuthHeader';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/selectors';
import { useEffect } from 'react';
import NavigationHeader from './NavigationHeader/NavigationHeader';

const Layout = () => {
  const { isLoggedIn } = useSelector(selectIsLoggedIn);

  useEffect(() => {
    console.log(isLoggedIn)
  }, [isLoggedIn])

  return (
    <div style={{ maxWidth: 1530, margin: '0 auto' }}>
      <header>
        <div>{isLoggedIn ? <NavigationHeader /> : <AuthHeader />}</div>
      </header>
      <main style={{ maxWidth: 1530, margin: '0 auto' }}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
