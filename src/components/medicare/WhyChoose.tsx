import { Siren, Lock, Sparkles } from "lucide-react";

const features = [
  {
    icon: Siren,
    title: "24/7 Emergency Care",
    desc: "Round-the-clock emergency response with rapid triage and ICU-grade care.",
    color: "from-red-500/10 to-orange-500/10",
    iconColor: "text-red-500",
  },
  {
    icon: Lock,
    title: "Secure & Private Data",
    desc: "Bank-grade encryption protects your medical records & personal information.",
    color: "from-blue-500/10 to-cyan-500/10",
    iconColor: "text-primary",
  },
  {
    icon: Sparkles,
    title: "AI-Ready Medical System",
    desc: "Smart diagnostics & predictive insights powered by modern AI technology.",
    color: "from-teal-500/10 to-emerald-500/10",
    iconColor: "text-accent",
  },
];

const WhyChoose = () => {
  return (
    <section id="why" className="py-20 md:py-28 bg-gradient-soft relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-glow rounded-full blur-3xl" />
      <div className="container relative">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-semibold mb-4">
            Why Choose Us
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold mb-4">
            Care You Can <span className="text-gradient">Trust</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="group relative bg-card rounded-3xl p-8 shadow-soft hover-lift border border-border/50 overflow-hidden"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${f.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />
              <div className="relative">
                <div className="relative inline-flex w-16 h-16 rounded-2xl bg-background shadow-soft items-center justify-center mb-6">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-cta opacity-20 blur-xl" />
                  <f.icon className={`w-8 h-8 ${f.iconColor} relative`} />
                </div>
                <h3 className="font-display text-2xl font-bold mb-3">{f.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
