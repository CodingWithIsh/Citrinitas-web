import { Button } from "@/components/ui/button";
import Link from "next/link";
import ScrollIndicator from "@/components/ScrollIndicator";

export default function PartnersPage() {
  return (
    <div className="bg-background">
      <section id="start" className="relative min-h-dvh flex items-center justify-center py-20 md:py-32" data-aos="fade-up">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-headline text-primary mb-4">
            Partners
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-foreground/80 mb-8">
            Coming Soon: A curated list of trusted partners and practitioners who share our holistic approach to wellbeing.
          </p>
          <Button asChild size="lg">
            <Link href="/">Return Home</Link>
          </Button>
        </div>
        <ScrollIndicator targetId="footer-section" />
      </section>
    </div>
  );
}
