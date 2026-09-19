import { ArrowUpRight, Clock, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function Location() {
  return (
    <section
      id="location"
      className="relative overflow-hidden bg-[#0b0b0b] px-6 py-24 md:px-10 md:py-32 lg:px-16 lg:py-40"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-12 bg-[#ed1c24]" />

            <span className="text-xs font-medium uppercase tracking-[0.3em] text-white/40">
              Come Visit
            </span>
          </div>

          <h2 className="max-w-4xl font-display text-5xl leading-[0.92] tracking-[-0.04em] text-white sm:text-6xl md:text-7xl lg:text-8xl">
            Find your way
            <br />
            <span className="text-white/30">
              to Cafe Kite.
            </span>
          </h2>
        </motion.div>

        {/* Main Grid */}
        <div className="grid overflow-hidden border border-white/10 lg:grid-cols-[1.15fr_0.85fr]">

          {/* Map / Visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative min-h-[450px] overflow-hidden bg-[#161616] lg:min-h-[650px]"
          >

            {/* Background Image */}
            <img
              src="/location-cafe.jpg"
              alt="Cafe Kite location"
              className="absolute inset-0 h-full w-full object-cover opacity-70"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40" />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

            {/* Decorative Grid */}
            <div
              className="absolute inset-0 opacity-[0.08]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
                backgroundSize: "70px 70px",
              }}
            />

            {/* Location Marker */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">

              <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-white/30 bg-black/50 backdrop-blur-md">

                <div className="absolute inset-3 rounded-full border border-[#ed1c24]/50" />

                <MapPin
                  size={30}
                  className="relative text-white"
                  strokeWidth={1.5}
                />

              </div>

              <div className="mt-4 whitespace-nowrap text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white">
                  Cafe Kite
                </p>

                <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-white/50">
                  Kattappana · Kerala
                </p>
              </div>

            </div>

            {/* Bottom Label */}
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">

              <p className="max-w-xs text-xs leading-5 text-white/50">
                A stop worth making. Come for the coffee,
                stay for the atmosphere.
              </p>

              <span className="hidden text-[10px] uppercase tracking-[0.25em] text-white/40 sm:block">
                01 / LOCATION
              </span>

            </div>

          </motion.div>

          {/* Information */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-between bg-[#111111] p-7 md:p-10 lg:p-12"
          >

            <div>

              {/* Logo */}
              <div className="mb-14">
                <img
                  src="/cafe-kite-logo.png"
                  alt="Cafe Kite"
                  className="h-auto w-32 object-contain"
                />
              </div>

              {/* Address */}
              <div className="border-b border-white/10 pb-8">

                <div className="mb-4 flex items-center gap-3 text-[#ed1c24]">
                  <MapPin size={18} />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.25em]">
                    Location
                  </span>
                </div>

                <p className="text-lg leading-7 text-white/80">
                  NH 185, Kattappana Road
                  <br />
                  Near Calvarymount
                  <br />
                  Kerala, India
                </p>

              </div>

              {/* Hours */}
              <div className="border-b border-white/10 py-8">

                <div className="mb-4 flex items-center gap-3 text-[#ed1c24]">
                  <Clock size={18} />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.25em]">
                    Opening Hours
                  </span>
                </div>

                <div className="flex justify-between gap-6 text-sm">

                  <span className="text-white/50">
                    Every Day
                  </span>

                  <span className="text-white">
                    11:00 AM — 11:00 PM
                  </span>

                </div>

              </div>

              {/* Phone */}
              <div className="py-8">

                <div className="mb-4 flex items-center gap-3 text-[#ed1c24]">
                  <Phone size={18} />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.25em]">
                    Call Us
                  </span>
                </div>

                <a
                  href="tel:+919000000000"
                  className="text-lg text-white transition-colors hover:text-[#ed1c24]"
                >
                  +91 90000 00000
                </a>

              </div>

            </div>

            {/* CTA */}
            <a
              href="https://www.google.com/maps/search/?api=1&query=Cafe+Kite+Kattappana"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between border border-white/20 px-5 py-4 text-sm font-medium uppercase tracking-[0.15em] text-white transition-all duration-300 hover:border-[#ed1c24] hover:bg-[#ed1c24]"
            >
              <span>
                Get Directions
              </span>

              <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                <ArrowUpRight size={20} />
              </span>
            </a>

          </motion.div>

        </div>

      </div>
    </section>
  );
}