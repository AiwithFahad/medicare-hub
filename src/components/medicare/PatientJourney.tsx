import { useEffect, useRef, useState } from "react";
import { CalendarCheck, Stethoscope, FlaskConical, HeartPulse, Activity } from "lucide-react";

const steps = [
  {
    icon: CalendarCheck,
    title: "Book Appointment",
    desc: "Schedule online in seconds with your preferred specialist.",
  },
  {
    icon: Stethoscope,
    title: "Meet Specialist Doctor",
    desc: "In-depth consultation with our experienced doctors.",
  },
  {
    icon: FlaskConical,
    title: "Diagnosis & Reports",
    desc: "Advanced lab tests and accurate digital reports.",
  },
  {
    icon: HeartPulse,
    title: "Treatment Plan",
    desc: "A personalized care plan tailored to your needs.",
  },
  {
    icon: Activity,
    title: "Recovery & Follow-up",
    desc: "Ongoing support until you fully regain your health.",
  },
];

const PatientJourney = () => {
  const [progress, setProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = rect.height + vh;
      const seen = Math.min(Math.max(vh - rect.top, 0), total);
      setProgress(Math.min(seen / total, 1));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-28 bg-gradient-soft overflow-hidden">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-semibold mb-4">
            Patient Journey
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold mb-4">
            Your Care Journey at <span className="text-gradient">M+ MediCare</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            From appointment to recovery — we guide you at every step.
          </p>
        </div>

        {/* Desktop horizontal flow */}
        <div className="hidden lg:block relative">
          <div className="absolute top-10 left-[8%] right-[8%] h-1 bg-border rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-cta transition-[width] duration-500 ease-out"
              style={{ width: `${progress * 100}%` }}
            />
          </div>

          <div className="grid grid-cols-5 gap-6 relative">
            {steps.map((s, i) => {
              const Icon = s.icon;
              const active = progress * steps.length > i;
              return (
                <div key={i} className="flex flex-col items-center text-center group">
                  <div
                    className={`relative w-20 h-20 rounded-full flex items-center justify-center mb-5 transition-all duration-500 ${
                      active
                        ? "bg-gradient-cta shadow-glow scale-105"
                        : "bg-card border border-border"
                    } group-hover:scale-110`}
                  >
                    <Icon
                      className={`w-9 h-9 transition-colors ${
                        active ? "text-white" : "text-muted-foreground"
                      }`}
                    />
                    <span
                      className={`absolute -top-2 -right-2 w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center border-2 border-background transition-colors ${
                        active ? "bg-accent text-accent-foreground" : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-lg mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground max-w-[200px]">{s.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile vertical flow */}
        <div className="lg:hidden relative max-w-md mx-auto">
          <div className="absolute left-10 top-4 bottom-4 w-1 bg-border rounded-full overflow-hidden">
            <div
              className="w-full bg-gradient-cta transition-[height] duration-500 ease-out"
              style={{ height: `${progress * 100}%` }}
            />
          </div>

          <div className="space-y-8">
            {steps.map((s, i) => {
              const Icon = s.icon;
              const active = progress * steps.length > i;
              return (
                <div key={i} className="flex items-start gap-5 relative">
                  <div
                    className={`relative shrink-0 w-20 h-20 rounded-full flex items-center justify-center transition-all duration-500 ${
                      active
                        ? "bg-gradient-cta shadow-glow"
                        : "bg-card border border-border"
                    }`}
                  >
                    <Icon
                      className={`w-9 h-9 ${active ? "text-white" : "text-muted-foreground"}`}
                    />
                    <span
                      className={`absolute -top-2 -right-2 w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center border-2 border-background ${
                        active ? "bg-accent text-accent-foreground" : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {i + 1}
                    </span>
                  </div>
                  <div className="pt-2">
                    <h3 className="font-display font-bold text-lg mb-1">{s.title}</h3>
                    <p className="text-sm text-muted-foreground">{s.desc}</p>
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

export default PatientJourney;
