import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/navbar';
import Footer from '../Footer/footer';
export default function Layout() {
  return (
    <div className="site-layout">
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
