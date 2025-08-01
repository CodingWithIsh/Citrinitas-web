import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sun, Waves, Wind, Handshake, Route, Compass, Star, Feather, Gem } from "lucide-react";
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function ServicesPage() {
  return (
    <div className="bg-background">
      <section className="py-20 md:py-32 text-center">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-headline text-primary mb-4">
            My Therapeutic Approach
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-foreground/80">
            My approach is integrative, blending the insight of Depth Psychology with the grounding practice of Mindfulness-Based Stress Reduction (MBSR). This is a 'to the point' method designed for organic growth.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-secondary">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-headline text-primary mb-16 text-center">
            Core Modalities
          </h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <ServiceDetail
              icon={<Waves className="h-12 w-12 text-accent" />}
              title="Depth Psychology"
              description="This approach invites an exploration of the psyche's deeper layers—the subtle, unconscious, and symbolic aspects of your experience. By engaging with dreams, imagination, and metaphor, we can uncover the hidden roots of persistent patterns and conflicts. The goal is not just to manage symptoms, but to foster a more profound and authentic relationship with your innermost self, leading to lasting transformation."
            />
            <ServiceDetail
              icon={<Wind className="h-12 w-12 text-accent" />}
              title="Mindfulness-Based Stress Reduction (MBSR)"
              description="Grounded in ancient contemplative traditions and validated by modern neuroscience, MBSR is a powerful practice for cultivating present-moment awareness. You will learn to observe your thoughts and feelings without judgment, creating a space of calm within the storm of daily life. This practice reduces stress, enhances emotional regulation, and empowers you to respond to challenges with greater clarity and compassion."
            />
             <ServiceDetail
              icon={<Sun className="h-12 w-12 text-accent" />}
              title="An Integrative & Bespoke Blend"
              description="I do not believe in a one-size-fits-all approach. Our work together is collaborative and tailored specifically to you. By weaving together the threads of Depth Psychology and MBSR, we create a therapeutic process that honors your unique history, goals, and inner wisdom. This ensures that our sessions are not only effective in alleviating distress but also deeply resonant with your personal journey of growth."
            />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-headline text-primary mb-12">
            Our Therapeutic Journey
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <ProcessStep icon={<Star className="h-8 w-8 text-accent"/>} title="1. Initial Consultation" description="A no-obligation session for us to connect, discuss what brings you to therapy, and determine if we are a good fit." />
            <ProcessStep icon={<Feather className="h-8 w-8 text-accent"/>} title="2. Charting the Course" description="We'll collaboratively define your therapeutic goals and create a flexible, personalized plan for our work together." />
            <ProcessStep icon={<Gem className="h-8 w-8 text-accent"/>} title="3. The Ongoing Path" description="Regular sessions where we engage in the process of discovery, healing, and accessing your psychic movement." />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 text-center bg-primary/5">
        <div className="container">
          <h2 className="text-3xl font-headline text-primary mb-4">Begin Your Path to Healing</h2>
          <p className="max-w-2xl mx-auto text-lg text-foreground/80 mb-8">
            Contact me today to schedule your first appointment and start your journey towards clarity and understanding.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

function ServiceDetail({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="flex gap-6">
      <div className="flex-shrink-0 mt-1">{icon}</div>
      <div>
        <h3 className="text-2xl font-headline text-primary mb-2">{title}</h3>
        <p className="text-foreground/80">{description}</p>
      </div>
    </div>
  )
}

function ProcessStep({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
    return (
        <Card className="bg-card shadow-md">
            <CardHeader className="flex flex-row items-center gap-4">
                {icon}
                <CardTitle className="font-headline text-xl text-primary">{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-foreground/80">{description}</p>
            </CardContent>
        </Card>
    );
}