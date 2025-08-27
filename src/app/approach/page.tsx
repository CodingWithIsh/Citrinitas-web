import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Search, Lightbulb, Flag } from "lucide-react";
import ScrollIndicator from "@/components/ScrollIndicator";
import Image from "next/image";

export default function ApproachPage() {
  return (
    <div className="bg-background">
      <section id="start" className="py-20 md:py-32" data-aos="fade-up">
        <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-5xl font-headline text-primary mb-4">
                    Therapeutic Approach
                    </h1>
                    <p className="text-lg text-foreground/80">
                    Our practice is founded on a thoughtful and integrative framework that draws from multiple evidence-based therapeutic modalities. We believe that no single approach fits everyone, because every individual's story is unique. This philosophy allows us to create a deeply personalized and flexible therapeutic process, one that is collaboratively tailored to your specific needs, goals, and circumstances. The aim is to move beyond a one-size-fits-all model and instead build a therapeutic relationship where your experience is the central guide, ensuring the path we take is both resonant and effective for you.
                    </p>
                </div>
                <div className="flex justify-center">
                    <Image 
                        src="/Waterfall.jpg"
                        alt="A serene waterfall cascading down rocks"
                        width={400}
                        height={600}
                        className="rounded-lg shadow-2xl object-cover"
                        data-ai-hint="waterfall nature"
                    />
                </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 text-center">
                <ApproachCard
                    title="Compassionate Inquiry"
                    description="We explore the deeper, unconscious aspects of the self to understand recurring patterns and move toward lasting change and a more authentic life."
                />
                <ApproachCard
                    title="Mindfulness Practices"
                    description="Through systematic training in present-moment awareness, clients learn to observe thoughts and feelings without being controlled by them, building inner calm."
                />
                <ApproachCard
                    title="Integrative Method"
                    description="A collaborative and client-centered journey, drawing from a flexible toolkit of therapies within a secure, trusting, and non-judgmental partnership."
                />
            </div>
        </div>
        <ScrollIndicator targetId="journey" />
      </section>
      
      <section id="journey" className="py-20 md:py-32 bg-secondary" data-aos="fade-up">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-headline text-primary mb-4">
              The Therapeutic Journey: What to Expect
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-foreground/80">
              Embarking on therapy is a significant and personal step. To provide clarity and transparency, this section outlines the typical phases of the therapeutic process at our practice. The journey is always paced to the individual's comfort and needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <RoadmapCard
              icon={<Search className="w-10 h-10 text-accent" />}
              title="Consultation & Connection"
              description="The journey begins with a brief, no-obligation consultation. This is a space to discuss what brings you to therapy and to ensure the therapeutic relationship feels like a safe and supportive fit before moving forward."
            />
            <RoadmapCard
              icon={<Lightbulb className="w-10 h-10 text-accent" />}
              title="Exploration & Insight"
              description="In a confidential and collaborative space, we explore the underlying patterns and challenges you face. The goal is to gain valuable insight, develop new perspectives, and build practical tools for navigating your inner and outer worlds."
            />
            <RoadmapCard
              icon={<Flag className="w-10 h-10 text-accent" />}
              title="Integration & Empowerment"
              description="As you gain clarity, the focus shifts to integrating these new insights into your daily life. This final phase is about consolidating your growth, building confidence in your own abilities, and feeling empowered to carry your progress forward independently."
            />
          </div>
        </div>
      </section>

      <section id="next-step" className="py-20 md:py-24 text-center bg-primary/5" data-aos="fade-up">
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

function ApproachCard({ title, description }: { title: string, description: string }) {
    return (
        <Card className="shadow-md hover:shadow-xl transition-shadow duration-300 bg-card h-full flex flex-col p-6">
            <CardHeader>
                <CardTitle className="font-headline text-2xl text-primary">{title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
                <p className="text-foreground/80">{description}</p>
            </CardContent>
        </Card>
    );
}

function RoadmapCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <Card className="text-center shadow-md hover:shadow-xl transition-shadow duration-300 bg-card h-full flex flex-col p-6">
      <CardHeader className="items-center">
        <div className="bg-accent/10 rounded-full p-4 w-fit mb-4">
          {icon}
        </div>
        <CardTitle className="font-headline text-2xl text-primary">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-foreground/80">{description}</p>
      </CardContent>
    </Card>
  );
}
