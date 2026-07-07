import Link from "next/link";
import { Globe, Mail, Phone, MessageSquare } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#081817] text-gray-300 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Column 1: Info and Socials */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-[#0E7A6E] text-white font-bold text-xl tracking-tight">
                A
              </div>
              <span className="text-xl font-semibold text-white tracking-wide font-sans">
                Ing. Civil
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              Especialistas en ingeniería civil y estructuras sostenibles. Consultoría, diagnóstico y laboratorio de suelos.
            </p>
            <div className="flex items-center space-x-4">
              <Link
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 hover:border-[#0E7A6E] hover:text-[#0E7A6E] transition-colors"
                aria-label="Sitio Web"
              >
                <Globe className="h-5 w-5" />
              </Link>
              <Link
                href="mailto:contacto@ingcivil.com"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 hover:border-[#0E7A6E] hover:text-[#0E7A6E] transition-colors"
                aria-label="Correo"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="text-xs font-bold tracking-widest text-[#0E7A6E] uppercase mb-6">
              Servicios
            </h3>
            <ul className="space-y-4 text-sm font-medium">
              <li>
                <Link href="/servicios#consultoria" className="hover:text-white transition-colors">
                  Consultoría
                </Link>
              </li>
              <li>
                <Link href="/servicios#patologias" className="hover:text-white transition-colors">
                  Patologías de Obra
                </Link>
              </li>
              <li>
                <Link href="/servicios#suelos" className="hover:text-white transition-colors">
                  Laboratorio de Suelos
                </Link>
              </li>
              <li>
                <Link href="/servicios#madera" className="hover:text-white transition-colors">
                  Estructuras en Madera
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h3 className="text-xs font-bold tracking-widest text-[#0E7A6E] uppercase mb-6">
              Empresa
            </h3>
            <ul className="space-y-4 text-sm font-medium">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/nosotros" className="hover:text-white transition-colors">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="hover:text-white transition-colors">
                  Proyectos
                </Link>
              </li>
              <li>
                <Link href="/#contacto" className="hover:text-white transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact CTA */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xs font-bold tracking-widest text-[#0E7A6E] uppercase mb-4">
                Consulta Directa
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-4">
                Hable directamente con un ingeniero especializado hoy mismo.
              </p>
              <a
                href="tel:+573106392432"
                className="flex items-center space-x-2 text-white font-semibold hover:text-[#0E7A6E] transition-colors"
              >
                <Phone className="h-4 w-4 text-[#0E7A6E]" />
                <span>+57 310 639 2432</span>
              </a>
            </div>

            <a
              href="https://wa.me/573106392432"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center space-x-2 rounded-sm bg-[#25D366] px-5 py-3 text-xs font-bold tracking-wider text-black uppercase transition-transform hover:scale-[1.02]"
            >
              <MessageSquare className="h-4 w-4 fill-black text-black" />
              <span>WhatsApp Empresarial</span>
            </a>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 space-y-4 sm:space-y-0">
          <p>© 2026 Ing. Civil. Todos los derechos reservados.</p>
          <p className="tracking-wide">Diseñado con precisión técnica</p>
        </div>
      </div>
    </footer>
  );
}
