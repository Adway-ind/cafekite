import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1600&q=90",
    alt: "Modern cafe interior",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=90",
    alt: "Freshly brewed coffee",
    className: "",
  },
  {
    src: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=90",
    alt: "Fresh bakery selection",
    className: "",
  },
  {
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=90",
    alt: "Cozy cafe atmosphere",
    className: "md:col-span-2",
  },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-[#0b0b0b] px-6 py-24 md:px-10 md:py-32 lg:px-16 lg:py-40"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Header */}
        <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-12 bg-[#ed1c24]" />

              <span className="text-xs font-medium uppercase tracking-[0.3em] text-white/40">
                The Cafe
              </span>
            </div>

            <h2 className="font-display text-5xl leading-[0.92] tracking-[-0.04em] text-white sm:text-6xl md:text-7xl lg:text-8xl">
              Come for the
              <br />
              <span className="text-white/35">
                experience.
              </span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="max-w-sm text-sm leading-6 text-white/45 md:text-base"
          >
            A place to slow down, catch up, enjoy good food and make
            ordinary moments feel a little better.
          </motion.p>

        </div>

        {/* Gallery Grid */}
        <div className="grid auto-rows-[260px] grid-cols-1 gap-4 sm:auto-rows-[300px] md:grid-cols-2 md:auto-rows-[280px] lg:auto-rows-[320px]">

          {galleryImages.map((image, index) => (
            <motion.div
              key={image.src}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                margin: "-80px",
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.12,
              }}
              className={`group relative overflow-hidden ${image.className}`}
            >

              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/10 transition-colors duration-500 group-hover:bg-black/30" />

              {/* Hover Arrow */}
              <div className="absolute right-5 top-5 flex h-11 w-11 translate-y-2 items-center justify-center rounded-full bg-white text-black opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:rotate-45"
                />
              </div>

              {/* Image Number */}
              <div className="absolute bottom-5 left-5 text-xs font-medium tracking-[0.2em] text-white/70">
                0{index + 1}
              </div>

            </motion.div>
          ))}

        </div>

        {/* Brand Statement */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative mt-24 overflow-hidden border-y border-white/10 py-16 md:py-24"
        >

          {/* Background Decorative Diamond */}
          <div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rotate-45 border border-[#ed1c24]/20 md:h-72 md:w-72" />

          <div className="relative text-center">

            <p className="mb-5 text-[10px] uppercase tracking-[0.4em] text-white/30">
              Cafe Kite
            </p>

            <h3 className="font-display text-4xl leading-tight tracking-[-0.03em] text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Good Food.
              <br />
              <span className="text-white/35">
                Better People.
              </span>
            </h3>

          </div>

        </motion.div>

      </div>
    </section>
  );
}