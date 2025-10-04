import founderPhoto from "@/assets/founder-photo.jpg";

const Founder = () => {
  return (
    <section className="py-24 px-4 md:px-8 lg:px-16 bg-primary">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Photo */}
          <div className="relative animate-fade-in">
            <div className="absolute inset-0 bg-gold/20 translate-x-4 translate-y-4 rounded-sm" />
            <div className="relative overflow-hidden rounded-sm shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)]">
              <img
                src={founderPhoto}
                alt="Najwa Khaled, Founder"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-4">
              <p className="text-lg md:text-xl leading-relaxed text-muted-foreground font-light">
                As a young entrepreneur, I have been reflecting on my journey in the real estate and hospitality sectors through my experiences with Airbnb. These experiences have broadened my perspective and opened my eyes to the vast opportunities in interior design a field where I see significant potential for growth, innovation, and creativity.
              </p>
            </div>

            <div className="pt-8 border-t border-gold/30">
              <h3 className="text-3xl md:text-4xl font-display text-gold mb-2">
                Najwa Khaled
              </h3>
              <p className="text-xl text-cream/80 tracking-wide">
                Founder & Creative Director
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
