"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MessageSquare, Menu, X } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Inicio", path: "/" },
    { label: "Servicios", path: "/servicios" },
    { label: "Nosotros", path: "/nosotros" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Logo Section */}
        <Link href="/" className="flex items-center space-x-3 group shrink-0">
          <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-[#0B3A36] text-white font-bold text-xl tracking-tight transition-transform group-hover:scale-105">
            A
          </div>
          <span className="text-xl font-semibold text-gray-800 tracking-wide font-sans">
            Ing. Civil
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.path}
                href={item.path}
                className="relative py-2 text-sm font-medium text-gray-600 transition-colors hover:text-[#0B3A36]"
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 h-0.5 w-full bg-[#0B3A36] transition-all" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right side Actions (CTA & Mobile Hamburger) */}
        <div className="flex items-center space-x-3">
          {/* CTA Button (Always visible on desktop, hidden on tiny mobile devices) */}
          <Link
            href="/#consulta"
            className="flex items-center space-x-2 rounded-sm bg-[#0B3A36] px-4 py-2 sm:px-5 sm:py-2.5 text-[10px] sm:text-xs font-bold tracking-wider text-white uppercase transition-colors hover:bg-[#082a27]"
          >
            <MessageSquare className="h-4 w-4 text-gray-200" />
            <span className="max-[400px]:hidden">Consulta Gratis</span>
            <span className="min-[401px]:hidden">Consulta</span>
          </Link>

          {/* Hamburger Menu Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center p-2 rounded-sm text-gray-500 hover:text-gray-800 hover:bg-gray-100 focus:outline-none md:hidden"
            aria-expanded={isOpen}
            aria-label="Menú principal"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 py-4 space-y-4 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-2">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-sm font-semibold py-2.5 px-4 rounded-sm transition-colors ${
                    isActive
                      ? "bg-[#0B3A36]/5 text-[#0B3A36]"
                      : "text-gray-600 hover:bg-gray-50 hover:text-[#0B3A36]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
