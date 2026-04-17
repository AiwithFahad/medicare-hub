import { ArrowRight, Star, Activity, HeartPulse, Stethoscope, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-doctor.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden">
      {/* animated gradient bg */}
      <div className="absolute inset-0 bg-gradient-soft" />
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-gradient-glow rounded-full blur-3xl animate-float" />
      <div
        className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full blur-3xl opacity-60 animate-float"
        style={{ background: "radial-gradient(circle, hsl(184 75% 60% / 0.3), transparent 70%)", animationDelay: "2s" }}
      />

      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6 md:space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass shadow-soft">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm font-semibold text-foreground/80">
                🏥 #1 Healthcare Platform
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.05] tracking-tight">
              Premium Healthcare,{" "}
              <span className="text-gradient">Digitally Delivered</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              Experience world-class medical care with M+ MediCare's modern digital hospital
              system — book, consult and heal, all in one place.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button variant="hero" size="xl" className="group">
                Book Appointment
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outlineSoft" size="xl">
                Explore Departments
              </Button>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-background bg-gradient-cta flex items-center justify-center text-xs font-bold text-primary-foreground shadow-soft"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="ml-1 font-bold">4.9/5</span>
                </div>
                <p className="text-sm text-muted-foreground">From 2,000+ patients</p>
              </div>
            </div>
          </div>

          {/* visual */}
          <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative aspect-[4/5] sm:aspect-[5/6] rounded-[2rem] overflow-hidden shadow-elegant">
              <img
                src={heroImg}
                alt="M+ MediCare doctor consulting patient"
                width={1280}
                height={1280}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-transparent to-transparent" />
            </div>

            {/* floating cards */}
            <div className="absolute -left-4 sm:-left-8 top-10 glass rounded-2xl p-4 shadow-card animate-float w-44">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center">
                  <HeartPulse className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Heart Rate</p>
                  <p className="font-bold text-foreground">72 BPM</p>
                </div>
              </div>
            </div>

            <div
              className="absolute -right-2 sm:-right-6 bottom-16 glass rounded-2xl p-4 shadow-card animate-float w-52"
              style={{ animationDelay: "1s" }}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center">
                  <Activity className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Health Score</p>
                  <p className="font-bold">Excellent</p>
                </div>
              </div>
              <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                <div className="h-full w-[88%] bg-gradient-cta rounded-full" />
              </div>
            </div>

            <div
              className="absolute right-8 -top-4 glass rounded-2xl p-3 shadow-card animate-float"
              style={{ animationDelay: "0.5s" }}
            >
              <Stethoscope className="w-6 h-6 text-primary" />
            </div>
            <div
              className="absolute -left-2 bottom-32 glass rounded-2xl p-3 shadow-card animate-float"
              style={{ animationDelay: "1.5s" }}
            >
              <ShieldCheck className="w-6 h-6 text-accent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
