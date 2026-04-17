import { CalendarCheck, Smartphone, Zap, Bell } from "lucide-react";

const items = [
  { icon: CalendarCheck, title: "Online Appointment Booking", desc: "Reserve your slot in seconds — anytime, anywhere." },
  { icon: Smartphone, title: "Digital Healthcare Experience", desc: "Records, prescriptions & reports in one secure app." },
  { icon: Zap, title: "Fast Doctor Access", desc: "Skip the queue with priority video consultations." },
  { icon: Bell, title: "Smart Notifications", desc: "Reminders for medications, follow-ups & lab results." },
];

const SmartHealth = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-glow blur-3xl opacity-60" />

      <div className="container relative">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full glass text-sm font-semibold mb-4">
            Smart Health
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold mb-4">
            Healthcare, <span className="text-gradient">Reimagined</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            A digital-first hospital experience built around you.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((it, i) => (
            <div
              key={it.title}
              className="glass rounded-3xl p-6 md:p-7 shadow-soft hover-lift relative overflow-hidden group"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="absolute -top-10 -right-10 w-28 h-28 rounded-full bg-gradient-cta opacity-10 blur-2xl group-hover:opacity-30 transition-opacity" />
              <div
                className="w-14 h-14 rounded-2xl bg-gradient-cta flex items-center justify-center mb-5 shadow-glow animate-float"
                style={{ animationDelay: `${i * 0.3}s` }}
              >
                <it.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-lg font-bold mb-2">{it.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SmartHealth;
