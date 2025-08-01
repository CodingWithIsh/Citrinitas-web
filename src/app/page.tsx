import Image from 'next/image';
import ContactForm from '@/components/ContactForm';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sun, Heart, Users, ArrowRight, Waves, Wind } from 'lucide-react';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';

export default function Home() {
  return (
    <>
      {/* Home Section */}
      <section id="home" className="relative h-dvh flex items-center justify-center text-center px-4 -mt-16">
        <div className="absolute inset-0 bg-primary/20"></div>
        <Image
          src="/Home.jpg"
          alt="Soft, abstract shapes with a zen-like feel"
          fill
          priority
          className="object-cover -z-10"
        />
        <div className="relative z-10 bg-background/80 backdrop-blur-sm p-8 md:p-12 rounded-xl shadow-2xl max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-headline text-primary mb-4">
            Towards Clarity, Joy, and Wisdom
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-foreground/80 mb-8">
            A welcoming space for inspired growth and healing, guided by Barnabas Kinge.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="/contact">Begin Your Journey</Link>
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32 bg-background">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-headline text-primary mb-12">About Barnabas Kinge</h2>
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="w-48 h-48 md:w-60 md:h-60 rounded-full overflow-hidden shadow-lg flex-shrink-0 border-4 border-white">
              <Image
                src="https://placehold.co/400x400.png"
                data-ai-hint="therapist portrait"
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
      <section id="services" className="py-20 md:py-32 bg-secondary">
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
            <Button asChild variant="link" className="text-lg text-primary">
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