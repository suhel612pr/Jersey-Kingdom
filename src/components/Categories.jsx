function Categories() {
  const categories = [
    { name: "Club Jerseys", icon: "⚽" },
    { name: "National Teams", icon: "🌍" },
    { name: "Retro Kits", icon: "👕" },
    { name: "Training Wear", icon: "🏃" },
  ];

  return (
    <section
      style={{
        padding: "100px 40px",
        background: "linear-gradient(135deg, #f8fafc 0%, #f0f9ff 100%)",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "3rem",
          marginBottom: "15px",
          fontWeight: "900",
          background: "linear-gradient(135deg, #22c55e 0%, #16a34a 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        Shop By Category
      </h2>

      <p
        style={{
          textAlign: "center",
          fontSize: "1.1rem",
          color: "#64748b",
          marginBottom: "50px",
        }}
      >
        Explore our premium collection of football kits
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "30px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {categories.map((category) => (
          <div
            key={category.name}
            style={{
              background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
              color: "white",
              padding: "50px 30px",
              borderRadius: "20px",
              textAlign: "center",
              cursor: "pointer",
              transition: "all 0.4s ease",
              border: "2px solid rgba(34, 197, 94, 0.1)",
              position: "relative",
              overflow: "hidden",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-10px) scale(1.05)";
              e.currentTarget.style.boxShadow = "0 20px 50px rgba(34, 197, 94, 0.3)";
              e.currentTarget.style.borderColor = "rgba(34, 197, 94, 0.5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0) scale(1)";
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.borderColor = "rgba(34, 197, 94, 0.1)";
            }}
          >
            <div style={{ fontSize: "3rem", marginBottom: "15px" }}>
              {category.icon}
            </div>
            <h3 style={{ fontSize: "1.3rem", fontWeight: "700" }}>
              {category.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;