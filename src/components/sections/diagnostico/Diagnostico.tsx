import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Diagnostico() {
  return (
    <section className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        
        {/* Top Centered Section Header */}
        <div className="text-center mb-16">
          <span className="text-[10px] font-bold tracking-widest text-[#0E7A6E] uppercase">
            El Reto Estructural
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
            Prevención de Fallos Estructurales
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Inspection Image */}
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm shadow-md">
            <Image
              src="/concrete_inspection.jpg"
              alt="Inspectora examinando pared de concreto"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>

          {/* Right: Technical Card */}
          <div className="relative bg-[#F9FAFA] border-t-4 border-[#C5A880] p-8 sm:p-12 shadow-sm rounded-sm">
            <span className="text-[10px] font-bold tracking-widest text-[#C5A880] uppercase">
              La Importancia del Diagnóstico
            </span>
            <h3 className="mt-3 text-xl sm:text-2xl font-bold text-gray-900 leading-tight">
              Prevención de Fallos Estructurales
            </h3>
            
            <p className="mt-6 text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
              El deterioro natural de los materiales, la fatiga o las fallas tempranas de diseño pueden comprometer la integridad de cualquier obra. Mediante instrumentación avanzada y un análisis forense riguroso, identificamos patologías críticas antes de que representen un riesgo operativo, asegurando la viabilidad y durabilidad de su inversión a largo plazo.
            </p>

            <div className="mt-8">
              <Link
                href="/servicios"
                className="inline-flex items-center space-x-2 text-xs font-bold tracking-wider text-[#0E7A6E] uppercase transition-colors hover:text-[#08534b]"
              >
                <span>Conozca nuestros servicios</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
