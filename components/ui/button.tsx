
import React from "react";

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
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg";
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", children, ...props }, ref) => {
    const baseClasses = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-white transform hover:scale-105 active:scale-95";
    
    const variants = {
      default: "bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg",
      outline: "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 hover:text-gray-900 shadow-sm hover:shadow-md",
      ghost: "text-gray-700 hover:bg-gray-100 hover:text-gray-900",
    };
    
    const sizes = {
      default: "h-10 py-2 px-4",
      sm: "h-9 px-3 rounded-md",
      lg: "h-11 px-8 rounded-md",
    };

    return (
      <button
        ref={ref}
        className={cn(baseClasses, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
