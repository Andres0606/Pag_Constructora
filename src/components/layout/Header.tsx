"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MessageSquare } from "lucide-react";

export default function Header() {
  const pathname = usePathname();

  const navItems = [
    { label: "Inicio", path: "/" },
    { label: "Servicios", path: "/servicios" },
    { label: "Nosotros", path: "/nosotros" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Logo Section */}
        <Link href="/" className="flex items-center space-x-3 group">
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

        {/* CTA Button */}
        <div className="flex items-center">
          <Link
            href="/#consulta"
            className="flex items-center space-x-2 rounded-sm bg-[#0B3A36] px-5 py-2.5 text-xs font-bold tracking-wider text-white uppercase transition-colors hover:bg-[#082a27]"
          >
            <MessageSquare className="h-4 w-4 text-gray-200" />
            <span>Consulta Gratis</span>
          </Link>
        </div>

      </div>
    </header>
  );
}
