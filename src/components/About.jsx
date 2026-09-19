import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
    return (
        <section
            id="about"
            className="relative overflow-hidden bg-[#0b0b0b] px-6 py-24 md:px-10 md:py-32 lg:px-16 lg:py-40"
        >
            <div className="mx-auto max-w-7xl">

                {/* Top Label */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7 }}
                    className="mb-16 flex items-center gap-4"
                >
                    <span className="h-px w-12 bg-[#ed1c24]" />

                    <span className="text-xs font-medium uppercase tracking-[0.35em] text-white/50">
                        About Cafe Kite
                    </span>
                </motion.div>

                {/* Main Grid */}
                <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">

                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >

                        <h2 className="max-w-xl font-display text-5xl leading-[0.95] tracking-[-0.04em] text-white sm:text-6xl md:text-7xl lg:text-8xl">
                            More than
                            <br />
                            <span className="text-white/35">
                                just coffee.
                            </span>
                        </h2>

                        <p className="mt-8 max-w-lg text-base leading-7 text-white/55 md:text-lg">
                            Cafe Kite is a place to pause, connect and enjoy something
                            delicious. From freshly baked favourites to comforting food
                            and carefully prepared coffee, every visit is meant to feel
                            a little different.
                        </p>

                        {/* Small Brand Statement */}
                        <div className="mt-10 border-l border-[#ed1c24] pl-5">
                            <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/80">
                                Good Food.
                            </p>

                            <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/80">
                                Better People.
                            </p>
                        </div>

                        {/* CTA */}
                        <a
                            href="#menu"
                            className="group mt-10 inline-flex items-center gap-4 border-b border-white/30 pb-2 text-sm font-medium uppercase tracking-[0.15em] text-white transition-colors hover:border-[#ed1c24]"
                        >
                            Discover Our Menu

                            <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                                <ArrowUpRight size={17} />
                            </span>
                        </a>

                    </motion.div>

                    {/* Right Image Composition */}
                    {/* Right Image Composition */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.9 }}
                        className="relative"
                    >
                        <div className="relative aspect-[5/5] overflow-hidden rounded-sm">

                            <img
                                src="https://images.pexels.com/photos/20296280/pexels-photo-20296280.jpeg"
                                alt="Cafe interior"
                                className="h-full w-full object-cover transition-transform duration-1000 hover:scale-105"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                        </div>

                        {/* Floating Card */}
                        <div className="absolute -bottom-6 -left-5 hidden w-48 border border-white/10 bg-[#111111]/95 p-5 backdrop-blur-md sm:block md:-left-8 md:w-56">

                            <div className="mb-5 flex items-center justify-between">
                                <span className="text-3xl font-semibold text-white">
                                    5.0
                                </span>

                                <span className="text-[#ed1c24]">
                                    ★★★★★
                                </span>
                            </div>

                            <p className="text-xs uppercase leading-5 tracking-[0.15em] text-white/45">
                                Google Reviews
                            </p>

                            <p className="mt-1 text-sm text-white/80">
                                250+ happy reviews
                            </p>

                        </div>

                        {/* Decorative Red Line */}
                        <div className="absolute -right-3 -top-3 h-24 w-24 border-r border-t border-[#ed1c24]/70" />

                    </motion.div>

                </div>

                {/* Bottom Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mt-24 grid border-y border-white/10 sm:grid-cols-3"
                >

                    <div className="border-b border-white/10 px-5 py-7 sm:border-b-0 sm:border-r md:px-8">
                        <p className="text-3xl font-semibold text-white">01</p>
                        <p className="mt-2 text-xs uppercase tracking-[0.2em] text-white/40">
                            Cafe
                        </p>
                    </div>

                    <div className="border-b border-white/10 px-5 py-7 sm:border-b-0 sm:border-r md:px-8">
                        <p className="text-3xl font-semibold text-white">250+</p>
                        <p className="mt-2 text-xs uppercase tracking-[0.2em] text-white/40">
                            Google Reviews
                        </p>
                    </div>

                    <div className="px-5 py-7 md:px-8">
                        <p className="text-3xl font-semibold text-white">∞</p>
                        <p className="mt-2 text-xs uppercase tracking-[0.2em] text-white/40">
                            Good Moments
                        </p>
                    </div>

                </motion.div>

            </div>
        </section>
    );
}