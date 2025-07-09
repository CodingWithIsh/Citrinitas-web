import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BrainCircuit, Heart, Users, Milestone, Stethoscope, Handshake } from "lucide-react";
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function ServicesPage() {
  return (
    <div className="bg-background">
      <section className="py-20 md:py-32 text-center">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-headline text-primary mb-4">
            How I Can Help
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-foreground/80">
            I offer therapy for a range of emotional and psychological issues. My goal is to equip you with the tools to navigate life's complexities and build a more fulfilling future.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-secondary">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-headline text-primary mb-16 text-center">
            Areas of Specialization
          </h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <ServiceDetail
              icon={<BrainCircuit className="h-12 w-12 text-accent" />}
              title="Anxiety & Stress Management"
              description="Anxiety can feel overwhelming, but it doesn't have to control your life. We will work together to identify the root causes of your anxiety, whether it's generalized anxiety, social anxiety, panic attacks, or phobias. You'll learn practical, evidence-based techniques to manage symptoms, challenge negative thought patterns, and regain a sense of calm and control."
            />
            <ServiceDetail
              icon={<Users className="h-12 w-12 text-accent" />}
              title="Relationship Issues"
              description="Whether you're struggling in a romantic partnership, family dynamics, or friendships, therapy can help. We can explore communication breakdowns, recurring conflicts, intimacy issues, and trust issues. For couples, I provide a neutral space to facilitate difficult conversations and help you work towards a more connected and understanding relationship."
            />
            <ServiceDetail
              icon={<Heart className="h-12 w-12 text-accent" />}
              title="Trauma & PTSD"
              description="Healing from trauma is a delicate process that requires safety and compassion. I provide a supportive environment to gently process traumatic memories and their impact on your life. Using trauma-informed approaches, we will work at your pace to reduce symptoms like flashbacks and hypervigilance, helping you to reclaim your sense of self and move towards post-traumatic growth."
            />
            <ServiceDetail
              icon={<Milestone className="h-12 w-12 text-accent" />}
              title="Life Transitions"
              description="Major life changes—such as a new career, relocation, bereavement, or becoming a parent—can be unsettling. Therapy offers a space to process the complex emotions that come with these transitions. We can work together to navigate uncertainty, build resilience, and find meaning and direction in your new chapter."
            />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-headline text-primary mb-12">
            My Therapeutic Process
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <ProcessStep icon={<Handshake className="h-8 w-8 text-primary"/>} title="1. Initial Consultation" description="A no-obligation 50-minute session for us to meet, discuss your needs, and see if we are a good fit." />
            <ProcessStep icon={<Stethoscope className="h-8 w-8 text-primary"/>} title="2. Collaborative Plan" description="We'll work together to understand your goals and develop a personalized therapeutic plan." />
            <ProcessStep icon={<Milestone className="h-8 w-8 text-primary"/>} title="3. Ongoing Sessions" description="Regular sessions to explore your challenges, develop coping skills, and work towards lasting change." />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 text-center bg-primary/5">
        <div className="container">
          <h2 className="text-3xl font-headline text-primary mb-4">Begin Your Path to Healing</h2>
          <p className="max-w-2xl mx-auto text-lg text-foreground/80 mb-8">
            Contact me today to schedule your first appointment and start your journey.
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
