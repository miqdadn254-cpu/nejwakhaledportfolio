import { motion } from "framer-motion";
import { Users, CheckCircle2, Headphones } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "107+",
    label: "Happy Clients",
  },
  {
    icon: CheckCircle2,
    value: "300+",
    label: "Completed Projects",
  },
  {
    icon: Headphones,
    value: "24/7",
    label: "Customer Care Support",
  },
];

// Animation variants
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const Stats = () => {
  return (
    <section className="relative py-24 sm:py-28 md:py-32 px-6 md:px-12 lg:px-24 bg-background text-cream overflow-hidden">
      {/* ===== Soft Gold Glow Background ===== */}
      <div className="absolute inset-0 bg-gradient-to-b from-gold/10 via-transparent to-gold/10 blur-2xl opacity-40 pointer-events-none" />

      <motion.div
        className="relative max-w-6xl mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={container}
      >
        {/* ===== Section Title ===== */}
        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl font-display text-gold mb-16 tracking-wide"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Our Achievements
        </motion.h2>

        {/* ===== Stats Container ===== */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 border border-gold/20 rounded-2xl p-10 sm:p-12 md:p-16 bg-charcoal/40 backdrop-blur-md shadow-[0_0_40px_rgba(255,215,0,0.08)]"
          variants={container}
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                variants={item}
                className="space-y-6 flex flex-col items-center cursor-default transform transition-transform duration-500 hover:scale-105"
              >
                {/* Icon */}
                <motion.div
                  className="relative"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 120 }}
                >
                  <div className="absolute inset-0 blur-lg bg-gold/20 rounded-full scale-125" />
                  <Icon className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-gold drop-shadow-[0_0_10px_rgba(255,215,0,0.4)]" />
                </motion.div>

                {/* Value */}
                <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display text-cream drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]">
                  {stat.value}
                </div>

                {/* Label */}
                <div className="text-base sm:text-lg md:text-xl text-cream/70 tracking-widest uppercase">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>

      {/* ===== Floating Decorative Light ===== */}
      <motion.div
        className="absolute top-1/3 left-1/2 w-96 h-96 bg-gold/10 blur-[160px] rounded-full -translate-x-1/2 opacity-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
      />
    </section>
  );
};

export default Stats;
