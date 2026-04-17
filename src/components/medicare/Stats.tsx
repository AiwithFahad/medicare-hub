import { useEffect, useRef, useState } from "react";
import { Users, Stethoscope, Building2, Award } from "lucide-react";

const stats = [
  { icon: Users, value: 50000, suffix: "+", label: "Patients Served" },
  { icon: Stethoscope, value: 120, suffix: "+", label: "Expert Doctors" },
  { icon: Building2, value: 8, suffix: "+", label: "Departments" },
  { icon: Award, value: 25, suffix: "+", label: "Years Experience" },
];

const Counter = ({ end, suffix }: { end: number; suffix: string }) => {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setN(Math.floor(end * eased));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [end]);

  return (
    <span ref={ref}>
      {n.toLocaleString()}
      {suffix}
    </span>
  );
};

const Stats = () => {
  return (
    <section className="py-16 md:py-20 relative">
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="bg-gradient-card rounded-2xl p-6 md:p-8 shadow-soft hover-lift border border-border/50 group"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-gradient-cta group-hover:scale-110 transition-all duration-500">
                <s.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <div className="font-display text-3xl md:text-4xl font-extrabold text-foreground mb-1">
                <Counter end={s.value} suffix={s.suffix} />
              </div>
              <p className="text-sm md:text-base text-muted-foreground font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
