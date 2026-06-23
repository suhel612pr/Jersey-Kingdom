import "./Navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Navbar() {
  const { cart } = useContext(CartContext);

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    fontWeight: "700",
    transition: "all 0.3s ease",
    padding: "8px 16px",
    borderRadius: "8px",
    position: "relative",
  };

  const linkHoverStyle = (e) => {
    e.target.style.background = "rgba(34, 197, 94, 0.2)";
    e.target.style.color = "#22c55e";
    e.target.style.transform = "translateY(-2px)";
  };

  const linkLeaveStyle = (e) => {
    e.target.style.background = "transparent";
    e.target.style.color = "white";
    e.target.style.transform = "translateY(0)";
  };

  return (
    <nav
      style={{
        background: "linear-gradient(135deg, rgba(0,0,0,0.85) 0%, rgba(15,23,42,0.8) 100%)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(34,197,94,0.3)",
        boxShadow: "0 10px 40px rgba(34,197,94,0.2)",
        color: "white",
        padding: "20px 50px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <h2
        style={{
          fontSize: "2rem",
          fontWeight: "900",
          color: "#22c55e",
          textShadow: "0 0 15px rgba(34,197,94,0.6)",
          margin: 0,
          cursor: "pointer",
        }}
      >
        Jersey Kingdom ⚽
      </h2>

      <div
        style={{
          display: "flex",
          gap: "30px",
          alignItems: "center",
        }}
      >
        <Link
          to="/"
          style={linkStyle}
          onMouseEnter={linkHoverStyle}
          onMouseLeave={linkLeaveStyle}
        >
          Home
        </Link>

        <Link
          to="/shop"
          style={linkStyle}
          onMouseEnter={linkHoverStyle}
          onMouseLeave={linkLeaveStyle}
        >
          Shop
        </Link>

        <Link
          to="/cart"
          style={{
            ...linkStyle,
            background: cart.length > 0 ? "rgba(34, 197, 94, 0.3)" : "transparent",
            position: "relative",
          }}
          onMouseEnter={linkHoverStyle}
          onMouseLeave={linkLeaveStyle}
        >
          🛒 Cart ({cart.length})
          {cart.length > 0 && (
            <span
              style={{
                position: "absolute",
                top: "-8px",
                right: "-8px",
                background: "#ff006e",
                color: "white",
                borderRadius: "50%",
                width: "24px",
                height: "24px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "0.75rem",
                fontWeight: "800",
              }}
            >
              {cart.length}
            </span>
          )}
        </Link>

        <Link
          to="/login"
          style={linkStyle}
          onMouseEnter={linkHoverStyle}
          onMouseLeave={linkLeaveStyle}
        >
          Login
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;