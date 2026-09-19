import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const menuItems = [
    {
        number: "01",
        category: "Coffee",
        title: "Freshly Brewed",
        description:
            "Rich coffee, creamy favourites and refreshing drinks made for slow moments.",
        image:
            "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=85",
    },
    {
        number: "02",
        category: "Bakery",
        title: "Freshly Baked",
        description:
            "Golden pastries, breads and sweet treats prepared fresh for the day.",
        image:
            "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=85",
    },
    {
        number: "03",
        category: "Food",
        title: "Comfort Food",
        description:
            "Familiar flavours, satisfying plates and Cafe Kite favourites.",
        image:
            "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=85",
    },
    {
        number: "04",
        category: "Desserts",
        title: "Something Sweet",
        description:
            "Finish your visit with cakes, desserts and little indulgences.",
        image:
            "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&q=85",
    },
];
export default function Menu() {
    return (
        <section
            id="menu"
            className="relative overflow-hidden bg-[#f1eee7] px-6 py-24 text-[#111111] md:px-10 md:py-32 lg:px-16 lg:py-40"
        >
            <div className="mx-auto max-w-7xl">

                {/* Header */}
                <div className="mb-16 grid gap-8 md:grid-cols-2 md:items-end">

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="mb-6 flex items-center gap-4">
                            <span className="h-px w-12 bg-[#ed1c24]" />

                            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-black/50">
                                Our Menu
                            </span>
                        </div>

                        <h2 className="font-display text-5xl leading-[0.95] tracking-[-0.04em] sm:text-6xl md:text-7xl lg:text-8xl">
                            Made to
                            <br />
                            <span className="text-black/35">
                                be enjoyed.
                            </span>
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15, duration: 0.7 }}
                        className="max-w-md md:ml-auto"
                    >
                        <p className="text-sm leading-6 text-black/55 md:text-base">
                            From the first sip of coffee to the last bite of dessert,
                            discover a selection made for every kind of craving.
                        </p>

                        <a
                            href="#location"
                            className="group mt-6 inline-flex items-center gap-3 border-b border-black/30 pb-2 text-xs font-semibold uppercase tracking-[0.15em]"
                        >
                            Visit Cafe Kite

                            <ArrowUpRight
                                size={16}
                                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                            />
                        </a>
                    </motion.div>

                </div>

                {/* Menu Cards */}
                <div className="grid gap-5 md:grid-cols-2">

                    {menuItems.map((item, index) => (
                        <motion.article
                            key={item.number}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{
                                delay: index * 0.1,
                                duration: 0.7,
                            }}
                            className="group relative overflow-hidden bg-black"
                        >

                            {/* Image */}
                            <div className="relative aspect-[4/3] overflow-hidden">

                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                            </div>

                            {/* Number */}
                            <div className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-xs text-white backdrop-blur-sm">
                                {item.number}
                            </div>

                            {/* Arrow */}
                            <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white text-black transition-transform duration-300 group-hover:rotate-45">
                                <ArrowUpRight size={17} />
                            </div>

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 text-white md:p-8">

                                <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.3em] text-white/60">
                                    {item.category}
                                </p>

                                <h3 className="font-display text-3xl tracking-tight md:text-4xl">
                                    {item.title}
                                </h3>

                                <p className="mt-3 max-w-md text-sm leading-6 text-white/65">
                                    {item.description}
                                </p>

                            </div>

                        </motion.article>
                    ))}

                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mt-16 flex flex-col justify-between gap-6 border-t border-black/10 pt-8 sm:flex-row sm:items-center"
                >
                    <p className="text-xs uppercase tracking-[0.25em] text-black/40">
                        Good food. Better people.
                    </p>

                    <a
                        href="#location"
                        className="group flex w-fit items-center gap-3 rounded-full bg-[#111111] px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.15em] text-white transition hover:bg-[#ed1c24]"
                    >
                        Get Directions

                        <ArrowUpRight
                            size={16}
                            className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                        />
                    </a>
                </motion.div>

            </div>
        </section>
    );
}