import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="bg-background">
      <section className="py-20 md:py-32">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-headline text-primary">
                My Commitment to Your Growth
              </h1>
              <p className="text-lg text-foreground/80">
                I believe that therapy is a collaborative journey. My role is to provide a supportive, empathetic, and confidential space where you feel safe to explore your inner world.
              </p>
              <p className="text-foreground/90">
                My name is Joe, and I am a qualified psychotherapist with a Master's degree in Counselling Psychology. As a registered member of the British Association for Counselling and Psychotherapy (BACP), I adhere to their strict ethical framework, ensuring you receive professional and compassionate care. My practice is built on a foundation of trust and respect, honoring your unique experiences and perspectives.
              </p>
              <p className="text-foreground/90">
                I specialize in helping individuals navigate challenges such as anxiety, relationship difficulties, and the lingering effects of trauma. Through my integrative approach, I draw from various therapeutic modalities, including psychodynamic, person-centered, and cognitive-behavioral therapies (CBT), to tailor a treatment plan that best suits your individual needs and goals.
              </p>
              <p className="text-foreground/90">
                Continuous learning is a cornerstone of my practice. I am dedicated to ongoing professional development, staying current with the latest research and therapeutic techniques to enhance the support I offer my clients.
              </p>
            </div>
            <div>
              <Image
                src="https://placehold.co/800x1000.png"
                data-ai-hint="therapist office"
                alt="A calm and inviting therapy room"
                width={800}
                height={1000}
                className="rounded-lg shadow-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-secondary">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-headline text-primary mb-12">
            Our Therapeutic Alliance
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <Card className="bg-card">
              <CardHeader>
                <CardTitle className="font-headline text-xl">Empathy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80">I strive to understand your world from your perspective, without judgment.</p>
              </CardContent>
            </Card>
            <Card className="bg-card">
              <CardHeader>
                <CardTitle className="font-headline text-xl">Collaboration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80">We work together as partners to uncover insights and foster change.</p>
              </CardContent>
            </Card>
            <Card className="bg-card">
              <CardHeader>
                <CardTitle className="font-headline text-xl">Confidentiality</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80">Your privacy is paramount. Our sessions are a secure and protected space.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 text-center">
        <div className="container">
          <h2 className="text-3xl font-headline text-primary mb-4">Ready to Take the Next Step?</h2>
          <p className="max-w-2xl mx-auto text-lg text-foreground/80 mb-8">
            If you feel we might be a good fit, I invite you to reach out and schedule an initial consultation.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="/contact">Book a Session</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
