import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ShieldCheck, Handshake, MessageCircle, GitCommit, Heart, CheckSquare } from 'lucide-react';
import ScrollIndicator from '@/components/ScrollIndicator';

export default function AboutPage() {
  return (
    <div className="bg-background">
      <section id="start" className="py-12 md:py-20" data-aos="fade-up">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-1 gap-12 md:gap-16 items-center">
            <div className="space-y-6 max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-headline text-primary">
                A Space for Clarity and Growth
              </h1>
              <p className="text-lg text-foreground/80">
                Citrinitas Therapies represents the dawning of one's own inner sun—a powerful metaphor for the moment of profound self-awareness, clarity, and wisdom that illuminates the path forward. 
              </p>
              <p className="text-foreground/90">
                The practice is founded on the principle that every individual possesses the inner resources for healing and joy. The therapeutic process is designed to help clients connect with this brilliant light within themselves.
              </p>
              <p className="text-foreground/90">
                The therapeutic relationship at Citrinitas is a partnership built on trust and mutual respect. It provides a safe, welcoming, and non-judgmental space where clients feel truly seen and heard. The goal is twofold: to bring relief from immediate psychological distress and to empower individuals to access their own incredible capacity for growth and lasting change. Together, therapist and client explore the landscapes of the inner world, unlocking the wisdom that already resides within.
              </p>
            </div>
          </div>
        </div>
        <ScrollIndicator targetId="ethos" />
      </section>

      <section id="ethos" className="py-20 md:py-32 bg-primary" data-aos="fade-up">
        <div className="container max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-headline text-primary-foreground mb-12">
            Our Ethos
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            <Card className="bg-primary-foreground/5 text-primary-foreground">
              <CardHeader>
                <CardTitle className="font-headline text-xl flex items-center gap-2"><ShieldCheck className="text-accent" />Confidentiality</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-primary-foreground/80">Providing a secure and private environment where clients can explore their thoughts and feelings without reservation.</p>
              </CardContent>
            </Card>
            <Card className="bg-primary-foreground/5 text-primary-foreground">
              <CardHeader>
                <CardTitle className="font-headline text-xl flex items-center gap-2"><Handshake className="text-accent" />Integrity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-primary-foreground/80">Upholding the highest professional and ethical standards to ensure trustworthy and reliable therapeutic support.</p>
              </CardContent>
            </Card>
            <Card className="bg-primary-foreground/5 text-primary-foreground">
              <CardHeader>
                <CardTitle className="font-headline text-xl flex items-center gap-2"><MessageCircle className="text-accent" />Non-judgment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-primary-foreground/80">Creating an atmosphere of unconditional positive regard, where every individual's experience is met with empathy.</p>
              </CardContent>
            </Card>
             <Card className="bg-primary-foreground/5 text-primary-foreground">
              <CardHeader>
                <CardTitle className="font-headline text-xl flex items-center gap-2"><GitCommit className="text-accent" />Holistic Approach</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-primary-foreground/80">Considering all aspects of a person's life—mind, body, and spirit—to foster comprehensive and integrated healing.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 text-center" data-aos="fade-up">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-headline text-primary mb-12">
            Our Promise to You
          </h2>
           <div className="grid md:grid-cols-2 gap-8 text-left">
              <PromiseItem icon={<Heart className="text-accent" />} title="A Safe Space for Exploration" description="We pledge to provide a secure, confidential, and empathetic environment where you can freely explore your thoughts, feelings, and experiences." />
              <PromiseItem icon={<CheckSquare className="text-accent" />} title="Tools for Personal Growth" description="We commit to equipping you with practical, evidence-based tools and strategies to navigate life's challenges and foster lasting personal growth." />
              <PromiseItem icon={<Handshake className="text-accent" />} title="A Collaborative Journey" description="Your therapy is a partnership. We promise to work with you, honoring your expertise in your own life, to co-create a therapeutic path that is right for you." />
              <PromiseItem icon={<GitCommit className="text-accent" />} title="Unwavering Support" description="We are dedicated to providing consistent, reliable, and compassionate support as you move toward healing, self-discovery, and empowerment." />
           </div>
        </div>
      </section>

      <section className="py-20 md:py-24 text-center bg-primary/5" data-aos="fade-up">
        <div className="container">
          <h2 className="text-3xl font-headline text-primary mb-4">Ready to Take the Next Step?</h2>
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

function PromiseItem({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
    return (
        <div className="flex items-start gap-4">
            <div className="flex-shrink-0 mt-1">{icon}</div>
            <div>
                <h3 className="text-xl font-headline text-primary mb-2">{title}</h3>
                <p className="text-foreground/80">{description}</p>
            </div>
        </div>
    );
}
