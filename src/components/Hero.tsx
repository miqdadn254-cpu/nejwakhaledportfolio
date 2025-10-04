import { motion } from "framer-motion";
import heroImage from "@/assets/hero-interior.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden text-center bg-black">
      {/* ===== Background Image with Subtle Motion ===== */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
      >
        <img
          src={heroImage}
          alt="Luxurious interior design background"
          className="w-full h-full object-cover object-center brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />
      </motion.div>

      {/* ===== Logo (Top Left) ===== */}
      <motion.div
        className="absolute top-6 left-6 sm:top-8 sm:left-8 z-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <span className="text-cream text-2xl sm:text-3xl md:text-4xl font-display font-bold tracking-widest">
          NK
        </span>
      </motion.div>

      {/* ===== Main Content ===== */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-6">
        <motion.h1
          className="
            text-[3rem] sm:text-[5rem] md:text-[7rem] lg:text-[9rem] xl:text-[11rem]
            font-display font-light uppercase
            tracking-[0.25em] text-cream leading-[1.1]
          "
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          THENAJWA
          <br />
          KHALED
        </motion.h1>

        {/* Elegant Divider */}
        <motion.div
          className="w-40 sm:w-56 md:w-72 h-[2px] bg-gold/90 mt-8 sm:mt-10 md:mt-12 mb-6 sm:mb-8 md:mb-10 rounded-full"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.4, duration: 0.8, ease: "easeOut" }}
        />

        {/* P.D.M */}
        <motion.div
          className="
            text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl
            font-display tracking-[0.25em] text-gold uppercase
          "
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.9 }}
        >
          P.D.M
        </motion.div>

        {/* Tagline */}
        <motion.p
          className="
            text-base sm:text-lg md:text-xl mt-6 sm:mt-8 text-cream/70 font-sans
            max-w-md sm:max-w-xl md:max-w-2xl leading-relaxed tracking-wide
          "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.9 }}
        >
          Painting · Decorating · Maintenance
        </motion.p>
      </div>

      {/* ===== Scroll Indicator ===== */}
      <motion.div
        className="absolute bottom-6 sm:bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.4, duration: 1 }}
      >
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-gold/60 rounded-full flex items-start justify-center p-1.5 sm:p-2 animate-bounce">
          <div className="w-1 h-3 sm:w-1.5 sm:h-3 bg-gold/60 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
