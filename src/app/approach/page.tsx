
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Milestone, Check, GitCommit, ShieldCheck, Search, Lightbulb, Users, Flag, Bot } from "lucide-react";
import ScrollIndicator from "@/components/ScrollIndicator";

export default function ApproachPage() {
  return (
    <div className="bg-background">
      <section id="start" className="py-20 md:py-32 relative" data-aos="fade-up">
        <div className="container mx-auto">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-headline text-primary mb-4">
                Therapeutic Approach
                </h1>
                <p className="max-w-3xl mx-auto text-lg text-foreground/80">
                  Our practice is founded on a thoughtful and integrative framework that draws from multiple evidence-based therapeutic modalities. We believe that no single approach fits everyone. This allows us to create a deeply personalized and flexible process, one that is tailored to the unique needs, goals, and circumstances of each client. The foundation of our work rests on the following core principles.
                </p>
            </div>
          <div className="max-w-4xl mx-auto space-y-12">
            <ApproachDetail
              title="Depth Psychology"
              description="This approach is centered on the belief that our present-day challenges, recurring patterns, and feelings of being 'stuck' are often connected to deeper, unconscious aspects of ourselves. The therapeutic process involves gently exploring these underlying dynamics—the parts of our life story and inner world that we may not be fully aware of. By bringing these aspects to light in a safe and supportive environment, we can move beyond simply managing symptoms and toward profound and lasting change, fostering a more authentic and integrated sense of self."
            />
            <ApproachDetail
              title="Mindfulness-Based Practices"
              description="In our fast-paced world, many of us live in a state of chronic stress, disconnected from the present moment. Mindfulness-based practices are a powerful, evidence-based way to counteract this. In therapy, this involves more than just relaxation; it's about systematically training the mind to cultivate present-moment awareness with an attitude of non-judgment and compassion. Through simple but profound techniques, clients learn to observe their thoughts and feelings without being controlled by them. This creates inner space, reduces reactivity, and builds a foundation of inner calm and resilience."
            />
            <ApproachDetail
              title="The Integrative Method in Practice"
              description="An integrative approach means that the therapeutic journey is always collaborative and client-centered. Rather than adhering to a single rigid model, the practice draws upon a flexible toolkit from various respected schools of thought, including psychodynamic, humanistic, and cognitive-behavioral therapies. The most crucial element, however, is the therapeutic relationship itself. It is within this secure, trusting, and non-judgmental partnership that healing and growth can truly flourish. The specific techniques used are always chosen in service of the client's unique path and personal goals."
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

          <div className="relative">
            {/* Dotted line for desktop */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 mt-[-1rem]">
                <div className="absolute w-full border-t-2 border-dashed border-primary/30 top-1/2"></div>
            </div>

            <div className="relative grid md:grid-cols-3 gap-x-8 gap-y-12">
              <RoadmapStep
                number="1"
                title="Consultation & Connection"
                description="The journey begins with a brief, no-obligation consultation. This is a space to discuss what brings you to therapy and to ensure the therapeutic relationship feels like a safe and supportive fit before moving forward."
              />
              <RoadmapStep
                number="2"
                title="Exploration & Insight"
                description="This is the core of the therapeutic process. In a confidential and collaborative space, we explore the underlying patterns and challenges you face. The goal is to gain valuable insight, develop new perspectives, and build practical tools for navigating your inner and outer worlds."
              />
              <RoadmapStep
                number="3"
                title="Integration & Empowerment"
                description="As you gain clarity, the focus shifts to integrating these new insights into your daily life. This final phase is about consolidating your growth, building confidence in your own abilities, and feeling empowered to carry your progress forward independently."
              />
            </div>
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

function ApproachDetail({ title, description }: { title: string, description: string }) {
  return (
    <div className="text-left">
      <h3 className="text-2xl font-headline text-primary mb-4">{title}</h3>
      <p className="text-foreground/80 leading-relaxed">{description}</p>
    </div>
  );
}

function RoadmapStep({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="flex flex-col items-center text-center md:items-start md:text-left">
      <div className="relative flex items-center justify-center w-16 h-16 bg-background rounded-full border-2 border-primary mb-4 z-10">
        <span className="text-2xl font-headline text-primary">{number}</span>
      </div>
      <h3 className="text-xl font-headline text-primary mb-2">{title}</h3>
      <p className="text-foreground/80 text-sm">{description}</p>
    </div>
  );
}
