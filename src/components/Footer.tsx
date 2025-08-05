import Link from 'next/link';
import Image from 'next/image';
import { Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo */}
          <div className="flex items-start">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/Logo3.png" alt="Citrinitas Therapies Logo" width={140} height={140} />
            </Link>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-bold text-lg mb-4">Navigate</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><Link href="/about" className="hover:underline">About</Link></li>
              <li><Link href="/services" className="hover:underline">Approach</Link></li>
              <li><Link href="/fees" className="hover:underline">Fees</Link></li>
              <li><Link href="/resources" className="hover:underline">Resources</Link></li>
              <li><Link href="/blog" className="hover:underline">Blog</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><Link href="/contact" className="hover:underline">Contact</Link></li>
              <li><Link href="/#" className="hover:underline">Terms & Conditions</Link></li>
              <li><Link href="/#" className="hover:underline">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3 text-primary-foreground/80">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-1 flex-shrink-0" />
                <span>Central London, UK (Online sessions available)</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 mt-1 flex-shrink-0" />
                <Link href="/contact" className="hover:underline">Initial contact via form</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center">
            <blockquote className="text-xl italic text-primary-foreground/80 mb-4">
            "You cannot step into the same river twice." – Heraclitus
            </blockquote>
            <p className="text-sm text-primary-foreground/60">
            &copy; {currentYear} Citrinitas Therapies. All rights reserved.
            </p>
        </div>
      </div>
    </footer>
  );
}
