"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Trash2, Minus, Plus, ShoppingBag, ArrowLeft } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useState } from "react";
import { toast } from "sonner";

const SHIPPING = 99;

export default function CartPage() {
    const { items, updateQuantity, removeFromCart, clearCart, subtotal } = useCart();
    const [confirmRemove, setConfirmRemove] = useState(null);

    const handleRemove = (id) => {
        if (confirmRemove === id) {
            removeFromCart(id);
            setConfirmRemove(null);
        } else {
            setConfirmRemove(id);
        }
    };

    const handleCheckout = () => {
        toast.success("Order placed successfully! Thank you for your purchase.");
        clearCart();
    };

    if (items.length === 0) {
        return (
            <main className="pt-24 pb-16 min-h-screen flex items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center"
                >
                    <ShoppingBag className="w-16 h-16 text-muted-foreground/30 mx-auto mb-6" />
                    <h1 className="font-display text-3xl font-bold mb-2">Your cart is empty</h1>
                    <p className="text-muted-foreground mb-8">Discover something extraordinary</p>
                    <Link
                        href="/books"
                        className="inline-flex items-center gap-2 px-8 py-3 rounded-md gradient-accent text-primary-foreground font-medium text-sm tracking-wide uppercase transition-all duration-300 hover:shadow-glow"
                    >
                        Browse Books
                    </Link>
                </motion.div>
            </main>
        );
    }

    const total = subtotal + SHIPPING;

    return (
        <main className="pt-24 pb-16 min-h-screen">
            <div className="container mx-auto px-6">
                <Link href="/books" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 border border-border rounded-md px-4 py-2 hover:bg-secondary">
                    <ArrowLeft className="w-4 h-4" /> Continue Shopping
                </Link>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="font-display text-4xl font-bold mb-10"
                >
                    Cart
                </motion.h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    {/* Items */}
                    <div className="lg:col-span-2 space-y-4">
                        {items.map((item, i) => (
                            <motion.div
                                key={item.book.id}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.05 }}
                                className="flex gap-4 p-4 rounded-lg bg-card border border-border"
                            >
                                <Link href={`/books/${item.book.id}`} className="flex-shrink-0">
                                    <img src={item.book.cover} alt={item.book.title} className="w-20 h-28 object-cover rounded-md" />
                                </Link>
                                <div className="flex-1 flex flex-col justify-between">
                                    <div>
                                        <Link href={`/books/${item.book.id}`} className="font-display font-semibold hover:text-primary transition-colors">
                                            {item.book.title}
                                        </Link>
                                        <p className="text-xs text-muted-foreground">{item.book.author}</p>
                                    </div>
                                    <div className="flex items-center justify-between mt-2">
                                        <div className="flex items-center border border-border rounded-md">
                                            <button onClick={() => updateQuantity(item.book.id, item.quantity - 1)} className="px-2 py-1 hover:bg-secondary transition-colors">
                                                <Minus className="w-3 h-3" />
                                            </button>
                                            <span className="px-3 text-sm">{item.quantity}</span>
                                            <button onClick={() => updateQuantity(item.book.id, item.quantity + 1)} className="px-2 py-1 hover:bg-secondary transition-colors">
                                                <Plus className="w-3 h-3" />
                                            </button>
                                        </div>
                                        <span className="font-bold text-primary">₹{item.book.price * item.quantity}</span>
                                    </div>
                                </div>
                                <button
                                    onClick={() => handleRemove(item.book.id)}
                                    className={`self-start p-2 rounded-md transition-all duration-300 ${confirmRemove === item.book.id ? "bg-destructive text-destructive-foreground" : "hover:bg-secondary text-muted-foreground hover:text-foreground"}`}
                                    title={confirmRemove === item.book.id ? "Click again to confirm" : "Remove"}
                                >
                                    <Trash2 className="w-4 h-4" />
                                </button>
                            </motion.div>
                        ))}
                    </div>

                    {/* Summary */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="p-6 rounded-lg bg-card border border-border h-fit sticky top-24"
                    >
                        <h2 className="font-display text-xl font-bold mb-6">Order Summary</h2>
                        <div className="space-y-3 text-sm">
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Subtotal</span>
                                <span>₹{subtotal}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Shipping</span>
                                <span>₹{SHIPPING}</span>
                            </div>
                            <div className="border-t border-border pt-3 flex justify-between font-bold text-base">
                                <span>Total</span>
                                <span className="text-primary">₹{total}</span>
                            </div>
                        </div>
                        <button
                            onClick={handleCheckout}
                            className="w-full mt-6 flex items-center justify-center gap-2 px-8 py-3 rounded-md gradient-accent text-primary-foreground font-medium text-sm tracking-wide uppercase transition-all duration-300 hover:shadow-glow hover:scale-[1.02]"
                        >
                            Checkout
                        </button>
                    </motion.div>
                </div>
            </div>
        </main>
    );
}
