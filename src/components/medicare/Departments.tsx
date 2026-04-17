import {
  Pill, Scissors, Baby, Flower2, Microscope, Brain, FlaskConical, Activity, ArrowUpRight,
} from "lucide-react";

const departments = [
  { icon: Pill, name: "Medicine", desc: "Expert internal medicine & allied subspecialty care." },
  { icon: Scissors, name: "Surgery", desc: "Advanced surgical procedures with modern techniques." },
  { icon: Baby, name: "Paediatrics", desc: "Compassionate child & neonatal healthcare." },
  { icon: Flower2, name: "Gynaecology", desc: "Comprehensive women's health & maternity care." },
  { icon: Microscope, name: "Laparoscopic", desc: "Minimally invasive surgery for faster recovery." },
  { icon: Brain, name: "Neurorehab", desc: "Specialized neurological rehabilitation programs." },
  { icon: FlaskConical, name: "Pharmacy", desc: "24/7 in-house pharmacy with verified medicines." },
  { icon: Activity, name: "Diagnostics", desc: "State-of-the-art labs & imaging diagnostics." },
];

const Departments = () => {
  return (
    <section id="departments" className="py-20 md:py-28 relative">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-semibold mb-4">
            Our Departments
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold mb-4">
            Specialized <span className="text-gradient">Medical Care</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            From everyday checkups to specialized treatments — our departments deliver
            world-class care under one roof.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {departments.map((d, i) => (
            <article
              key={d.name}
              className="group relative bg-gradient-card border border-border/60 rounded-2xl p-6 hover-lift cursor-pointer overflow-hidden"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-gradient-cta opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500" />

              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-gradient-cta transition-all duration-500 group-hover:rotate-6 group-hover:scale-110">
                <d.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>

              <h3 className="font-display text-xl font-bold mb-2">{d.name}</h3>
              <p className="text-sm text-muted-foreground mb-5 leading-relaxed">{d.desc}</p>

              <button className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group/link">
                Learn More
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Departments;
