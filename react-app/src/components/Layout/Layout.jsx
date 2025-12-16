import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom"; // Special React Router component — renders the current page content

// Layout component — used to wrap pages with shared Header and Footer
// Receives cartCount as a prop so Header can show the number of items in cart
export const Layout = ({ cartCount }) => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header cartCount={cartCount} />
      <main className="flex-grow-1 container py-5">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
