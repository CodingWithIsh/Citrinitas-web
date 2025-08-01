import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PerfectionismPage() {
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
            <h1 className="text-4xl md:text-5xl font-headline text-primary mb-4">Breaking Free From the Perfection Trap</h1>
            <p className="text-muted-foreground text-lg">
              As the old saying goes, "Don't let the perfect be the enemy of the good." But what happens when 'the best' feels like the only option? This mindset can lead to burnout and dissatisfaction.
            </p>
          </header>

          <Image
            src="https://placehold.co/1200x600.png"
            data-ai-hint="perfect landscape"
            alt="A perfectly symmetrical image"
            width={1200}
            height={600}
            className="rounded-lg mb-8"
          />

          <div className="space-y-6 text-foreground/90 text-lg">
            <p>
              This is the perfect space to discuss the nuances of perfectionism.
            </p>
            <p>
              You could explore:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>The difference between healthy striving and unhealthy perfectionism.</li>
              <li>How perfectionism is often linked to anxiety and a fear of judgment.</li>
              <li>The benefits of embracing imperfection and vulnerability.</li>
              <li>Practical exercises to challenge perfectionistic thoughts.</li>
              <li>The role of self-worth and how to decouple it from achievement.</li>
            </ul>
          </div>
        </article>
      </div>
    </div>
  );
}