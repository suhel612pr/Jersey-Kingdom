import ProductCard from "./ProductCard";
import jerseys from "../data/jerseys";

function FeaturedJerseys() {
  return (
    <section
      style={{
        padding: "100px 60px",
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
        Featured Jerseys
      </h2>

      <p
        style={{
          textAlign: "center",
          fontSize: "1.1rem",
          color: "#64748b",
          marginBottom: "50px",
        }}
      >
        Hand-picked premium collections from top clubs worldwide 🌟
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "35px",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        {jerseys.map((jersey) => (
          <ProductCard
            key={jersey.id}
            id={jersey.id}
            name={jersey.name}
            price={jersey.price}
            image={jersey.image}
          />
        ))}
      </div>
    </section>
  );
}

export default FeaturedJerseys;