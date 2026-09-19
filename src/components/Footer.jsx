import { ArrowUpRight, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#E21B23] text-white">

      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section className="relative px-6 py-24 md:px-10 md:py-36 lg:px-16 lg:py-44">

        {/* Decorative Diamond */}
        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-[300px]
            w-[300px]
            -translate-x-1/2
            -translate-y-1/2
            rotate-45
            border
            border-white/10
            sm:h-[420px]
            sm:w-[420px]
            md:h-[600px]
            md:w-[600px]
          "
        />

        <div className="relative z-10 mx-auto max-w-7xl">

          {/* =================================================
              CTA CONTENT
          ================================================== */}

          <div className="text-left md:text-center">

            {/* Label */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="
                mb-6
                font-[Poppins]
                text-[10px]
                font-medium
                uppercase
                tracking-[0.35em]
                text-white/60
                md:text-xs
                md:tracking-[0.4em]
              "
            >
              Your next stop
            </motion.p>

            {/* Title */}
            <div className="overflow-hidden">

              <motion.h2
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  font-[Poppins]
                  text-[clamp(4rem,18vw,11rem)]
                  font-semibold
                  leading-[0.78]
                  tracking-[-0.08em]
                  text-white
                  md:text-[clamp(6rem,13vw,11rem)]
                "
              >
                CAFE
                <br className="sm:hidden" />
                <span className="sm:ml-5">KITE</span>
              </motion.h2>

            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.25,
                duration: 0.7,
              }}
              className="
                mt-8
                max-w-md
                font-[Poppins]
                text-sm
                leading-6
                text-white/70
                md:mx-auto
                md:mt-10
                md:text-base
              "
            >
              Good food, good coffee and better moments.
              Come by, slow down and stay a while.
            </motion.p>

            {/* =================================================
                CTA BUTTONS
            ================================================== */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.4,
                duration: 0.7,
              }}
              className="
                mt-8
                flex
                flex-col
                items-start
                justify-start
                gap-4
                sm:flex-row
                md:items-center
                md:justify-center
              "
            >

              {/* Visit Cafe */}
              <a
                href="#location"
                className="
                  group
                  inline-flex
                  items-center
                  gap-4
                  rounded-full
                  bg-white
                  px-7
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
                Visit Cafe Kite

                <span
                  className="
                    flex
                    h-7
                    w-7
                    items-center
                    justify-center
                    rounded-full
                    bg-black
                    text-white
                    transition-all
                    duration-300
                    group-hover:rotate-45
                    group-hover:bg-[#E21B23]
                  "
                >
                  <ArrowUpRight size={15} />
                </span>
              </a>

              {/* Call */}
              <a
                href="tel:+919000000000"
                className="
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  border
                  border-white/30
                  px-7
                  py-4
                  font-[Poppins]
                  text-sm
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:border-white
                  hover:bg-white
                  hover:text-black
                "
              >
                <Phone size={16} />
                Call Us
              </a>

            </motion.div>

          </div>

        </div>
      </section>

      {/* =====================================================
          FOOTER CONTENT
      ====================================================== */}

      <div className="border-t border-white/15">

        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">

          {/* =================================================
              MAIN FOOTER
          ================================================== */}

          <div
            className="
              grid
              gap-12
              py-12
              text-left
              sm:py-14
              md:grid-cols-2
              lg:grid-cols-4
            "
          >

            {/* =================================================
                BRAND
            ================================================== */}

            <div className="lg:col-span-2">

              <img
                src="/cafe-kite-logo.png"
                alt="Cafe Kite"
                className="w-36"
              />

              <p
                className="
                  mt-6
                  max-w-sm
                  font-[Poppins]
                  text-sm
                  leading-6
                  text-white/60
                "
              >
                Coffee, bakes, comfort food and good moments
                from Cafe Kite.
              </p>

            </div>

            {/* =================================================
                NAVIGATION
            ================================================== */}

            <div>

              <p
                className="
                  mb-5
                  font-[Poppins]
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.3em]
                  text-white/40
                "
              >
                Explore
              </p>

              <div
                className="
                  flex
                  flex-col
                  items-start
                  gap-3
                  font-[Poppins]
                  text-sm
                "
              >

                <a
                  href="#about"
                  className="transition hover:text-black"
                >
                  About
                </a>

                <a
                  href="#menu"
                  className="transition hover:text-black"
                >
                  Menu
                </a>

                <a
                  href="#gallery"
                  className="transition hover:text-black"
                >
                  Gallery
                </a>

                <a
                  href="#reviews"
                  className="transition hover:text-black"
                >
                  Reviews
                </a>

                <a
                  href="#location"
                  className="transition hover:text-black"
                >
                  Location
                </a>

              </div>

            </div>

            {/* =================================================
                CONTACT
            ================================================== */}

            <div>

              <p
                className="
                  mb-5
                  font-[Poppins]
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.3em]
                  text-white/40
                "
              >
                Find Us
              </p>

              <div className="space-y-5">

                {/* Address */}
                <div className="flex items-start gap-3">

                  <MapPin
                    size={17}
                    className="mt-0.5 shrink-0"
                  />

                  <p
                    className="
                      font-[Poppins]
                      text-sm
                      leading-6
                      text-white/70
                    "
                  >
                    NH 185, Kattappana Road
                    <br />
                    Near Calvarymount
                    <br />
                    Kerala, India
                  </p>

                </div>

                {/* Phone */}
                <a
                  href="tel:+919000000000"
                  className="
                    flex
                    items-center
                    gap-3
                    font-[Poppins]
                    text-sm
                    text-white/70
                    transition
                    hover:text-black
                  "
                >
                  <Phone size={16} />

                  +91 90000 00000
                </a>

              </div>

            </div>

          </div>

          {/* =================================================
              BOTTOM FOOTER
          ================================================== */}

          <div
            className="
              flex
              flex-col
              items-start
              justify-between
              gap-4
              border-t
              border-white/15
              py-6
              text-left
              sm:flex-row
              sm:items-center
            "
          >

            <p
              className="
                font-[Poppins]
                text-[9px]
                uppercase
                tracking-[0.18em]
                text-white/40
                md:text-[10px]
                md:tracking-[0.2em]
              "
            >
              © 2026 Cafe Kite. All rights reserved.
            </p>

            <p
              className="
                font-[Poppins]
                text-[9px]
                uppercase
                tracking-[0.18em]
                text-white/40
                md:text-[10px]
                md:tracking-[0.2em]
              "
            >
              Coffee · Bakes · Good Moments
            </p>

          </div>

        </div>

      </div>

    </footer>
  );
}