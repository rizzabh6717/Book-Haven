"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BookOpen, Search, FlaskConical, Heart, Landmark, Cpu } from "lucide-react";
import { categories } from "@/data/books";

const icons = [BookOpen, Search, FlaskConical, Heart, Landmark, Cpu];

const CategoriesGrid = () => {
  return (
    <section className="py-24 bg-surface">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-2 text-white">Explore Categories</h2>
          <p className="text-white/80 text-base">Find your next obsession</p>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {categories.map((cat, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={cat}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <Link
                  href={`/books?category=${cat}`}
                  className="group flex items-center gap-4 p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow"
                >
                  <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="font-display text-lg font-semibold group-hover:text-primary transition-colors duration-300">
                    {cat}
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoriesGrid;
