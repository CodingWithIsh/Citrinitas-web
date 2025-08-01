import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function AnxietyDepressionPage() {
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
            <h1 className="text-4xl md:text-5xl font-headline text-primary mb-4">Finding Light in the Shadows of Anxiety & Depression</h1>
            <p className="text-muted-foreground text-lg">
              These are the most common mental health issues of our times, and talking therapies are clinically proven to be effective. We explore the symptoms and pathways to support.
            </p>
          </header>

          <Image
            src="https://placehold.co/1200x600.png"
            data-ai-hint="light shadow"
            alt="Light breaking through shadows"
            width={1200}
            height={600}
            className="rounded-lg mb-8"
          />

          <div className="space-y-6 text-foreground/90 text-lg">
            <p>
              This article can be a source of hope and information for those affected by anxiety and depression.
            </p>
            <p>
              You can discuss:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>The symptoms and experiences of both anxiety and depression.</li>
              <li>How mindfulness and depth psychology can help.</li>
              <li>The importance of professional help and destigmatizing mental illness.</li>
              <li>Practical self-care strategies for managing daily life.</li>
              <li>Resources for further support (e.g., hotlines, organizations).</li>
            </ul>
          </div>
        </article>
      </div>
    </div>
  );
}