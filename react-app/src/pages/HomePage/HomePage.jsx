import { useState, useEffect } from "react";

function HomePage({ addToCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://v2.api.noroff.dev/online-shop")
      .then((r) => r.json())
      .then((data) => setProducts(data.data || []));
  }, []);

  return (
    <div className="container py-4">
      <h1 className="mb-5 text-center">All Products</h1>

      <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 row-cols-xl-6 g-3">
        {products.map((product) => (
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
                    <button className="btn btn-primary btn-sm">Add</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
