import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Search, Lightbulb, Flag, Compass, Waves, Users } from "lucide-react";
import Image from "next/image";

export default function ApproachPage() {
  return (
    <div className="bg-background">
      <section id="start" className="grid grid-cols-1 md:grid-cols-5 min-h-[70vh]" data-aos="fade-up">
        <div className="relative h-full min-h-[50vh] md:min-h-0 md:col-span-2">
          <Image 
              src="/Waterfall.jpg"
              alt="A serene waterfall cascading down rocks"
              fill
              className="object-cover"
              data-ai-hint="waterfall nature"
          />
        </div>
        <div className="flex items-center justify-center p-8 md:p-12 md:col-span-3">
            <div className="space-y-6 max-w-lg">
                <h1 className="text-4xl md:text-5xl font-headline text-primary mb-4">
                  Our Approach: Healing That Honours Your Unique Story
                </h1>
                <div className="space-y-4 text-lg text-foreground/90">
                  <p>
                    You are unique, and your therapy should be too. We don't believe in a "one-size-fits-all" solution because your life, your challenges, and your strengths are unlike anyone else's.
                  </p>
                  <p>
                    Our approach is integrative and collaborative, meaning we draw from powerful, evidence-based methods to create a therapeutic path that is tailored specifically to you. We'll work together in a safe, non-judgmental partnership to explore the challenges you're facing. Our goal is to move beyond simply managing symptoms and instead uncover the roots of your difficulties, paving the way for deep, lasting change.
                  </p>
                </div>
            </div>
        </div>
      </section>
      
      <section id="tools" className="py-20 md:py-32 bg-secondary" data-aos="fade-up">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-headline text-primary mb-4">
              Our Core Therapeutic Tools
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-foreground/80">
              We blend several key modalities to support your journey. Think of these as the tools in our toolkit, which we'll use flexibly based on your needs.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
              <ApproachCard
                  icon={<Compass className="w-10 h-10 text-accent" />}
                  title="Compassionate Inquiry"
                  description="This approach gently guides us beyond the surface-level story of 'what's wrong' to a deeper understanding of 'what happened.' We explore how past experiences and unconscious beliefs shape your present-day reality. The goal isn't to re-live pain, but to release its hold on you, fostering profound self-compassion and freedom."
              />
              <ApproachCard
                  icon={<Waves className="w-10 h-10 text-accent" />}
                  title="Mindfulness & Somatic Practices"
                  description="Often, our bodies hold the score. Through mindfulness, you'll learn to anchor yourself in the present moment, observing thoughts and feelings without being swept away by them. We also incorporate somatic (body-centered) awareness to gently listen to the wisdom of your body, helping to release stored tension and trauma that words alone cannot reach. This builds resilience and a true sense of inner calm."
              />
              <ApproachCard
                  icon={<Users className="w-10 h-10 text-accent" />}
                  title="An Integrative & Relational Foundation"
                  description="Everything we do is built on the foundation of a secure and trusting therapeutic relationship. This is the most important part of our work. We will combine different approaches in a way that feels right for you, always guided by your experience and our collaboration. It’s a creative and flexible process dedicated to your growth."
              />
          </div>
        </div>
      </section>
      
      <section id="journey" className="py-20 md:py-32 bg-background" data-aos="fade-up">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-headline text-primary mb-4">
              Your Therapeutic Journey: What to Expect
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-foreground/80">
              Embarking on therapy is a courageous step. Here’s a simple outline of our journey together, which we will always move through at a pace that feels comfortable for you.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <RoadmapCard
              icon={<Search className="w-10 h-10 text-accent" />}
              title="Step 1: Connection & Clarity"
              subtitle="(Initial Consultation)"
              description="Our journey begins with a free, informal chat. This is a chance for you to share what’s bringing you to therapy and for us to see if we're a good fit. The most important thing is that you feel safe, heard, and understood from the very start."
            />
            <RoadmapCard
              icon={<Lightbulb className="w-10 h-10 text-accent" />}
              title="Step 2: Exploration & Insight"
              description="In our confidential sessions, we'll gently explore the patterns and challenges getting in your way. This is a collaborative space to gain powerful insights, see things from a new perspective, and start building practical tools to navigate your inner and outer worlds with greater ease."
            />
            <RoadmapCard
              icon={<Flag className="w-10 h-10 text-accent" />}
              title="Step 3: Integration & Empowerment"
              description="As you gain clarity, our focus shifts to weaving these new insights into your daily life. This phase is about building confidence in your own ability to navigate challenges and empowering you to carry your growth forward independently, long after our sessions have ended."
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

function ApproachCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
    return (
        <Card className="shadow-md hover:shadow-xl transition-shadow duration-300 bg-card h-full flex flex-col p-6 text-center">
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

function RoadmapCard({ icon, title, subtitle, description }: { icon: React.ReactNode; title: string; subtitle?: string; description: string }) {
  return (
    <Card className="text-center shadow-md hover:shadow-xl transition-shadow duration-300 bg-card h-full flex flex-col p-6">
      <CardHeader className="items-center">
        <div className="bg-accent/10 rounded-full p-4 w-fit mb-4">
          {icon}
        </div>
        <CardTitle className="font-headline text-2xl text-primary">{title}</CardTitle>
        {subtitle && <p className="text-sm text-muted-foreground -mt-1">{subtitle}</p>}
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-foreground/80">{description}</p>
      </CardContent>
    </Card>
  );
}
