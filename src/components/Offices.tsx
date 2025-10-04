const offices = [
  {
    country: "Kuwait",
    flag: "🇰🇼",
    status: "active",
  },
  {
    country: "UAE",
    flag: "🇦🇪",
    status: "active",
  },
  {
    country: "Saudi Arabia",
    flag: "🇸🇦",
    status: "coming",
  },
];

const Offices = () => {
  return (
    <section className="py-24 px-4 md:px-8 lg:px-16 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-display text-gold mb-4">
          Our Offices
        </h2>
        <div className="w-24 h-1 bg-gold mx-auto mb-16" />

        <div className="grid md:grid-cols-3 gap-8">
          {offices.map((office, index) => (
            <div
              key={office.country}
              className="group relative bg-card border border-border rounded-sm p-8 transition-all duration-500 hover:border-gold hover:shadow-xl hover:shadow-gold/10 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-6xl mb-4 transition-transform duration-500 group-hover:scale-110">
                {office.flag}
              </div>
              <h3 className="text-2xl font-display text-cream mb-2">
                {office.country}
              </h3>
              {office.status === "coming" && (
                <span className="inline-block px-3 py-1 bg-gold/20 text-gold text-sm rounded-full">
                  Coming Soon
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offices;
