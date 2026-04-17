import { useState } from "react";
import { MapPin, ArrowUpRight } from "lucide-react";
import building from "@/assets/hospital-building.jpg";

const hotspots = [
  { x: 22, y: 38, label: "Emergency" },
  { x: 52, y: 55, label: "Reception" },
  { x: 75, y: 32, label: "OPD" },
  { x: 38, y: 70, label: "Pharmacy" },
];

const Explore3D = () => {
  const [hover, setHover] = useState<number | null>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width - 0.5) * 8;
    const y = ((e.clientY - r.top) / r.height - 0.5) * -8;
    setTilt({ x, y });
  };

  return (
    <section className="py-20 md:py-28 bg-foreground text-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-30">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container relative">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full glass-dark text-sm font-semibold mb-4">
            Virtual Tour
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold mb-4 text-background">
            Explore Our <span className="text-gradient">Hospital</span>
          </h2>
          <p className="text-background/70 text-base md:text-lg">
            Hover to interact — discover departments inside our facility.
          </p>
        </div>

        <div
          className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-elegant border border-white/10"
          onMouseMove={onMove}
          onMouseLeave={() => setTilt({ x: 0, y: 0 })}
          style={{ perspective: "1200px" }}
        >
          <div
            className="relative aspect-[16/10] transition-transform duration-300 ease-out"
            style={{
              transform: `rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
              transformStyle: "preserve-3d",
            }}
          >
            <img
              src={building}
              alt="M+ MediCare hospital building"
              width={1280}
              height={896}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-foreground/30" />

            {hotspots.map((h, i) => (
              <button
                key={i}
                onMouseEnter={() => setHover(i)}
                onMouseLeave={() => setHover(null)}
                className="absolute -translate-x-1/2 -translate-y-1/2 group"
                style={{ left: `${h.x}%`, top: `${h.y}%` }}
              >
                <span className="relative flex w-5 h-5">
                  <span className="absolute inset-0 rounded-full bg-accent animate-ping opacity-75" />
                  <span className="relative rounded-full w-5 h-5 bg-gradient-cta border-2 border-white shadow-glow" />
                </span>
                <span
                  className={`absolute left-1/2 -translate-x-1/2 -top-12 whitespace-nowrap glass-dark text-background px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    hover === i ? "opacity-100 -translate-y-1" : "opacity-0"
                  }`}
                >
                  <MapPin className="inline w-3 h-3 mr-1" />
                  {h.label}
                </span>
              </button>
            ))}

            <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-background/60 mb-1">
                  M+ MediCare HQ
                </p>
                <h3 className="font-display text-xl md:text-2xl font-bold text-background">
                  A 6-floor digital hospital experience
                </h3>
              </div>
              <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-background text-foreground text-sm font-semibold hover:scale-105 transition-transform">
                Take Full Tour
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Explore3D;
