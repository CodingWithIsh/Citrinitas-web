import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-6 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Joe, Psychotherapist. All rights reserved.</p>
      </div>
    </footer>
  );
}
