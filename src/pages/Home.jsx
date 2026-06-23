import Hero from "../components/Hero";
import Categories from "../components/Categories";
import FeaturedJerseys from "../components/FeaturedJerseys";
import NewArrivals from "../components/NewArrivals";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <FeaturedJerseys />
      <NewArrivals />
      <Footer />
    </>
  );
}

export default Home;