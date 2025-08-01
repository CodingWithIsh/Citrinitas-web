'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Menu, Sun } from 'lucide-react';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Approach' },
  { href: '/fees', label: 'Fees' },
  { href: '/resources', label: 'Resources' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-accent text-accent-foreground">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Sun className="h-6 w-6 text-primary" />
          <span className="font-bold font-headline text-lg text-accent-foreground">Citrinitas Therapies</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-accent-foreground/80 transition-colors hover:text-accent-foreground",
                (pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href))) && "text-accent-foreground font-bold"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="hover:bg-accent/90 focus-visible:ring-0">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background p-0">
              <div className="flex flex-col h-full">
                <div className="flex justify-start p-4 border-b">
                   <SheetClose asChild>
                    <Link href="/" className="flex items-center gap-2">
                       <Sun className="h-6 w-6 text-primary" />
                       <span className="font-bold font-headline text-lg text-primary">Citrinitas Therapies</span>
                    </Link>
                   </SheetClose>
                </div>
                <nav className="flex flex-col items-start gap-1 p-4 text-lg font-medium">
                  {navLinks.map((link) => (
                     <SheetClose asChild key={link.href}>
                        <Link
                          href={link.href}
                          className={cn(
                            "text-foreground/80 transition-colors hover:text-primary w-full py-2 px-2 rounded-md",
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
