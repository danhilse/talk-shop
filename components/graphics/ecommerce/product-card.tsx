"use client";

import { motion } from "framer-motion";

interface ProductCardProps {
  name?: string;
  price?: number;
  compareAtPrice?: number;
  rating?: number;
  reviewCount?: number;
  badge?: string;
  badgeColor?: string;
  imageGradient?: string;
  className?: string;
  animated?: boolean;
  variant?: "default" | "compact" | "featured";
}

export function EcommerceProductCard({
  name = "Premium Wireless Earbuds",
  price = 49.99,
  compareAtPrice = 79.99,
  rating = 4.8,
  reviewCount = 234,
  badge = "Best Seller",
  badgeColor = "#95BF47",
  imageGradient = "from-shopify/20 via-lime/10 to-shopify/5",
  className = "",
  animated = true,
  variant = "default",
}: ProductCardProps) {
  const discount = compareAtPrice ? Math.round(((compareAtPrice - price) / compareAtPrice) * 100) : 0;
  const Wrapper = animated ? motion.div : "div";

  if (variant === "compact") {
    return (
      <Wrapper
        {...(animated && {
          initial: { opacity: 0, y: 10 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.4 },
          whileHover: { y: -2 },
        })}
        className={`rounded-xl border border-white/10 bg-slate overflow-hidden cursor-pointer select-none ${className}`}
      >
        {/* Image placeholder */}
        <div className={`h-24 bg-gradient-to-br ${imageGradient} relative`}>
          {badge && (
            <span
              className="absolute top-2 left-2 rounded px-1.5 py-0.5 text-[10px] font-bold text-white"
              style={{ backgroundColor: badgeColor }}
            >
              {badge}
            </span>
          )}
        </div>
        <div className="p-3">
          <h4 className="text-sm font-medium text-white truncate">{name}</h4>
          <div className="mt-1 flex items-center gap-2">
            <span className="font-bold text-shopify">${price}</span>
            {compareAtPrice && (
              <span className="text-xs text-gray-500 line-through">${compareAtPrice}</span>
            )}
          </div>
        </div>
      </Wrapper>
    );
  }

  if (variant === "featured") {
    return (
      <Wrapper
        {...(animated && {
          initial: { opacity: 0, scale: 0.95 },
          animate: { opacity: 1, scale: 1 },
          transition: { duration: 0.5 },
          whileHover: { scale: 1.02 },
        })}
        className={`rounded-2xl border border-shopify/20 bg-gradient-to-br from-slate to-carbon overflow-hidden select-none ${className}`}
      >
        <div className="p-6">
          <div className="flex gap-6">
            {/* Image */}
            <div className={`w-32 h-32 rounded-xl bg-gradient-to-br ${imageGradient} shrink-0 relative`}>
              {discount > 0 && (
                <span className="absolute -top-2 -right-2 flex h-10 w-10 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
                  -{discount}%
                </span>
              )}
            </div>

            {/* Details */}
            <div className="flex-1">
              {badge && (
                <span
                  className="inline-block rounded px-2 py-0.5 text-xs font-bold text-white mb-2"
                  style={{ backgroundColor: badgeColor }}
                >
                  {badge}
                </span>
              )}
              <h3 className="text-xl font-bold text-white">{name}</h3>

              {/* Rating */}
              <div className="mt-2 flex items-center gap-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className={`h-4 w-4 ${star <= Math.floor(rating) ? "text-yellow-400" : "text-gray-600"}`}
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-gray-400">({reviewCount})</span>
              </div>

              {/* Price */}
              <div className="mt-3 flex items-baseline gap-2">
                <span className="text-3xl font-bold text-shopify">${price}</span>
                {compareAtPrice && (
                  <span className="text-lg text-gray-500 line-through">${compareAtPrice}</span>
                )}
              </div>

              {/* CTA */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-4 w-full rounded-lg bg-shopify py-2.5 text-sm font-bold text-midnight"
              >
                Add to Cart
              </motion.button>
            </div>
          </div>
        </div>
      </Wrapper>
    );
  }

  // Default variant
  return (
    <Wrapper
      {...(animated && {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 },
        whileHover: { y: -4 },
      })}
      className={`w-48 rounded-xl border border-white/10 bg-slate overflow-hidden cursor-pointer select-none ${className}`}
    >
      {/* Image placeholder */}
      <div className={`h-40 bg-gradient-to-br ${imageGradient} relative`}>
        {badge && (
          <span
            className="absolute top-3 left-3 rounded-full px-2 py-0.5 text-xs font-bold text-white"
            style={{ backgroundColor: badgeColor }}
          >
            {badge}
          </span>
        )}
        {discount > 0 && (
          <span className="absolute top-3 right-3 rounded-full bg-red-500 px-2 py-0.5 text-xs font-bold text-white">
            -{discount}%
          </span>
        )}
      </div>

      <div className="p-4">
        <h4 className="font-medium text-white line-clamp-2 leading-tight">{name}</h4>

        {/* Rating */}
        <div className="mt-2 flex items-center gap-1">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                className={`h-3 w-3 ${star <= Math.floor(rating) ? "text-yellow-400" : "text-gray-600"}`}
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            ))}
          </div>
          <span className="text-xs text-gray-500">({reviewCount})</span>
        </div>

        {/* Price */}
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-lg font-bold text-shopify">${price}</span>
          {compareAtPrice && (
            <span className="text-sm text-gray-500 line-through">${compareAtPrice}</span>
          )}
        </div>
      </div>
    </Wrapper>
  );
}

// Product grid
export function EcommerceProductGrid({ className = "" }: { className?: string }) {
  const products = [
    { name: "Wireless Earbuds Pro", price: 49.99, compareAtPrice: 79.99, badge: "Best Seller", rating: 4.8, reviewCount: 234 },
    { name: "Smart Watch Series 5", price: 199.99, badge: "New", badgeColor: "#5865F2", rating: 4.5, reviewCount: 89 },
    { name: "Portable Charger 20K", price: 34.99, compareAtPrice: 44.99, rating: 4.7, reviewCount: 156 },
  ];

  return (
    <div className={`flex gap-4 select-none ${className}`}>
      {products.map((product, i) => (
        <motion.div
          key={product.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
        >
          <EcommerceProductCard
            {...product}
            imageGradient={
              i === 0 ? "from-shopify/20 via-lime/10 to-cyan-500/10" :
              i === 1 ? "from-purple-500/20 via-pink-500/10 to-red-500/10" :
              "from-orange-500/20 via-yellow-500/10 to-green-500/10"
            }
          />
        </motion.div>
      ))}
    </div>
  );
}
