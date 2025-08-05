import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from 'next/image';
import { BookOpen, Briefcase, Heart, ArrowRight, Brain, Wind, Hourglass } from "lucide-react";


export default function ResourcesPage() {
  return (
    <div className="bg-background">
      <section className="py-20 md:py-32 text-center" data-aos="fade-up">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-headline text-primary mb-4">
            The Resources Toolkit
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-foreground/80">
            Our journey through life is shaped by past experiences, which can sometimes feel like a heavy weight. This toolkit offers a curated set of articles and resources designed to support you on your path to greater clarity and well-being.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-secondary" data-aos="fade-up">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-headline text-primary mb-16 text-center">
            Exploring Life's Tapestry
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ResourceCard
              icon={<Briefcase className="h-10 w-10 text-accent" />}
              title="Our Work"
              description="Stress, anxiety, procrastination, fear of failure... We look at how patterns of thinking can pervade our working life."
              imageUrl="https://placehold.co/600x400.png"
              imageHint="office desk"
            />
            <ResourceCard
              icon={<Heart className="h-10 w-10 text-accent" />}
              title="Our Relationships"
              description="We take a look at the most common reasons why people seek counselling, including for depression, anxiety, and bereavement."
              imageUrl="https://placehold.co/600x400.png"
              imageHint="serene landscape"
            />
            <ResourceCard
              icon={<BookOpen className="h-10 w-10 text-accent" />}
              title="Our Growth"
              description="Our lives are punctuated by a series of milestones that throw up serious challenges to our mental wellbeing."
              imageUrl="https://placehold.co/600x400.png"
              imageHint="aged book"
            />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-background" data-aos="fade-up">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-headline text-primary">
              Mindfulness Practices for Daily Life
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-foreground/80 mt-4">
              Cultivate presence and inner calm with these simple yet powerful mindfulness exercises.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <PracticeCard
              icon={<Brain className="w-10 h-10 text-accent" />}
              title="The Body Scan"
              description="Lie down comfortably and bring your attention to your body. Notice physical sensations, from your toes to your head, without judgment. This practice enhances body awareness and releases tension."
            />
            <PracticeCard
              icon={<Wind className="w-10 h-10 text-accent" />}
              title="Mindful Breathing"
              description="Find a quiet seat and focus on your breath. Observe the sensation of the air entering and leaving your body. When your mind wanders, gently guide your focus back to your breath. This grounds you in the present moment."
            />
            <PracticeCard
              icon={<Hourglass className="w-10 h-10 text-accent" />}
              title="Three-Minute Breathing Space"
              description="Pause your day. For one minute, notice your thoughts and feelings. For the second, focus on your breath. For the third, expand your awareness to your whole body. A quick reset to find calm."
            />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-secondary" data-aos="fade-up">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-headline text-primary mb-12 text-center">
            From The Blog
          </h2>
          <div className="space-y-16">
            <TopicSection
              title="Navigating the Pressures of Modern Work"
              link="/blog/work-stress"
            >
              According to the UK Labour Force Survey (2017-18), some 57% of days lost through ill health were due to stress or anxiety. Work stress is everywhere. Learning to manage it is key to a healthy work-life balance.
            </TopicSection>
            <TopicSection
              title="The Gentle Art of Getting Things Done"
              link="/blog/procrastination"
            >
              Putting things off is fairly harmless most of the time. But when it becomes a form of paralysis, it can prevent us from achieving our goals and lead to feelings of guilt and inadequacy.
            </TopicSection>
            <TopicSection
              title="Breaking Free From the Perfection Trap"
              link="/blog/perfectionism"
            >
              As the old saying goes, "Don't let the perfect be the enemy of the good." But what happens when 'the best' feels like the only option? This mindset can lead to burnout and dissatisfaction.
            </TopicSection>
            <TopicSection
              title="Embracing Your True Self: Overcoming Imposter Syndrome"
              link="/blog/imposter-syndrome"
            >
              A whole network of negative beliefs about your ability can make you feel like a fake. The answer is to treat those beliefs as the real imposters.
            </TopicSection>
             <TopicSection
              title="Finding Light in the Shadows of Anxiety & Depression"
              link="/blog/anxiety-depression"
            >
              These are the most common mental health issues of our times, and talking therapies are clinically proven to be effective. We explore the symptoms and pathways to support.
            </TopicSection>
            <TopicSection
                title="The Sacred Path of Grief"
                link="/blog/bereavement"
            >
                Losing someone close is overwhelming, and the effects do not always diminish with time. Grief is a complex process that deserves space and understanding.
            </TopicSection>
          </div>
        </div>
      </section>

       <section className="py-20 md:py-24 text-center bg-primary/5" data-aos="fade-up">
        <div className="container">
          <h2 className="text-3xl font-headline text-primary mb-4">Ready to Explore Further?</h2>
          <p className="max-w-2xl mx-auto text-lg text-foreground/80 mb-8">
            If you feel ready to discuss any of these topics, I invite you to get in touch.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="/contact">Book a Session</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

function ResourceCard({ icon, title, description, imageUrl, imageHint }: { icon: React.ReactNode, title: string, description: string, imageUrl: string, imageHint: string }) {
  return (
    <Card className="text-center shadow-md hover:shadow-xl transition-shadow duration-300 bg-card h-full flex flex-col overflow-hidden">
        <div className="relative w-full h-48">
            <Image
                src={imageUrl}
                data-ai-hint={imageHint}
                alt={title}
                fill
                className="object-cover"
            />
        </div>
        <CardHeader>
            <div className="mx-auto bg-accent/10 rounded-full p-4 w-fit mb-4 -mt-12 bg-background relative z-10 border">
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

function PracticeCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <Card className="text-center shadow-md hover:shadow-xl transition-shadow duration-300 bg-card h-full flex flex-col p-6">
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

function TopicSection({ title, link, children }: { title: string, link: string, children: React.ReactNode }) {
    return (
        <div className="border-b pb-8">
            <h3 className="text-2xl font-headline text-primary mb-4">{title}</h3>
            <p className="text-foreground/80 mb-4">{children}</p>
            <Button asChild variant="link" className="text-accent hover:text-accent/80 p-0">
                <Link href={link}>Read Blog <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
        </div>
    )
}
