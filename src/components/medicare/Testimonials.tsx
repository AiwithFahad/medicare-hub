import { useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  {
    name: "Ahmad Raza",
    role: "Patient · Cardiology",
    initial: "AR",
    text:
      "From booking to recovery, every step felt effortless. The doctors at M+ MediCare are not only skilled but truly caring. Highly recommended!",
    rating: 5,
  },
  {
    name: "Fatima Noor",
    role: "Mother · Paediatrics",
    initial: "FN",
    text:
      "Dr. Malik treated my son with such warmth and expertise. The digital app made follow-ups so easy. A truly modern hospital experience.",
    rating: 5,
  },
  {
    name: "Usman Tariq",
    role: "Patient · Medicine",
    initial: "UT",
    text:
      "Clean, fast and transparent. The diagnostics were quick and the consultation was thorough. M+ MediCare sets a new standard.",
    rating: 5,
  },
];

const Testimonials = () => {
  const [i, setI] = useState(0);
  const next = () => setI((i + 1) % reviews.length);
  const prev = () => setI((i - 1 + reviews.length) % reviews.length);

  return (
    <section className="py-20 md:py-28 relative">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-semibold mb-4">
            Testimonials
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold mb-4">
            What Our <span className="text-gradient">Patients Say</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative bg-gradient-card rounded-3xl p-8 md:p-12 shadow-card border border-border/60">
            <Quote className="absolute top-6 right-6 w-16 h-16 text-primary/10" />

            <div key={i} className="animate-fade-in">
              <div className="flex items-center gap-1 mb-5">
                {Array.from({ length: reviews[i].rating }).map((_, k) => (
                  <Star key={k} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-8 font-medium">
                "{reviews[i].text}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-cta flex items-center justify-center text-primary-foreground font-bold text-lg shadow-glow">
                  {reviews[i].initial}
                </div>
                <div>
                  <p className="font-bold text-foreground">{reviews[i].name}</p>
                  <p className="text-sm text-muted-foreground">{reviews[i].role}</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between mt-8 pt-6 border-t border-border/60">
              <div className="flex gap-2">
                {reviews.map((_, k) => (
                  <button
                    key={k}
                    onClick={() => setI(k)}
                    aria-label={`Go to review ${k + 1}`}
                    className={`h-2 rounded-full transition-all ${
                      k === i ? "w-8 bg-gradient-cta" : "w-2 bg-border"
                    }`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={prev}
                  aria-label="Previous review"
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={next}
                  aria-label="Next review"
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
