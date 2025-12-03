// This renders the basket:

import { Link } from "react-router-dom";

function CartPage({ cartItems }) {
  if (cartItems.length === 0) {
    return <h2>Your cart is empty</h2>;
  }

  return (
    <div className="container py-5">
      <h2>
        Your Cart ({cartItems.length}{" "}
        {cartItems.length === 1 ? "item" : "items"})
      </h2>
      <ul className="list-group mb-4">
        {cartItems.map((item, index) => (
          <li key={index} className="list-group-item">
            {item.title} – ${item.price}
          </li>
        ))}
      </ul>

      <Link to="/checkout" className="btn btn-success btn-lg">
        Proceed to Checkout
      </Link>
    </div>
  );
}

export default CartPage;
