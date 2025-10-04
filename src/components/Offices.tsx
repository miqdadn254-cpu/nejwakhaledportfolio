import { motion } from "framer-motion";
import kuwaitFlag from "@/assets/flags/kuwait.png";
import uaeFlag from "@/assets/flags/uae.png";
import saudiFlag from "@/assets/flags/saudi.png";

const offices = [
  {
    country: "Kuwait",
    flag: kuwaitFlag,
    status: "active",
  },
  {
    country: "UAE",
    flag: uaeFlag,
    status: "active",
  },
  {
    country: "Saudi Arabia",
    flag: saudiFlag,
    status: "coming",
  },
];

const Offices = () => {
  return (
    <section className="relative py-24 sm:py-28 md:py-32 px-6 md:px-12 lg:px-24 bg-background text-cream overflow-hidden">
      {/* ===== Subtle Gold Ambient Glow ===== */}
      <div className="absolute inset-0 bg-gradient-to-b from-gold/10 via-transparent to-gold/10 opacity-30 blur-3xl" />

      <motion.div
        className="relative max-w-6xl mx-auto text-center z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ staggerChildren: 0.3 }}
      >
        {/* ===== Heading ===== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-20"
        >
          <h2 className="text-[2.5rem] sm:text-[3rem] md:text-[4rem] lg:text-[5rem] font-display text-gold mb-4 tracking-wide leading-tight">
            Our Offices
          </h2>
          <div className="w-24 h-[2px] bg-gold mx-auto opacity-70" />
        </motion.div>

        {/* ===== Office Cards ===== */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.25 },
            },
          }}
        >
          {offices.map((office, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.9, delay: index * 0.2, ease: "easeOut" }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 15px 45px rgba(255,215,0,0.15)",
                borderColor: "rgba(255,215,0,0.4)",
              }}
              className="relative group rounded-2xl border border-gold/20 bg-card/50 backdrop-blur-md 
                         p-10 sm:p-12 shadow-[0_0_30px_rgba(255,215,0,0.05)] 
                         transition-all duration-500"
            >
              {/* Flag */}
              <div className="w-24 h-16 sm:w-28 sm:h-20 mx-auto mb-6 overflow-hidden rounded-md shadow-[0_0_15px_rgba(255,215,0,0.2)]">
                <motion.img
                  src={office.flag}
                  alt={`${office.country} flag`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  whileHover={{ rotate: 1 }}
                />
              </div>

              {/* Country */}
              <h3 className="text-2xl sm:text-3xl font-display text-cream mb-3 tracking-wide group-hover:text-gold transition-colors duration-500">
                {office.country}
              </h3>

              {/* Status */}
              {office.status === "coming" ? (
                <span className="inline-block px-4 py-1 bg-gold/10 border border-gold/40 text-gold text-sm tracking-wider uppercase rounded-full">
                  Coming Soon
                </span>
              ) : (
                <span className="inline-block px-4 py-1 bg-gold/10 text-gold text-sm tracking-wider uppercase rounded-full border border-gold/40">
                  Open
                </span>
              )}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* ===== Floating Gold Light ===== */}
      <motion.div
        className="absolute bottom-1/3 left-1/2 w-[25rem] h-[25rem] bg-gold/10 blur-[160px] rounded-full -translate-x-1/2 opacity-50 pointer-events-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
      />
    </section>
  );
};

export default Offices;
