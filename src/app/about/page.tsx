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
                Hello, I'm Barnabas Kinge. I named my practice Citrinitas Therapies because it represents a beautiful idea from Jungian alchemy: the dawning of your own inner sun. It signifies the moment of clarity, wisdom, and self-awareness that illuminates your path forward. My purpose is to help you connect with that brilliant light within yourself—the inner resources that guide you toward healing and joy.
              </p>
              <p className="text-foreground/90">
                My journey to becoming a psychotherapist has been anything but conventional. I've spent years in humanitarian aid, witnessing both immense suffering and incredible resilience. I've also studied how language and culture shape our reality. These diverse experiences are not separate from my therapeutic work; they are woven into its very fabric. Combined with my rigorous training as an integrative psychotherapist, they’ve taught me that every person's story is unique and deserves a culturally sensitive, compassionate, and profoundly human approach to healing.
              </p>
              <p className="text-foreground/90">
                Therapy with me is a partnership built on trust and mutual respect. I'm here to provide a safe, welcoming, and non-judgmental space where you feel truly seen and heard. Our goal is twofold: to bring you relief from the immediate pain or confusion you're experiencing, and to empower you to access your own incredible capacity for growth and lasting change. Together, we will explore the landscapes of your inner world, unlocking the wisdom that already resides within you.
              </p>
            </div>
            <div>
              <Image
                src="/tree.jpg"
                alt="A strong tree symbolizing growth and resilience"
                width={800}
                height={800}
                className="rounded-lg shadow-2xl object-cover h-full max-h-[800px]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-primary" data-aos="fade-up">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-headline text-primary-foreground mb-12">
            My Unique Perspective
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <Card className="bg-primary-foreground/5 text-primary-foreground">
              <CardHeader>
                <CardTitle className="font-headline text-xl flex items-center gap-2"><Globe className="text-accent" />Global Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-primary-foreground/80">My work in humanitarian intervention provides a grounded, real-world perspective on human resilience and suffering.</p>
              </CardContent>
            </Card>
            <Card className="bg-primary-foreground/5 text-primary-foreground">
              <CardHeader>
                <CardTitle className="font-headline text-xl flex items-center gap-2"><BookOpen className="text-accent" />Integrative Approach</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-primary-foreground/80">I draw from Depth Psychology and Mindfulness to create a therapy that is as unique as you are.</p>
              </CardContent>
            </Card>
            <Card className="bg-primary-foreground/5 text-primary-foreground">
              <CardHeader>
                <CardTitle className="font-headline text-xl flex items-center gap-2"><Sparkles className="text-accent" />Egalitarian Values</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-primary-foreground/80">I welcome all adults, creating bespoke sessions tailored to your individual needs and therapeutic goals.</p>
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
