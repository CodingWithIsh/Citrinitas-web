import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    title: "Navigating the Pressures of Modern Work",
    description: "Work stress is everywhere. Learning to manage it is key to a healthy work-life balance.",
    link: "/blog/work-stress"
  },
  {
    title: "The Gentle Art of Getting Things Done",
    description: "Putting things off is fairly harmless most of the time. But when it becomes a form of paralysis, it can prevent us from achieving our goals.",
    link: "/blog/procrastination"
  },
  {
    title: "Breaking Free From the Perfection Trap",
    description: "What happens when 'the best' feels like the only option? This mindset can lead to burnout and dissatisfaction.",
    link: "/blog/perfectionism"
  },
  {
    title: "Embracing Your True Self: Overcoming Imposter Syndrome",
    description: "A whole network of negative beliefs about your ability can make you feel like a fake. The answer is to treat those beliefs as the real imposters.",
    link: "/blog/imposter-syndrome"
  },
  {
    title: "Finding Light in the Shadows of Anxiety & Depression",
    description: "These are the most common mental health issues of our times, and talking therapies are clinically proven to be effective.",
    link: "/blog/anxiety-depression"
  },
  {
    title: "The Sacred Path of Grief",
    description: "Losing someone close is overwhelming, and the effects do not always diminish with time. Grief is a complex process that deserves space and understanding.",
    link: "/blog/bereavement"
  },
];

export default function BlogIndexPage() {
  return (
    <div className="bg-background">
      <section className="py-20 md:py-32" data-aos="fade-up">
        <div className="container">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-headline text-primary mb-4">
              From The Blog
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-foreground/80">
              A collection of articles and musings on the path to clarity, joy, and wisdom.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      </section>
    </div>
  );
}
