"use client";

import React, { createContext, useContext, useState, useCallback } from "react";

const CartContext = createContext(undefined);

export const CartProvider = ({ children }) => {
    const [items, setItems] = useState([]);
    const [badgeKey, setBadgeKey] = useState(0);

    const addToCart = useCallback((book, quantity = 1) => {
        setItems((prev) => {
            const existing = prev.find((i) => i.book.id === book.id);
            if (existing) {
                return prev.map((i) => i.book.id === book.id ? { ...i, quantity: i.quantity + quantity } : i);
            }
            return [...prev, { book, quantity }];
        });
        setBadgeKey((k) => k + 1);
    }, []);

    const removeFromCart = useCallback((bookId) => {
        setItems((prev) => prev.filter((i) => i.book.id !== bookId));
    }, []);

    const updateQuantity = useCallback((bookId, quantity) => {
        if (quantity <= 0) {
            setItems((prev) => prev.filter((i) => i.book.id !== bookId));
        } else {
            setItems((prev) => prev.map((i) => i.book.id === bookId ? { ...i, quantity } : i));
        }
    }, []);

    const clearCart = useCallback(() => setItems([]), []);

    const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);
    const subtotal = items.reduce((sum, i) => sum + i.book.price * i.quantity, 0);

    return (
        <CartContext.Provider value={{ items, addToCart, removeFromCart, updateQuantity, clearCart, totalItems, subtotal, badgeKey }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const ctx = useContext(CartContext);
    if (!ctx) throw new Error("useCart must be used within CartProvider");
    return ctx;
};
