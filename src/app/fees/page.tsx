import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CreditCard, ShieldQuestion, CalendarOff } from "lucide-react";

export default function FeesPage() {
  return (
    <div className="bg-background">
      <section className="py-20 md:py-32" data-aos="fade-up">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-headline text-primary mb-4">
              Fees & Policies
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-foreground/80">
              Investing in your mental health is an investment in your future. Here is a clear overview of my session fees and related policies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="shadow-lg text-center">
              <CardHeader>
                <CardTitle className="font-headline text-2xl text-primary">Individual Therapy</CardTitle>
                <CardDescription>50-minute session</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-5xl font-bold text-primary">£80</p>
              </CardContent>
            </Card>
            <Card className="shadow-lg text-center">
              <CardHeader>
                <CardTitle className="font-headline text-2xl text-primary">Couples Therapy</CardTitle>
                <CardDescription>60-minute session</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-5xl font-bold text-primary">£120</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-headline text-primary mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg font-bold">
                  <div className="flex items-center gap-3">
                    <CreditCard className="w-5 h-5 text-accent" />
                    What are the payment methods?
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-base text-foreground/80 pl-8">
                  Payment is due at the time of the session. I accept bank transfers and all major credit cards. You will receive an invoice after each session with payment details.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg font-bold">
                  <div className="flex items-center gap-3">
                    <CalendarOff className="w-5 h-5 text-accent" />
                    What is your cancellation policy?
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-base text-foreground/80 pl-8">
                  I require at least 48 hours' notice for any cancellations or rescheduling. Sessions cancelled with less than 48 hours' notice, or missed appointments, will be charged at the full session rate. This policy allows me to offer the appointment slot to others in need.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg font-bold">
                  <div className="flex items-center gap-3">
                    <ShieldQuestion className="w-5 h-5 text-accent" />
                    Do you work with insurance providers?
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-base text-foreground/80 pl-8">
                  I am not currently in-network with any insurance providers. However, some insurance plans offer out-of-network benefits for mental health services. I can provide you with a detailed receipt (a 'superbill') that you can submit to your insurance company for potential reimbursement. Please check with your provider directly about your out-of-network coverage.
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
            I'm happy to answer any other questions you may have about fees, policies, or the therapeutic process.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="/contact">Contact Me</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
