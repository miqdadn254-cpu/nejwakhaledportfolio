import { Sparkles, Minus, Cog } from "lucide-react";

const styles = [
  {
    icon: Sparkles,
    title: "Scandinavian",
    description: "Warm, light-colored spaces with natural textures.",
  },
  {
    icon: Minus,
    title: "Minimalist",
    description: "Clean lines and a clutter-free aesthetic.",
  },
  {
    icon: Cog,
    title: "Industrial",
    description: "Edgy, urban designs with exposed elements.",
  },
];

const StyleCards = () => {
  return (
    <section className="py-24 px-4 md:px-8 lg:px-16 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {styles.map((style, index) => {
            const Icon = style.icon;
            return (
              <div
                key={style.title}
                className="group relative bg-card border border-border rounded-sm p-8 transition-all duration-500 hover:border-gold hover:shadow-2xl hover:shadow-gold/20 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="mb-6">
                  <Icon className="w-12 h-12 text-gold transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12" />
                </div>
                <h3 className="text-2xl font-display mb-4 text-cream">
                  {style.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {style.description}
                </p>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-gold to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StyleCards;
