import { Outlet } from "react-router-dom";
import AuthHeader from "./AuthHeader/AuthHeader";

const Layout = () => {
  return (
    <div style={{ maxWidth: 1530, margin: '0 auto'}}>
      <header>
        <div>
          <AuthHeader />
        </div>
      </header>
      <main style={{ maxWidth: 1530, margin: '0 auto'}}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
