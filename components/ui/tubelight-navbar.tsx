
import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { LucideIcon } from "lucide-react"
import { cn } from "../../lib/utils"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
}

export function NavBar({ items, className }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0].name)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Scroll Spy Logic
  useEffect(() => {
    const observerOptions = {
      root: null,
      // rootMargin defines the "active" area. 
      // -20% from top means the section must be 20% down the viewport to be active.
      // -50% from bottom means it stops being active when it's mostly scrolled past.
      rootMargin: '-20% 0px -50% 0px', 
      threshold: 0.1
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const item = items.find(i => i.url === `#${entry.target.id}`);
          if (item) {
            setActiveTab(item.name);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    items.forEach((item) => {
      if (item.url.startsWith('#')) {
        const element = document.getElementById(item.url.substring(1));
        if (element) {
          observer.observe(element);
        }
      }
    });

    return () => observer.disconnect();
  }, [items]);

  return (
    <div
      className={cn(
        "fixed left-1/2 -translate-x-1/2 z-50 w-full max-w-[95vw] sm:max-w-max transition-all duration-300",
        "top-24 lg:top-8", // Mobile & Tablet: Spaced below header. Desktop (lg+): Aligned with header.
        className,
      )}
    >
      <div className="flex items-center justify-between sm:justify-center gap-1 sm:gap-3 bg-background-dark/80 border border-white/10 backdrop-blur-lg py-1 px-1 rounded-full shadow-lg overflow-x-auto no-scrollbar">
        {items.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.name

          return (
            <a
              key={item.name}
              href={item.url}
              onClick={(e) => {
                e.preventDefault();
                setActiveTab(item.name);
                const element = document.getElementById(item.url.substring(1));
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className={cn(
                "relative cursor-pointer text-sm font-semibold px-4 md:px-6 py-2 rounded-full transition-colors shrink-0",
                "text-white/60 hover:text-primary",
                isActive && "bg-white/5 text-primary",
              )}
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden">
                <Icon size={18} strokeWidth={2.5} />
              </span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-primary/5 rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full">
                    <div className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -top-2 -left-2" />
                    <div className="absolute w-8 h-6 bg-primary/20 rounded-full blur-md -top-1" />
                    <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm top-0 left-2" />
                  </div>
                </motion.div>
              )}
            </a>
          )
        })}
      </div>
    </div>
  )
}
