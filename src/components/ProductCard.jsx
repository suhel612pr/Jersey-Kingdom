import "./ProductCard.css";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function ProductCard({ id, name, price, image }) {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart({
      id,
      name,
      price,
      image,
    });

    alert(`${name} added to cart`);
  };

  return (
    <div className="product-card">
      <img
        src={image}
        alt={name}
        style={{
          width: "100%",
          height: "350px",
          objectFit: "contain",
          background: "#f8f8f8",
          borderRadius: "12px",
        }}
      />

      <h3
        style={{
          marginTop: "15px",
          fontSize: "1.3rem",
        }}
      >
        {name}
      </h3>

      <p
        style={{
          margin: "10px 0",
          fontSize: "1.1rem",
          fontWeight: "bold",
        }}
      >
        ₹{price}
      </p>

      <button
        onClick={handleAddToCart}
        style={{
          width: "100%",
          padding: "12px",
          border: "none",
          borderRadius: "8px",
          background: "#22c55e",
          color: "white",
          fontSize: "1rem",
          cursor: "pointer",
          transition: "0.3s",
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;