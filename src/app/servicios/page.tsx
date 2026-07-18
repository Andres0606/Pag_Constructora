import ServiciosGrid from "@/components/sections/servicios/ServiciosGrid";
import { Trees, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function ServiciosPage() {
  return (
    <div className="w-full bg-white">
      {/* Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
            <div className="max-w-2xl">
              <span className="text-[10px] font-bold tracking-widest text-[#0E7A6E] uppercase">
                Nuestros Servicios
              </span>

              <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                Servicios{" "}
                <span className="relative inline-block">
                  Especializados
                  <span className="absolute bottom-1 left-0 h-1 w-full bg-[#0E7A6E]/30" />
                </span>
              </h1>

              <p className="mt-6 text-sm sm:text-base text-gray-600 leading-relaxed">
                Nuestra metodología combina el rigor matemático con el respeto
                por el material, entregando estructuras que perduran en el
                tiempo.
              </p>
            </div>

            <div>
              <Link
                href="#catalogo-tecnico"
                className="inline-flex items-center gap-2 text-[10px] font-bold tracking-widest text-gray-500 uppercase hover:text-gray-900"
              >
                <span>Explorar Catálogo Técnico</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <ServiciosGrid />
        </div>
      </section>

      {/* Catálogo */}
      <section
        id="catalogo-tecnico"
        className="py-16 px-4 bg-white border-t border-gray-100 text-center"
      >
        <div className="max-w-2xl mx-auto space-y-4">
          <Trees className="h-10 w-10 text-[#0E7A6E] mx-auto" />

          <h3 className="text-lg font-bold text-gray-900">
            Catálogo Técnico de Soluciones
          </h3>

          <p className="text-xs text-gray-600">
            Descargue nuestras especificaciones técnicas de materiales,
            manuales y documentación para contratistas.
          </p>

          <button className="rounded-sm bg-[#0B3A36] text-white text-xs font-bold uppercase tracking-wider px-6 py-3 hover:bg-[#082a27] transition">
            Descargar Catálogo (PDF)
          </button>
        </div>
      </section>
    </div>
  );
}