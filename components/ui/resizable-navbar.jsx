"use client";

import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils.js";
import { useState, useEffect } from "react";

export const Navbar = ({ children, className }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Check initial scroll position
    setIsScrolled(window.scrollY > 50);
    
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out",
        isScrolled ? "pt-4 px-4" : "pt-0 px-0",
        className
      )}
    >
      <div
        className={cn(
          "transition-all duration-300 ease-out border backdrop-blur-md mx-auto",
          isScrolled 
            ? "bg-slate-900/90 border-slate-700/50 rounded-full shadow-2xl shadow-black/25 max-w-7xl" 
            : "bg-slate-900/20 border-transparent rounded-none w-full",
        )}
      >
        <div className={cn(
          "px-4 sm:px-6 lg:px-8 transition-all duration-300 ease-out",
          isScrolled ? "py-2" : "py-4",
        )}>
          {children}
        </div>
      </div>
    </div>
  );
};

export const NavBody = ({ children, className }) => {
  return (
    <div className={cn("flex items-center justify-between min-h-[60px] w-full", className)}>
      {children}
    </div>
  );
};

export const NavbarLogo = ({ className }) => {
  const handleLinkClick = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.a
      href="#home"
      onClick={(e) => handleLinkClick(e, '#home')}
      className={cn("flex items-center space-x-3 flex-shrink-0", className)}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
    >
      <img
        src="/components/icons/1.png"
        alt="Codarambha Logo"
        className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
      />
      <span className="text-lg sm:text-xl lg:text-2xl font-bold text-white">
        Codarambha <span className="text-[#C12A37]">2025</span>
      </span>
    </motion.a>
  );
};

export const NavItems = ({ items, className }) => {
  const handleLinkClick = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={cn("flex items-center justify-center space-x-1 flex-1", className)}>
      {items.map((item, index) => (
        <motion.a
          key={item.href}
          href={item.href}
          onClick={(e) => handleLinkClick(e, item.href)}
          className="relative px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200 rounded-full hover:bg-slate-800/50"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.2 }}
        >
          {item.label}
        </motion.a>
      ))}
    </nav>
  );
};

export const NavbarButton = ({ 
  children, 
  variant = "primary", 
  className, 
  onClick,
  href,
  size = "default",
  ...props 
}) => {
  const handleClick = (e) => {
    if (href) {
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }
    if (onClick) onClick(e);
  };

  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    default: "px-4 py-2 text-sm",
    lg: "px-6 py-2.5 text-base"
  };

  const baseClasses = cn(
    "rounded-full font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent whitespace-nowrap",
    sizeClasses[size]
  );
  
  const variants = {
    primary: "bg-[#C12A37] text-white hover:bg-red-700 focus:ring-[#C12A37] shadow-lg shadow-red-900/25 hover:shadow-red-900/40",
    secondary: "bg-slate-800/50 text-slate-300 border border-slate-600/50 hover:bg-slate-700/50 hover:text-white hover:border-slate-500 focus:ring-slate-500",
    ghost: "bg-transparent text-slate-300 hover:bg-slate-800/30 hover:text-white"
  };

  return (
    <motion.button
      className={cn(baseClasses, variants[variant], className)}
      onClick={handleClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export const MobileNav = ({ children, className }) => {
  return (
    <div className={cn("lg:hidden", className)}>
      {children}
    </div>
  );
};

export const MobileNavHeader = ({ children, className }) => {
  return (
    <div className={cn("flex items-center justify-between min-h-[60px] w-full", className)}>
      {children}
    </div>
  );
};

export const MobileNavToggle = ({ isOpen, onClick, className }) => {
  return (
    <motion.button
      className={cn("p-2 text-white focus:outline-none relative z-50", className)}
      onClick={onClick}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      <div className="w-6 h-6 relative flex flex-col justify-center items-center">
        <motion.span
          className="absolute w-6 h-0.5 bg-current"
          animate={isOpen ? { 
            rotate: 45, 
            y: 0,
            transition: { duration: 0.3, ease: "easeInOut" }
          } : { 
            rotate: 0, 
            y: -6,
            transition: { duration: 0.3, ease: "easeInOut" }
          }}
        />
        <motion.span
          className="absolute w-6 h-0.5 bg-current"
          animate={isOpen ? { 
            opacity: 0,
            transition: { duration: 0.2 }
          } : { 
            opacity: 1,
            transition: { duration: 0.2, delay: 0.1 }
          }}
        />
        <motion.span
          className="absolute w-6 h-0.5 bg-current"
          animate={isOpen ? { 
            rotate: -45, 
            y: 0,
            transition: { duration: 0.3, ease: "easeInOut" }
          } : { 
            rotate: 0, 
            y: 6,
            transition: { duration: 0.3, ease: "easeInOut" }
          }}
        />
      </div>
    </motion.button>
  );
};

export const MobileNavMenu = ({ isOpen, onClose, children, className }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          />
          
          {/* Menu */}
          <motion.div
            className={cn(
              "fixed top-20 left-4 right-4 bg-slate-900/95 backdrop-blur-xl rounded-3xl border border-slate-700/50 shadow-2xl z-50 overflow-hidden",
              className
            )}
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="p-6">
              <div className="flex flex-col space-y-1 mb-6">
                {children}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
