import { ArrowUpRight, MapPin, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate min-h-screen overflow-hidden bg-[#090909] text-white"
    >
      {/* =========================================================
          BACKGROUND IMAGE
      ========================================================== */}

      <motion.div
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 2.2,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute inset-0"
      >
        <img
          src="/hero.png"
          alt="Cafe Kite"
          className="h-full w-full object-cover object-center"
        />
      </motion.div>

      {/* =========================================================
          DARK OVERLAYS
      ========================================================== */}

      {/* Main overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Center darkness */}
      <div className="absolute inset-0 bg-black/15" />

      {/* Left atmospheric gradient */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-black/65
          via-black/25
          to-transparent
        "
      />

      {/* Bottom gradient */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black
          via-black/20
          to-transparent
        "
      />

      {/* Top gradient */}
      <div
        className="
          absolute
          inset-x-0
          top-0
          h-40
          bg-gradient-to-b
          from-black/70
          to-transparent
        "
      />

      {/* =========================================================
          RED ATMOSPHERIC GLOW
      ========================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[500px]
          w-[500px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#E21B23]/10
          blur-[140px]
        "
      />

      {/* =========================================================
          GRAIN
      ========================================================== */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "url('https://grainy-gradients.vercel.app/noise.svg)",
        }}
      />

      {/* =========================================================
          HERO CONTENT
      ========================================================== */}

      <div
        className="
          relative
          z-10
          flex
          min-h-screen
          items-center
          justify-center
          px-6
          pb-20
          pt-32
          sm:px-8
          md:px-10
          lg:px-14
        "
      >
        <div className="w-full max-w-6xl text-center">

          {/* =====================================================
              TOP LABEL
          ====================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.25,
              duration: 0.7,
            }}
            className="mb-8 flex items-center justify-center gap-4"
          >
            <span className="h-px w-10 bg-[#E21B23]" />

            <span
              className="
                font-[Poppins]
                text-[9px]
                font-medium
                uppercase
                tracking-[0.35em]
                text-white/75
                sm:text-[10px]
              "
            >
              Specialty Coffee · Fresh Bakes
            </span>

            <span className="h-px w-10 bg-[#E21B23]" />
          </motion.div>

          {/* =====================================================
              MAIN TITLE
          ====================================================== */}

          <div className="overflow-hidden py-1">
            <motion.h1
              initial={{
                y: "110%",
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                delay: 0.35,
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                font-[Poppins]
                text-[clamp(4rem,10vw,9rem)]
                font-semibold
                leading-[0.86]
                tracking-[-0.07em]
                text-white
              "
            >
              Good coffee.
            </motion.h1>
          </div>

          <div className="overflow-hidden py-1">
            <motion.h2
              initial={{
                y: "110%",
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                delay: 0.5,
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                font-[Poppins]
                text-[clamp(4rem,10vw,9rem)]
                font-semibold
                leading-[0.86]
                tracking-[-0.07em]
                text-[#E21B23]
              "
            >
              Better moments.
            </motion.h2>
          </div>

          {/* =====================================================
              DESCRIPTION
          ====================================================== */}

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.8,
              duration: 0.7,
            }}
            className="
              mx-auto
              mt-8
              max-w-lg
              font-[Poppins]
              text-[13px]
              font-normal
              leading-6
              text-white/65
              sm:text-sm
            "
          >
            Slow mornings, handcrafted coffee, fresh bakes and
            conversations worth staying for — tucked away in the
            hills of Kerala.
          </motion.p>

          {/* =====================================================
              BUTTONS
          ====================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.95,
              duration: 0.7,
            }}
            className="
              mt-8
              flex
              flex-wrap
              items-center
              justify-center
              gap-5
            "
          >

            {/* Explore Menu */}
            <a
              href="#menu"
              className="
                group
                inline-flex
                items-center
                gap-3
                rounded-full
                bg-white
                px-5
                py-3
                font-[Poppins]
                text-sm
                font-medium
                text-black
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-[#E21B23]
                hover:text-white
              "
            >
              Explore Menu

              <span
                className="
                  flex
                  h-7
                  w-7
                  items-center
                  justify-center
                  rounded-full
                  bg-[#E21B23]
                  text-white
                  transition-all
                  duration-300
                  group-hover:rotate-45
                  group-hover:bg-white
                  group-hover:text-black
                "
              >
                <ArrowUpRight size={14} />
              </span>
            </a>

            {/* Find Us */}
            <a
              href="#location"
              className="
                group
                inline-flex
                items-center
                gap-2
                font-[Poppins]
                text-xs
                font-medium
                uppercase
                tracking-[0.18em]
                text-white/65
                transition
                hover:text-white
              "
            >
              <MapPin
                size={14}
                className="
                  text-[#E21B23]
                  transition-transform
                  duration-300
                  group-hover:-translate-y-0.5
                "
              />

              Find Us
            </a>

          </motion.div>

          {/* =====================================================
              BRAND META
          ====================================================== */}

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 1.15,
              duration: 0.8,
            }}
            className="
              mt-10
              flex
              items-center
              justify-center
              gap-4
              font-[Poppins]
            "
          >
            <span
              className="
                text-[9px]
                uppercase
                tracking-[0.28em]
                text-white/40
              "
            >
              Cafe Kite
            </span>

            <span className="h-1 w-1 rounded-full bg-[#E21B23]" />

            <span
              className="
                text-[9px]
                uppercase
                tracking-[0.28em]
                text-white/40
              "
            >
              Kattappana
            </span>

            <span className="h-1 w-1 rounded-full bg-[#E21B23]" />

            <span
              className="
                text-[9px]
                uppercase
                tracking-[0.28em]
                text-white/40
              "
            >
              Since 2017
            </span>
          </motion.div>

        </div>
      </div>

      {/* =========================================================
          SCROLL INDICATOR
      ========================================================== */}

      <motion.a
        href="#about"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 1.5,
          duration: 0.8,
        }}
        className="
          absolute
          bottom-7
          left-1/2
          z-20
          flex
          -translate-x-1/2
          flex-col
          items-center
          gap-3
          text-white/40
          transition-colors
          hover:text-white
        "
      >
        <span
          className="
            font-[Poppins]
            text-[8px]
            uppercase
            tracking-[0.35em]
          "
        >
          Scroll
        </span>

        <motion.span
          animate={{
            y: [0, 6, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ChevronDown
            size={16}
            strokeWidth={1.5}
            className="text-[#E21B23]"
          />
        </motion.span>
      </motion.a>

      {/* =========================================================
          BOTTOM RED LINE
      ========================================================== */}

      <div className="absolute bottom-0 left-0 h-[2px] w-full bg-[#E21B23]" />
    </section>
  );
}