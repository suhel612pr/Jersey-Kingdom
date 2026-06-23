function Footer() {
  return (
    <footer
      style={{
        background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
        color: "white",
        padding: "60px 40px 30px",
        borderTop: "2px solid rgba(34, 197, 94, 0.2)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "40px",
          marginBottom: "40px",
        }}
      >
        {/* Company Info */}
        <div>
          <h3
            style={{
              fontSize: "1.8rem",
              fontWeight: "900",
              marginBottom: "15px",
              background: "linear-gradient(135deg, #22c55e 0%, #16a34a 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Jersey Kingdom ⚽👑
          </h3>
          <p style={{ color: "#cbd5e1", lineHeight: "1.8" }}>
            Premium Football Jerseys from around the world. Shop the latest
            kits from top clubs and national teams.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4
            style={{
              fontSize: "1.2rem",
              fontWeight: "700",
              marginBottom: "15px",
              color: "#22c55e",
            }}
          >
            Quick Links
          </h4>
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <li>
              <a
                href="/"
                style={{
                  color: "#cbd5e1",
                  textDecoration: "none",
                  transition: "0.3s",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = "#22c55e";
                  e.target.style.transform = "translateX(5px)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = "#cbd5e1";
                  e.target.style.transform = "translateX(0)";
                }}
              >
                → Home
              </a>
            </li>
            <li>
              <a
                href="/shop"
                style={{
                  color: "#cbd5e1",
                  textDecoration: "none",
                  transition: "0.3s",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = "#22c55e";
                  e.target.style.transform = "translateX(5px)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = "#cbd5e1";
                  e.target.style.transform = "translateX(0)";
                }}
              >
                → Shop
              </a>
            </li>
            <li>
              <a
                href="/cart"
                style={{
                  color: "#cbd5e1",
                  textDecoration: "none",
                  transition: "0.3s",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = "#22c55e";
                  e.target.style.transform = "translateX(5px)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = "#cbd5e1";
                  e.target.style.transform = "translateX(0)";
                }}
              >
                → Cart
              </a>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4
            style={{
              fontSize: "1.2rem",
              fontWeight: "700",
              marginBottom: "15px",
              color: "#22c55e",
            }}
          >
            Support
          </h4>
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <li>
              <a
                href="#"
                style={{
                  color: "#cbd5e1",
                  textDecoration: "none",
                  transition: "0.3s",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#22c55e")}
                onMouseLeave={(e) => (e.target.style.color = "#cbd5e1")}
              >
                Contact Us
              </a>
            </li>
            <li>
              <a
                href="#"
                style={{
                  color: "#cbd5e1",
                  textDecoration: "none",
                  transition: "0.3s",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#22c55e")}
                onMouseLeave={(e) => (e.target.style.color = "#cbd5e1")}
              >
                FAQs
              </a>
            </li>
            <li>
              <a
                href="#"
                style={{
                  color: "#cbd5e1",
                  textDecoration: "none",
                  transition: "0.3s",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#22c55e")}
                onMouseLeave={(e) => (e.target.style.color = "#cbd5e1")}
              >
                Shipping Info
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div
        style={{
          borderTop: "1px solid rgba(34, 197, 94, 0.2)",
          paddingTop: "30px",
          textAlign: "center",
        }}
      >
        <p style={{ color: "#94a3b8", marginBottom: "15px" }}>
          © 2026 Jersey Kingdom. All Rights Reserved. 🏆
        </p>
        <div
          style={{
            display: "flex",
            gap: "20px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <span>🌐 Global Shipping</span>
          <span>✅ Authentic Products</span>
          <span>🛡️ Secure Payment</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;