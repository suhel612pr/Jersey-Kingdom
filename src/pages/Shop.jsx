import { useState } from "react";
import ProductCard from "../components/ProductCard";

import barcelona from "../assets/jerseys/barcelona-home.png";
import madrid from "../assets/jerseys/real-madrid-home.png.jpg";
import arsenal from "../assets/jerseys/arsenal-home.png";
import liverpool from "../assets/jerseys/liverpool-home.png";

import bayern from "../assets/jerseys/Bayern Munich Home Jersey.jpg";
import interMiami from "../assets/jerseys/Inter Miami Home Jersey.jpg";
import manCity from "../assets/jerseys/Manchester City Home Jersey.jpg";
import psg from "../assets/jerseys/PSG Home Jersey.jpg";

function Shop() {
  const [search, setSearch] = useState("");

  const jerseys = [
    {
      id: 1,
      name: "Barcelona Home Jersey",
      price: 2999,
      image: barcelona,
    },
    {
      id: 2,
      name: "Real Madrid Home Jersey",
      price: 2999,
      image: madrid,
    },
    {
      id: 3,
      name: "Arsenal Home Jersey",
      price: 2799,
      image: arsenal,
    },
    {
      id: 4,
      name: "Liverpool Home Jersey",
      price: 2899,
      image: liverpool,
    },
    {
      id: 5,
      name: "Bayern Munich Home Jersey",
      price: 3099,
      image: bayern,
    },
    {
      id: 6,
      name: "Inter Miami Home Jersey",
      price: 3299,
      image: interMiami,
    },
    {
      id: 7,
      name: "Manchester City Home Jersey",
      price: 2999,
      image: manCity,
    },
    {
      id: 8,
      name: "PSG Home Jersey",
      price: 3199,
      image: psg,
    },
  ];

  const filteredJerseys = jerseys.filter((jersey) =>
    jersey.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section
      style={{
        padding: "100px 50px",
        background: "linear-gradient(135deg, #f8fafc 0%, #f0f9ff 100%)",
        minHeight: "100vh",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "3.5rem",
          marginBottom: "15px",
          fontWeight: "900",
          background: "linear-gradient(135deg, #22c55e 0%, #16a34a 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        Shop Jerseys
      </h1>

      <p
        style={{
          textAlign: "center",
          color: "#64748b",
          marginBottom: "40px",
          fontSize: "1.1rem",
        }}
      >
        Discover our exclusive collection of premium football jerseys 👕
      </p>

      <div
        style={{
          maxWidth: "600px",
          margin: "0 auto 50px",
          position: "relative",
        }}
      >
        <input
          type="text"
          placeholder="🔍 Search for your favorite jersey..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            width: "100%",
            padding: "16px 20px",
            borderRadius: "50px",
            border: "2px solid rgba(34, 197, 94, 0.3)",
            fontSize: "1rem",
            fontWeight: "500",
            transition: "all 0.3s ease",
            boxShadow: "0 5px 20px rgba(0, 0, 0, 0.08)",
          }}
          onFocus={(e) => {
            e.target.style.borderColor = "rgba(34, 197, 94, 0.6)";
            e.target.style.boxShadow = "0 10px 35px rgba(34, 197, 94, 0.2)";
          }}
          onBlur={(e) => {
            e.target.style.borderColor = "rgba(34, 197, 94, 0.3)";
            e.target.style.boxShadow = "0 5px 20px rgba(0, 0, 0, 0.08)";
          }}
        />
      </div>

      {filteredJerseys.length > 0 && (
        <p
          style={{
            textAlign: "center",
            color: "#22c55e",
            marginBottom: "30px",
            fontWeight: "600",
            fontSize: "1.05rem",
          }}
        >
          Found {filteredJerseys.length} jersey{filteredJerseys.length !== 1 ? "s" : ""}
        </p>
      )}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "35px",
          maxWidth: "1500px",
          margin: "0 auto",
        }}
      >
        {filteredJerseys.length > 0 ? (
          filteredJerseys.map((jersey) => (
            <ProductCard
              key={jersey.id}
              id={jersey.id}
              name={jersey.name}
              price={jersey.price}
              image={jersey.image}
            />
          ))
        ) : (
          <div
            style={{
              gridColumn: "1 / -1",
              textAlign: "center",
              padding: "60px 20px",
            }}
          >
            <p style={{ fontSize: "1.3rem", color: "#64748b", fontWeight: "600" }}>
              No jerseys found for "{search}" 😔
            </p>
            <p style={{ color: "#94a3b8", marginTop: "10px" }}>
              Try searching with different keywords
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Shop;