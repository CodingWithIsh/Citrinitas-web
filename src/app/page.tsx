import Image from 'next/image';
import ContactForm from '@/components/ContactForm';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BrainCircuit, Heart, Users, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';

export default function Home() {
  return (
    <>
      {/* Home Section */}
      <section id="home" className="relative h-dvh flex items-center justify-center text-center px-4 -mt-16">
        <div className="absolute inset-0 bg-primary/20"></div>
        <Image
          src="https://placehold.co/1920x1080.png"
          alt="Calm natural landscape"
          data-ai-hint="calm nature"
          fill
          priority
          className="object-cover -z-10"
        />
        <div className="relative z-10 bg-background/80 backdrop-blur-sm p-8 md:p-12 rounded-xl shadow-2xl max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-headline text-primary mb-4">
            Welcome to Your Space for Growth
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-foreground/80 mb-8">
            I'm Joe, a dedicated psychotherapist helping adults and couples in London navigate life's challenges.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="/contact">Begin Your Journey</Link>
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32 bg-background">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-headline text-primary mb-12">About Me</h2>
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="w-48 h-48 md:w-60 md:h-60 rounded-full overflow-hidden shadow-lg flex-shrink-0 border-4 border-white">
              <Image
                src="https://placehold.co/400x400.png"
                data-ai-hint="therapist portrait"
                alt="Portrait of Joe, psychotherapist"
                width={400}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="text-left space-y-4 text-foreground/90">
              <p>
                My name is Joe, and I am a qualified psychotherapist specializing in anxiety, relationship issues, and trauma. My approach is rooted in empathy and collaboration, creating a safe, non-judgmental space for you to explore your thoughts and feelings.
              </p>
              <p>
                I hold a Master's degree in Counselling Psychology and am a registered member of the British Association for Counselling and Psychotherapy (BACP).
              </p>
            </div>
          </div>
          <Button asChild variant="link" className="mt-8 text-lg">
            <Link href="/about">Learn More About My Approach <ArrowRight className="ml-2" /></Link>
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-32 bg-secondary">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-headline text-primary mb-12">My Approach & Specializations</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={<BrainCircuit className="h-10 w-10 text-accent" />}
              title="Anxiety"
              description="Learn to understand and manage anxiety with effective coping strategies, finding calm and control in your life."
            />
            <ServiceCard
              icon={<Users className="h-10 w-10 text-accent" />}
              title="Relationship Issues"
              description="Navigate communication challenges, conflicts, and intimacy issues to build stronger, healthier connections with others."
            />
            <ServiceCard
              icon={<Heart className="h-10 w-10 text-accent" />}
              title="Trauma"
              description="Gently process past traumatic experiences in a secure environment, working towards healing and reclaiming your life."
            />
          </div>
          <Button asChild variant="link" className="mt-12 text-lg text-primary">
            <Link href="/services">Explore All Services <ArrowRight className="ml-2" /></Link>
          </Button>
        </div>
      </section>

      {/* Fees Section */}
      <section id="fees" className="py-20 md:py-32 bg-background">
        <div className="container max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-headline text-primary mb-8 text-center">Session Fees</h2>
          <Card className="shadow-lg">
            <CardContent className="p-8 text-center flex flex-col md:flex-row justify-between items-center gap-6">
              <div>
                <p className="text-lg text-foreground/80">Individual Session (50 mins)</p>
                <p className="text-4xl font-bold text-primary mt-1">£80</p>
              </div>
              <Separator orientation="vertical" className="hidden md:block h-20" />
              <Separator className="md:hidden" />
              <div>
                <p className="text-lg text-foreground/80">Couples Session (60 mins)</p>
                <p className="text-4xl font-bold text-primary mt-1">£120</p>
              </div>
            </CardContent>
          </Card>
          <div className="text-center mt-8">
            <Button asChild variant="link" className="text-lg">
              <Link href="/fees">View Detailed Fee Information <ArrowRight className="ml-2" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 bg-primary/5">
        <div className="container">
          <ContactForm />
        </div>
      </section>
    </>
  );
}

function ServiceCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <Card className="text-center shadow-md hover:shadow-xl transition-shadow duration-300 bg-card h-full flex flex-col">
      <CardHeader>
        <div className="mx-auto bg-accent/10 rounded-full p-4 w-fit mb-4">
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
