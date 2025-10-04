import { motion } from "framer-motion";
import { Sparkles, Circle, Cog } from "lucide-react";

const styles = [
  {
    icon: Sparkles,
    title: "Scandinavian",
    description: "Warm, light-filled spaces with natural textures and minimalist harmony.",
  },
  {
    icon: Circle,
    title: "Minimalist",
    description: "Clean lines, refined simplicity, and perfect balance between form and function.",
  },
  {
    icon: Cog,
    title: "Industrial",
    description: "Raw, utilitarian interiors with bold, exposed elements and metallic finishes.",
  },
];

// Animation Variants
const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.25, delayChildren: 0.3 },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

const StyleCards = () => {
  return (
    <section className="relative py-24 sm:py-28 md:py-32 px-6 md:px-12 lg:px-20 bg-background overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-gold/10 via-transparent to-gold/10 opacity-30 blur-3xl" />

      <motion.div
        className="max-w-7xl mx-auto relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={container}
      >
        {/* ===== Heading ===== */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display text-gold mb-4">
            Design Styles
          </h2>
          <div className="w-24 h-[2px] bg-gold mx-auto" />
        </motion.div>

        {/* ===== Cards Grid ===== */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10"
          variants={container}
        >
          {styles.map((style, index) => {
            const Icon = style.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariant}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                  boxShadow: "0 25px 50px rgba(255,215,0,0.15)",
                }}
                transition={{ type: "spring", stiffness: 120, damping: 12 }}
                className="group relative bg-card border border-border rounded-2xl p-10 md:p-12 
                           shadow-[0_0_40px_rgba(0,0,0,0.25)] 
                           backdrop-blur-sm 
                           hover:border-gold 
                           transition-all duration-500"
              >
                {/* Decorative Gradient Overlay on Hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 bg-gradient-to-br from-gold/10 to-transparent transition-all duration-700" />

                {/* Icon */}
                <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-gold/10 mb-8 
                                group-hover:bg-gold/20 transition-all duration-500">
                  <Icon className="w-8 h-8 text-gold transition-all duration-500 group-hover:scale-110 group-hover:rotate-6" />
                </div>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-display text-cream mb-4 transition-all duration-300 group-hover:text-gold">
                  {style.title}
                </h3>

                {/* Description */}
                <p className="text-cream/70 leading-relaxed text-base md:text-lg transition-all duration-300 group-hover:text-cream">
                  {style.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default StyleCards;
