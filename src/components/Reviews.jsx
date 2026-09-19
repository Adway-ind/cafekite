import { ArrowUpRight, Quote, Star } from "lucide-react";
import { motion } from "framer-motion";

const reviews = [
  {
    text: "A lovely place to stop, relax and enjoy some really good food.",
    author: "Google Review",
  },
  {
    text: "Great ambience, delicious food and a beautiful cafe experience.",
    author: "Google Review",
  },
  {
    text: "One of those places you want to come back to again.",
    author: "Google Review",
  },
];

export default function Reviews() {
  return (
    <section
      id="reviews"
      className="relative overflow-hidden bg-[#f1eee7] px-6 py-24 text-[#111111] md:px-10 md:py-32 lg:px-16 lg:py-40"
    >
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-12 bg-[#ed1c24]" />

            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-black/45">
              What People Say
            </span>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">

            <h2 className="font-display text-5xl leading-[0.92] tracking-[-0.04em] sm:text-6xl md:text-7xl lg:text-8xl">
              Loved by
              <br />
              <span className="text-black/30">
                good people.
              </span>
            </h2>

            {/* Rating */}
            <div className="flex items-end gap-5 lg:pb-2">

              <div>
                <div className="text-6xl font-semibold leading-none md:text-7xl">
                  5.0
                </div>

                <div className="mt-3 flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={17}
                      fill="#ed1c24"
                      strokeWidth={0}
                    />
                  ))}
                </div>
              </div>

              <div className="border-l border-black/15 pl-5">
                <p className="text-sm font-semibold">
                  250+
                </p>

                <p className="mt-1 text-xs uppercase tracking-[0.15em] text-black/45">
                  Google Reviews
                </p>
              </div>

            </div>

          </div>
        </motion.div>

        {/* Reviews */}
        <div className="grid gap-px overflow-hidden border border-black/10 bg-black/10 md:grid-cols-3">

          {reviews.map((review, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
              }}
              className="group relative bg-[#f1eee7] p-7 transition-colors duration-500 hover:bg-white md:p-9"
            >

              <Quote
                size={28}
                strokeWidth={1.5}
                className="mb-10 text-[#ed1c24]"
              />

              <p className="min-h-[110px] text-lg leading-7 tracking-[-0.01em] text-black/75">
                “{review.text}”
              </p>

              <div className="mt-10 flex items-center justify-between border-t border-black/10 pt-5">

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.15em]">
                    {review.author}
                  </p>

                  <div className="mt-2 flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        size={12}
                        fill="#ed1c24"
                        strokeWidth={0}
                      />
                    ))}
                  </div>
                </div>

                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 transition-all duration-300 group-hover:rotate-45 group-hover:bg-black group-hover:text-white">
                  <ArrowUpRight size={15} />
                </span>

              </div>

            </motion.article>
          ))}

        </div>

        {/* Google CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-12 flex flex-col justify-between gap-6 border-t border-black/10 pt-8 sm:flex-row sm:items-center"
        >

          <div>
            <p className="text-sm font-medium">
              See what our guests are saying.
            </p>

            <p className="mt-1 text-xs text-black/40">
              More reviews available on Google.
            </p>
          </div>

          <a
            href="#location"
            className="group flex w-fit items-center gap-3 rounded-full bg-[#111111] px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.15em] text-white transition hover:bg-[#ed1c24]"
          >
            View Google Reviews

            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>

        </motion.div>

      </div>
    </section>
  );
}