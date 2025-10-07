"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import clubLogo from "@/shared/assets/logo.png";

const menuItems = [
  { href: "/", label: "Acasă" },
  { href: "/despre-noi", label: "Despre Noi" },
  { href: "/excursii", label: "Excursii" },
  { href: "/locatii", label: "Locații" },
  { href: "/inscriere", label: "Înscrie-te" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  function isActive(path: string) {
    return pathname === path;
  }

  return (
    <nav className="bg-background/95 border-muted fixed top-0 right-0 left-0 z-[9999] border-b backdrop-blur-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group flex items-center space-x-3">
            <Image
              src={clubLogo.src}
              alt="Club Moto"
              width={45}
              height={50}
              className="h-full w-full max-w-[45px] object-contain"
              priority
            />
            <div className="hidden sm:block">
              <h1 className="text-foreground text-2xl font-bold">BDG MC</h1>
              <p className="text-muted-foreground text-xs">
                Despre pasiunea pentru moto
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden items-center space-x-8 md:flex">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-4 py-2 font-medium transition-colors duration-300 ${
                  isActive(item.href)
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                }`}
              >
                {item.label}
                {isActive(item.href) && (
                  <motion.div
                    layoutId="activeTab"
                    className="bg-primary absolute right-0 bottom-0 left-0 h-0.5"
                    initial={false}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-foreground hover:text-primary p-2 transition-colors md:hidden"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="border-muted mt-4 border-t pt-4 md:hidden">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 font-medium transition-colors ${
                  isActive(item.href)
                    ? "text-primary bg-muted"
                    : "text-foreground hover:text-primary hover:bg-muted"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
