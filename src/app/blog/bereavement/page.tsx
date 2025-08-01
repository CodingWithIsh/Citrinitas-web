import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function BereavementPage() {
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
            <h1 className="text-4xl md:text-5xl font-headline text-primary mb-4">The Sacred Path of Grief</h1>
            <p className="text-muted-foreground text-lg">
              Losing someone close is overwhelming, and the effects do not always diminish with time. Grief is a complex process that deserves space and understanding.
            </p>
          </header>

          <Image
            src="https://placehold.co/1200x600.png"
            data-ai-hint="solitary path"
            alt="A path winding through a quiet forest"
            width={1200}
            height={600}
            className="rounded-lg mb-8"
          />

          <div className="space-y-6 text-foreground/90 text-lg">
            <p>
              In this article, you can offer a compassionate perspective on bereavement and grief.
            </p>
            <p>
              Topics to explore could include:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>The stages of grief are not always linear.</li>
              <li>Honoring memories and finding ways to maintain a connection.</li>
              <li>The role of rituals in the grieving process.</li>
              <li>How to support someone who is grieving.</li>
              <li>The concept of post-traumatic growth and finding new meaning.</li>
            </ul>
          </div>
        </article>
      </div>
    </div>
  );
}