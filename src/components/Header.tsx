'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Logo3 from '@/assets/images/Logo3.png';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/approach', label: 'Approach' },
  { href: '/services', label: 'Services' },
  { href: '/community', label: 'Community' },
  { href: '/resources', label: 'Resources' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full bg-background/70 backdrop-blur-sm">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
           <Image src={Logo3} alt="Citrinitas Therapies Logo" width={80} height={80} />
        </Link>
        <nav className="hidden md:flex items-center justify-center flex-1 space-x-8 text-base font-normal">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-foreground/80 transition-colors hover:text-primary",
                (pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href))) && "text-primary font-bold"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="hover:bg-accent/10 focus-visible:ring-0">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background p-0">
              <div className="flex flex-col h-full">
                <div className="flex justify-start p-4 border-b">
                   <SheetClose asChild>
                    <Link href="/" className="flex items-center gap-2">
                       <Image src={Logo3} alt="Citrinitas Therapies Logo" width={80} height={80} />
                    </Link>
                   </SheetClose>
                </div>
                <nav className="flex flex-col items-start gap-1 p-4 text-base font-normal">
                  {navLinks.map((link) => (
                     <SheetClose asChild key={link.href}>
                        <Link
                          href={link.href}
                          className={cn(
                            "text-foreground/80 transition-colors hover:text-primary w-full py-2 rounded-md",
                            (pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href))) && "bg-secondary text-primary font-bold"
                          )}
                        >
                          {link.label}
                        </Link>
                    </SheetClose>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
