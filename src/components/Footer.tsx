import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-8 text-center">
        <blockquote className="text-xl italic text-primary-foreground/80 mb-4">
          "You cannot step into the same river twice." – Heraclitus
        </blockquote>
        <p className="text-sm">&copy; {new Date().getFullYear()} Citrinitas Therapies. All rights reserved.</p>
      </div>
    </footer>
  );
}
