import { motion } from "framer-motion";
import founderPhoto from "@/assets/founder-photo.jpg";

const Founder = () => {
  return (
    <section className="relative py-24 sm:py-28 md:py-32 px-6 md:px-12 lg:px-24 bg-background text-cream overflow-hidden">
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ staggerChildren: 0.3 }}
      >
        {/* ===== Image Section ===== */}
        <motion.div
          className="relative flex justify-center"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Subtle Gold Glow Behind */}
          <div className="absolute inset-0 bg-gold/10 rounded-xl blur-3xl scale-105" />

          {/* Image with Cinematic Shadow & Hover Depth */}
          <motion.img
            src={founderPhoto}
            alt="Najwa Khaled, Founder"
            className="
              relative z-10 w-full h-auto max-w-md sm:max-w-lg 
              object-cover rounded-xl
              shadow-[0_25px_60px_rgba(0,0,0,0.8),0_0_30px_rgba(255,215,0,0.15)]
              transition-transform duration-700 ease-in-out
              hover:scale-105 hover:shadow-[0_35px_80px_rgba(0,0,0,0.85),0_0_50px_rgba(255,215,0,0.25)]
            "
            whileHover={{ scale: 1.05 }}
          />
        </motion.div>

        {/* ===== Text Section ===== */}
        <motion.div
          className="space-y-10 text-center md:text-left"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div>
            <motion.p
              className="text-sm tracking-[0.25em] uppercase text-gold mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Meet the Founder
            </motion.p>

            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-light tracking-wide text-cream leading-tight">
              Hello, I’m{" "}
              <span className="text-gold font-normal">Najwa Khaled</span>
            </h2>
          </div>

          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-cream/80 font-light max-w-xl md:max-w-2xl mx-auto md:mx-0">
            As a young entrepreneur, I’ve been reflecting on my journey in the real estate
            and hospitality industries through my experiences with Airbnb. These opportunities
            have broadened my perspective and opened my eyes to the vast potential within
            interior design — a field where I see boundless room for growth, innovation,
            and creativity.
          </p>

          <div className="pt-6 border-t border-gold/30">
            <p className="text-2xl md:text-3xl font-display text-gold mb-1">
              Najwa Khaled
            </p>
            <p className="text-lg text-cream/70 tracking-wide">
              Founder & Creative Director
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* ===== Floating Gold Glow (Cinematic Detail) ===== */}
      <motion.div
        className="absolute top-1/3 right-10 w-64 h-64 bg-gold/5 blur-[120px] rounded-full"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      />
    </section>
  );
};

export default Founder;
