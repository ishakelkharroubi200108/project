import Footer from "../components/footer";
import Navbar from "../components/Navbar.jsx";
import HeroSection from "../components/Home/HeroSection.jsx";
import SchoolPartners from "../components/Home/SchoolPartners.jsx";
import Collection from "../components/Home/Collection.jsx";
import ShopFeature from "../components/Home/ShopFeature.jsx";
import ChosenUs from "../components/Home/ChosenUs.jsx";

const Home = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <HeroSection />
      <ShopFeature />
      <Collection />
      <ChosenUs />
      <SchoolPartners />
      <Footer />
    </div>
  );
};

export default Home;
