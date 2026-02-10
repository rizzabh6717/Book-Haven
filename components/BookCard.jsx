"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import StarRating from "./StarRating";

const BookCard = ({ book, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <Link href={`/books/${book.id}`} className="group block">
        <div className="relative overflow-hidden rounded-lg bg-card shadow-card">
          <div className="aspect-[2/3] overflow-hidden hover-lift">
            <img
              src={book.cover}
              alt={book.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div className="p-4 space-y-1">
            <h3 className="font-display text-sm font-semibold leading-tight line-clamp-1 text-foreground">
              {book.title}
            </h3>
            <p className="text-xs text-muted-foreground">{book.author}</p>
            <div className="flex items-center justify-between pt-1">
              <span className="text-sm font-bold text-primary">₹{book.price}</span>
              <StarRating rating={book.rating} />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default BookCard;
