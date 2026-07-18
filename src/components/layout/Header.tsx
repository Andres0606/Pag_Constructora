"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  MessageSquare,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";

export default function Header() {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const navItems = [
    { label: "Inicio", path: "/" },
    { label: "Servicios", path: "/servicios" },
    { label: "Nosotros", path: "/nosotros" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center space-x-3 group shrink-0"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-[#0B3A36] text-white font-bold text-xl transition-transform group-hover:scale-105">
            A
          </div>

          <span className="text-xl font-semibold text-gray-800 tracking-wide">
            Ing. Civil
          </span>
        </Link>

        {/* Desktop Navigation */}
<nav className="hidden md:flex items-center space-x-8">
  {navItems.map((item) => {
    if (item.label === "Servicios") {
      return (
        <div
          key={item.path}
          className="relative flex h-full items-center"
          onMouseEnter={() => setServicesOpen(true)}
          onMouseLeave={() => setServicesOpen(false)}
        >
          <Link
            href="/servicios"
            className={`flex items-center gap-1 py-2 text-sm font-medium transition-colors ${
              pathname.startsWith("/servicios")
                ? "text-[#0B3A36]"
                : "text-gray-600 hover:text-[#0B3A36]"
            }`}
          >
            Servicios
            <ChevronDown
              className={`h-4 w-4 transition-transform ${
                servicesOpen ? "rotate-180" : ""
              }`}
            />
          </Link>

          {servicesOpen && (
            <div className="absolute left-0 top-full pt-2 w-64">
              <div className="overflow-hidden rounded-md border border-gray-200 bg-white shadow-lg">

                    <Link
      href="/servicios/consultoria"
      onClick={() => setServicesOpen(false)}
      className="block px-5 py-3 text-sm font-medium text-gray-800 transition-colors hover:bg-gray-50 hover:text-[#0B3A36]"
    >
      Consultoría
    </Link>

                <Link
  href="/servicios/patologias"
  onClick={() => setServicesOpen(false)}
  className="block px-5 py-3 text-sm font-medium text-gray-800 transition-colors hover:bg-gray-50 hover:text-[#0B3A36]"
>
  Patologías de Obra
</Link>

               <Link
  href="/servicios/estructuras-madera"
  onClick={() => setServicesOpen(false)}
  className="block px-5 py-3 text-sm font-medium text-gray-800 transition-colors hover:bg-gray-50 hover:text-[#0B3A36]"
>
  Estructuras en Madera
</Link>

              </div>
            </div>
          )}
        </div>
      );
    }

    const isActive = pathname === item.path;

    return (
      <Link
        key={item.path}
        href={item.path}
        className={`relative py-2 text-sm font-medium transition-colors ${
          isActive
            ? "text-[#0B3A36]"
            : "text-gray-600 hover:text-[#0B3A36]"
        }`}
      >
        {item.label}

        {isActive && (
          <span className="absolute bottom-0 left-0 h-0.5 w-full bg-[#0B3A36]" />
        )}
      </Link>
    );
  })}
</nav>

        {/* CTA + Mobile Button */}
        <div className="flex items-center space-x-3">
          <Link
            href="/#consulta"
            className="flex items-center space-x-2 rounded-sm bg-[#0B3A36] px-4 py-2 sm:px-5 sm:py-2.5 text-[10px] sm:text-xs font-bold tracking-wider text-white uppercase hover:bg-[#082a27]"
          >
            <MessageSquare className="h-4 w-4 text-gray-200" />

            <span className="max-[400px]:hidden">
              Consulta Gratis
            </span>

            <span className="min-[401px]:hidden">
              Consulta
            </span>
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-sm text-gray-500 hover:text-gray-800 hover:bg-gray-100"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 py-4 shadow-lg">
          <nav className="flex flex-col space-y-2">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="py-3 px-4 rounded-sm text-sm font-semibold hover:bg-gray-50"
            >
              Inicio
            </Link>

            <Link
              href="/servicios"
              onClick={() => setIsOpen(false)}
              className="py-3 px-4 rounded-sm text-sm font-semibold hover:bg-gray-50"
            >
              Servicios
            </Link>

            <div className="ml-6 flex flex-col border-l border-gray-200 pl-4">
              <Link
                href="/servicios/consultoria"
                onClick={() => setIsOpen(false)}
                className="py-2 text-sm text-gray-600 hover:text-[#0B3A36]"
              >
                Consultoría
              </Link>

              <Link
                href="/servicios/patologias"
                onClick={() => setIsOpen(false)}
                className="py-2 text-sm text-gray-600 hover:text-[#0B3A36]"
              >
                Patologías de Obra
              </Link>

              <Link
                href="/servicios/estructuras-madera"
                onClick={() => setIsOpen(false)}
                className="py-2 text-sm text-gray-600 hover:text-[#0B3A36]"
              >
                Estructuras en Madera
              </Link>
            </div>

            <Link
              href="/nosotros"
              onClick={() => setIsOpen(false)}
              className="py-3 px-4 rounded-sm text-sm font-semibold hover:bg-gray-50"
            >
              Nosotros
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}