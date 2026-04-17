import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { departments } from "@/data/departments";

const Departments = () => {
  return (
    <section id="departments" className="py-20 md:py-28 relative">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-semibold mb-4">
            Our Departments
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold mb-4">
            Specialized <span className="text-gradient">Medical Care</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            From everyday checkups to specialized treatments — our departments deliver
            world-class care under one roof.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {departments.map((d, i) => (
            <Link
              key={d.slug}
              to={`/departments/${d.slug}`}
              className="group relative bg-gradient-card border border-border/60 rounded-2xl overflow-hidden hover-lift cursor-pointer block"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={d.image}
                  alt={`${d.name} department`}
                  width={1280}
                  height={832}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent" />
                <div className="absolute top-3 left-3 w-11 h-11 rounded-xl bg-background/90 backdrop-blur flex items-center justify-center shadow-soft">
                  <d.icon className="w-5 h-5 text-primary" />
                </div>
              </div>

              <div className="p-5">
                <h3 className="font-display text-lg font-bold mb-1.5">{d.name}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-2">
                  {d.desc}
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                  Learn More
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Departments;
