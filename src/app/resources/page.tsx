import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from 'next/image';
import { BookOpen, Briefcase, Heart, BrainCircuit, ShieldCheck, UserCheck, Coffee, Mountain, Users, Hourglass, Baby, Skull } from "lucide-react";


export default function ResourcesPage() {
  return (
    <div className="bg-background">
      <section className="py-20 md:py-32 text-center">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-headline text-primary mb-4">
            The Resources Toolkit
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-foreground/80">
            We go through life carrying a kind of mental 'backpack' of our past experiences that can sometimes feel heavy. This toolkit offers articles, links, and other resources on mental health topics that may prove helpful on your journey.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-secondary">
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

      <section className="py-20 md:py-32">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-headline text-primary mb-12 text-center">
            Topics
          </h2>
          <Accordion type="single" collapsible className="w-full">
            <TopicAccordionItem value="work-stress" title="Work Stress" icon={<Briefcase className="w-5 h-5 text-accent" />}>
              According to the UK Labour Force Survey (2017-18), some 57% of days lost through ill health were due to stress or anxiety. Work stress is everywhere. Learning to manage it is key to a healthy work-life balance.
            </TopicAccordionItem>
            <TopicAccordionItem value="procrastination" title="Procrastination" icon={<Coffee className="w-5 h-5 text-accent" />}>
              Putting things off is fairly harmless most of the time. But when it becomes a form of paralysis, it can prevent us from achieving our goals and lead to feelings of guilt and inadequacy.
            </TopicAccordionItem>
            <TopicAccordionItem value="perfectionism" title="Perfectionism" icon={<Mountain className="w-5 h-5 text-accent" />}>
              As the old saying goes, "Don't let the perfect be the enemy of the good." But what happens when 'the best' feels like the only option? This mindset can lead to burnout and dissatisfaction.
            </TopicAccordionItem>
            <TopicAccordionItem value="imposter-syndrome" title="Imposter Syndrome" icon={<UserCheck className="w-5 h-5 text-accent" />}>
              A whole network of negative beliefs about your ability can make you feel like a fake. The answer is to treat those beliefs as the real imposters.
            </TopicAccordionItem>
             <TopicAccordionItem value="anxiety-depression" title="Depression & Anxiety" icon={<BrainCircuit className="w-5 h-5 text-accent" />}>
              These are the most common mental health issues of our times, and talking therapies are clinically proven to be effective. We explore the symptoms and pathways to support.
            </TopicAccordionItem>
            <TopicAccordionItem value="bereavement" title="Bereavement" icon={<Skull className="w-5 h-5 text-accent" />}>
                Losing someone close is overwhelming, and the effects do not always diminish with time. Grief is a complex process that deserves space and understanding.
            </TopicAccordionItem>
          </Accordion>
        </div>
      </section>

       <section className="py-20 md:py-24 text-center bg-primary/5">
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

function TopicAccordionItem({ value, title, icon, children }: { value: string, title: string, icon: React.ReactNode, children: React.ReactNode }) {
    return (
        <AccordionItem value={value}>
            <AccordionTrigger className="text-lg font-bold">
                <div className="flex items-center gap-3">
                    {icon}
                    {title}
                </div>
            </AccordionTrigger>
            <AccordionContent className="text-base text-foreground/80 pl-11">
                {children}
            </AccordionContent>
        </AccordionItem>
    )
}
