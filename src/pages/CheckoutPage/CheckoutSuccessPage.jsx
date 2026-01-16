import { useEffect } from "react";
import { Link } from "react-router-dom";

// This is the chekcoutPage
function CheckoutSuccessPage({ clearCart }) {
  useEffect(() => {
    clearCart();
  }, [clearCart]); // Includes clearCart
  return (
    <div className="container py-5 text-center">
      <h1 className="text-success mb-4">Order Successful!</h1>
      <p className="lead">Thank you for your purchase! 🎉</p>
      {/* Directing user back to homepage */}
      <Link to="/" className="btn btn-primary btn-lg mt-4">
        Back to Store
      </Link>
    </div>
  );
}
export default CheckoutSuccessPage;
