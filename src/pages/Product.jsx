import { useEffect, useState } from "react";
import Button from "../Button";
import { useNavigate } from "react-router-dom";
import { publicInstance } from "../api/api";

export default function Product() {
  const [product, setProduct] = useState(null);
  const [monitor, setMonitor] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const fetchProduct = async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await publicInstance.get("/product")

      // console.log(res);


      if (!res) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }


      setProduct(res.data.product);

    } catch (error) {
      console.error("Fetch error details:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    fetchProduct();
  }, [monitor]);

  return (
    <div>
      <h1>Product Page</h1>
      <button onClick={() => setMonitor(!monitor)}>Refresh Products</button>

      {loading && (
        <div style={{ textAlign: 'center', margin: '50px' }}>
          <div style={{ fontSize: '40px' }}>
            <span style={{ animation: 'pulse 1.4s infinite' }}>.</span>
            <span style={{ animation: 'pulse 1.4s infinite', animationDelay: '0.2s' }}>.</span>
            <span style={{ animation: 'pulse 1.4s infinite', animationDelay: '0.4s' }}>.</span>
          </div>
          <h2>Loading products</h2>
        </div>
      )}

      <style>{`
  @keyframes pulse {
    0%, 100% { opacity: 0.2; }
    50% { opacity: 1; }
  }
`}</style>

      {product && product.map((item) => (
        <div style={{ border: 'thin solid black', margin: '30px', padding: '40px' }} key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.description.slice(0, 100)}...</p>
          <p>Price: ${item.price}</p>
          <button onClick={() => navigate(`/singleproduct/${item._id}`)}>View Details</button>
          {/* <button>Add to Cart</button> */}
        </div>
      ))}
    </div>
  );
}