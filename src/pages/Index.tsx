import Hero from "@/components/Hero";
import Services from "@/components/Services";
import StyleCards from "@/components/StyleCards";
import Founder from "@/components/Founder";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Offices from "@/components/Offices";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <StyleCards />
      <Founder />
      <About />
      <Stats />
      <Offices />
      <Footer />
    </div>
  );
};

export default Index;
