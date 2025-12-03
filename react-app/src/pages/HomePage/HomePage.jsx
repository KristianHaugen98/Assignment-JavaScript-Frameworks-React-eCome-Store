import { useState, useEffect } from "react";

function HomePage({ addToCart }) {
  //  Receive the function from App.jsx
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://v2.api.noroff.dev/online-shop")
      .then((r) => r.json())
      .then((data) => setProducts(data.data || []));
  }, []);

  return (
    // This creates the cards and show them on the homepage:
    <div className="container py-2">
      <h1 className="mb-4">All Products</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {products.map((product) => (
          <div key={product.id} className="col">
            <div className="card h-100">
              <img
                src={
                  product.image?.url ||
                  product.images?.[0]?.url ||
                  "https://via.placeholder.com/300"
                }
                className="card-img-top"
                alt={product.title}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text mt-auto">
                  <strong>${product.price}</strong>
                </p>
                <button
                  onClick={() => addToCart(product)}
                  className="btn btn-primary mt-2"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
