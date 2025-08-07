
'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import ContactForm from '@/components/ContactForm';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sun, Waves, Wind, ArrowRight, Phone } from 'lucide-react';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

export default function Home() {
  const [isNavigating, setIsNavigating] = useState(false);
  const router = useRouter();

  const handleNavigate = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsNavigating(true);
  };

  useEffect(() => {
    if (isNavigating) {
      const timer = setTimeout(() => {
        router.push('/resources');
      }, 1200); // Corresponds to the animation duration
      return () => clearTimeout(timer);
    }
  }, [isNavigating, router]);

  return (
    <>
      {/* Home Section */}
      <section id="home" className="h-dvh -mt-16 grid grid-cols-1 md:grid-cols-2">
        <div className="bg-primary hidden md:flex flex-col items-center justify-center p-8 text-primary-foreground">
          <div className="text-center space-y-12">
            <h2 className="text-3xl font-headline text-primary-foreground/90">
              A Space for Inspired Growth and Healing
            </h2>
            <div className="space-y-8">
              <blockquote className="text-3xl italic text-primary-foreground/70 border-l-4 border-accent pl-6">
                "You cannot step into the same river twice."
                <footer className="text-lg not-italic mt-2">– Heraclitus</footer>
              </blockquote>
               <blockquote className="text-xl italic text-primary-foreground/70 border-l-4 border-accent pl-6">
                "Until you make the unconscious conscious, it will direct your life and you will call it fate."
                <footer className="text-base not-italic mt-2">– C.G. Jung</footer>
              </blockquote>
            </div>
            <div className="pt-8">
               <h3 className="text-lg font-bold">Book a Consultation</h3>
               <a href="tel:+442012345678" className="flex items-center justify-center gap-2 text-2xl text-accent hover:text-accent/90 transition-colors mt-2">
                 <Phone className="h-6 w-6" />
                 <span>+44 (0)20 1234 5678</span>
               </a>
            </div>
          </div>
        </div>
        <div className="relative flex flex-col items-center justify-center text-center p-8 bg-cover bg-center" style={{ backgroundImage: "url('/Background3.png')" }}>
           <div className="absolute inset-0 bg-black/30" />
           <div className="relative z-10 flex flex-col items-center justify-center text-white">
              <Image src="/Logo3.png" alt="Citrinitas Therapies Logo" width={150} height={150} className="mb-6" />
              <h1 className="text-4xl md:text-5xl font-headline text-white/90">
                Welcome to Citrinitas Therapies
              </h1>
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
      <section id="services" className="py-20 md:py-32 bg-secondary" data-aos="fade-up">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-headline text-primary mb-12">Therapeutic Approach</h2>
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
          <Button asChild variant="link" className="mt-12 text-lg text-primary">
            <Link href="/services">Explore My Approach <ArrowRight className="ml-2" /></Link>
          </Button>
        </div>
      </section>

      {/* Fees Section */}
      <section id="fees" className="py-20 md:py-32 bg-background" data-aos="fade-up">
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
            <Button asChild variant="link" className="text-lg text-primary">
              <Link href="/fees">View Detailed Fee Information <ArrowRight className="ml-2" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 bg-primary/5" data-aos="fade-up">
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
