import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function WorkStressPage() {
  return (
    <div className="bg-background">
      <div className="container max-w-4xl mx-auto py-20 md:py-32">
        <article className="prose lg:prose-xl max-w-none">
          <header className="mb-12">
            <Link href="/blog">
              <Button variant="ghost" className="mb-4">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
              </Button>
            </Link>
            <h1 className="text-4xl md:text-5xl font-headline text-primary mb-4">Navigating the Pressures of Modern Work</h1>
            <p className="text-muted-foreground text-lg">
              According to the UK Labour Force Survey (2017-18), some 57% of days lost through ill health were due to stress or anxiety. Work stress is everywhere. Learning to manage it is key to a healthy work-life balance.
            </p>
          </header>

          <Image
            src="https://placehold.co/1200x600.png"
            data-ai-hint="stress workplace"
            alt="An office worker looking stressed."
            width={1200}
            height={600}
            className="rounded-lg mb-8"
          />

          <div className="space-y-6 text-foreground/90 text-lg">
            <p>
              Your content about work stress can go here. This is a great place to expand on the topic, share insights, and provide actionable advice for your readers.
            </p>
            <p>
              You could discuss topics like:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>The common causes of workplace stress.</li>
              <li>How to recognize the signs of burnout.</li>
              <li>Mindfulness techniques to manage stress during the workday.</li>
              <li>The importance of setting boundaries.</li>
              <li>Strategies for improving work-life balance.</li>
            </ul>
            <p>
              Remember to maintain the soft, airy, and Zen-like tone of your brand throughout the article.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}