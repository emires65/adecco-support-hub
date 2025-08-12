import NavBar from "@/components/layout/NavBar";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/layout/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <NavBar />
      <Hero />

      <section id="about" className="py-16">
        <div className="container grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-semibold mb-3">About our customer service</h2>
            <p className="text-muted-foreground leading-7">
              We deliver human-first support with modern tools to help you quickly.
              Our mission is to resolve issues on the first contact and provide a delightful experience.
            </p>
          </div>
          <div className="rounded-lg border p-6 bg-secondary/30">
            <ul className="grid sm:grid-cols-2 gap-4 text-sm">
              <li className="p-3 rounded-md bg-background border">First-contact resolution</li>
              <li className="p-3 rounded-md bg-background border">Proactive follow-ups</li>
              <li className="p-3 rounded-md bg-background border">Clear escalation paths</li>
              <li className="p-3 rounded-md bg-background border">Continuous improvement</li>
            </ul>
          </div>
        </div>
      </section>

      <ServicesSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
