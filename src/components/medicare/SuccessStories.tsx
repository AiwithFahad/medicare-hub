import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Heart } from "lucide-react";
import story1 from "@/assets/story-1.jpg";
import story2 from "@/assets/story-2.jpg";
import story3 from "@/assets/story-3.jpg";

const stories = [
  {
    img: story1,
    name: "Mr. Saleem Akhtar",
    age: 64,
    condition: "Cardiac Recovery",
    duration: "6 weeks",
    quote:
      "After my heart procedure, the team at M+ MediCare guided me through every step. I'm back to walking with my grandchildren — full of energy.",
    department: "Cardiology",
  },
  {
    img: story2,
    name: "Ms. Hira Aslam",
    age: 28,
    condition: "Post-Surgery Recovery",
    duration: "4 weeks",
    quote:
      "From diagnosis to follow-up, I felt cared for. The doctors explained everything, and the nurses made me feel at home. Today, I'm healthy and grateful.",
    department: "Surgery",
  },
  {
    img: story3,
    name: "Mrs. Ayesha Khan",
    age: 31,
    condition: "Safe Delivery",
    duration: "9 months care",
    quote:
      "Holding my baby in my arms is the greatest gift. The maternity team made my journey smooth, safe and full of joy. Forever thankful to M+ MediCare.",
    department: "Gynaecology",
  },
];

const SuccessStories = () => {
  const [active, setActive] = useState(0);
  const total = stories.length;

  const next = () => setActive((p) => (p + 1) % total);
  const prev = () => setActive((p) => (p - 1 + total) % total);

  const story = stories[active];

  return (
    <section className="py-20 md:py-28 bg-foreground text-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container relative">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full glass-dark text-sm font-semibold mb-4">
            <Heart className="inline w-4 h-4 mr-1.5 fill-accent text-accent" />
            Patient Success Stories
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold mb-4 text-background">
            Real Stories. <span className="text-gradient">Real Recovery.</span>
          </h2>
          <p className="text-background/70 text-base md:text-lg">
            Patients who regained health and confidence at M+ MediCare.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Image side */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-cta rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity" />
              <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-elegant border border-white/10">
                <img
                  key={story.img}
                  src={story.img}
                  alt={`${story.name} recovery story`}
                  width={800}
                  height={1000}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover animate-fade-in"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/20 to-transparent" />

                <div className="absolute top-5 left-5 flex gap-2">
                  <span className="px-3 py-1.5 rounded-full glass-dark text-xs font-semibold">
                    {story.department}
                  </span>
                  <span className="px-3 py-1.5 rounded-full bg-accent text-accent-foreground text-xs font-semibold">
                    Recovered
                  </span>
                </div>

                <div className="absolute bottom-5 left-5 right-5 text-background">
                  <p className="text-xs uppercase tracking-widest text-background/60 mb-1">
                    Recovery Duration
                  </p>
                  <p className="font-display font-bold text-2xl">{story.duration}</p>
                </div>
              </div>
            </div>

            {/* Content side */}
            <div className="relative">
              <Quote className="w-14 h-14 text-accent mb-6 opacity-80" />

              <p
                key={story.quote}
                className="font-display text-xl md:text-2xl lg:text-3xl leading-relaxed text-background mb-8 animate-fade-in"
              >
                "{story.quote}"
              </p>

              <div key={story.name} className="mb-10 animate-fade-in">
                <h3 className="font-display font-bold text-xl text-background">
                  {story.name}
                </h3>
                <p className="text-sm text-background/60">
                  Age {story.age} • {story.condition}
                </p>
              </div>

              <div className="flex items-center gap-4">
                <button
                  onClick={prev}
                  aria-label="Previous story"
                  className="w-12 h-12 rounded-full glass-dark flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={next}
                  aria-label="Next story"
                  className="w-12 h-12 rounded-full bg-gradient-cta flex items-center justify-center hover:scale-110 transition-transform shadow-glow"
                >
                  <ChevronRight className="w-5 h-5 text-white" />
                </button>

                <div className="flex gap-2 ml-4">
                  {stories.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActive(i)}
                      aria-label={`Go to story ${i + 1}`}
                      className={`h-1.5 rounded-full transition-all ${
                        i === active ? "w-10 bg-accent" : "w-6 bg-white/20"
                      }`}
                    />
                  ))}
                </div>

                <span className="ml-auto text-sm text-background/60 font-mono">
                  {String(active + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
