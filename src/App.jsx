import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { useCallback } from "react";
import HomePage from "./pages/HomePage/HomePage";
import CartPage from "./pages/CartPage/CartPage";
import CheckoutSuccessPage from "./pages/CheckoutPage/CheckoutSuccessPage";
import Contact from "./pages/ContactPage/ContactPage";
import { NotFound } from "./pages/NotFound/NotFound";
import { Layout } from "./components/Layout/Layout";
import AboutPage from "./pages/AboutPage/AboutPage";
import ProductPage from "./pages/ProductPage/ProductPage";
function App() {
  // Global shopping cart state — lives here so Header and pages can access it
  // cartItems = array of products added by user
  // setCartItems = function to update the cart
  const [cartItems, setCartItems] = useState([]);
  // Function to add a product to the cart
  // Uses functional update to always have the latest state (safe even with rapid clicks)
  const addToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
  };
  // Function to remove items from cart page:
  const removeFromCart = (idToRemove) => {
    setCartItems((prev) => prev.filter((item) => item.id !== idToRemove));
  };

  const clearCart = useCallback(() => setCartItems([]), []);

  return (
    // BrowserRouter enables routing — different URLs show different pages:
    <BrowserRouter>
      {/* Full height flex container — pushes footer to bottom */}
      <div className="d-flex flex-column min-vh-100">
        {/* All normal pages use Layout (Header + Footer automatically) */}
        <Routes>
          <Route element={<Layout cartCount={cartItems.length} />}>
            <Route path="/" element={<HomePage addToCart={addToCart} />} />
            <Route
              path="/cart"
              element={
                <CartPage
                  cartItems={cartItems}
                  removeFromCart={removeFromCart}
                />
              }
            />
            {/* Single product route using product.id */}
            <Route
              path="/product/:id"
              element={
                <>
                  <ProductPage addToCart={addToCart} />
                </>
              }
            />
            <Route path="/about" element={<AboutPage />} />
            <Route
              path="/checkout"
              element={<CheckoutSuccessPage clearCart={clearCart} />}
            />
            <Route path="/contact" element={<Contact />} />
          </Route>

          {/* 404 page — no Layout */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App; // Makes this component available to index.js
