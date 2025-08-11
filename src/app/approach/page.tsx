
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Waves, Wind, Sun } from "lucide-react";

export default function ApproachPage() {
  return (
    <div className="bg-background">
      <section className="py-20 md:py-32" data-aos="fade-up">
        <div className="container mx-auto text-center">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-headline text-primary mb-4">
                Therapeutic Approach
                </h1>
                <p className="max-w-3xl mx-auto text-lg text-foreground/80">
                Our practice is founded on an integrative framework that draws from multiple evidence-based therapeutic modalities. This allows us to create a deeply personalized and flexible approach, tailored to the unique needs, goals, and circumstances of each client.
                </p>
            </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Waves className="h-10 w-10 text-accent" />}
              title="Depth Psychology"
              description="Explore the unconscious aspects of the self to bring about profound and lasting change."
            />
            <ServiceCard
              icon={<Wind className="h-10 w-10 text-accent" />}
              title="Mindfulness-Based"
              description="Cultivate present-moment awareness to reduce stress and relate to your experiences with greater compassion."
            />
            <ServiceCard
              icon={<Sun className="h-10 w-10 text-accent" />}
              title="Integrative Method"
              description="A bespoke blend of therapeutic techniques tailored to your unique individual needs and goals."
            />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 text-center bg-primary/5" data-aos="fade-up">
        <div className="container">
          <h2 className="text-3xl font-headline text-primary mb-4">Ready to Begin Your Journey?</h2>
          <p className="max-w-2xl mx-auto text-lg text-foreground/80 mb-8">
            If our approach resonates with you, we invite you to reach out and schedule an initial consultation.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="/contact">Book a Session</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

function ServiceCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <Card className="text-center shadow-md hover:shadow-xl transition-shadow duration-300 bg-card h-full flex flex-col">
      <CardHeader className="items-center">
        {icon}
        <CardTitle className="font-headline text-2xl text-primary pt-4">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-foreground/80">{description}</p>
      </CardContent>
    </Card>
  );
}
