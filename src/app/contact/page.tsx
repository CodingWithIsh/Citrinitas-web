import ContactForm from "@/components/ContactForm";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="bg-background">
            <section className="py-20 md:py-32" data-aos="fade-up">
                <div className="container">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-headline text-primary mb-4">
                            Contact
                        </h1>
                        <p className="max-w-2xl mx-auto text-lg text-foreground/80">
                           Please use the form below to reach out, and we will respond as soon as possible.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-16 items-start">
                        <div>
                            <ContactForm />
                        </div>
                        <div className="space-y-8 mt-4 md:mt-12">
                            <h2 className="text-2xl font-headline text-primary border-b pb-4">
                                Contact Information
                            </h2>
                            <div className="flex items-center gap-4">
                                <div className="bg-accent/10 p-3 rounded-full">
                                    <MapPin className="h-6 w-6 text-accent" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-foreground">Location</h3>
                                    <p className="text-muted-foreground">Central London, UK</p>
                                    <p className="text-sm text-muted-foreground">(Online sessions are available)</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                 <div className="bg-accent/10 p-3 rounded-full">
                                    <Phone className="h-6 w-6 text-accent" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-foreground">Phone</h3>
                                    <p className="text-muted-foreground">+44 7384 407792</p>
                                </div>
                            </div>
                             <div className="flex items-center gap-4">
                                 <div className="bg-accent/10 p-3 rounded-full">
                                    <Mail className="h-6 w-6 text-accent" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-foreground">Email</h3>
                                    <p className="text-muted-foreground">BarnabasKinge2@gmail.com</p>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-headline text-primary mt-8 mb-2">Practice Hours</h3>
                                <p className="text-muted-foreground">Monday - Friday: 11:00 am - 9:00 pm</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
