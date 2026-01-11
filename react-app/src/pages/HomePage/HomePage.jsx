import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// HomePage component — receives addToCart function from parent (App)
function HomePage({ addToCart }) {
  const [products, setProducts] = useState([]);
  // State for loading indicator — starts true so we show spinner
  const [loading, setLoading] = useState(true);
  // useEffect — runs once when component mounts (empty [] = only on first load)
  useEffect(() => {
    setLoading(true);
    // Fetch products from the Noroff API
    fetch("https://v2.api.noroff.dev/online-shop")
      .then((r) => r.json())
      .then((data) => {
        // Save products — use data.data (API structure) or empty array if missing
        setProducts(data.data || []);
        setLoading(false);
      })
      .catch((error) => {
        // If fetch fails (network error, bad URL, etc.)
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

  return (
    // Main container with padding
    <div className="container py-4">
      <h1 className="mb-5 text-center">All Products</h1>
      {/* Conditional rendering — show loading OR products */}
      {loading ? (
        // Loading state — centered spinner
        <div className="text-center py-20">
          <p className="text-xl text-muted-foreground">Loading products...</p>
          <div className="mt-4">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
      ) : (
        // Products loaded — show grid
        <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 row-cols-xl-6 g-3">
          {/* Loop through all products */}
          {products.map((product) => {
            // Create clean URL slug from title
            const slug = product.title
              .toLowerCase()
              .replace(/\s+/g, "-")
              .replace(/[^\w\-]+/g, "")
              .replace(/\-\-+/g, "-");

            return (
              <div key={product.id} className="col">
                {/* Product card — fixed height for uniform look */}
                <div
                  className="card h-100 d-flex flex-column"
                  style={{ height: "320px" }}
                >
                  {/* Product image */}
                  <img
                    src={product.image?.url || "..."}
                    className="card-img-top"
                    alt={product.title}
                    style={{ height: "140px", objectFit: "cover" }}
                  />
                  {/* Card body */}
                  <div className="card-body d-flex flex-column flex-grow-1">
                    <h6 className="card-title text-truncate">
                      {product.title}
                    </h6>
                    {/* Buttons at bottom */}
                    <div className="mt-auto">
                      <div className="d-flex justify-content-between align-items-center">
                        <strong className="text-primary">
                          ${product.price}
                        </strong>
                      </div>
                      <div className="d-flex justify-content-between gap-2 mt-3">
                        {/* Product Info — goes to dynamic URL using slug */}
                        <Link
                          className="btn btn-secondary btn-sm"
                          to={`/product/${slug}`}
                        >
                          Product Info
                        </Link>
                        {/* Add to cart — calls function from parent */}
                        <button
                          className="btn btn-primary btn-sm"
                          onClick={() => addToCart(product)}
                        >
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default HomePage;
