import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const textVariant = (delay: number) => ({
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.8, ease: "easeOut" },
  },
});

const Services = () => {
  return (
    <section className="relative py-24 sm:py-28 md:py-32 px-6 md:px-12 lg:px-24 bg-background text-cream overflow-hidden">
      <motion.div
        className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-20 md:gap-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* ===== Left Column — PDM ===== */}
        <div className="flex flex-col items-start space-y-6 md:space-y-8 text-left text-balance">
          {["Painting", "Decorating", "Maintenance"].map((text, index) => (
            <motion.h2
              key={text}
              variants={textVariant(index * 0.2)}
              className="
                text-4xl sm:text-5xl md:text-6xl lg:text-7xl
                font-display uppercase tracking-[0.15em] leading-tight text-cream
              "
            >
              {text}
            </motion.h2>
          ))}
        </div>

        {/* ===== Center Arrow ===== */}
        <motion.div
          className="flex justify-center items-center relative mt-12 lg:mt-0"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
        >
          <div className="absolute w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gold/10 blur-3xl animate-pulse-slow" />
          <ArrowRight
            className="w-12 h-12 sm:w-14 sm:h-14 md:w-20 md:h-20 text-gold drop-shadow-[0_0_12px_rgba(255,215,0,0.25)] animate-gold-glow"
            strokeWidth={1.4}
          />
        </motion.div>

        {/* ===== Right Column — Additional Services ===== */}
        <div className="flex flex-col items-start space-y-6 md:space-y-8 text-left mt-12 lg:mt-0 text-balance">
          {["Interior Design", "Remodeling", "Installation", "Assembly"].map(
            (text, index) => (
              <motion.h2
                key={text}
                variants={textVariant(index * 0.2 + 0.6)}
                className="
                  text-3xl sm:text-4xl md:text-5xl lg:text-6xl
                  font-display uppercase tracking-[0.15em] leading-tight text-gold
                "
              >
                {text}
              </motion.h2>
            )
          )}
        </div>
      </motion.div>
    </section>
  );
};

export default Services;
