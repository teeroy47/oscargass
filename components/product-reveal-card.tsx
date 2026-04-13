"use client"

import { motion, useReducedMotion } from "framer-motion"
import { buttonVariants } from "@/components/ui/button"
import { ShoppingCart, Heart } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

interface ProductRevealCardProps {
  name?: string
  price?: string
  image?: string
  description?: string
  badge?: string
  features?: string[]
  actionLabel?: string
  secondaryActionLabel?: string
  href?: string
  onAdd?: () => void
  onFavorite?: () => void
  enableAnimations?: boolean
  className?: string
}

export function ProductRevealCard({
  name = "Premium Wireless Headphones",
  price = "$199",
  image = "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=800&h=600&fit=crop", // Premium headphones
  description = "Experience studio-quality sound with advanced noise cancellation and 30-hour battery life. Perfect for music lovers and professionals.",
  badge,
  features = ["Fast delivery", "Safety checked", "Helderberg coverage", "Easy ordering"],
  actionLabel = "Add to Cart",
  secondaryActionLabel = "View Details",
  href = "/checkout",
  onAdd,
  onFavorite,
  enableAnimations = true,
  className,
}: ProductRevealCardProps) {
  const [isFavorite, setIsFavorite] = useState(false)
  const shouldReduceMotion = useReducedMotion()
  const shouldAnimate = enableAnimations && !shouldReduceMotion
  const resolvedImage =
    image.startsWith("/") && !image.startsWith("//")
      ? `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${image}`
      : image

  const handleFavorite = () => {
    setIsFavorite(!isFavorite)
    onFavorite?.()
  }

  const containerVariants = {
    rest: { 
      scale: 1,
      y: 0,
      filter: "blur(0px)",
    },
    hover: shouldAnimate ? { 
      scale: 1.03, 
      y: -8,
      filter: "blur(0px)",
      transition: { 
        type: "spring" as const, 
        stiffness: 300, 
        damping: 30,
        mass: 0.8,
      }
    } : {},
  }

  const imageVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.1 },
  }

  const overlayVariants = {
    rest: { 
      y: "100%", 
      opacity: 0,
      filter: "blur(4px)",
    },
    hover: { 
      y: "0%", 
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 28,
        mass: 0.6,
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const contentVariants = {
    rest: { 
      opacity: 0, 
      y: 20,
      scale: 0.95,
    },
    hover: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 25,
        mass: 0.5,
      },
    },
  }

  const buttonVariants_motion = {
    rest: { scale: 1, y: 0 },
    hover: shouldAnimate ? { 
      scale: 1.05, 
      y: -2,
      transition: { 
        type: "spring" as const, 
        stiffness: 400, 
        damping: 25 
      }
    } : {},
    tap: shouldAnimate ? { scale: 0.95 } : {},
  }

  const favoriteVariants = {
    rest: { scale: 1, rotate: 0 },
    favorite: { 
      scale: [1, 1.3, 1], 
      rotate: [0, 10, -10, 0],
      transition: { 
        duration: 0.5,
        ease: "easeInOut" as const
      }
    },
  }

  return (
    <motion.div
      data-slot="product-reveal-card"
      initial="rest"
      whileHover="hover"
      variants={containerVariants}
      className={cn(
        "relative w-full rounded-[2rem] border border-brand-line bg-white text-card-foreground overflow-hidden",
        "shadow-lg shadow-black/5 cursor-pointer group",
        className
      )}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden bg-[radial-gradient(circle_at_top,#f7fbff_0%,#eef4fb_55%,#e7eef8_100%)]">
        <motion.img
          src={resolvedImage}
          alt={name}
          className="h-64 w-full object-contain p-5"
          variants={imageVariants}
          transition={{ type: "spring" as const, stiffness: 300, damping: 30 }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.1),rgba(16,19,26,0.08))]" />
        
        {/* Favorite Button */}
        <motion.button
          onClick={handleFavorite}
          variants={favoriteVariants}
          animate={isFavorite ? "favorite" : "rest"}
          className={cn(
            "absolute top-4 right-4 p-2 rounded-full backdrop-blur-sm border border-white/20",
            isFavorite 
              ? "bg-red-500 text-white" 
              : "bg-white/20 text-white hover:bg-white/30"
          )}
        >
          <Heart className={cn("w-4 h-4", isFavorite && "fill-current")} />
        </motion.button>

        {badge ? (
          <div className="absolute left-4 top-4 rounded-full bg-brand-blue px-3 py-1 text-xs font-bold text-white">
            {badge}
          </div>
        ) : null}
      </div>

      {/* Content */}
      <div className="p-6 space-y-3">
        {/* Product Info */}
        <div className="space-y-1">
          <motion.h3 
            className="text-xl font-bold leading-tight tracking-tight"
            initial={{ opacity: 0.9 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {name}
          </motion.h3>
          
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-brand-blue">{price}</span>
          </div>
        </div>
        <button
          type="button"
          onClick={onAdd}
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-blue px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-blue-dark"
        >
          <ShoppingCart className="h-4 w-4" />
          {actionLabel}
        </button>
      </div>

      {/* Reveal Overlay */}
      <motion.div
        variants={overlayVariants}
        className="absolute inset-0 bg-background/96 backdrop-blur-xl flex flex-col justify-end"
      >
        <div className="p-6 space-y-4">
          {/* Product Description */}
          <motion.div variants={contentVariants}>
            <h4 className="font-semibold mb-2">Product Details</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {description}
            </p>
          </motion.div>

          {/* Features */}
          <motion.div variants={contentVariants}>
            <div className="grid grid-cols-2 gap-3 text-xs">
              {features.slice(0, 4).map((feature) => (
                <div key={feature} className="bg-muted/50 rounded-lg p-2 text-center">
                  <div className="font-semibold">{feature}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div variants={contentVariants} className="space-y-3">
            <motion.button
              onClick={onAdd}
              variants={buttonVariants_motion}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
              className={cn(
                buttonVariants({ variant: "default" }), 
                "w-full h-12 font-medium",
                "bg-gradient-to-r from-brand-blue to-brand-blue/90 text-white",
                "hover:from-brand-blue/90 hover:to-brand-blue-dark",
                "shadow-lg shadow-brand-blue/25"
              )}
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              {actionLabel}
            </motion.button>
            
            <motion.a
              href={href}
              variants={buttonVariants_motion}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
              className={cn(
                buttonVariants({ variant: "outline" }), 
                "w-full h-10 font-medium"
              )}
            >
              {secondaryActionLabel}
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}
