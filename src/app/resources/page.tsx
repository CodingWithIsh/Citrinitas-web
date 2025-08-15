import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from 'next/image';
import { BookOpen, Briefcase, Heart, ArrowRight, Brain, Wind, Hourglass } from "lucide-react";
import ScrollIndicator from "@/components/ScrollIndicator";


export default function ResourcesPage() {
  return (
    <div className="bg-background">
      <section className="py-20 md:py-32 text-center relative" data-aos="fade-up">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-headline text-primary mb-4">
            The Resources Toolkit
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-foreground/80">
            Our journey through life is shaped by past experiences, which can sometimes feel like a heavy weight. This toolkit offers a curated set of articles and resources designed to support you on your path to greater clarity and well-being.
          </p>
        </div>
        <ScrollIndicator targetId="life-tapestry" />
      </section>

      <section id="life-tapestry" className="py-20 md:py-32 bg-primary text-primary-foreground" data-aos="fade-up">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-headline mb-16 text-center">
            Exploring Life's Tapestry
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ResourceCard
              icon={<Briefcase className="h-10 w-10 text-accent" />}
              title="Our Work"
              description="Stress, anxiety, procrastination, fear of failure... We look at how patterns of thinking can pervade our working life."
              imageUrl="/Work.png"
            />
            <ResourceCard
              icon={<Heart className="h-10 w-10 text-accent" />}
              title="Our Relationships"
              description="We take a look at the most common reasons why people seek counselling, including for depression, anxiety, and bereavement."
              imageUrl="/Relationships.png"
            />
            <ResourceCard
              icon={<BookOpen className="h-10 w-10 text-accent" />}
              title="Our Growth"
              description="Our lives are punctuated by a series of milestones that throw up serious challenges to our mental wellbeing."
              imageUrl="/Growth.png"
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
              title="Beyond Burnout: Understanding 'Quiet Quitting' and Reclaiming Your Work-Life Harmony"
              link="/blog/beyond-burnout"
            >
              A staggering number of employees are mentally checking out from work, a phenomenon known as 'quiet quitting.' This isn't laziness, but a profound psychological response to burnout and a culture of overwork. We explore what drives this trend and how to shift from silent withdrawal to intentional engagement, reclaiming a healthier relationship with your professional life.
            </TopicSection>
            <TopicSection
              title="The Unspoken Rules of Engagement: Navigating Workplace Conflict with Psychological Insight"
              link="/blog/workplace-conflict"
            >
              Workplace conflict is inevitable, but it doesn't have to be destructive. By understanding its four primary sources—task, process, status, and relationship—and applying skills like emotional intelligence, we can transform disputes from sources of stress into opportunities for stronger collaboration and growth.
            </TopicSection>
            <TopicSection
              title="The Friendship Recession: Why Our Connections Feel Drained and How to Build Healthier Bonds"
              link="/blog/friendship-recession"
            >
              In an age of digital connection, many feel a profound sense of disconnection, leading to a "friendship recession." We examine the psychology behind friendship burnout and imbalanced emotional labor, offering a guide to cultivating the reciprocal, supportive bonds that are essential for our mental and emotional well-being.
            </TopicSection>
            <TopicSection
              title="The Digital Paradox: Managing Loneliness and Anxiety in an Age of Hyper-Connectivity"
              link="/blog/digital-paradox"
            >
             Technology designed to bring us together can often make us feel more isolated. We delve into the research that shows a clear link between heavy social media use and a decline in mental well-being, exploring the psychological traps of comparison and FOMO, and offering evidence-based strategies to build healthier digital habits.
            </TopicSection>
             <TopicSection
              title="The Midlife Unraveling: Embracing the Messy, Beautiful Journey to Your True Self"
              link="/blog/midlife-unraveling"
            >
              Midlife is often mislabeled a 'crisis' when it's more of an 'unraveling'—a slow, messy, and profound process of shedding the armor we've built over a lifetime. We explore this developmental journey as an invitation to question our path, deconstruct our old selves, and align with a more authentic way of being.
            </TopicSection>
            <TopicSection
                title="The Art of Bouncing Forward: Evidence-Based Strategies for Building Psychological Resilience"
                link="/blog/building-resilience"
            >
                Resilience is not a fixed trait but a set of learnable skills that allow us to navigate life's storms. This article breaks down the five pillars of a resilient life—from social connection to cognitive flexibility—and offers practical, everyday strategies to not just bounce back from adversity, but to bounce forward with greater strength and wisdom.
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

function ResourceCard({ icon, title, description, imageUrl }: { icon: React.ReactNode, title: string, description: string, imageUrl: string }) {
  return (
    <Card className="text-center shadow-md hover:shadow-xl transition-shadow duration-300 bg-card h-full flex flex-col overflow-hidden">
        <div className="relative w-full h-48">
            <Image
                src={imageUrl}
                alt={title}
                fill
                className="object-contain"
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
