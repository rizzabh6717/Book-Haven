"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingCart, BookOpen, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const { totalItems, badgeKey } = useCart();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { to: "/", label: "Home" },
    { to: "/books", label: "Books" },
  ];

  const isActive = (path) => pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <BookOpen className="w-6 h-6 text-primary transition-transform duration-300 group-hover:scale-110" />
          <span className="font-display text-xl font-bold tracking-tight">BookHaven</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.to}
              href={link.to}
              className={`text-sm font-medium tracking-wide uppercase transition-colors duration-300 ${isActive(link.to) ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/cart" className="relative group">
            <ShoppingCart className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors duration-300" />
            {totalItems > 0 && (
              <span
                key={badgeKey}
                className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-bold animate-badge-pop"
              >
                {totalItems}
              </span>
            )}
          </Link>
        </nav>

        <button className="md:hidden" onClick={() => setMobileOpen(true)}>
          <Menu className="w-6 h-6" />
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-50 bg-background"
          >
            <div className="flex justify-end p-6">
              <button onClick={() => setMobileOpen(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="flex flex-col items-center gap-8 pt-12">
              {links.map((link) => (
                <Link
                  key={link.to}
                  href={link.to}
                  onClick={() => setMobileOpen(false)}
                  className="font-display text-3xl font-bold hover:text-primary transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/cart"
                onClick={() => setMobileOpen(false)}
                className="font-display text-3xl font-bold hover:text-primary transition-colors duration-300 flex items-center gap-3"
              >
                Cart
                {totalItems > 0 && (
                  <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
