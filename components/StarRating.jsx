"use client";

import { Star } from "lucide-react";

const StarRating = ({ rating }) => {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-4 h-4 ${star <= Math.floor(rating)
              ? "fill-gold text-gold"
              : star - 0.5 <= rating
                ? "fill-gold/50 text-gold"
                : "text-muted-foreground/30"
            }`}
        />
      ))}
      <span className="ml-1 text-xs text-muted-foreground">{rating.toFixed(1)}</span>
    </div>
  );
};

export default StarRating;
