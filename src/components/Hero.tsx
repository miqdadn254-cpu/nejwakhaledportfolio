import heroImage from "@/assets/hero-interior.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Luxurious interior design" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      </div>

      {/* Logo */}
      <div className="absolute top-8 left-8 z-20">
        <div className="text-cream text-3xl font-display font-bold tracking-wider">NK</div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto animate-fade-in">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-light tracking-widest text-cream mb-8">
          THENAJWA
          <br />
          KHALED
        </h1>
        
        <div className="w-64 h-1 bg-gold mx-auto mb-12" />
        
        <div className="text-5xl md:text-7xl lg:text-8xl font-display font-light tracking-wider text-gold">
          P.D.M
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-gold/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-gold/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
