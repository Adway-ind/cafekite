import { ArrowLeft, Home, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#090909] px-6 text-white">

      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/hero.png"
          alt=""
          className="h-full w-full object-cover object-center opacity-20"
        />

        <div className="absolute inset-0 bg-[#090909]/85" />

        <div className="absolute inset-0 bg-gradient-to-b from-[#090909]/60 via-transparent to-[#090909]" />
      </div>

      {/* Red Glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[450px]
          w-[450px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#E21B23]/10
          blur-[130px]
        "
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl text-center">

        {/* Logo */}
        <motion.a
          href="/"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-16 inline-block"
        >
          <img
            src="/Cafe_kite.png"
            alt="Cafe Kite"
            className="mx-auto h-16 w-auto md:h-20"
          />
        </motion.a>

        {/* Small Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7 }}
          className="mb-6 flex items-center justify-center gap-4"
        >
          <span className="h-px w-10 bg-[#E21B23]" />

          <span className="font-[Poppins] text-[10px] font-medium uppercase tracking-[0.35em] text-white/50">
            Lost your way?
          </span>

          <span className="h-px w-10 bg-[#E21B23]" />
        </motion.div>

        {/* 404 */}
        <div className="overflow-hidden">

          <motion.h1
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.25,
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              font-[Poppins]
              text-[clamp(7rem,20vw,16rem)]
              font-semibold
              leading-[0.75]
              tracking-[-0.09em]
              text-white
            "
          >
            4<span className="text-[#E21B23]">0</span>4
          </motion.h1>

        </div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.7 }}
          className="mt-10"
        >
          <h2 className="font-[Poppins] text-2xl font-medium tracking-tight text-white sm:text-3xl">
            This page wandered off.
          </h2>

          <p className="mx-auto mt-4 max-w-md font-[Poppins] text-sm leading-6 text-white/45">
            Looks like you took a wrong turn. No worries —
            there is always good coffee waiting back home.
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.7 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-4"
        >

          {/* Home */}
          <a
            href="/"
            className="
              group
              inline-flex
              items-center
              gap-3
              rounded-full
              bg-white
              px-6
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
            <Home size={16} />

            Back Home

            <ArrowLeft
              size={15}
              className="
                rotate-180
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </a>

          {/* Location */}
          <a
            href="#location"
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-white/15
              px-6
              py-3
              font-[Poppins]
              text-sm
              text-white/65
              transition-all
              duration-300
              hover:border-[#E21B23]
              hover:text-white
            "
          >
            <MapPin
              size={15}
              className="text-[#E21B23]"
            />

            Find Cafe Kite
          </a>

        </motion.div>

        {/* Bottom Meta */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="mt-16 flex items-center justify-center gap-4"
        >
          <span className="font-[Poppins] text-[9px] uppercase tracking-[0.3em] text-white/30">
            Cafe Kite
          </span>

          <span className="h-1 w-1 rounded-full bg-[#E21B23]" />

          <span className="font-[Poppins] text-[9px] uppercase tracking-[0.3em] text-white/30">
            Kattappana
          </span>
        </motion.div>

      </div>

      {/* Bottom Red Line */}
      <div className="absolute bottom-0 left-0 h-[2px] w-full bg-[#E21B23]" />

    </main>
  );
}