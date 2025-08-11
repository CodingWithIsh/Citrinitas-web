

'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import ContactForm from '@/components/ContactForm';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sun, Waves, Wind, ArrowRight, Phone, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

export default function Home() {
  const [isNavigating, setIsNavigating] = useState(false);
  const router = useRouter();

  const handleNavigate = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (href) {
      setIsNavigating(true);
      setTimeout(() => {
        router.push(href);
      }, 1200); // Corresponds to the animation duration
    }
  };


  return (
    <>
      {/* Home Section */}
      <section id="home" className="h-dvh -mt-16 grid grid-cols-1 md:grid-cols-2">
        <div className="bg-primary hidden md:flex flex-col items-center justify-center p-12 text-primary-foreground">
          <div className="text-center space-y-10 max-w-md">
            <h2 className="text-3xl font-headline text-primary-foreground/90 leading-tight">
              A Space for Inspired Growth and Healing
            </h2>
            <blockquote className="text-4xl italic text-primary-foreground/80 py-2 pb-8">
              "Your character is your destiny."
              <footer className="text-base not-italic mt-4 opacity-70">~ Heraclitus</footer>
            </blockquote>

            <div className="pt-2 space-y-4">
               <h3 className="text-lg font-bold tracking-wide">Arrange a Free Consultation</h3>
               <a href="tel:+447384407792" className="flex items-center justify-center gap-3 text-2xl text-accent hover:text-accent/90 transition-colors mt-2">
                 <Phone className="h-6 w-6" />
                 <span>+44 7384 407792</span>
               </a>
                <Button asChild variant="secondary" className="mt-4 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20">
                    <Link href="/contact">Or Book Online</Link>
                </Button>
            </div>
          </div>
        </div>
        <div className={cn("relative flex flex-col items-center justify-center text-center p-8 bg-cover bg-center", isNavigating && 'animate-scene-zoom')} style={{ backgroundImage: "url('/Background3.png')" }}>
           <div className="absolute inset-0 bg-black/30" />
           <div className="relative z-10 flex flex-col items-center justify-center text-white">
              <Image src="/Logo3.png" alt="Citrinitas Therapies Logo" width={600} height={600} className="mb-6" />
              <h1 className="text-4xl md:text-5xl font-headline text-white/90">
                Welcome to Citrinitas Therapies
              </h1>
              <Button asChild size="lg" className="mt-8 bg-accent hover:bg-accent/90 text-accent-foreground">
                  <a href="/resources" onClick={handleNavigate}>Begin your journey</a>
              </Button>
           </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32 bg-background" data-aos="fade-up">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-headline text-primary mb-12">About Barnabas Kinge</h2>
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="w-48 h-48 md:w-60 md:h-60 rounded-full overflow-hidden shadow-lg flex-shrink-0 border-4 border-white">
              <Image
                src="/Potrait.png"
                alt="Portrait of Barnabas Kinge, psychotherapist"
                width={400}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="text-left space-y-4 text-foreground/90">
              <p>
                I'm Barnabas, and my practice is dedicated to providing acute relief from psychological distress while empowering you to access your own meaning-making capacities.
              </p>
              <p>
                With a background in International Development and a deep understanding of integrative therapeutic methods, I offer a holistic and culturally sensitive approach to healing.
              </p>
            </div>
          </div>
          <Button asChild variant="link" className="mt-8 text-lg text-primary">
            <Link href="/about">Learn More About My Philosophy <ArrowRight className="ml-2" /></Link>
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section 
        id="services" 
        className="py-20 md:py-32 bg-cover bg-center relative" 
        data-aos="fade-up"
        style={{ backgroundImage: "url('/river.jpg')" }}
      >
        <div className="absolute inset-0 bg-primary/80" />
        <div className="container mx-auto text-center relative">
          <h2 className="text-3xl md:text-4xl font-headline text-primary-foreground mb-12">Therapeutic Approach</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Waves className="h-10 w-10 text-accent" />}
              title="Depth Psychology"
              description="Explore the unconscious aspects of the self to bring about profound and lasting change."
              className="bg-background/90"
            />
            <ServiceCard
              icon={<Wind className="h-10 w-10 text-accent" />}
              title="Mindfulness-Based"
              description="Cultivate present-moment awareness to reduce stress and relate to your experiences with greater compassion."
              className="bg-background/90"
            />
            <ServiceCard
              icon={<Sun className="h-10 w-10 text-accent" />}
              title="Integrative Method"
              description="A bespoke blend of therapeutic techniques tailored to your unique individual needs and goals."
              className="bg-background/90"
            />
          </div>
          <Button asChild variant="link" className="mt-12 text-lg text-primary-foreground hover:text-primary-foreground/80">
            <Link href="/approach">Explore My Approach <ArrowRight className="ml-2" /></Link>
          </Button>
        </div>
      </section>

      {/* New Services Section */}
      <section id="fees" className="py-20 md:py-32 bg-background" data-aos="fade-up">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-headline text-primary mb-8">Our Services</h2>
          <p className="max-w-2xl mx-auto text-lg text-foreground/80 mb-12">
            We provide a range of tailored therapeutic services designed to foster growth, healing, and self-discovery. Our approach is collaborative and adapted to your unique journey.
          </p>
          <div className="grid md:grid-cols-2 gap-8 text-left max-w-2xl mx-auto">
             <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                <div>
                    <h3 className="text-xl font-headline text-primary mb-1">1-1 Counselling</h3>
                    <p className="text-foreground/80">A confidential space to explore personal challenges and develop coping strategies.</p>
                </div>
            </div>
             <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                <div>
                    <h3 className="text-xl font-headline text-primary mb-1">Psychotherapy</h3>
                    <p className="text-foreground/80">A deep, explorative process to understand and resolve complex emotional issues.</p>
                </div>
            </div>
             <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                <div>
                    <h3 className="text-xl font-headline text-primary mb-1">Coaching</h3>
                    <p className="text-foreground/80">Goal-oriented support to help you unlock your full potential.</p>
                </div>
            </div>
             <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                <div>
                    <h3 className="text-xl font-headline text-primary mb-1">Mentoring</h3>
                    <p className="text-foreground/80">Guidance from an experienced practitioner for personal or professional growth.</p>
                </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/services">Explore All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
       <section 
        id="contact" 
        className="py-20 md:py-32 bg-secondary" 
        data-aos="fade-up"
      >
        <div className="container">
            <div className="flex items-center justify-center">
                <ContactForm />
            </div>
        </div>
      </section>
    </>
  );
}

function ServiceCard({ icon, title, description, className }: { icon: React.ReactNode, title: string, description: string, className?: string }) {
  return (
    <Card className={cn("text-center shadow-md hover:shadow-xl transition-shadow duration-300 bg-card h-full flex flex-col", className)}>
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
