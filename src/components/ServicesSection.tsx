import { Headset, MessageSquare, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: Headset,
    title: "Live chat assistance",
    desc: "Reach our team instantly via the chat widget for real-time help.",
  },
  {
    icon: MessageSquare,
    title: "Guided troubleshooting",
    desc: "Clear steps to resolve common issues, tailored to your needs.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted support",
    desc: "Your data and privacy are protected with industry best practices.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 bg-secondary/40">
      <div className="container">
        <h2 className="text-3xl font-semibold mb-2">Our customer service</h2>
        <p className="text-muted-foreground mb-8 max-w-2xl">
          We provide fast, friendly, and comprehensive assistance across channels.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <article key={f.title} className="rounded-lg border bg-card p-6 transition-shadow hover:shadow-elegant">
              <f.icon className="h-6 w-6 text-primary mb-4" />
              <h3 className="text-lg font-medium mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
