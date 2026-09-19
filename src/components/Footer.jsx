import {
  ArrowUpRight,
  MapPin,
  Phone,
} from "lucide-react";
import { motion } from "framer-motion";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Location", href: "#location" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#090909] text-white">

      {/* =========================================================
          FINAL CTA
      ========================================================== */}

      <section className="relative overflow-hidden bg-[#E21B23]">

        {/* Large background typography */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -bottom-8
            left-0
            select-none
            font-[Poppins]
            text-[30vw]
            font-bold
            leading-none
            tracking-[-0.1em]
            text-black/[0.06]
            md:-bottom-16
          "
        >
          KITE
        </div>

        {/* Decorative vertical line */}
        <div
          aria-hidden="true"
          className="
            absolute
            left-6
            top-0
            h-full
            w-px
            bg-white/10
            md:left-10
            lg:left-16
          "
        />

        <div
          className="
            relative
            z-10
            mx-auto
            max-w-7xl
            px-6
            py-24
            md:px-10
            md:py-32
            lg:px-16
            lg:py-40
          "
        >

          {/* Small label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-4"
          >
            <span className="h-px w-10 bg-white/60" />

            <span
              className="
                font-[Poppins]
                text-[9px]
                font-medium
                uppercase
                tracking-[0.35em]
                text-white/70
              "
            >
              Your next stop
            </span>
          </motion.div>

          {/* Main heading */}
          <div className="mt-8 overflow-hidden">

            <motion.h2
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                max-w-6xl
                font-[Poppins]
                text-[clamp(4.5rem,13vw,11rem)]
                font-semibold
                leading-[0.78]
                tracking-[-0.08em]
                text-white
              "
            >
              COME.
              <br />
              <span className="text-black/20">
                STAY.
              </span>
            </motion.h2>

          </div>

          {/* Bottom content */}
          <div
            className="
              mt-12
              flex
              flex-col
              gap-10
              md:mt-16
              md:flex-row
              md:items-end
              md:justify-between
            "
          >

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.2,
                duration: 0.7,
              }}
              className="
                max-w-md
                font-[Poppins]
                text-sm
                leading-6
                text-white/75
                md:text-base
              "
            >
              Good food, good coffee and better moments.
              A place to slow down, connect and stay a little
              longer.
            </motion.p>

            {/* CTA */}
            <motion.a
              href="#location"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.3,
                duration: 0.7,
              }}
              className="
                group
                inline-flex
                w-fit
                items-center
                gap-4
                rounded-full
                bg-white
                px-6
                py-4
                font-[Poppins]
                text-sm
                font-semibold
                text-black
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-black
                hover:text-white
              "
            >
              Find Cafe Kite

              <span
                className="
                  flex
                  h-8
                  w-8
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
                <ArrowUpRight size={16} />
              </span>
            </motion.a>

          </div>

        </div>
      </section>


      {/* =========================================================
          MAIN FOOTER
      ========================================================== */}

      <section className="bg-[#090909]">

        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">

          {/* =====================================================
              TOP FOOTER
          ====================================================== */}

          <div
            className="
              grid
              gap-14
              border-b
              border-white/10
              py-16
              md:py-20
              lg:grid-cols-[1.5fr_1fr_1fr]
              lg:gap-20
            "
          >

            {/* =================================================
                BRAND
            ================================================== */}

            <div>

              <a
                href="#home"
                className="inline-block"
              >
                <img
                  src="/Cafe_kite.png"
                  alt="Cafe Kite"
                  className="h-16 w-auto md:h-20"
                />
              </a>

              <p
                className="
                  mt-7
                  max-w-sm
                  font-[Poppins]
                  text-sm
                  leading-7
                  text-white/45
                "
              >
                Specialty coffee, fresh bakes and comfort food
                served with a little more character.
              </p>

              {/* Instagram */}
              

            </div>


            {/* =================================================
                NAVIGATION
            ================================================== */}

            <div>

              <p
                className="
                  mb-7
                  font-[Poppins]
                  text-[9px]
                  font-medium
                  uppercase
                  tracking-[0.35em]
                  text-white/30
                "
              >
                Explore
              </p>

              <nav className="flex flex-col gap-4">

                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="
                      group
                      flex
                      w-fit
                      items-center
                      gap-3
                      font-[Poppins]
                      text-sm
                      text-white/65
                      transition-all
                      duration-300
                      hover:text-white
                    "
                  >
                    <span
                      className="
                        h-px
                        w-0
                        bg-[#E21B23]
                        transition-all
                        duration-300
                        group-hover:w-5
                      "
                    />

                    {item.label}
                  </a>
                ))}

              </nav>

            </div>


            {/* =================================================
                LOCATION
            ================================================== */}

            <div>

              <p
                className="
                  mb-7
                  font-[Poppins]
                  text-[9px]
                  font-medium
                  uppercase
                  tracking-[0.35em]
                  text-white/30
                "
              >
                Find Us
              </p>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Cafe+Kite+Kattappana+Kerala"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  flex
                  items-start
                  gap-4
                "
              >

                <MapPin
                  size={18}
                  className="
                    mt-1
                    shrink-0
                    text-[#E21B23]
                    transition-transform
                    duration-300
                    group-hover:-translate-y-1
                  "
                />

                <p
                  className="
                    font-[Poppins]
                    text-sm
                    leading-6
                    text-white/55
                    transition
                    group-hover:text-white
                  "
                >
                  NH 185, Kattappana Road
                  <br />
                  Near Calvarymount
                  <br />
                  Kerala, India
                </p>

              </a>

              <a
                href="tel:+919000000000"
                className="
                  mt-6
                  flex
                  items-center
                  gap-4
                  font-[Poppins]
                  text-sm
                  text-white/55
                  transition
                  hover:text-white
                "
              >
                <Phone
                  size={17}
                  className="text-[#E21B23]"
                />

                +91 90000 00000
              </a>

            </div>

          </div>


          {/* =====================================================
              BOTTOM BAR
          ====================================================== */}

          <div
            className="
              flex
              flex-col
              gap-5
              py-7
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >

            <p
              className="
                font-[Poppins]
                text-[9px]
                uppercase
                tracking-[0.2em]
                text-white/25
              "
            >
              © 2026 Cafe Kite
            </p>

            <div className="flex items-center gap-3">

              <span className="h-1.5 w-1.5 rounded-full bg-[#E21B23]" />

              <p
                className="
                  font-[Poppins]
                  text-[9px]
                  uppercase
                  tracking-[0.2em]
                  text-white/25
                "
              >
                Coffee · Bakes · Good Moments
              </p>

            </div>

          </div>

        </div>

      </section>

    </footer>
  );
}