"use client";

import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import { books, categories } from "@/data/books";
import BookCard from "@/components/BookCard";

const BOOKS_PER_PAGE = 12;

export default function BooksPageClient() {
    const searchParams = useSearchParams();
    const [search, setSearch] = useState("");
    const [selectedCategory, setSelectedCategory] = useState(searchParams.get("category") || "All");
    const [page, setPage] = useState(1);

    const filtered = useMemo(() => {
        let result = books;
        if (selectedCategory !== "All") {
            result = result.filter((b) => b.category === selectedCategory);
        }
        if (search.trim()) {
            const q = search.toLowerCase();
            result = result.filter(
                (b) => b.title.toLowerCase().includes(q) || b.author.toLowerCase().includes(q)
            );
        }
        return result;
    }, [search, selectedCategory]);

    const paginated = useMemo(() => {
        const start = (page - 1) * BOOKS_PER_PAGE;
        return filtered.slice(start, start + BOOKS_PER_PAGE);
    }, [filtered, page]);

    const totalPages = Math.ceil(filtered.length / BOOKS_PER_PAGE);

    return (
        <main className="min-h-screen pt-24 pb-16 bg-background">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Book Catalog</h1>
                    <p className="text-muted-foreground text-lg">Explore our collection of {books.length} books</p>
                </motion.div>

                {/* Filters */}
                <div className="flex flex-col md:flex-row gap-4 mb-8">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <input
                            type="text"
                            placeholder="Search by title or author..."
                            value={search}
                            onChange={(e) => {
                                setSearch(e.target.value);
                                setPage(1);
                            }}
                            className="w-full pl-10 pr-4 py-3 rounded-md border border-border bg-card focus:border-primary focus:outline-none transition-colors"
                        />
                    </div>
                    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                        {["All", ...categories].map((cat) => (
                            <button
                                key={cat}
                                onClick={() => {
                                    setSelectedCategory(cat);
                                    setPage(1);
                                }}
                                className={`px-4 py-2 rounded-md text-sm font-medium whitespace-nowrap transition-all duration-300 ${selectedCategory === cat
                                        ? "bg-primary text-primary-foreground shadow-md"
                                        : "bg-card border border-border hover:border-primary"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Grid */}
                {paginated.length === 0 ? (
                    <div className="text-center py-20 text-muted-foreground">
                        <p className="font-display text-2xl mb-2">No books found</p>
                        <p className="text-sm">Try adjusting your search or filter</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {paginated.map((book, i) => (
                            <BookCard key={book.id} book={book} index={i} />
                        ))}
                    </div>
                )}

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="flex items-center justify-center gap-4 mt-12">
                        <button
                            onClick={() => setPage((p) => Math.max(1, p - 1))}
                            disabled={page === 1}
                            className="flex items-center gap-1 px-4 py-2 rounded-md border border-border text-sm hover:border-primary hover:text-primary transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
                        >
                            <ChevronLeft className="w-4 h-4" /> Previous
                        </button>
                        <span className="text-sm text-muted-foreground">
                            Page {page} of {totalPages}
                        </span>
                        <button
                            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                            disabled={page === totalPages}
                            className="flex items-center gap-1 px-4 py-2 rounded-md border border-border text-sm hover:border-primary hover:text-primary transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
                        >
                            Next <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>
                )}
            </div>
        </main>
    );
}
