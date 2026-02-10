"use client";

import Link from "next/link";
import { use, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Minus, Plus, ShoppingCart, Check, Loader2 } from "lucide-react";
import { books } from "@/data/books";
import { useCart } from "@/context/CartContext";
import StarRating from "@/components/StarRating";
import BookCard from "@/components/BookCard";

export default function BookDetailPage({ params }) {
    const { id } = use(params);
    const book = books.find((b) => b.id === Number(id));
    const { addToCart } = useCart();
    const [quantity, setQuantity] = useState(1);
    const [expanded, setExpanded] = useState(false);
    const [loading, setLoading] = useState(false);
    const [added, setAdded] = useState(false);

    if (!book) {
        return (
            <main className="pt-24 pb-16 min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="font-display text-3xl font-bold mb-4">Book not found</h1>
                    <Link href="/books" className="inline-flex items-center gap-2 text-sm text-primary hover:text-foreground transition-colors border border-border rounded-md px-4 py-2 hover:bg-secondary">Back to catalog</Link>
                </div>
            </main>
        );
    }

    const related = books.filter((b) => b.category === book.category && b.id !== book.id).slice(0, 4);

    const handleAddToCart = () => {
        setLoading(true);
        setTimeout(() => {
            addToCart(book, quantity);
            setLoading(false);
            setAdded(true);
            setTimeout(() => setAdded(false), 2000);
        }, 600);
    };

    return (
        <main className="pt-24 pb-16 min-h-screen">
            <div className="container mx-auto px-6">
                <Link href="/books" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 border border-border rounded-md px-4 py-2 hover:bg-secondary">
                    <ArrowLeft className="w-4 h-4" /> Back to catalog
                </Link>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
                    {/* Cover */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="aspect-[2/3] rounded-lg overflow-hidden shadow-cinematic max-w-md mx-auto">
                            <img src={book.cover} alt={book.title} className="w-full h-full object-cover" />
                        </div>
                    </motion.div>

                    {/* Details */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="flex flex-col justify-center"
                    >
                        <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary mb-2">{book.category}</span>
                        <h1 className="font-display text-3xl md:text-5xl font-bold mb-2">{book.title}</h1>
                        <p className="text-lg text-muted-foreground mb-4">{book.author} · {book.year}</p>
                        <StarRating rating={book.rating} />

                        <p className="font-display text-3xl font-bold text-primary mt-6">₹{book.price}</p>

                        <div className="mt-4 flex items-center gap-2">
                            <span className={`inline-flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full ${book.stock > 0 ? "bg-primary/10 text-primary" : "bg-destructive/10 text-destructive"}`}>
                                {book.stock > 0 ? `${book.stock} in stock` : "Out of stock"}
                            </span>
                        </div>

                        {/* Description */}
                        <div className="mt-6">
                            <p className={`text-sm text-muted-foreground leading-relaxed ${!expanded ? "line-clamp-3" : ""}`}>
                                {book.description}
                            </p>
                            <button
                                onClick={() => setExpanded(!expanded)}
                                className="text-xs text-primary mt-2 hover:underline"
                            >
                                {expanded ? "Read Less" : "Read More"}
                            </button>
                        </div>

                        {/* Quantity + Add to Cart */}
                        <div className="mt-8 flex flex-col sm:flex-row gap-4">
                            <div className="flex items-center border border-border rounded-md">
                                <button
                                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                                    className="px-3 py-2 hover:bg-secondary transition-colors"
                                >
                                    <Minus className="w-4 h-4" />
                                </button>
                                <span className="px-4 py-2 text-sm font-medium min-w-[3rem] text-center">{quantity}</span>
                                <button
                                    onClick={() => setQuantity((q) => q + 1)}
                                    className="px-3 py-2 hover:bg-secondary transition-colors"
                                >
                                    <Plus className="w-4 h-4" />
                                </button>
                            </div>
                            <button
                                onClick={handleAddToCart}
                                disabled={loading || book.stock === 0}
                                className="flex-1 flex items-center justify-center gap-2 px-8 py-3 rounded-md gradient-accent text-primary-foreground font-medium text-sm tracking-wide uppercase transition-all duration-300 hover:shadow-glow hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {loading ? (
                                    <Loader2 className="w-4 h-4 animate-spin" />
                                ) : added ? (
                                    <>
                                        <Check className="w-4 h-4" /> Added!
                                    </>
                                ) : (
                                    <>
                                        <ShoppingCart className="w-4 h-4" /> Add to Cart
                                    </>
                                )}
                            </button>
                        </div>
                    </motion.div>
                </div>

                {/* Related */}
                {related.length > 0 && (
                    <section>
                        <h2 className="font-display text-2xl font-bold mb-8">You Might Also Like</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {related.map((b, i) => (
                                <BookCard key={b.id} book={b} index={i} />
                            ))}
                        </div>
                    </section>
                )}
            </div>
        </main>
    );
}
