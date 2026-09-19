import { useEffect, useState } from "react";
import { Menu, MapPin } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "border-b border-white/10 bg-[#0b0b0b]/90 shadow-lg backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-500 lg:px-10 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        {/* Logo */}
        <a href="#home">
          <img
            src="/Cafe_kite.png"
            alt="Cafe Kite Logo"
            className={`w-auto transition-all duration-500 ${
              scrolled ? "h-11 md:h-16" : "h-14 md:h-20"
            }`}
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">

          <a
            href="#about"
            className="text-sm text-white/70 transition hover:text-white"
          >
            About
          </a>

          <a
            href="#menu"
            className="text-sm text-white/70 transition hover:text-white"
          >
            Menu
          </a>

          <a
            href="#gallery"
            className="text-sm text-white/70 transition hover:text-white"
          >
            Gallery
          </a>

          <a
            href="#reviews"
            className="text-sm text-white/70 transition hover:text-white"
          >
            Reviews
          </a>

          <a
            href="#location"
            className="flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm text-white transition hover:bg-white hover:text-black"
          >
            <MapPin size={16} />
            Find Us
          </a>

        </div>

        {/* Mobile Menu */}
        <button
          className="rounded-full border border-white/20 p-2 text-white transition hover:bg-white hover:text-black md:hidden"
          aria-label="Open menu"
        >
          <Menu size={20} />
        </button>

      </nav>
    </header>
  );
}