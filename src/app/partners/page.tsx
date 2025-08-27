import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import FireImage from '@/assets/images/Fire.jpg';

const partners = [
  {
    name: "Sarah Wale",
    specialty: "Shiatsu, QI Gong",
    website: "https://www.clophillcentre.co.uk/practitioners/sarah-wale/",
  },
  {
    name: "Alexander Carberry",
    specialty: "Medical Herbalism",
    website: "http://www.carberrybotanicals.com",
  },
  {
    name: "Anahita",
    specialty: "Sound Therapy",
    website: "http://www.anahitasacredhealing.com",
  },
  {
    name: "Antony Constantinou",
    specialty: "Counselling & Psychotherapy",
    website: "http://www.antonyconstantinou.co.uk",
  },
];

export default function PartnersPage() {
  return (
    <div className="bg-background">
       <section 
        className="relative py-20 md:py-32 bg-cover bg-center" 
        data-aos="fade-up"
        style={{ backgroundImage: `url(${FireImage.src})` }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="container relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-headline text-white mb-4">
              Our Network of Practitioners
            </h1>
            <p className="max-w-3xl mx-auto text-lg text-white/90">
              We are proud to collaborate with a network of trusted practitioners who share our commitment to holistic health and wellbeing. Each professional brings a unique set of skills and expertise to support your journey.
            </p>
          </div>
        </div>
      </section>

      <section id="partners-list" className="py-20 md:py-24" data-aos="fade-up">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {partners.map((partner) => (
              <Card key={partner.name} className="flex flex-col text-center shadow-md hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="font-headline text-2xl text-primary">{partner.name}</CardTitle>
                  <CardDescription>{partner.specialty}</CardDescription>
                </CardHeader>
                <CardFooter className="mt-auto">
                  <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                    <a href={partner.website} target="_blank" rel="noopener noreferrer">
                      Visit Website <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
