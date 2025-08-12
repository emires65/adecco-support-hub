import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-support.jpg";
import { openSupportChat } from "@/lib/chat";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="container grid md:grid-cols-2 gap-8 items-center py-16">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 text-xs text-accent-foreground mb-4">
            <span className="inline-block h-2 w-2 rounded-full bg-primary" />
            This site is dedicated to providing excellent customer support.
          </div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            We’re here to help — fast, friendly, and reliable.
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            Find answers, get assistance, and chat live with our support team.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Button variant="hero" size="xl" onClick={openSupportChat}>
              Contact Support
            </Button>
            <a href="#services" className="text-sm underline underline-offset-4">
              Explore services
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="relative rounded-lg overflow-hidden shadow-elegant">
            <img
              src={heroImage}
              alt="Customer support team ready to help"
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-background/0 to-background/10" />
          </div>
        </div>
      </div>

      <div className="absolute -z-10 inset-0 opacity-20">
        <div className="absolute -top-24 -right-16 h-80 w-80 rounded-full blur-3xl bg-gradient-primary" />
        <div className="absolute -bottom-24 -left-16 h-80 w-80 rounded-full blur-3xl bg-gradient-primary" />
      </div>
    </section>
  );
}
