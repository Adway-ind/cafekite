import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Menu from "./components/Menu";
import Gallery from "./components/Gallery";
import Reviews from "./components/Reviews";
import Location from "./components/Location";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="bg-[#0b0b0b] text-white">

      <Navbar />

      <Hero />

      <About />

      <Menu />

      <Gallery />

      <Reviews />

      <Location />

      <Footer />

    </main>
  );
}

export default App;