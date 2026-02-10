"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { books } from "@/data/books";
import StarRating from "./StarRating";

const NewArrivals = () => {
  const arrivals = books.filter((b) => b.newArrival);
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    scrollRef.current?.scrollBy({ left: dir * 280, behavior: "smooth" });
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-12"
        >
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-2">New Arrivals</h2>
            <p className="text-muted-foreground">Fresh off the press</p>
          </div>
          <div className="hidden md:flex gap-2">
            <button onClick={() => scroll(-1)} className="w-10 h-10 rounded-full border border-border hover:border-primary hover:text-primary flex items-center justify-center transition-all duration-300">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={() => scroll(1)} className="w-10 h-10 rounded-full border border-border hover:border-primary hover:text-primary flex items-center justify-center transition-all duration-300">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
        <div ref={scrollRef} className="flex gap-6 overflow-x-auto scrollbar-hide pb-4">
          {arrivals.map((book, i) => (
            <motion.div
              key={book.id}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="flex-shrink-0 w-[200px]"
            >
              <Link href={`/books/${book.id}`} className="group block">
                <div className="aspect-[2/3] rounded-lg overflow-hidden shadow-card hover-lift">
                  <img src={book.cover} alt={book.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                </div>
                <div className="mt-3 space-y-1">
                  <h3 className="font-display text-sm font-semibold line-clamp-1 group-hover:text-primary transition-colors">{book.title}</h3>
                  <p className="text-xs text-muted-foreground">{book.author}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-primary">₹{book.price}</span>
                    <StarRating rating={book.rating} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
