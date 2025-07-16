
import React from "react";

/**
 * Reusable Button Component
 * 
 * All buttons are fully rounded (rounded-full) for a modern, pill-shaped appearance.
 * 
 * Usage Examples:
 * 
 * // Interior style button (brown theme)
 * <Button variant="interior">Get In Touch</Button>
 * 
 * // Default blue button (fully rounded)
 * <Button variant="default">Submit</Button>
 * 
 * // Outline button (fully rounded)
 * <Button variant="outline">Cancel</Button>
 * 
 * // Ghost button (fully rounded)
 * <Button variant="ghost">Learn More</Button>
 * 
 * // With custom className
 * <Button variant="interior" className="w-full">Full Width Button</Button>
 * 
 * // Different sizes
 * <Button variant="interior" size="sm">Small Button</Button>
 * <Button variant="interior" size="lg">Large Button</Button>
 */

// Enhanced utility function to combine classes (replaces cn from utils)
// This mimics the behavior of clsx + tailwind-merge
type ClassValue = string | number | boolean | undefined | null | ClassValue[] | { [key: string]: boolean | undefined | null };

export const cn = (...inputs: ClassValue[]): string => {
  const classes: string[] = [];

  inputs.forEach(input => {
    if (!input) return;

    if (typeof input === 'string') {
      classes.push(input);
    } else if (Array.isArray(input)) {
      classes.push(...input.filter(Boolean) as string[]);
    } else if (typeof input === 'object') {
      Object.entries(input).forEach(([key, value]) => {
        if (value) classes.push(key);
      });
    }
  });

  // Basic deduplication - later classes override earlier ones
  const classMap = new Map<string, string>();
  classes.join(' ').split(' ').forEach(cls => {
    if (cls.trim()) {
      const base = cls.split('-')[0] + '-' + cls.split('-')[1]; // Simple conflict resolution
      classMap.set(base, cls);
    }
  });

  return Array.from(classMap.values()).join(' ');
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "interior";
  size?: "default" | "sm" | "lg";
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", children, ...props }, ref) => {
    const baseClasses = "inline-flex items-center justify-center rounded-full text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-white transform hover:scale-105 active:scale-95";

    const variants = {
      default: "bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg",
      outline: "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 hover:text-gray-900 shadow-sm hover:shadow-md",
      ghost: "text-gray-700 hover:bg-gray-100 hover:text-gray-900",
      interior: "border border-[#8f5e3d] bg-transparent hover:bg-[#8f5e3d] hover:text-white transition-all duration-200 group font-manrope font-normal text-[#8f5e3d] group-hover:text-white",
    };

    const sizes = {
      default: "h-10 px-6 py-2",
      sm: "h-9 px-4 py-2",
      lg: "h-11 px-8 py-3",
    };

    // Special sizing for interior variant to match AllAbout button
    const getSizeClasses = () => {
      if (variant === "interior") {
        return "h-9 md:h-10 px-4 md:px-6 py-2 text-sm md:text-base";
      }
      return sizes[size];
    };

    return (
      <button
        ref={ref}
        className={cn(baseClasses, variants[variant], getSizeClasses(), className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
