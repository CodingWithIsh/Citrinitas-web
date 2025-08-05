import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Sparkles, Globe, BookOpen } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="bg-background">
      <section className="py-12 md:py-20" data-aos="fade-up">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-headline text-primary">
                Finding Your Inner Sun
              </h1>
              <p className="text-lg text-foreground/80">
                Hello, I'm Barnabas Kinge. I named my practice Citrinitas Therapies because it represents a beautiful idea: the dawning of your own inner sun. My purpose is to help you connect with that light within yourself—the clarity, joy, and wisdom that can guide you forward.
              </p>
              <p className="text-foreground/90">
                My journey here has been unconventional. I've worked in humanitarian aid and studied how language shapes our world, and these experiences enrich my practice. Combined with my training as an integrative psychotherapist, they’ve taught me that every person's story is unique and deserves a culturally sensitive and profoundly human approach to healing.
              </p>
              <p className="text-foreground/90">
                Therapy with me is a partnership. I'm here to provide a safe, welcoming space where you feel seen and heard without judgment. Our goal is twofold: to bring you relief from what's hurting now, and to empower you to access your own incredible capacity for growth and lasting change.
              </p>
            </div>
            <div>
              <Image
                src="https://placehold.co/800x1000.png"
                data-ai-hint="zen garden"
                alt="A tranquil and serene Zen garden"
                width={800}
                height={1000}
                className="rounded-lg shadow-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-secondary" data-aos="fade-up">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-headline text-primary mb-12">
            My Unique Perspective
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <Card className="bg-card">
              <CardHeader>
                <CardTitle className="font-headline text-xl flex items-center gap-2"><Globe className="text-accent" />Global Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80">My work in humanitarian intervention provides a grounded, real-world perspective on human resilience and suffering.</p>
              </CardContent>
            </Card>
            <Card className="bg-card">
              <CardHeader>
                <CardTitle className="font-headline text-xl flex items-center gap-2"><BookOpen className="text-accent" />Integrative Approach</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80">I draw from Depth Psychology and Mindfulness to create a therapy that is as unique as you are.</p>
              </CardContent>
            </Card>
            <Card className="bg-card">
              <CardHeader>
                <CardTitle className="font-headline text-xl flex items-center gap-2"><Sparkles className="text-accent" />Egalitarian Values</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80">I welcome all adults, creating bespoke sessions tailored to your individual needs and therapeutic goals.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 text-center" data-aos="fade-up">
        <div className="container">
          <h2 className="text-3xl font-headline text-primary mb-4">Ready to Take the Next Step?</h2>
          <p className="max-w-2xl mx-auto text-lg text-foreground/80 mb-8">
            If my approach resonates with you, I invite you to reach out and schedule an initial consultation.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="/contact">Book a Session</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
