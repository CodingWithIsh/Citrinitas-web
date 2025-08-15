import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import ScrollIndicator from '@/components/ScrollIndicator';

const blogPosts = [
  {
    title: "Beyond Burnout: Understanding 'Quiet Quitting' and Reclaiming Your Work-Life Harmony",
    description: "A staggering number of employees are mentally checking out from work, a phenomenon known as 'quiet quitting.' This isn't laziness, but a profound psychological response to burnout and a culture of overwork.",
    link: "/blog/work-stress"
  },
  {
    title: "The Unspoken Rules of Engagement: Navigating Workplace Conflict with Psychological Insight",
    description: "Workplace conflict is inevitable, but it doesn't have to be destructive. By understanding its four primary sources—task, process, status, and relationship—we can transform disputes.",
    link: "/blog/procrastination"
  },
  {
    title: "The Friendship Recession: Why Our Connections Feel Drained and How to Build Healthier Bonds",
    description: "In an age of digital connection, many feel a profound sense of disconnection, leading to a 'friendship recession.' We examine the psychology behind friendship burnout and imbalanced emotional labor.",
    link: "/blog/perfectionism"
  },
  {
    title: "The Digital Paradox: Managing Loneliness and Anxiety in an Age of Hyper-Connectivity",
    description: "Technology designed to bring us together can often make us feel more isolated. We delve into the research that shows a clear link between heavy social media use and a decline in mental well-being.",
    link: "/blog/imposter-syndrome"
  },
  {
    title: "The Midlife Unraveling: Embracing the Messy, Beautiful Journey to Your True Self",
    description: "Midlife is often mislabeled a 'crisis' when it's more of an 'unraveling'—a slow, messy, and profound process of shedding the armor we've built over a lifetime.",
    link: "/blog/anxiety-depression"
  },
  {
    title: "The Art of Bouncing Forward: Evidence-Based Strategies for Building Psychological Resilience",
    description: "Resilience is not a fixed trait but a set of learnable skills that allow us to navigate life's storms. This article breaks down the five pillars of a resilient life.",
    link: "/blog/bereavement"
  },
];

export default function BlogIndexPage() {
  return (
    <div className="bg-background">
      <section id="start" className="py-20 md:py-32 relative" data-aos="fade-up">
        <div className="container">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-headline text-primary mb-4">
              From The Blog
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-foreground/80">
              A collection of articles and musings on the path to clarity, joy, and wisdom.
            </p>
          </div>
          <div id="blog-posts" className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link href={post.link} key={post.link} className="group">
                <Card className="h-full flex flex-col justify-between hover:border-primary transition-colors duration-300">
                  <CardHeader>
                    <CardTitle className="font-headline text-2xl text-primary group-hover:underline">{post.title}</CardTitle>
                    <CardDescription className="pt-4">{post.description}</CardDescription>
                  </CardHeader>
                  <div className="p-6 pt-0 text-primary font-bold flex items-center">
                    Read More <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
        <ScrollIndicator targetId="blog-posts" />
      </section>
    </div>
  );
}
