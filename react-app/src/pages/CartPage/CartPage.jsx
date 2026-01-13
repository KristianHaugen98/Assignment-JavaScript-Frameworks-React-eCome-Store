// This renders the basket:

import { Link } from "react-router-dom";
// Function that renders the cart page using the cartItems prop and lets users remove items.
function CartPage({ cartItems, removeFromCart }) {
  if (cartItems.length === 0) {
    return <h2>Your cart is empty</h2>;
  }
  // If we have products, this will show first how many products we have, and: Image, title, tags, description, rating, and price. Also updates it when is on sale:
  return (
    <div className="container py-5">
      <h2>
        Your Cart ({cartItems.length}{" "}
        {cartItems.length === 1 ? "item" : "items"})
      </h2>
      <ul className="list-group mb-4">
        {cartItems.map((item, index) => (
          <li key={item.id} className="list-group-item shadow-lg">
            <img
              src={item.image.url}
              alt={item.title}
              style={{ height: "140px", objectFit: "cover" }}
            />
            <p className="fw-bold">{item.title}</p>
            <br /> <br />
            <div className="d-flex gap-1 mb-2">
              {item.tags.map((tag) => (
                <span key={tag} className=" semi-bold text-dark">
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-muted small">{item.description}</p>
            <div className="text-warning">
              {"★".repeat(Math.round(item.rating))} ({item.rating})
            </div>
            {item.discountedPrice < item.price ? (
              <div className="py-2">
                <del>${item.price}</del>{" "}
                <strong className="text-success">
                  ${item.discountedPrice}
                </strong>
              </div>
            ) : (
              <strong>${item.price}</strong>
            )}
            {/* This button removes items from the list and updates the global cart state */}
            <button
              onClick={() => removeFromCart(item.id)}
              type="button"
              className="btn btn-danger btn-sm py-1 "
            >
              Remove item
            </button>
          </li>
        ))}
      </ul>
      {/* Calculate and show total */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4>Total:</h4>
        <h4 className="text-success">
          $
          {cartItems
            .reduce((sum, item) => {
              const price = item.discountedPrice || item.price;
              return sum + price;
            }, 0)
            .toFixed(2)}
        </h4>
      </div>
      <Link to="/checkout" className="btn btn-success btn-lg">
        Proceed to Checkout
      </Link>
    </div>
  );
}

export default CartPage;
