"use client";

import { motion } from "framer-motion";
import { books } from "@/data/books";
import BookCard from "./BookCard";

const FeaturedBooks = () => {
  const featured = books.filter((b) => b.featured).slice(0, 4);

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-2">Featured</h2>
          <p className="text-muted-foreground">Hand-picked for the curious mind</p>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {featured.map((book, i) => (
            <BookCard key={book.id} book={book} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBooks;
