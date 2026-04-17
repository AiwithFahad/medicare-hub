import { Star, Award, Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import malik from "@/assets/doctor-malik.jpg";
import irshad from "@/assets/doctor-irshad.jpg";

const doctors = [
  {
    name: "Dr. Malik Ellahi Bukhsh Awan",
    title: "Child Specialist",
    dept: "Paediatrics & Neonatology",
    qual: "MBBS | FCPS | MRCPCH",
    img: malik,
    rating: "4.9",
  },
  {
    name: "Dr. Muhammad Irshad Khan",
    title: "Medical Specialist",
    dept: "Medicine & Allied",
    qual: "MBBS | FCPS | MRCP (UK)",
    img: irshad,
    rating: "4.9",
  },
];

const Doctors = () => {
  return (
    <section id="doctors" className="py-20 md:py-28">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-semibold mb-4">
            Our Specialists
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold mb-4">
            Meet Our <span className="text-gradient">Doctors</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Experienced, certified and trusted by thousands of families.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {doctors.map((d) => (
            <article
              key={d.name}
              className="group relative bg-gradient-card rounded-3xl overflow-hidden shadow-soft hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 border border-border/60"
            >
              <div className="grid sm:grid-cols-5">
                <div className="relative sm:col-span-2 aspect-square sm:aspect-auto overflow-hidden">
                  <img
                    src={d.img}
                    alt={d.name}
                    width={768}
                    height={896}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-full glass shadow-soft">
                    <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs font-bold">{d.rating}</span>
                  </div>
                </div>

                <div className="sm:col-span-3 p-6 md:p-7 flex flex-col">
                  <span className="inline-flex w-fit items-center gap-1.5 text-xs font-semibold text-accent bg-accent/10 px-2.5 py-1 rounded-full mb-3">
                    <Award className="w-3 h-3" />
                    {d.title}
                  </span>
                  <h3 className="font-display text-xl md:text-2xl font-extrabold leading-tight mb-1">
                    {d.name}
                  </h3>
                  <p className="text-primary font-semibold text-sm mb-3">{d.dept}</p>
                  <p className="text-xs text-muted-foreground font-medium tracking-wide mb-5">
                    {d.qual}
                  </p>

                  <div className="mt-auto flex flex-col sm:flex-row gap-2">
                    <Button variant="hero" size="sm" className="flex-1">
                      <Calendar className="w-4 h-4" />
                      Book
                    </Button>
                    <Button variant="outlineSoft" size="sm" className="flex-1">
                      <User className="w-4 h-4" />
                      Profile
                    </Button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;
