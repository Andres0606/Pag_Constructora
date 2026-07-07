import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-[85vh] w-full flex items-center justify-start bg-slate-900 overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('/hero_construction.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-2xl space-y-6">
          
          {/* Subtitle Badge */}
          <div className="flex items-center space-x-2 text-xs font-bold tracking-widest text-[#24DFCE] uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-[#24DFCE]" />
            <span>Ingeniería de vanguardia</span>
          </div>

          {/* Main Headings */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            Innovación y Precisión en <br />
            <span className="text-white">Ingeniería Civil</span>
          </h1>

          {/* Description */}
          <p className="text-lg text-gray-300 font-normal leading-relaxed">
            Transformamos la complejidad estructural en soluciones sostenibles de madera y concreto, respaldadas por análisis técnico de alta fidelidad.
          </p>

          {/* Buttons CTA */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
            <Link
              href="/servicios"
              className="inline-flex items-center justify-center space-x-2 rounded-sm bg-white px-8 py-4 text-xs font-bold tracking-wider text-[#0B3A36] uppercase transition-colors hover:bg-gray-100"
            >
              <span>Nuestros Servicios</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            
            <Link
              href="/#contacto"
              className="inline-flex items-center justify-center space-x-2 rounded-sm border-2 border-white bg-transparent px-8 py-4 text-xs font-bold tracking-wider text-white uppercase transition-colors hover:bg-white/10"
            >
              <Phone className="h-4 w-4" />
              <span>Contáctanos</span>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
