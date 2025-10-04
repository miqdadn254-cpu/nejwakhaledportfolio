import { Users, CheckCircle2, Headphones } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "107+",
    label: "Happy Clients",
  },
  {
    icon: CheckCircle2,
    value: "300",
    label: "Completed Projects",
  },
  {
    icon: Headphones,
    value: "24/7",
    label: "Customer Care Support",
  },
];

const Stats = () => {
  return (
    <section className="py-24 px-4 md:px-8 lg:px-16 bg-primary">
      <div className="max-w-5xl mx-auto">
        <div className="border-2 border-gold/30 rounded-sm p-12 md:p-16 backdrop-blur-sm bg-charcoal/30">
          <div className="grid md:grid-cols-3 gap-12">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="text-center space-y-4 animate-fade-in"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <Icon className="w-12 h-12 text-gold mx-auto mb-6" />
                  <div className="text-5xl md:text-6xl font-display text-cream mb-3">
                    {stat.value}
                  </div>
                  <div className="text-lg text-muted-foreground tracking-wide">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
