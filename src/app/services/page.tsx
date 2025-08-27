import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, HelpCircle, MessageSquare, ShieldCheck, UserCheck, Wind } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import ScrollIndicator from "@/components/ScrollIndicator";

export default function ServicesPage() {
  return (
    <div className="bg-background">
      <section id="start" className="py-20 md:py-32" data-aos="fade-up">
        <div className="container max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-headline text-primary mb-4">
              Services
            </h1>
            <p className="max-w-3xl mx-auto text-lg text-foreground/80">
              We offer a range of therapeutic services designed to support your journey toward mental and emotional wellbeing. Each service is tailored to the unique needs of the individual.
            </p>
          </div>

          <div className="mb-16">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                <ServiceCard title="Counselling" description="Dedicated, in-person sessions providing a safe space to explore personal challenges and foster growth." />
                <ServiceCard title="Psychotherapy" description="A deep, explorative process to understand and resolve complex emotional and psychological issues." />
                <ServiceCard title="Coaching" description="Goal-oriented support to help you identify strengths, overcome obstacles, and achieve your full potential." />
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <ServiceCard title="Qi-Gong Group" description="A mindful practice combining gentle movement, breathing, and meditation to cultivate calm and vitality." />
                <ServiceCard title="Mentoring" description="Guidance and support from an experienced practitioner to help you navigate personal or professional development." />
            </div>
          </div>
        </div>
        <ScrollIndicator targetId="get-started" />
      </section>
      
      <section id="get-started" className="py-20 md:py-24 bg-primary/5" data-aos="fade-up">
        <div className="container max-w-5xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-headline text-primary">Get Started</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <Card className="shadow-lg text-center flex flex-col">
                    <CardHeader>
                        <CardTitle className="font-headline text-2xl text-primary">Individual Session</CardTitle>
                        <CardDescription>(50 minutes)</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                        <p className="text-foreground/80">One-to-one therapy focused on your unique needs and personal growth journey.</p>
                    </CardContent>
                    <CardFooter>
                        <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                            <Link href="/contact">Book Now</Link>
                        </Button>
                    </CardFooter>
                </Card>
                <Card className="shadow-lg text-center flex flex-col">
                    <CardHeader>
                        <CardTitle className="font-headline text-2xl text-primary">Couples Session</CardTitle>
                        <CardDescription>(60 minutes)</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                        <p className="text-foreground/80">A collaborative space for partners to navigate challenges and strengthen their relationship.</p>
                    </CardContent>
                    <CardFooter>
                        <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                            <Link href="/contact">Book Now</Link>
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
      </section>

      <section 
        id="pricing" 
        className="py-20 md:py-32 bg-cover bg-center relative" 
        data-aos="fade-up"
        style={{ backgroundImage: "url('/Butterfly.jpg')" }}
      >
        <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" />
        <div className="container max-w-5xl mx-auto relative">
           <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-headline text-primary mb-4">
              Pricing & Accessibility
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-foreground/80">
              We are committed to making our services accessible. Our fees are based on a sliding scale, which takes into account each client's individual financial circumstances. This approach allows us to provide equitable access to quality care. For a specific fee arrangement, please get in touch for an initial consultation.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto bg-background/80 p-8 rounded-lg shadow-xl">
            <h2 className="text-2xl md:text-3xl font-headline text-primary mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg font-bold">
                  <div className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-accent" />
                    What is a "sliding scale" and how does your pricing work?
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-base text-foreground/80 pl-8">
                  A sliding scale is a flexible fee structure designed to make therapy more affordable. Instead of a single fixed rate, the cost for a session is adjusted based on your individual circumstances, such as income and ability to pay. We will discuss and agree upon a fair fee during our initial consultation to ensure that financial constraints do not become a barrier to receiving support.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg font-bold">
                  <div className="flex items-center gap-3">
                    <MessageSquare className="w-5 h-5 text-accent" />
                    What can I expect in my first session?
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-base text-foreground/80 pl-8">
                  The first session is an opportunity for us to get to know each other. It's a confidential, no-obligation conversation where you can share what brings you to therapy, ask any questions you have, and get a feel for how we might work together. We will discuss your goals, and you can decide if you feel comfortable proceeding.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg font-bold">
                   <div className="flex items-center gap-3">
                    <UserCheck className="w-5 h-5 text-accent" />
                    What is the difference between Psychotherapy and Coaching?
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-base text-foreground/80 pl-8">
                  While both services are aimed at personal growth, psychotherapy often involves a deep exploration of your past experiences, emotions, and unconscious patterns to heal emotional wounds and improve overall mental health. Coaching is more forward-looking and action-oriented, focusing on setting and achieving specific personal or professional goals, and developing strategies to overcome obstacles. We can discuss which approach is best suited to your needs.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-lg font-bold">
                   <div className="flex items-center gap-3">
                    <ShieldCheck className="w-5 h-5 text-accent" />
                    Is everything I say in therapy confidential?
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-base text-foreground/80 pl-8">
                  Absolutely. Confidentiality is the cornerstone of our practice. Everything you share in our sessions is held in the strictest confidence, in line with professional ethical guidelines. The only exceptions are rare and specific circumstances where there is a serious risk of harm to yourself or others, which we are legally and ethically required to address. We will discuss these limits thoroughly in our first session.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-lg font-bold">
                   <div className="flex items-center gap-3">
                    <Wind className="w-5 h-5 text-accent" />
                    What is Qi-Gong and how is it incorporated?
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-base text-foreground/80 pl-8">
                  Qi-Gong is a traditional Chinese practice of gentle, flowing movements, coordinated with deep breathing and meditation. It is designed to cultivate and balance the body's vital energy, or "Qi." In our group sessions, Qi-Gong is used as a holistic tool to reduce stress, improve physical health, and enhance mental clarity. It serves as a complementary practice to talking therapies, helping to integrate mind and body for overall wellbeing.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 text-center bg-primary/5" data-aos="fade-up">
        <div className="container">
          <h2 className="text-3xl font-headline text-primary mb-4">Have More Questions?</h2>
          <p className="max-w-2xl mx-auto text-lg text-foreground/80 mb-8">
            We are happy to answer any other questions you may have about our services, policies, or the therapeutic process.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

function ServiceCard({ title, description }: { title: string, description: string }) {
  return (
    <Card className="shadow-lg text-center h-full">
      <CardHeader>
        <CardTitle className="font-headline text-2xl text-primary">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-foreground/80">{description}</p>
      </CardContent>
    </Card>
  );
}