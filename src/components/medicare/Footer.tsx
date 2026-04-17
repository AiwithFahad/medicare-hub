import { Plus, Facebook, Instagram, Twitter, Youtube, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background pt-16 pb-8">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <a href="#home" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-cta flex items-center justify-center">
                <Plus className="w-5 h-5 text-primary-foreground" strokeWidth={3} />
              </div>
              <span className="font-display font-extrabold text-lg">
                M<span className="text-gradient">+</span> MediCare
              </span>
            </a>
            <p className="text-background/60 text-sm leading-relaxed mb-5">
              A modern digital hospital delivering premium healthcare for everyone — anytime,
              anywhere.
            </p>
            <div className="flex gap-2">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="w-9 h-9 rounded-full glass-dark flex items-center justify-center hover:bg-gradient-cta hover:scale-110 transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-background/70">
              {["About Us", "Departments", "Doctors", "Careers", "Blog"].map((l) => (
                <li key={l}>
                  <a href="#" className="hover:text-background transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-background/70">
              {["Online Booking", "Emergency Care", "Telehealth", "Diagnostics", "Pharmacy"].map(
                (l) => (
                  <li key={l}>
                    <a href="#" className="hover:text-background transition-colors">{l}</a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-background/70">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-accent shrink-0" />
                <span>M+ MediCare HQ, Main Boulevard, City Center</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-accent" />
                <a href="tel:+10000000" className="hover:text-background">+1 (000) 000-000</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-accent" />
                <a href="mailto:hello@mplus.care" className="hover:text-background">
                  hello@mplus.care
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 pt-6 flex flex-col md:flex-row gap-3 justify-between items-center text-sm text-background/50">
          <p>© {new Date().getFullYear()} M+ MediCare — Hospital & Research. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-background">Privacy</a>
            <a href="#" className="hover:text-background">Terms</a>
            <a href="#" className="hover:text-background">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
