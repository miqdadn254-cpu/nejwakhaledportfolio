const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-14 px-6 md:px-12 lg:px-24 bg-background border-t border-gold/20 text-cream text-center overflow-hidden">
      {/* Subtle gold glow effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/5 to-transparent opacity-40 blur-2xl" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Logo / Monogram */}
        <div className="text-3xl md:text-4xl font-display text-gold tracking-[0.4em] mb-6">
          NK
        </div>

        {/* Divider line */}
        <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6 opacity-70" />

        {/* Dynamic Copyright */}
        <p className="text-xs md:text-sm tracking-widest text-cream/70 uppercase">
          Copyright © {currentYear} TNKPDM All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
