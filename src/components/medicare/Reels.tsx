import { Play } from "lucide-react";
import reel1 from "@/assets/reel-1.jpg";
import reel2 from "@/assets/reel-2.jpg";
import reel3 from "@/assets/reel-3.jpg";

const reels = [
  { img: reel1, title: "A Day at Hospital", views: "12.4K" },
  { img: reel2, title: "Meet Our Doctors", views: "8.7K" },
  { img: reel3, title: "How Booking Works", views: "15.2K" },
  { img: reel1, title: "Inside the ICU", views: "6.1K" },
  { img: reel2, title: "Patient Stories", views: "9.3K" },
];

const Reels = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-soft overflow-hidden">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 md:mb-14">
          <div className="max-w-xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-semibold mb-4">
              Inside M+ MediCare
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-extrabold">
              Stories That <span className="text-gradient">Inspire</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            A peek behind the scenes — how we care, heal and innovate every day.
          </p>
        </div>
      </div>

      <div className="relative">
        <div className="flex gap-4 md:gap-5 overflow-x-auto scroll-hide px-4 md:px-8 pb-4 snap-x snap-mandatory">
          {[...reels, ...reels].map((r, i) => (
            <article
              key={i}
              className="snap-start shrink-0 w-[260px] md:w-[280px] aspect-[9/16] rounded-3xl overflow-hidden relative group cursor-pointer shadow-card"
            >
              <img
                src={r.img}
                alt={r.title}
                width={576}
                height={1024}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full glass flex items-center justify-center group-hover:scale-110 transition-transform animate-pulse-glow">
                  <Play className="w-7 h-7 text-white fill-white ml-1" />
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <h3 className="font-display font-bold text-lg leading-tight mb-1">{r.title}</h3>
                <p className="text-xs text-white/80">{r.views} views</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reels;
