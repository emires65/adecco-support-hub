import { Button } from "@/components/ui/button";
import { openSupportChat } from "@/lib/chat";

export default function ContactSection() {
  return (
    <section id="contact" className="py-16">
      <div className="container grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-semibold mb-2">Contact our support team</h2>
          <p className="text-muted-foreground mb-6 max-w-prose">
            Whether you have a quick question or need hands-on assistance, our team is ready.
            Start a live chat or browse our help topics.
          </p>
          <Button variant="hero" size="lg" onClick={openSupportChat}>
            Contact Support
          </Button>
        </div>
        <div className="rounded-lg border p-6">
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <dt className="text-sm text-muted-foreground">Response time</dt>
              <dd className="text-lg font-medium">Under 2 minutes</dd>
            </div>
            <div>
              <dt className="text-sm text-muted-foreground">Availability</dt>
              <dd className="text-lg font-medium">Mon–Fri, 9am–6pm</dd>
            </div>
            <div>
              <dt className="text-sm text-muted-foreground">Channels</dt>
              <dd className="text-lg font-medium">Live chat, Email</dd>
            </div>
            <div>
              <dt className="text-sm text-muted-foreground">Language</dt>
              <dd className="text-lg font-medium">English</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
