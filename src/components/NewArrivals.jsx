import ProductCard from "./ProductCard";

import bayern from "../assets/jerseys/Bayern Munich Home Jersey.jpg";
import interMiami from "../assets/jerseys/Inter Miami Home Jersey.jpg";
import manCity from "../assets/jerseys/Manchester City Home Jersey.jpg";
import psg from "../assets/jerseys/PSG Home Jersey.jpg";

function NewArrivals() {
  const newArrivals = [
    {
      id: 1,
      name: "Bayern Munich Home Jersey",
      price: 3099,
      image: bayern,
    },
    {
      id: 2,
      name: "Inter Miami Home Jersey",
      price: 3299,
      image: interMiami,
    },
    {
      id: 3,
      name: "Manchester City Home Jersey",
      price: 2999,
      image: manCity,
    },
    {
      id: 4,
      name: "PSG Home Jersey",
      price: 3199,
      image: psg,
    },
  ];

  return (
    <section
      style={{
        padding: "100px 60px",
        background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
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
        New Arrivals
      </h2>

      <p
        style={{
          textAlign: "center",
          fontSize: "1.1rem",
          color: "#64748b",
          marginBottom: "50px",
        }}
      >
        Just arrived - The hottest jerseys fresh from the market 🔥
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
        {newArrivals.map((jersey) => (
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

export default NewArrivals;