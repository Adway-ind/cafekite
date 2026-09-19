import { useEffect, useState } from "react";
import {
  Menu,
  X,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Navbar scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Prevent body scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Close mobile menu
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* =====================================================
          NAVBAR
      ====================================================== */}

      <header
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
          scrolled
            ? "border-b border-white/10 bg-[#090909]/90 shadow-lg backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <nav
          className={`
            mx-auto
            flex
            max-w-7xl
            items-center
            justify-between
            px-6
            transition-all
            duration-500
            lg:px-10
            ${scrolled ? "py-3" : "py-5"}
          `}
        >
          {/* =================================================
              LOGO
          ================================================== */}

          <a
            href="#home"
            onClick={closeMobileMenu}
            className="relative z-[60] shrink-0"
          >
            <img
              src="/Cafe_kite.png"
              alt="Cafe Kite Logo"
              className={`
                w-auto
                transition-all
                duration-500
                ${scrolled ? "h-11 md:h-16" : "h-14 md:h-20"}
              `}
            />
          </a>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================== */}

          <div className="hidden items-center gap-8 md:flex">

            <a
              href="#about"
              className="
                font-[Poppins]
                text-sm
                text-white/70
                transition
                hover:text-white
              "
            >
              About
            </a>

            <a
              href="#menu"
              className="
                font-[Poppins]
                text-sm
                text-white/70
                transition
                hover:text-white
              "
            >
              Menu
            </a>

            <a
              href="#gallery"
              className="
                font-[Poppins]
                text-sm
                text-white/70
                transition
                hover:text-white
              "
            >
              Gallery
            </a>

            <a
              href="#reviews"
              className="
                font-[Poppins]
                text-sm
                text-white/70
                transition
                hover:text-white
              "
            >
              Reviews
            </a>

            {/* Find Us */}
            <a
              href="#location"
              className="
                group
                flex
                items-center
                gap-2
                rounded-full
                border
                border-white/20
                px-5
                py-2.5
                font-[Poppins]
                text-sm
                text-white
                transition-all
                duration-300
                hover:border-[#E21B23]
                hover:bg-[#E21B23]
              "
            >
              <MapPin
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-0.5"
              />

              Find Us
            </a>
          </div>

          {/* =================================================
              MOBILE MENU BUTTON
          ================================================== */}

          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="
              relative
              z-[60]
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              border
              border-white/20
              text-white
              transition-all
              duration-300
              hover:border-[#E21B23]
              hover:bg-[#E21B23]
              md:hidden
            "
            aria-label="Open menu"
            aria-expanded={mobileMenuOpen}
          >
            <Menu size={21} />
          </button>
        </nav>
      </header>

      {/* =====================================================
          MOBILE OVERLAY
      ====================================================== */}

      <div
        onClick={closeMobileMenu}
        className={`
          fixed
          inset-0
          z-[55]
          bg-black/70
          backdrop-blur-sm
          transition-all
          duration-500
          md:hidden
          ${
            mobileMenuOpen
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }
        `}
      />

      {/* =====================================================
          MOBILE SIDEBAR
      ====================================================== */}

      <aside
        className={`
          fixed
          right-0
          top-0
          z-[60]
          flex
          h-screen
          w-[85%]
          max-w-[380px]
          flex-col
          bg-[#0b0b0b]
          shadow-2xl
          transition-transform
          duration-500
          ease-[cubic-bezier(0.22,1,0.36,1)]
          md:hidden
          ${
            mobileMenuOpen
              ? "translate-x-0"
              : "translate-x-full"
          }
        `}
      >

        {/* =================================================
            SIDEBAR HEADER
        ================================================== */}

        <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">

          <a
            href="#home"
            onClick={closeMobileMenu}
          >
            <img
              src="/Cafe_kite.png"
              alt="Cafe Kite"
              className="h-12 w-auto"
            />
          </a>

          <button
            type="button"
            onClick={closeMobileMenu}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              text-white/70
              transition-all
              duration-300
              hover:border-[#E21B23]
              hover:bg-[#E21B23]
              hover:text-white
            "
            aria-label="Close menu"
          >
            <X size={20} />
          </button>

        </div>

        {/* =================================================
            MENU
        ================================================== */}

        <div className="flex flex-1 flex-col px-6 pt-12">

          {/* Small Label */}

          <div className="mb-10 flex items-center gap-3">

            <span className="h-px w-8 bg-[#E21B23]" />

            <span
              className="
                font-[Poppins]
                text-[9px]
                uppercase
                tracking-[0.3em]
                text-white/40
              "
            >
              Cafe Kite
            </span>

          </div>

          {/* Navigation */}

          <nav className="flex flex-col">

            <a
              href="#about"
              onClick={closeMobileMenu}
              className="
                group
                flex
                items-center
                justify-between
                border-b
                border-white/10
                py-5
                font-[Poppins]
                text-2xl
                font-medium
                text-white
                transition-colors
                hover:text-[#E21B23]
              "
            >
              About

              <ArrowUpRight
                size={20}
                className="
                  text-white/30
                  transition-all
                  duration-300
                  group-hover:rotate-45
                  group-hover:text-[#E21B23]
                "
              />
            </a>

            <a
              href="#menu"
              onClick={closeMobileMenu}
              className="
                group
                flex
                items-center
                justify-between
                border-b
                border-white/10
                py-5
                font-[Poppins]
                text-2xl
                font-medium
                text-white
                transition-colors
                hover:text-[#E21B23]
              "
            >
              Menu

              <ArrowUpRight
                size={20}
                className="
                  text-white/30
                  transition-all
                  duration-300
                  group-hover:rotate-45
                  group-hover:text-[#E21B23]
                "
              />
            </a>

            <a
              href="#gallery"
              onClick={closeMobileMenu}
              className="
                group
                flex
                items-center
                justify-between
                border-b
                border-white/10
                py-5
                font-[Poppins]
                text-2xl
                font-medium
                text-white
                transition-colors
                hover:text-[#E21B23]
              "
            >
              Gallery

              <ArrowUpRight
                size={20}
                className="
                  text-white/30
                  transition-all
                  duration-300
                  group-hover:rotate-45
                  group-hover:text-[#E21B23]
                "
              />
            </a>

            <a
              href="#reviews"
              onClick={closeMobileMenu}
              className="
                group
                flex
                items-center
                justify-between
                border-b
                border-white/10
                py-5
                font-[Poppins]
                text-2xl
                font-medium
                text-white
                transition-colors
                hover:text-[#E21B23]
              "
            >
              Reviews

              <ArrowUpRight
                size={20}
                className="
                  text-white/30
                  transition-all
                  duration-300
                  group-hover:rotate-45
                  group-hover:text-[#E21B23]
                "
              />
            </a>

          </nav>

          {/* =================================================
              FIND US BUTTON
          ================================================== */}

          <a
            href="#location"
            onClick={closeMobileMenu}
            className="
              mt-8
              flex
              items-center
              justify-center
              gap-3
              rounded-full
              bg-[#E21B23]
              px-6
              py-4
              font-[Poppins]
              text-sm
              font-medium
              text-white
              transition-all
              duration-300
              hover:bg-[#B51219]
            "
          >
            <MapPin size={17} />

            Find Cafe Kite

            <ArrowUpRight size={16} />
          </a>

        </div>

        {/* =================================================
            SIDEBAR FOOTER
        ================================================== */}

        <div className="border-t border-white/10 px-6 py-6">

          <div className="flex items-center justify-between">

            <div>
              <p className="font-[Poppins] text-[9px] uppercase tracking-[0.25em] text-white/30">
                Cafe Kite
              </p>

              <p className="mt-1 font-[Poppins] text-xs text-white/50">
                Kattappana · Kerala
              </p>
            </div>

            <div className="h-2 w-2 rounded-full bg-[#E21B23]" />

          </div>

        </div>

      </aside>
    </>
  );
}