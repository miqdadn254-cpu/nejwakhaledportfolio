import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="relative py-24 sm:py-28 md:py-32 px-6 md:px-12 lg:px-24 bg-background text-cream overflow-hidden">
      {/* ===== Soft Gold Glow Background ===== */}
      <div className="absolute inset-0 bg-gradient-to-b from-gold/10 via-transparent to-gold/10 opacity-70 blur-3xl pointer-events-none" />

      <motion.div
        className="relative max-w-6xl mx-auto space-y-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ staggerChildren: 0.3 }}
      >
        {/* ===== Heading ===== */}
        <motion.div
          className="text-center space-y-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          <h2 className="text-[2.5rem] sm:text-[3.5rem] md:text-[4rem] lg:text-[5rem] font-display font-light tracking-wide text-gold leading-tight">
            Our Vision
          </h2>
          <div className="w-24 h-[2px] bg-gold mx-auto opacity-70" />
          <p className="text-base sm:text-lg md:text-xl text-cream/70 font-light max-w-2xl mx-auto leading-relaxed">
            Crafting spaces that merge elegance, warmth, and timeless sophistication.
          </p>
        </motion.div>

        {/* ===== Content ===== */}
        <motion.div
          className="space-y-10 text-base sm:text-lg md:text-xl leading-relaxed text-cream/80 font-light max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: 'easeOut' }}
        >
          {/* First Paragraph with Dropcap */}
          <p className="first-letter:text-6xl first-letter:font-display first-letter:text-gold first-letter:mr-3 first-letter:float-left first-letter:leading-none">
            At Najwa Khaled PDM Contractors, we breathe life into spaces through a harmonious
            blend of artistry and functionality. Our passion is to transform your environment into
            a sanctuary of style, where Scandinavian elegance, minimalist clarity, and industrial
            strength converge seamlessly.
          </p>

          <p>
            We take pride in creating spaces that not only reflect your personality and vision but
            also enhance your everyday living experience. Our services extend beyond aesthetics —
            focusing on delivering crafted solutions that cater to your unique needs, ensuring
            comfort, practicality, and refinement in every detail.
          </p>

          <p>
            With meticulous attention to detail, we deliver unparalleled painting, decorating, and
            maintenance solutions. From conceptualization to completion, our team is dedicated to
            excellence, offering exceptional interior design, seamless remodeling, and expert
            installation.
          </p>

          {/* ===== Quote Section ===== */}
          <motion.div
            className="relative text-center py-12"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 1.2, ease: "easeOut" }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/10 to-transparent blur-2xl" />
            <p className="relative text-2xl md:text-3xl font-display text-gold italic leading-relaxed">
              “We believe every space has the potential to become a masterpiece.”
            </p>
          </motion.div>

          <motion.p
            className="text-center text-cream/70 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Trust us to bring your dream interiors to life with creativity, precision, and a passion
            for redefining the essence of modern living.
          </motion.p>
        </motion.div>
      </motion.div>

      {/* ===== Floating Decorative Glow ===== */}
      <motion.div
        className="absolute top-1/4 left-1/2 w-[30rem] h-[30rem] bg-gold/10 blur-[160px] rounded-full -translate-x-1/2 opacity-50 pointer-events-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
      />
    </section>
  );
};

export default About;
