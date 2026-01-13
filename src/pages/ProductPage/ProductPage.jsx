import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

function ProductPage({ addToCart }) {
  // Get the id from the URL:
  const { id } = useParams();
  console.log("URL id:", id, typeof id);

  // State for products and loading:
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch products when component loads:
  useEffect(() => {
    setLoading(true);
    fetch("https://v2.api.noroff.dev/online-shop")
      .then((r) => r.json())
      .then((data) => {
        setProducts(data.data || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setLoading(false);
      });
  }, []); // Empty array = run only once on mount

  // Find the matching product (only after products are loaded)
  const product = products.find((p) => String(p.id) === id);

  return (
    <div className="container py-5">
      {loading ? (
        <p>Loading product details...</p>
      ) : product ? (
        <div className="row">
          {/* Left: Image */}
          <div className="col-md-6">
            <img
              src={product.image?.url || "placeholder.jpg"}
              alt={product.title}
              className="img-fluid rounded"
              style={{ maxHeight: "500px", objectFit: "contain" }}
            />
          </div>

          {/* Right: Details */}
          <div className="col-md-6">
            <h1>{product.title}</h1>
            {/* Discounted price logic */}
            {product.discountedPrice &&
            product.discountedPrice < product.price ? (
              <div className="py-2">
                <p className="h3">
                  <del className="text-muted">${product.price}</del>{" "}
                  <strong className="text-success">
                    ${product.discountedPrice}
                  </strong>
                </p>
              </div>
            ) : (
              <p className="h3 text-primary">${product.price}</p>
            )}
            {/* Shows how much in percent the product is on sale */}
            {product.discountedPrice &&
              product.discountedPrice < product.price && (
                <span className="badge bg-danger ms-2">
                  -
                  {Math.round(
                    100 - (product.discountedPrice / product.price) * 100
                  )}
                  %
                </span>
              )}
            <p>{product.description}</p>

            {/* Reviews section: */}
            <div className="mt-4">
              <h4>Customer Reviews ({product.reviews.length})</h4>

              {product.reviews.length === 0 ? (
                <p>No reviews yet.</p>
              ) : (
                <div>
                  {product.reviews.map((review) => (
                    <div key={review.id} className="border-bottom pb-3 mb-3">
                      <p className="mb-1">
                        <strong>{review.username}</strong> - {review.rating} ⭐
                      </p>
                      <p className="mb-0">{review.description}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Buttons, add or go back: */}
            <div className="mt-5 d-flex gap-3">
              <button
                className="btn btn-primary btn-lg"
                onClick={() => addToCart(product)}
              >
                Add to cart
              </button>
              <Link to="/" className="btn btn-secondary btn-lg">
                Back to products
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <p>Product not found</p>
      )}
    </div>
  );
}

export default ProductPage;
