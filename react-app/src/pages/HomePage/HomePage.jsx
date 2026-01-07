import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// UseState for products:
function HomePage({ addToCart }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  // For search functionality:
  const [searchTerm, setSearchTerm] = useState("");

  // UseEffect for fetch products, and have loading state thats showing loading animation before the products are fetched:
  useEffect(() => {
    setLoading(true);

    fetch("https://v2.api.noroff.dev/online-shop")
      .then((r) => r.json())
      .then((data) => {
        setProducts(data.data || []);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);
  // Filter products for search suggestions
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const createSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w\-]+/g, "")
      .replace(/\-\-+/g, "-");
  };

  return (
    <div className="container py-4">
      <h1 className="mb-5 text-center">All Products</h1>
      {/* Search input and suggestions dropdown */}
      <div className="position-relative mb-4 max-w-md mx-auto">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="form-control form-control-lg"
        />

        {/* Dropdown suggestions */}
      </div>
      {loading ? (
        // ← Loading message
        <div className="text-center py-20">
          <p className="text-xl text-muted-foreground">Loading products...</p>
          {/* Optional spinner */}
          <div className="mt-4">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 row-cols-xl-6 g-3">
          {/* Renders the products with .map: */}
          {filteredProducts.map((product) => (
            <div key={product.id} className="col">
              <div
                className="card h-100 d-flex flex-column"
                style={{ height: "320px" }}
              >
                <img
                  src={product.image?.url || "..."}
                  className="card-img-top"
                  alt={product.title}
                  style={{ height: "140px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column flex-grow-1">
                  <h6 className="card-title text-truncate">{product.title}</h6>
                  <div className="mt-auto">
                    <div className="d-flex justify-content-between align-items-center">
                      <strong className="text-primary">${product.price}</strong>
                      <button
                        className="btn btn-primary btn-sm"
                        onClick={() => {
                          console.log("Adding:", product);
                          addToCart(product);
                        }}
                      >
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default HomePage;
