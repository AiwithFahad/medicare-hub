import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Calendar, CheckCircle2, Phone, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/medicare/Navbar";
import Footer from "@/components/medicare/Footer";
import CTA from "@/components/medicare/CTA";
import { getDepartmentBySlug, departments } from "@/data/departments";
import NotFound from "./NotFound";

const DepartmentDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const dept = getDepartmentBySlug(slug);

  useEffect(() => {
    if (dept) {
      document.title = `${dept.name} — M+ MediCare`;
      const desc = document.querySelector('meta[name="description"]');
      if (desc) desc.setAttribute("content", `${dept.tagline}. ${dept.about.slice(0, 120)}`);
      window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    }
  }, [dept]);

  if (!dept) return <NotFound />;

  const Icon = dept.icon;
  const related = departments.filter((d) => d.slug !== dept.slug).slice(0, 4);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-28 md:pt-32 pb-16 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
        <div className="container relative">
          <Link
            to="/#departments"
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            All Departments
          </Link>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-semibold mb-5">
                <Icon className="w-4 h-4" />
                {dept.tagline}
              </div>
              <h1 className="font-display text-4xl md:text-6xl font-extrabold leading-tight mb-5">
                {dept.name} <span className="text-gradient">Department</span>
              </h1>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8">
                {dept.about}
              </p>
              <div className="flex flex-wrap gap-3">
                <Button variant="hero" size="lg" asChild>
                  <a href="#book">
                    <Calendar className="w-4 h-4" />
                    Book Appointment
                  </a>
                </Button>
                <Button variant="outlineSoft" size="lg" asChild>
                  <a href="tel:+92000000000">
                    <Phone className="w-4 h-4" />
                    Call Us
                  </a>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-cta opacity-20 blur-3xl rounded-3xl" />
              <img
                src={dept.image}
                alt={`${dept.name} department at M+ MediCare`}
                width={1280}
                height={832}
                className="relative w-full aspect-[4/3] object-cover rounded-3xl shadow-elegant border border-border/60"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services + Conditions */}
      <section className="py-16 md:py-24">
        <div className="container grid lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="bg-gradient-card rounded-3xl p-8 md:p-10 border border-border/60 shadow-soft">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold mb-6">
              Services We Offer
            </h2>
            <ul className="space-y-3">
              {dept.services.map((s) => (
                <li key={s} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-foreground">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-card rounded-3xl p-8 md:p-10 border border-border/60 shadow-soft">
            <h2 className="font-display text-2xl md:text-3xl font-extrabold mb-6">
              Conditions We Treat
            </h2>
            <div className="flex flex-wrap gap-2.5">
              {dept.conditions.map((c) => (
                <span
                  key={c}
                  className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold border border-primary/20"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-12 md:py-20 bg-secondary/30">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-background text-foreground text-sm font-semibold mb-4 shadow-soft">
              <Sparkles className="w-4 h-4 text-primary" />
              Why This Department
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold">
              What Makes Us <span className="text-gradient">Different</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {dept.highlights.map((h) => (
              <div
                key={h.title}
                className="bg-background rounded-2xl p-6 border border-border/60 shadow-soft hover-lift"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-cta flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-display text-lg font-bold mb-1.5">{h.title}</h3>
                <p className="text-sm text-muted-foreground">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related departments */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="flex items-end justify-between mb-8 md:mb-10 flex-wrap gap-4">
            <h2 className="font-display text-2xl md:text-4xl font-extrabold">
              Other <span className="text-gradient">Departments</span>
            </h2>
            <Link
              to="/#departments"
              className="text-sm font-semibold text-primary hover:underline"
            >
              View all →
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {related.map((r) => {
              const RIcon = r.icon;
              return (
                <Link
                  key={r.slug}
                  to={`/departments/${r.slug}`}
                  className="group bg-gradient-card border border-border/60 rounded-2xl p-6 hover-lift"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-gradient-cta transition-colors">
                    <RIcon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="font-display text-lg font-bold mb-1">{r.name}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">{r.desc}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <div id="book">
        <CTA />
      </div>
      <Footer />
    </main>
  );
};

export default DepartmentDetail;
