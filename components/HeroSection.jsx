"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { books } from "@/data/books";

const HeroSection = () => {
  const featured = books.filter((b) => b.featured);
  const scrollRef = useRef(null);

  // Duplicate books for looping effect
  const loopedBooks = [...featured, ...featured];

  const scroll = (direction) => {
    if (!scrollRef.current) return;

    const container = scrollRef.current;
    const scrollAmount = container.clientWidth * 0.75; // Scroll 75% of viewport

    container.scrollBy({
      left: direction * scrollAmount,
      behavior: "smooth"
    });
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center gradient-hero overflow-hidden pt-16">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mb-16"
        >
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#E07856]">Curated Collection</span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-bold leading-[0.95] mb-6">
            <span className="text-white">Discover Stories</span><br />
            <span className="text-[#E07856]">Worth Living</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-md mb-8">
            A curated digital exhibition of the world's most compelling reads. Explore, discover, and lose yourself.
          </p>
          <Link
            href="/books"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-md gradient-accent text-primary-foreground font-medium text-sm tracking-wide uppercase transition-all duration-300 hover:shadow-glow hover:scale-105"
          >
            Browse Books
          </Link>
        </motion.div>

        {/* Horizontal carousel */}
        <div className="relative w-full">
          {/* Left Arrow */}
          <button
            onClick={() => scroll(-1)}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-background/80 backdrop-blur border border-border shadow-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary hover:scale-110 transition-all duration-300"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Scroll Container */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth px-16 scrollbar-hide"
            style={{ scrollSnapType: 'x proximity' }}
          >
            {loopedBooks.map((book, i) => (
              <motion.div
                key={`${book.id}-${i}`}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: (i % featured.length) * 0.1 }}
                className="flex-shrink-0"
                style={{ scrollSnapAlign: 'center' }}
              >
                <Link
                  href={`/books/${book.id}`}
                  className="group relative block w-[220px]"
                >
                  <div className="aspect-[2/3] rounded-lg overflow-hidden shadow-cinematic transition-all duration-500 group-hover:shadow-glow group-hover:scale-105">
                    <img
                      src={book.cover}
                      alt={book.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="mt-3 text-center">
                    <p className="font-display text-sm font-semibold line-clamp-1">{book.title}</p>
                    <p className="text-xs text-muted-foreground">{book.author}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll(1)}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-background/80 backdrop-blur border border-border shadow-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary hover:scale-110 transition-all duration-300"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
