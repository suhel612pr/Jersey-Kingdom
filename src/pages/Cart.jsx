import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  const totalPrice = cart.reduce(
    (total, item) => total + item.price,
    0
  );

  return (
    <section
      style={{
        padding: "100px 50px",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f8fafc 0%, #f0f9ff 100%)",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: "50px",
          fontSize: "3.5rem",
          fontWeight: "900",
          background: "linear-gradient(135deg, #22c55e 0%, #16a34a 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        Your Cart 🛒
      </h1>

      {cart.length === 0 ? (
        <div
          style={{
            textAlign: "center",
            padding: "60px 20px",
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          <p style={{ fontSize: "4rem", marginBottom: "20px" }}>🛒</p>
          <h2 style={{ color: "#64748b", marginBottom: "10px" }}>
            Your cart is empty
          </h2>
          <p style={{ color: "#94a3b8", marginBottom: "30px" }}>
            Looks like you haven't added any jerseys yet. Start shopping now!
          </p>
          <a
            href="/shop"
            style={{
              display: "inline-block",
              background: "linear-gradient(135deg, #22c55e 0%, #16a34a 100%)",
              color: "white",
              padding: "14px 40px",
              borderRadius: "50px",
              textDecoration: "none",
              fontWeight: "700",
              transition: "all 0.3s ease",
              boxShadow: "0 10px 30px rgba(34, 197, 94, 0.3)",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "translateY(-3px)";
              e.target.style.boxShadow = "0 15px 40px rgba(34, 197, 94, 0.4)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "0 10px 30px rgba(34, 197, 94, 0.3)";
            }}
          >
            Continue Shopping
          </a>
        </div>
      ) : (
        <>
          <div
            style={{
              maxWidth: "1000px",
              margin: "0 auto",
            }}
          >
            {cart.map((item, index) => (
              <div
                key={index}
                style={{
                  background: "rgba(255, 255, 255, 0.95)",
                  padding: "25px",
                  marginBottom: "20px",
                  borderRadius: "16px",
                  display: "flex",
                  alignItems: "center",
                  gap: "25px",
                  border: "2px solid rgba(34, 197, 94, 0.1)",
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 15px 40px rgba(0, 0, 0, 0.12)";
                  e.currentTarget.style.borderColor = "rgba(34, 197, 94, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.08)";
                  e.currentTarget.style.borderColor = "rgba(34, 197, 94, 0.1)";
                }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: "140px",
                    height: "140px",
                    objectFit: "contain",
                    borderRadius: "12px",
                    background: "#f8fafc",
                    padding: "10px",
                  }}
                />

                <div style={{ flex: 1 }}>
                  <h3
                    style={{
                      fontSize: "1.3rem",
                      marginBottom: "10px",
                      color: "#0f172a",
                    }}
                  >
                    {item.name}
                  </h3>
                  <p
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: "800",
                      color: "#22c55e",
                    }}
                  >
                    ₹{item.price}
                  </p>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  style={{
                    background: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
                    color: "white",
                    border: "none",
                    padding: "12px 28px",
                    borderRadius: "50px",
                    cursor: "pointer",
                    fontWeight: "700",
                    transition: "all 0.3s ease",
                    boxShadow: "0 5px 20px rgba(239, 68, 68, 0.3)",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "translateY(-2px)";
                    e.target.style.boxShadow = "0 10px 30px rgba(239, 68, 68, 0.4)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "translateY(0)";
                    e.target.style.boxShadow = "0 5px 20px rgba(239, 68, 68, 0.3)";
                  }}
                >
                  ✕ Remove
                </button>
              </div>
            ))}
          </div>

          <div
            style={{
              maxWidth: "1000px",
              margin: "50px auto 0",
              padding: "30px",
              background: "linear-gradient(135deg, rgba(34, 197, 94, 0.1) 0%, rgba(22, 163, 74, 0.1) 100%)",
              borderRadius: "16px",
              border: "2px solid rgba(34, 197, 94, 0.3)",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "20px",
              }}
            >
              <span style={{ fontSize: "1.2rem", fontWeight: "600" }}>
                Items in cart:
              </span>
              <span
                style={{
                  fontSize: "1.3rem",
                  fontWeight: "800",
                  color: "#22c55e",
                }}
              >
                {cart.length}
              </span>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                paddingTop: "20px",
                borderTop: "2px solid rgba(34, 197, 94, 0.2)",
              }}
            >
              <h2 style={{ fontSize: "1.5rem", fontWeight: "900" }}>
                Total:
              </h2>
              <h2
                style={{
                  fontSize: "2.5rem",
                  fontWeight: "900",
                  background: "linear-gradient(135deg, #22c55e 0%, #16a34a 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                ₹{totalPrice}
              </h2>
            </div>
            <button
              style={{
                width: "100%",
                marginTop: "20px",
                background: "linear-gradient(135deg, #22c55e 0%, #16a34a 100%)",
                color: "white",
                border: "none",
                padding: "16px",
                borderRadius: "50px",
                fontSize: "1.1rem",
                fontWeight: "800",
                cursor: "pointer",
                transition: "all 0.3s ease",
                boxShadow: "0 10px 30px rgba(34, 197, 94, 0.35)",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-3px)";
                e.target.style.boxShadow = "0 15px 40px rgba(34, 197, 94, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "0 10px 30px rgba(34, 197, 94, 0.35)";
              }}
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </section>
  );
}

export default Cart;