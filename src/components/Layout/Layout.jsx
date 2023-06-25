import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <header>
        <div style={{ maxWidth: 1530, margin: '0 auto'}}>
          
        </div>
      </header>
      <main style={{ maxWidth: 1530, margin: '0 auto'}}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
