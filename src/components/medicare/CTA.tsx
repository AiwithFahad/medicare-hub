import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section id="cta" className="py-20 md:py-28">
      <div className="container">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-cta p-8 md:p-16 lg:p-20 text-center shadow-elegant">
          {/* animated mesh */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-float" />
            <div
              className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl animate-float"
              style={{ animationDelay: "2s" }}
            />
          </div>

          {/* grid pattern */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "linear-gradient(hsl(0 0% 100% / 0.4) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100% / 0.4) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          <div className="relative">
            <span className="inline-block px-4 py-1.5 rounded-full glass text-sm font-semibold mb-6 text-primary-foreground">
              Get Started Today
            </span>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground mb-5 leading-[1.1]">
              Ready to Experience <br className="hidden md:block" />
              Premium Healthcare?
            </h2>
            <p className="text-primary-foreground/85 text-base md:text-lg max-w-xl mx-auto mb-10">
              Book your appointment in under a minute or talk to our 24/7 helpline.
              Your wellbeing is just one tap away.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button variant="onDark" size="xl" className="group animate-pulse-glow">
                Book Appointment
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="glass" size="xl">
                <Phone className="w-5 h-5" />
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
