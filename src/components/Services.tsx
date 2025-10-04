import { ArrowRight } from "lucide-react";

const Services = () => {
  return (
    <section className="py-24 px-4 md:px-8 lg:px-16 bg-primary">
      <div className="max-w-7xl mx-auto">
        {/* Main Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-12 items-center">
          {/* Left Column - Gold */}
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display tracking-wider leading-tight text-gold">
              PAINTING
            </h2>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display tracking-wider leading-tight text-gold">
              DECORATING —
            </h2>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display tracking-wider leading-tight text-gold">
              MAINTENANCE
            </h2>
          </div>

          {/* Center Arrow */}
          <div className="flex justify-center lg:justify-start">
            <ArrowRight className="w-12 h-12 md:w-16 md:h-16 text-gold" strokeWidth={1.5} />
          </div>

          {/* Right Column - White */}
          <div className="space-y-6 animate-slide-up">
            <div className="h-1 w-24 bg-gold mb-8" />
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wider text-white">
                INTERIOR DESIGN
              </h2>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wider text-white">
                REMODELING
              </h2>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wider text-white">
                INSTALLATION
              </h2>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wider text-white">
                ASSEMBLY
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
