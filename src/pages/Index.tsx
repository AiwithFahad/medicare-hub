import Navbar from "@/components/medicare/Navbar";
import Hero from "@/components/medicare/Hero";
import Stats from "@/components/medicare/Stats";
import Departments from "@/components/medicare/Departments";
import WhyChoose from "@/components/medicare/WhyChoose";
import Doctors from "@/components/medicare/Doctors";
import PatientJourney from "@/components/medicare/PatientJourney";
import SmartHealth from "@/components/medicare/SmartHealth";
import SuccessStories from "@/components/medicare/SuccessStories";
import Testimonials from "@/components/medicare/Testimonials";
import CTA from "@/components/medicare/CTA";
import Footer from "@/components/medicare/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Stats />
      <Departments />
      <WhyChoose />
      <Doctors />
      <PatientJourney />
      <SmartHealth />
      <SuccessStories />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;
