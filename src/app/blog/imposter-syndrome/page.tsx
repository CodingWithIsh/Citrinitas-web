import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ImposterSyndromePage() {
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
            <h1 className="text-4xl md:text-5xl font-headline text-primary mb-4">Embracing Your True Self: Overcoming Imposter Syndrome</h1>
            <p className="text-muted-foreground text-lg">
              A whole network of negative beliefs about your ability can make you feel like a fake. The answer is to treat those beliefs as the real imposters.
            </p>
          </header>

          <Image
            src="https://placehold.co/1200x600.png"
            data-ai-hint="person mask"
            alt="A person holding a mask"
            width={1200}
            height={600}
            className="rounded-lg mb-8"
          />

          <div className="space-y-6 text-foreground/90 text-lg">
            <p>
              This blog post can be a sanctuary for those struggling with imposter syndrome.
            </p>
            <p>
              Consider writing about:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>What imposter syndrome is and why it's so common.</li>
              <li>How to identify and challenge the inner critic.</li>
              <li>The power of sharing your feelings with trusted others.</li>
              <li>Keeping a 'brag file' to acknowledge your accomplishments.</li>
              <li>The concept of 'faking it until you become it'.</li>
            </ul>
          </div>
        </article>
      </div>
    </div>
  );
}