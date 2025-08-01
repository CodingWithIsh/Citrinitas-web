import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ProcrastinationPage() {
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
            <h1 className="text-4xl md:text-5xl font-headline text-primary mb-4">The Gentle Art of Getting Things Done</h1>
            <p className="text-muted-foreground text-lg">
              Putting things off is fairly harmless most of the time. But when it becomes a form of paralysis, it can prevent us from achieving our goals and lead to feelings of guilt and inadequacy.
            </p>
          </header>

          <Image
            src="https://placehold.co/1200x600.png"
            data-ai-hint="procrastination desk"
            alt="A messy desk representing procrastination"
            width={1200}
            height={600}
            className="rounded-lg mb-8"
          />

          <div className="space-y-6 text-foreground/90 text-lg">
            <p>
              Here you can delve deeper into the psychology of procrastination. Explore why we do it and how we can develop healthier habits.
            </p>
            <p>
              Potential topics to cover include:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Understanding the fear of failure (or success).</li>
              <li>Breaking down large tasks into smaller, manageable steps.</li>
              <li>The 'two-minute rule' to get started.</li>
              <li>Practicing self-compassion when you slip up.</li>
              <li>Creating a supportive environment that minimizes distractions.</li>
            </ul>
          </div>
        </article>
      </div>
    </div>
  );
}