import { ArrowUpRight, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#ed1c24] text-white">

      {/* =========================
          FINAL CTA
      ========================== */}
      <section className="relative px-6 py-28 md:px-10 md:py-36 lg:px-16 lg:py-44">

        {/* Decorative Diamond */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rotate-45 border border-white/10 md:h-[600px] md:w-[600px]" />

        <div className="relative z-10 mx-auto max-w-7xl text-center">

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6 text-xs font-medium uppercase tracking-[0.4em] text-white/60"
          >
            Your next stop
          </motion.p>

          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="font-display text-[18vw] leading-[0.8] tracking-[-0.07em] sm:text-[15vw] md:text-[13vw] lg:text-[11vw]"
            >
              CAFE KITE
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25, duration: 0.7 }}
            className="mx-auto mt-10 max-w-lg text-sm leading-6 text-white/70 md:text-base"
          >
            Good food, good coffee and better moments.
            Come by, slow down and stay a while.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >

            <a
              href="#location"
              className="group flex items-center gap-4 rounded-full bg-white px-7 py-4 text-sm font-semibold text-black transition-all duration-300 hover:gap-6"
            >
              Visit Cafe Kite

              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black text-white">
                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:rotate-45"
                />
              </span>
            </a>

            <a
              href="tel:+919000000000"
              className="flex items-center gap-3 rounded-full border border-white/30 px-7 py-4 text-sm font-semibold text-white transition hover:bg-white hover:text-black"
            >
              <Phone size={16} />
              Call Us
            </a>

          </motion.div>

        </div>
      </section>

      {/* =========================
          FOOTER
      ========================== */}
      <div className="border-t border-white/15">

        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">

          {/* Main Footer */}
          <div className="grid gap-12 py-14 md:grid-cols-2 lg:grid-cols-4">

            {/* Brand */}
            <div className="lg:col-span-2">

              <img
                src="/cafe-kite-logo.png"
                alt="Cafe Kite"
                className="w-36"
              />

              <p className="mt-6 max-w-sm text-sm leading-6 text-white/60">
                Coffee, bakes, comfort food and good moments
                from Cafe Kite.
              </p>

            </div>

            {/* Navigation */}
            <div>

              <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/40">
                Explore
              </p>

              <div className="flex flex-col gap-3 text-sm">

                <a
                  href="#about"
                  className="w-fit transition hover:text-black"
                >
                  About
                </a>

                <a
                  href="#menu"
                  className="w-fit transition hover:text-black"
                >
                  Menu
                </a>

                <a
                  href="#gallery"
                  className="w-fit transition hover:text-black"
                >
                  Gallery
                </a>

                <a
                  href="#reviews"
                  className="w-fit transition hover:text-black"
                >
                  Reviews
                </a>

                <a
                  href="#location"
                  className="w-fit transition hover:text-black"
                >
                  Location
                </a>

              </div>

            </div>

            {/* Contact */}
            <div>

              <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/40">
                Find Us
              </p>

              <div className="space-y-5">

                <div className="flex gap-3">

                  <MapPin
                    size={17}
                    className="mt-0.5 shrink-0"
                  />

                  <p className="text-sm leading-6 text-white/70">
                    NH 185, Kattappana Road
                    <br />
                    Near Calvarymount
                    <br />
                    Kerala, India
                  </p>

                </div>

                <a
                  href="tel:+919000000000"
                  className="flex items-center gap-3 text-sm text-white/70 transition hover:text-black"
                >
                  <Phone size={16} />
                  +91 90000 00000
                </a>

                {/* <a
                  href="#"
                  className="flex items-center gap-3 text-sm text-white/70 transition hover:text-black"
                >
                  <Instagram size={16} />
                  Instagram
                </a> */}

              </div>

            </div>

          </div>

          {/* Bottom Footer */}
          <div className="flex flex-col justify-between gap-4 border-t border-white/15 py-6 text-[10px] uppercase tracking-[0.2em] text-white/40 sm:flex-row">

            <p>
              © 2026 Cafe Kite. All rights reserved.
            </p>

            <p>
              Coffee · Bakes · Good Moments
            </p>

          </div>

        </div>

      </div>

    </footer>
  );
}