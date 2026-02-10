import { BookOpen } from "lucide-react";
import Link from "next/link";

const Footer = () => (
  <footer className="border-t border-border bg-background py-12">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-primary" />
          <span className="font-display text-lg font-bold">BookHaven</span>
        </Link>
        <p className="text-xs text-muted-foreground">© 2026 BookHaven. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
